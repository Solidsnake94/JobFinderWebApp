(function () {
    'use strict';

    angular.module('jobFinderApp')
        .config(['$stateProvider', '$urlRouterProvider', "$locationProvider",
            function ($stateProvider, $urlRouterProvider, $locationProvider) {

                $locationProvider.html5Mode(true);

                //REDIRECT TO MAIN PAGE IF NO ROUTE
                $urlRouterProvider.when('', '/');

                // ==== HOMEPAGE STATES =============================
                $stateProvider.state('home', {
                    url: '/',
                    templateUrl: 'app/views/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                });
                //====================================================


                // ==== AUTHENTICATION STATES =============================
                $stateProvider.state('login', {
                    url: '/login',
                    templateUrl: 'app/views/authentication/login.html',
                    controller: 'Login',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (localStorage.getItem('ls.userId')) {
                            $state.go('dashboard.welcome');
                        }
                    }
                });

                $stateProvider.state('logout', {
                    url: '/logout',
                    controller: 'dashboardController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });

                $stateProvider.state('register', {
                    url: '/register',
                    templateUrl: 'app/views/authentication/register.html',
                    controller: 'Register',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (localStorage.getItem('ls.userId')) {
                            $state.go('dashboard.welcome');
                        }
                    }
                });

                // ==== No access TEMPLATE ===========================
                $stateProvider.state('no-access', {
                    url: '/no-access',
                    templateUrl: 'app/views/no-access.html'
                });

                // ==== DASHBOARD TEMPLATE ===========================
                $stateProvider.state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/views/dashboard/dashboard.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });
                // =====Welcome Template============================
                $stateProvider.state('dashboard.welcome', {
                    url: '/welcome',
                    templateUrl: 'app/views/dashboard/welcome/welcome.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });
                $stateProvider.state('dashboard.profile', {
                    url: '/profile',
                    templateUrl: 'app/views/userProfile.html',
                    controller: 'profileController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });

                // ====== CREATED JOBS ROUTES ==========================
                $stateProvider.state('dashboard.approved', {
                    url: '/approved',
                    templateUrl: 'app/views/dashboard/createJobs/approvedJobs.html',
                    controller: 'createdJobsController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });
                $stateProvider.state('dashboard.pending', {
                    url: '/pending',
                    templateUrl: 'app/views/dashboard/createJobs/pendingJobs.html',
                    controller: 'createdJobsController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });

                $stateProvider.state('dashboard.create-job', {
                    url: '/create-job',
                    templateUrl: 'app/views/dashboard/createJobs/create-job.html',
                    controller: 'createNewJobController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });

                $stateProvider.state('dashboard.pending-job-details', {
                    url: '/details',
                    templateUrl: 'app/views/dashboard/createJobs/pending-job-details.html',
                    controller: 'pendingJobsdetailsController',
                    controllerAs: 'vm',
                    params: {
                        jobApplicationDetails: null
                    },
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });

                $stateProvider.state('dashboard.approved-job-details', {
                    url: '/details',
                    templateUrl: 'app/views/dashboard/createJobs/approved-job-details.html',
                    controller: 'approvedJobsdetailsController',
                    controllerAs: 'vm',
                    params: {
                        job: null
                    },
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });

                $stateProvider.state('dashboard.employee-details', {
                    url: '/employee-details',
                    templateUrl: 'app/views/dashboard/profile/employee-details.html',
                    //controller: 'createdJobsController'
                });
                // ======================================================



                // ====== SEEK JOBS ROUTES ==============================
                $stateProvider.state('dashboard.seek-jobs', {
                    url: '/seek-jobs',
                    templateUrl: 'app/views/dashboard/seekJobs/seek-jobs.html',
                    controller: 'seekJobsController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });

                $stateProvider.state('dashboard.job-details', {
                    url: '/job-details',
                    templateUrl: 'app/views/dashboard/seekJobs/job-details.html',
                    controller: 'seekJobDetailsController',
                    controllerAs: 'vm',
                    params: {
                        job: null
                    },
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });

                //  $stateProvider.state('dashboard.employer-details',{
                //     url: '/employer-details',
                //     templateUrl: 'app/views/dashboard/seekJobs/seek-jobs.html',
                //  //   controller: 'seekJobsControl
                //     });
                // ======================================================



                //====== APPLY JOBS ROUTES ==============================
                $stateProvider.state('dashboard.applied-jobs', {
                    url: '/applied-jobs',
                    templateUrl: 'app/views/dashboard/appliedJobs/applied-jobs.html',
                    controller: 'appliedJobsController',
                    controllerAs: 'vm',
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });
                $stateProvider.state('dashboard.applied-jobs-details', {
                    url: '/details',
                    templateUrl: 'app/views/dashboard/appliedJobs/applied-jobs-details.html',
                    controller: 'appliedJobsDetailsController',
                    controllerAs: 'vm',
                    params: {
                        job: null
                    },
                    onEnter: function ($state) {
                        if (!localStorage.getItem('ls.userId')) {
                            $state.go('no-access');
                        }
                    }
                });
                // ======================================================



                // ===== SHARED STATES ===================================

                //   $stateProvider.state('no-access',{
                //     url: '/error',
                //     templateUrl: 'app/views/no-access.html'
                //    // controller: 'appliedJobsController'
                // });
                //==========================================================

            }
        ])

    // .config(function ($httpProvider) {
    //     $httpProvider.interceptors.push('authInterceptorService');
    // });

    // .run(['$rootScope', '$state', 'localStorageService',
    //         function ($rootScope, $state, localStorageService) {
    //             $rootScope.$on('$transitions.on', function (event, toState) {
    //                 var isAuth = localStorage.getItem('ls.isAuth');
    //                 if (isAuth == null) {
    //                     isAuth = false;
    //                 }
    //                 console.log(localStorage.getItem('ls.isAuth'));
    //                 if ((toState !== 'http://localhost:8080/login' || toState !== 'http://localhost:8080/register' || toState !== 'http://localhost:8080/no-access') && isAuth === false) {
    //                     $state.go('no-access');
    //                 }
    //                 if (toState == 'http://localhost:8080/login' && isAuth == "true") {
    //                     $state.go('dashboard');
    //                 }
    //                 if (toState == 'http://localhost:8080/register' && isAuth == "true") {
    //                     $state.go('dashboard.welcome');
    //                 }
    //             });
    //         }
    //     ])



}());