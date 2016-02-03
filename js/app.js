/**
 * Created by kpihu_000 on 27.01.2016.
 */

var money = angular.module('money',
    [
        'ngRoute',
        'ngCookies',
        'angularLocalStorage',
        'moneyControllers',
        'moneyServices'
    ]
);

money.config(['$routeProvider',
function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        })
        .when('/add/:itemid?',{
            templateUrl: 'partials/addedit.html',
            controller: 'AddeditController'
        })
}]);
