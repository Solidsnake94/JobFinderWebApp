(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('createdJobsController', createdJobsController);

    createdJobsController.inject = ['$scope', '$state', 'createdJobsService'];

    function createdJobsController($scope, createdJobsService, $state) {
        var vm = this;
        vm.pendingJobs = [];
        vm.approvedJobs = [];
        vm.userId = localStorage.getItem('ls.userId');

        //===============Pending Jobs ====================
        vm.getPendingJobs = function () {
            createdJobsService.getPendingJobs(14, 2, 5, "DateStart", false).then(
                function (response) {
                    console.log(response);
                    vm.pendingJobs = response.data;
                },
                function (error) {
                    console.log("error getting pending jobs")
                }
            );
        }
        vm.goToDetailsPendingJobsApplication = function (id) {
            createdJobsService.goToDetailsPendingJobsApplication(id).then(function (response) {
                vm.jobApplicationDetails = response;
                $state.go("dashboard.pending-job-details", { jobApplicationDetails: vm.jobApplicationDetails }, { reload: true });
            }, function (error) {
                console.log("error getting jobs details");
            });
        }

        vm.deletePendingJobById = function(id){
            createdJobsService.deletePendingJobById(id).then(function(response){
                $state.go("dashboard.pending", {}, { reload: true });
            },function(error){
                console.log("error deleting the job");
            })
        }

        //===============Approved Jobs ====================
        vm.getApprovedJobs = function () {
            createdJobsService.getApprovedJobs(vm.userId).then(
                function (response) {
                    console.log(response);
                    vm.approvedJobs = response;
                }, function (error) {
                    console.log("error getting pending jobs")
                })
        }

        vm.goToDetailsApprovedjobs = function (id) {
            createdJobsService.goToDetailsApprovedjobs(id).then(function (response) {
                vm.job = response;
                $state.go("dashboard.approved-job-details", { job: vm.job }, { reload: true });
            }, function (error) {
                console.log("error getting jobs details");
            });
        }
    }
})();