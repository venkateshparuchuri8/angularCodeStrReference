'use strict';

angular.module('demo-example')
	.controller('UserControler', userControler);

userControler.$inject = [
	'$scope',
	'$rootScope',
	'$localStorage',
	'$uibModal'];

function userControler(
	$scope,
	$rootScope,
	$localStorage,
	$uibModal){
	console.log('UserControler function...');

	$scope.user = {
		list: [],
		addUser: addUser,
		removeUser: removeUser,
		editUser: editUser,
		viewUser: viewUser
	};

	/*
	*@purpose: on click button open add user model
	*@created: 03 oct 2017
	*@params: no
	*@return: no
	*@author: sandeep
	*/
	function addUser(){
		var addUserModalInstance = $uibModal.open({
			'templateUrl': 'src/modules/user/modal/view/add.user.modal.html',
			'controller': 'AddUserModalControler'
		});

		addUserModalInstance.result.then(function(response){
			console.log(response);
			$scope.user.list.push(response);
		}, function(error){
			console.log(error);
		});
	}
	/*
	*@purpose: on click button open removeUsermodel
	*@created: 03 oct 2017
	*@params: index(number)
	*@return: no
	*@author: sandeep
	*/
	function removeUser(index){
		var removeUserModalInstance = $uibModal.open({
			'templateUrl': 'src/modules/user/modal/view/remove.user.modal.html',
			'controller': 'RemoveUserModalControler'
		});

		removeUserModalInstance.result.then(function(response){
			console.log(response);
			$scope.user.list.splice(index, 1);
		}, function(error){
			console.log(error);
		});
	}
	/*
	*@purpose: on click button open editUser model
	*@created: 03 oct 2017
	*@params: index
	*@return: no
	*@author: sandeep
	*/
	function editUser(){
		var editUserModalInstance = $uibModal.open({
			'templateUrl': 'src/modules/user/modal/view/add.user.modal.html',
			'controller': 'EditUserModalControler',
			'resolve': {
				userData: function(){
					return $scope.user.list[index];
				}
			}
		});

		editUserModalInstance.result.then(function(response){
			console.log(response);
			$scope.user.list.[index] = repsponse;
		}, function(error){
			console.log(error);
		});
	}
	/*
	*@purpose: on click button open viewUser model
	*@created: 03 oct 2017
	*@params: index
	*@return: no
	*@author: sandeep
	*/
	function viewUser(index){
		var addUserModalInstance = $uibModal.open({
			'templateUrl': 'src/modules/user/modal/view/view.user.modal.html',
			'controller': 'ViewUserModalControler'
		});

		addUserModalInstance.result.then(function(response){
			console.log(response);
			$scope.user.list.push(response);
		}, function(error){
			console.log(error);
		});
	}
}