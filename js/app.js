(function ( ) {
	var app = angular.module('banco',[]);

	app.controller("BancoController",['$http','$scope',function($http,$scope){
		var banco = this;
		banco.movimientos = [ ];

	//	$http.get('http://www.titandesarrollo.com/_api/movimientos').success(function(data){
		$http.get('http://www.titandesarrollo.com/_api/movimientos').success(function(data){
			banco.movimientos = data;
			console.log(data);
		});

		$scope.deleteData = function(id){
			$http({
				method  : 'DELETE',
				url     : 'http://www.titandesarrollo.com/_api/movimientos/'+id,
				//data    : $scope.movimiento,
				body : { 'Content-Type': 'application/x-www-form-urlencoded' } 
			})
		}

	}]);

	app.controller('MovimientoController',['$http','$scope' ,function($http, $scope){
		
		$scope.movimiento = {};
		$scope.submitForm = function() {
			console.log($scope.movimiento.tipo_mov);
			$http({
				method  : 'POST',
				url     : 'http://www.titandesarrollo.com/_api/movimientos',
				data    : $scope.movimiento,
				body : { 'Content-Type': 'application/x-www-form-urlencoded' } 
			})

		};





	}]);

})();
