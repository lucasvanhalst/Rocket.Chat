Meteor.publish('messageReplacements', function() {
	var options;
	options = {
		fields: {
			name: 1,
			description: 1,
			enabled: 1,
			parse_order: 1,
			regex: 1,
			replacement: 1,
			created_by: 1,
			created_on: 1,
			modified_on: 1,
			modified_by: 1
		},
		sort: {
			parse_order: 1
		}
	};
	return RocketChat.models.MessageReplacements.findByNameContaining(null, options);
});
