(function() {
    'use strict';
    angular
        .module('app.calculator.controllers')
        .controller('calculatorCtrl', calculatorCtrl);

    //calculatorCtrl.$inject = [];

    function calculatorCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.mensage = "Welcome";
    }
})();