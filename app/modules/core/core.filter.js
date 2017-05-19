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