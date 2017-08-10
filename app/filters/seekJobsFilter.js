(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .filter('seekJobsFilter', seekJobsFilter);

    function Filter() {
        return function(data, search) {
            if (search === undefined) {
                return data;
            }
            var toReturn = [];
            angular.forEach(data, function(element) {
                if(element._id.toLowerCase().match(search.toLowerCase()))
                    toReturn.push(element);
            }, toReturn);
            return toReturn;
        };
    }
})();