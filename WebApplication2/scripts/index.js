var app = angular.module("Quine", []);

app.controller('quineController',
    function ($scope, QuineDataService) {

        $scope.changePageTitle = function () {
            document.title = document.getElementById("page_title").value;
            $scope.getQuine();
        }

        $scope.getQuine = function () {
            QuineDataService.CheckLiveness(quineRequestModel).then(function (result) {
                if (result != null) {

                }
            });
        }
    });