RocketChat.AdminBox.addOption({
	href: 'admin-message-replacements',
	i18nLabel: 'Message_Replacements',
	permissionGranted: function() {
		return RocketChat.authz.hasAllPermission('manage-message-replacements');
	}
});

Template.messageReplacements.onCreated(function() {
	this.subscribe('messageReplacements');
	return this.record = new ReactiveVar({
		active: true
	});
});
