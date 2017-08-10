(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('createNewJobController', createNewJobController);

    createNewJobController.inject = ['$scope', "$window","state", "createdJobsService", "googleMapsService"];
    function createNewJobController($scope, $window, $state, createdJobsService, googleMapsService) {
        var vm = this;

        $scope.place = {};

        $scope.job = {
            title: "",
            description: "",
            datestart: "",
            dateend: "",
            hours: "",
            price: "",
            id:"1",
            categoryID: "2",
            createdBy:"2",
            status:"Pending"
        };

        // ====== Google Maps Logic ================

        vm.search = function () {

            console.log('Searching location!');
            $scope.apiError = false;
            googleMapsService.search($scope.searchPlace)
                .then(
                function (res) { // success
                    googleMapsService.addMarker(res);
                    $scope.place.name = res.name;
                    $scope.job.latitude = res.geometry.location.lat();
                    $scope.job.longitude = res.geometry.location.lng();

                    console.log('Place:' + $scope.place.name + ' Lat: ' + $scope.job.latitude + ' Lng: ' + $scope.job.longitude);
                },
                function (status) { // error
                    $scope.apiError = true; 
                    $scope.apiStatus = status;

                    console.log('GoogleMaps error: ' + $scope.apiStatus);

                });
        }
        vm.createJob = function () {
            console.log("Submitting registration");
            console.log($scope.job);
            createdJobsService            
                .createjob($scope.job)
                .then(function () {
                    $state.go("home", {}, { reload: true });
                }, function (err) {
                    vm.error = err.message;
                })
        }


        $scope.send = function () {
            alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);
        }

        googleMapsService.init();

        // ============================================================================

    }
})();