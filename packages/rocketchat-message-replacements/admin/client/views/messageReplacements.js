Template.messageReplacements.onCreated(function() {
	return this.subscribe('messageReplacements');
});

Template.messageReplacements.helpers({
	hasPermission: function() {
		return RocketChat.authz.hasAllPermission('manage-message-replacements');
	},
	messageReplacements: function() {
		return MessageReplacements.find({disabled: false});
	},
	dateFormatted: function(date) {
		return moment(date).format('L LT');
	}
});
