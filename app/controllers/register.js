(function () {

    angular
        .module('jobFinderApp')
        .controller('Register', register);

    register.$inject = ["$state", "$scope", "authenticationService"];

    function register($state, $scope, authenticationService) {
        var vm = this;

        $scope.credentials = {
            name: "",
            surname:"",
            email: "",
            username: "",
            dateofbirth: "",
            password: "",
            confirmpassword:""
        };

        vm.onSubmit = function () {
            console.log("Submitting registration");
            console.log($scope.credentials);
            authenticationService
                .register($scope.credentials)
                .then(function () {
                    $state.go("home", {}, { reload: true });
                }, function (err) {
                    vm.error = err.message;
                })

        };

    }

})();