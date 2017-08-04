(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('createNewJobController', createNewJobController);

    createNewJobController.inject = ['$scope', "$window", "googleMapsService"];
    function createNewJobController($scope, $window, googleMapsService) {
        var vm = this;

        // ====== Google Maps Logic ================
        
        $scope.place = {};

        $scope.search = function () {

            console.log('Searching location!');
            $scope.apiError = false;
            googleMapsService.search($scope.searchPlace)
                .then(
                function (res) { // success
                    googleMapsService.addMarker(res);
                    $scope.place.name = res.name;
                    $scope.place.lat = res.geometry.location.lat();
                    $scope.place.lng = res.geometry.location.lng();

                    console.log('Place:' + $scope.place.name + ' Lat: ' + $scope.place.lat + ' Lng: ' + $scope.place.lng );
                },
                function (status) { // error
                    $scope.apiError = true;
                    $scope.apiStatus = status;
                    
                    console.log('GoogleMaps error: ' + $scope.apiStatus);

                }
                );

                
        }

        $scope.send = function () {
            alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);
        }

        googleMapsService.init();

        // ============================================================================

    }
})();