/**
 * Created by kpihu_000 on 27.01.2016.
 */


var moneyControllers = angular.module('moneyControllers', []);

moneyControllers.controller('ListController', ['$scope','comm','$location',
    function ($scope, comm, $location) {
        $scope.reset = function () {
            if(comm.clear()){
                $scope.items = comm.get();
            }else{

            }
        };
        $scope.items = comm.get();
        console.log($scope.items);

        $scope.add = function () {
            $location.path('/add');
        };

        $scope.open = function (item) {
            console.log(item);
        }
    }
]);

moneyControllers.controller('AddeditController', ['$scope','comm','$location','$routeParams',
    function ($scope, comm, $location, $routeParams) {
        $scope.view = false;
        var id = $routeParams.itemid;
        if(id){
            $scope.title = 'View request';
            $scope.item = comm.get(id);
            $scope.view = true;
        }else{
            $scope.title = 'Add new request';
        }

        $scope.cancel = function(){
            $location.path('/')
        };

        $scope.save = function(){
            console.log('save');
            if(comm.save($scope.item)){
                $location.path('/')
            }
        }
    }]);

