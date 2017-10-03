'use strict';

angular.module('demo-example')
	.controller('AddUserModalControler', addUserModalControler);

addUserModalControler.$inject = [
	'$scope',
	'$rootScope',
	'$localStorage',
	'$uibModalInstance'];

function addUserModalControler(
	$scope,
	$rootScope,
	$localStorage,
	$uibModalInstance){
	console.log('AddUserModalControler function...');

	$scope.user = {
		name: '',
		age: '',
		dateOfBirth: new Date(),
		designation: '',
		dateOptions: {
			minDate: new Date()
		}
		save: save,
		cancel: cancel
	};

	/*
	*@purpose: save user function
	*@created: 03 oct 2017
	*@params: no
	*@return: no
	*@author: sandeep
	*/
	function save(){
		$uibModalInstance.close({ name: $scope.user.name, age: $scope.user.age, dateOfBirth: $scope.user.dateOfBirth, designation: $scope.user.dateOfBirth});
	}

	/*
	*@purpose: cancel user function
	*@created: 03 oct 2017
	*@params: no
	*@return: no
	*@author: sandeep
	*/
	function cancel(){
		$uibModalInstance.dismiss('cancel');
	}
}