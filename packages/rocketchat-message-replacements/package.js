Package.describe({
	name: 'rocketchat:message-replacements',
	version: '0.0.1',
	summary: 'Replace parts of a message with other text or HTML'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'rocketchat:lib'
	]);

	api.use('templating', 'client');
	api.use('kadira:flow-router', 'client');

	api.addFiles([
		'admin/client/route.js',
		'admin/client/views/messageReplacement.html',
		'admin/client/views/messageReplacement.js',
		'admin/client/views/messageReplacements.html',
		'admin/client/views/messageReplacements.js',
		'admin/collection.js',
		'admin/startup.js',
		'client/startup.js'
	], 'client');

	// api.addFiles([
	// 	'server/settings.coffee',
	// 	'server/pinMessage.coffee',
	// 	'server/publications/pinnedMessages.coffee',
	// 	'server/startup/indexes.coffee'
	// ], 'server');
});
