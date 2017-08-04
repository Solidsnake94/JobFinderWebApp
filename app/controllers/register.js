(function() {

     angular
        .module('jobFinderApp')
        .controller('Register', register);

    register.$inject = ["$state", "$scope", "authenticationService"];

    function register($state, $scope, authenticationService) {
        var vm = this;

        $scope.credentials = {
            name: "",
            email: "",
            username: "",
            dateofbirth: "",
            password: ""
        };

        vm.onSubmit = function() {
            console.log("Submitting registration");
            authenticationService
                .register($scope.credentials)
                .error(function(err) {
                    vm.error = err.message;
                })
                .then(function() {
                    $state.go("home", {}, { reload: true });
                });
        };

    }

})();