(function () {
    'use strict';

    angular
        .module('app', [
            /* Modules */
            'app.core',
            'app.calculator'
        ]);
})();
(function(){
    'use strict';
    angular
        .module('app.calculator', [
            'app.calculator.controllers'
        ]);

    angular
        .module('app.calculator.controllers', []);
})();
(function () {
    'use strict';

    angular
        .module('app.core', [
            /* Vendors */
            'ngRoute',
            'ui.bootstrap',
            'pascalprecht.translate',
            'ngSanitize'
        ])
        .config(['$translateProvider',function($translateProvider) {
            $translateProvider
            .useStaticFilesLoader({
                prefix: 'app/modules/core/i18n/',
                suffix: '.js'
            })
            .registerAvailableLanguageKeys(['en-us','es-es'], {
             'en*': 'en-us',
             'es*': 'es-es'
            })
            .useSanitizeValueStrategy('sanitize')
            .determinePreferredLanguage();
        }])
        .run();
})();
(function() {
    'use strict';
    angular
        .module('app.calculator.controllers')
        .controller('calculatorCtrl', calculatorCtrl);

    calculatorCtrl.$inject = ['$scope','$filter'];

    function calculatorCtrl($scope, $filter) {
        /* jshint validthis: true */
        var vm = this;
        vm.init = init;
        vm.getCalculator = getCalculator;
        vm.calc = {};

        vm.init();

        function init() {
            vm.calc = {
                percentage: 5.4, 
                commission: 0.30,
                SToReceive: '',
                SToSend: '',
                SToComision: '',
                RToReceive: '',
                RToSend: '',
                RToComision: ''
            };
        }

        $scope.$watch(function () { 
                return vm.calc; 
            }, function(New, Old) {
                if (New === Old) {
                    return;
                } else {
                    vm.getCalculator();
                }
        }, true);

        function getCalculator() {

            if(vm.calc.percentage > 0) {
                vm.percentage = 1 - (vm.calc.percentage / 100);
            }

            if ( vm.calc.SToReceive !== undefined && vm.calc.SToReceive !== '' && vm.calc.SToReceive !== null) {
                vm.calc.SToSend = $filter('mathRound')((vm.calc.SToReceive + vm.calc.commission) / vm.percentage); 
                vm.calc.SToComision = $filter('mathRound')(vm.calc.SToSend - vm.calc.SToReceive);  
            } else {
                vm.calc.SToSend = vm.calc.SToComision = ''; 
            }

            if ( vm.calc.RToReceive !== undefined && vm.calc.RToReceive !== '' && vm.calc.RToReceive !== null) {
                vm.calc.RToSend = $filter('mathRound')((vm.calc.RToReceive * vm.percentage) - vm.calc.commission); 
                vm.calc.RToComision = $filter('mathRound')(vm.calc.RToReceive - vm.calc.RToSend);               
            } else {
                vm.calc.RToSend = vm.calc.RToComision = ''; 
            }
        }
    }

})();
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
(function () {
    'use strict';
    angular
        .module('app.core')
        .filter('mathRound', mathRound);

    function mathRound() {
        return function (input) {
            if (!isNaN(input) && input > 0) {
                return Math.round(input * 100) / 100;
            } else  {
                return input;
            }
        };
    }
})();
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
