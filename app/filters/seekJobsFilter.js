(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .filter('seekJobsFilter', seekJobsFilter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(Params) {
            return Params;
        }
    }
})();