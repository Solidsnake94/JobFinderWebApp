(function () {
    'use strict';
    app.factory('authInterceptorService', ['$q', '$state', 'localStorageService', function ($q, $state, localStorageService) {

        var authInterceptorServiceFactory = {};

        var request = function (config) {

            config.headers = config.headers || {};

            var authData = localStorageService.get('jobFinder-token');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }

        var responseError = function (rejection) {
            if (rejection.status === 401) {
                $state.go('/login');
            }
            return $q.reject(rejection);
        }

        authInterceptorServiceFactory.request = request;
        authInterceptorServiceFactory.responseError = responseError;

        return authInterceptorServiceFactory;
    }]);
});