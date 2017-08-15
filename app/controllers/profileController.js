(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('profileController', ['$scope', '$state', 'profileService', function ($scope, $state, profileService) {

            var vm = this;

            vm.userId = localStorage.getItem('ls.userId');

            vm.user = {
                jobs: "",
                id: "",
                userId: "",
                username: "",
                email: "",
                name: "",
                surname: "",
                dateOfBirth: ""
            };


            profileService
                .getUserDetailsById(vm.userId)
                .then(function (data) {
                    vm.user = data.data;
                }, function (err) {
                    vm.error = err.message;
                })

        }
        ])
})();