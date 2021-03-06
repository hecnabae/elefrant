'use strict';

// Module dependencies.
var _ = require('../lib/utils');

module.exports = function (server, config) {
    // Load controllers
    var api = require('./Controller')(config),
        auth = require('./middleware/authentication');

    // Paths
    var routes_path = config.system.rootApp + '/config/routes',
        routes = [];

    // Bootstrap routes
    _.walk(routes_path, null, function (path, filename) {
        routes = _.extendArray(
            routes,
            require(path)(api, config)
        );
    });

    // Create each route
    for (var index in routes) {
        // Load route elements
        var route = routes[index];

        // Show create routed
        if (config.system.debug) {
            config.log.debug('Route %s', route.path);
        }

        // Load route
        var method = route.method.toLowerCase();

        // Check if method delete
        if (method === 'delete') method = 'del';

        // Check if methods is in the list
        if (['get', 'post', 'put', 'del', 'patch'].indexOf(method) > -1) {
            // Create route
            server[method]({
                name: route.name,
                url: route.path,
                version: route.version,
                swagger: route.action.spec || null, // Swagger doc
                validation: route.action.validation || null, // Swagger doc and Validation
                models: route.action.models || null, // Swagger doc
            }, auth.isAuthenticate(route.auth, route.scopes, config.oauth.allowScopes), route.action.action);
        }
    }

    // Generate documentation and routes
    require('./Documentation')(server, config);
};
