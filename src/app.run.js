'use strict';

angular.module('demo-example')
	.run('UserRun', userRun);

userRun.$inject = [];

function userRun(){
	console.log('UserRun function...');
}