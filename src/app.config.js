'use strict';

angular.module('demo-example')
	.config('UserConfig', userConfig);

userConfig.$inject = [];

function userConfig(){
	console.log('UserConfig function...');
}