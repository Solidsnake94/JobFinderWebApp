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
            getUserId(user.username);

            return $http.post(apiBaseUrl + "/token", data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                localStorageService.set('jobFinder-token', response.data.access_token);
                localStorageService.set('jobFinder-username', user.username);
                localStorageService.set('isAuth', true);


                deferred.resolve(response);
            }, function (err, status) {
                logout();
                deferred.reject(err);
            });
        };

        var logout = function () {
            localStorageService.remove('jobFinder-token');
            localStorageService.remove('jobFinder-username');
            localStorageService.remove('isAuth');
            localStorageService.remove('userId');
        };


        var fillAuthData = function () {

            var authData = localStorageService.get('jobFinder-token');
            if (authData) {
                _authentication.isAuth = true;
                _authentication.username = authData.userName;
            }

        }
        var getUserId = function (username) {
          
                $http.get(apiBaseUrl + '/api/user/userId?userName=' + username)
                    .then(function (response) {
                        
                        localStorageService.set('userId', response.data.id);
                        return(response.data);
                    },
                    function (response) {
                        console.log('Error: ' + response);
                    });
            
        }

        authServiceFactory.register = register;
        authServiceFactory.login = login;
        authServiceFactory.logout = logout;
        authServiceFactory.fillAuthData = fillAuthData;
        authServiceFactory.authentication = _authentication;
        authServiceFactory.apiBaseUrl = apiBaseUrl;
        authServiceFactory.getUserId = getUserId;

        return authServiceFactory;
    }

})();