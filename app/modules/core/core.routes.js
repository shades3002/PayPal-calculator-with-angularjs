(function() {
    'use strict';
    angular
        .module('app.core')
        .config(function($routeProvider) {
            $routeProvider
                .when("/errors/403", {
                    templateUrl: '/'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
