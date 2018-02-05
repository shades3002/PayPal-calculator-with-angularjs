(function() {
    'use strict';
    angular
        .module('app.calculator.controllers')
        .controller('calculatorCtrl', calculatorCtrl);

    calculatorCtrl.$inject = ['$scope','$filter', 'cfpLoadingBar', '$translate'];

    function calculatorCtrl($scope, $filter, cfpLoadingBar, $translate) {
        /* jshint validthis: true */
        var vm = this;
        vm.init = init;
        vm.getCalculator = getCalculator;
        vm.calc = {};
        vm.error = '';
        $translate('ERROR_NUMBER').then(function (translation) {
            vm.error = translation;
        });

        vm.init();

        function init() {
            cfpLoadingBar.start();
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
                if(vm.calc.SToReceive === undefined) {
                    toastr.error(vm.error, 'error',
                    {closeButton: true, preventDuplicates: true});
                }
            }

            if ( vm.calc.RToReceive !== undefined && vm.calc.RToReceive !== '' && vm.calc.RToReceive !== null) {
                vm.calc.RToSend = $filter('mathRound')((vm.calc.RToReceive * vm.percentage) - vm.calc.commission); 
                vm.calc.RToComision = $filter('mathRound')(vm.calc.RToReceive - vm.calc.RToSend);               
            } else {
                vm.calc.RToSend = vm.calc.RToComision = ''; 
                if(vm.calc.RToReceive === undefined) {
                    toastr.error(vm.error, 'error',
                    {closeButton: true, preventDuplicates: true});
                }
            }
        }

        setTimeout(function() {
            cfpLoadingBar.complete();
        }, 750);
    }

})();