Template.messageReplacement.helpers({
	hasPermission: function() {
		return RocketChat.authz.hasAllPermission('manage-message-replacements');
	},
	data: function() {
		var base, data, params;
		params = typeof (base = Template.instance().data).params === "function" ? base.params() : void 0;
		if ((params != null ? params.id : void 0) != null) {
			data = MessageReplacements.findOne({
				_id: params.id
			});
			if (data != null) {
				Template.instance().record.set(data);
				return data;
			}
		}
		return Template.instance().record.curValue;
	}
});

Template.messageReplacement.events({
	"click .submit > .delete": function() {
		var params;
		params = Template.instance().data.params();
		return swal({
			title: t('Are_you_sure'),
			text: t('You_will_not_be_able_to_recover'),
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: t('Yes_delete_it'),
			cancelButtonText: t('Cancel'),
			closeOnConfirm: false,
			html: false
		}, function() {
			return Meteor.call("deleteOAuthApp", params.id, function(err, data) {
				swal({
					title: t('Deleted'),
					text: t('Your_entry_has_been_deleted'),
					type: 'success',
					timer: 1000,
					showConfirmButton: false
				});
				return FlowRouter.go("admin-oauth-apps");
			});
		});
	},
	"click .submit > .save": function() {
		var active, app, base, name, params, redirectUri;
		name = $('[name=name]').val().trim();
		active = $('[name=active]:checked').val().trim() === "1";
		redirectUri = $('[name=redirectUri]').val().trim();
		if (name === '') {
			return toastr.error(TAPi18n.__("The_application_name_is_required"));
		}
		if (redirectUri === '') {
			return toastr.error(TAPi18n.__("The_redirectUri_is_required"));
		}
		app = {
			name: name,
			active: active,
			redirectUri: redirectUri
		};
		params = typeof (base = Template.instance().data).params === "function" ? base.params() : void 0;
		if ((params != null ? params.id : void 0) != null) {
			return Meteor.call("updateOAuthApp", params.id, app, function(err, data) {
				if (err != null) {
					return handleError(err);
				}
				return toastr.success(TAPi18n.__("Application_updated"));
			});
		} else {
			return Meteor.call("addOAuthApp", app, function(err, data) {
				if (err != null) {
					return handleError(err);
				}
				toastr.success(TAPi18n.__("Application_added"));
				return FlowRouter.go("admin-oauth-app", {
					id: data._id
				});
			});
		}
	}
});
