angular.module('Quine').service('QuineDataService',
    function ($http, $window) {
        var baseURL = '/API';
        return {
            GetQuine: function () {
                return $http({
                    method: 'GET',
                    url: baseURL,
                }).then(function (result) { return result.data; });
            }
        }
    });


