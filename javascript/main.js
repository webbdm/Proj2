var app = angular.module("Proj2", []); // make a new prototype from angular.min.js profile. array is for plugins
// name in quotes must be the same as the html. THE SAME!!!

app.controller("FoodCtrl", ($scope) => { //quotes are name of controller, usually has ctrl in it in PaschalCase
    $scope.food = "Cookies"; // angular variables to use go in parens
    
});