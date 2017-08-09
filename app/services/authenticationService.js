(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('authenticationService', authenticationService);

    authenticationService.inject = ['$http', '$window', '$q', 'localStorageService'];

    function authenticationService($http, $window, $q, localStorageService) {


        // the base url for the backend api service
        var apiBaseUrl = "http://localhost:64848";

        var authServiceFactory = {};

        var _authentication = {
            isAuth: false,
            username: ""
        };

        var register = function (user) {
            return $http.post(apiBaseUrl + "/api/Account/Register", user).then(function (response) {
                return response;
            });
        };

        var login = function (user) {
            var data = "grant_type=password&username=" + user.username + "&password=" + user.password;
            var deferred = $q.defer();

            return $http.post(apiBaseUrl + "/token", data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                localStorageService.set('jobFinder-token', { token: response.access_token, username: user.username });

                _authentication.isAuth = true;
                _authentication.username = user.username;

                deferred.resolve(response);
            }, function (err, status) {
                logout();
                deferred.reject(err);
            });
        };

        var logout = function () {
            localStorageService.remove('jobFinder-token');

            _authentication.isAuth = false;
            _authentication.username = "";
        };

        var fillAuthData = function () {

            var authData = localStorageService.get('jobFinder-token');
            if (authData) {
                _authentication.isAuth = true;
                _authentication.username = authData.userName;
            }

        }

        authServiceFactory.register = register;
        authServiceFactory.login = login;
        authServiceFactory.logout = logout;
        authServiceFactory.fillAuthData = fillAuthData;
        authServiceFactory.authentication = _authentication;

        return authServiceFactory;
    }

})();