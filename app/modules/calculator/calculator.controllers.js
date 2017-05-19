(function() {
    'use strict';
    angular
        .module('app.calculator.controllers')
        .controller('calculatorCtrl', calculatorCtrl);

    calculatorCtrl.$inject = ['$scope'];

    function calculatorCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;
        vm.getCalculator = getCalculator;
        vm.init = init;
        vm.calc = {};
        vm.init();

        $scope.$watch(function () { 
                return vm.calc; 
            }, 
            function(New, Old) {
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
                vm.calc.SToSend = Math.round(((vm.calc.SToReceive + vm.calc.commission) / vm.percentage) * 100) / 100;
                vm.calc.SToComision = Math.round((vm.calc.SToSend - vm.calc.SToReceive) * 100) / 100;  
            } else {
                vm.calc.SToSend = vm.calc.SToComision = ''; 
            }

            if ( vm.calc.RToReceive !== undefined && vm.calc.RToReceive !== '' && vm.calc.RToReceive !== null) {
                vm.calc.RToSend = Math.round((vm.calc.RToReceive * vm.percentage - vm.calc.commission) * 100) / 100; 
                vm.calc.RToComision = Math.round((vm.calc.RToReceive - vm.calc.RToSend) * 100) / 100;               
            } else {
                vm.calc.RToSend = vm.calc.RToComision = ''; 
            }
        }

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
    }
})();