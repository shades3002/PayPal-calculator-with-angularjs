(function () {
    'use strict';

    angular
        .module('app.core', [
            /* Vendors */
            'ngRoute',
            'ui.bootstrap',
            'pascalprecht.translate',
            'ngSanitize',
            'ngAnimate',
            'angular-loading-bar'
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