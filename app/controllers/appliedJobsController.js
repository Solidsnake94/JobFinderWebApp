(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('appliedJobsController', appliedJobsController);

    appliedJobsController.inject = ['$scope', 'appliedJobsService'];

    function appliedJobsController($scope, appliedJobsService) {
        var vm = this;

        vm.appliedJobs = appliedJobsService.getAppliedJobs();
        
        vm.getJobDetails = function(id){
            
        }

      
    }
})();