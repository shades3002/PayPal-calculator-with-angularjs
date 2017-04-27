(function () {
    'use strict';
    angular
        .module('app.calculator')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/modules/calculator/partials/calculator.html',
                    controller: 'calculatorCtrl',
                    controllerAs: 'vm'
                });
        });
})();