(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('Login', login);

    login.inject = ['$scope',  '$state', 'authenticationService'];

    function login( $scope, $state, authenticationService) {
        var vm = this;

        $scope.credentials = {
            username: "",
            password: ""
        };

        vm.onSubmit = function () {
            authenticationService
                .login($scope.credentials)
                .then(function () {
                    $state.go("dashboard.welcome", {}, { reload: true });
                }, function (err) {
                    vm.error = err.message;
                });
               
        };
    }

})();