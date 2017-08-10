(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('seekJobDetailsController', seekJobDetailsController);

    seekJobDetailsController.inject = ['$scope', '$state', 'seekJobsService', "googleMapsService", '$stateParams'];
    function seekJobDetailsController($scope, $state, $stateParams, googleMapsService, seekJobsService) {
        var vm = this;
        var job = {};
        $scope.place = {};

        vm.job = $stateParams.job;

        console.log(vm.job);

        vm.initCoords = function () {

            console.log('Searching location!');
            $scope.apiError = false;
            googleMapsService.initWithCoords($scope.searchPlace)
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
        // functions 
        vm.applyForJob = function (id) {
            // CORRECT VERSION 
            // seekJobsService.getJobDetails(id).then(function(data){
            //     $scope.selectedSeekJob = data;
            // });

            seekJobsService.applyForJob(id);
            $state.go("dashboard.applied-jobs")
        }
    }
})();