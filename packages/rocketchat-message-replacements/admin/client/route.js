FlowRouter.route('/admin/message-replacements', {
	name: 'admin-message-replacements',
	action: function() {
		return BlazeLayout.render('main', {
			center: 'pageSettingsContainer',
			pageTitle: t('Message_Replacements'),
			pageTemplate: 'messageReplacements'
		});
	}
});

FlowRouter.route('/admin/message-replacement/:id?', {
	name: 'admin-message-replacement',
	action: function(params) {
		return BlazeLayout.render('main', {
			center: 'pageSettingsContainer',
			pageTitle: t('Message_Replacement'),
			pageTemplate: 'messageReplacement',
			params: params
		});
	}
});
