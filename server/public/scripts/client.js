let myApp = angular.module('myApp', []);

myApp.controller('inController', function(){
    console.log('controller has started')
    let controller = this; //object that's attached to variables
    controller.greeting = "Yay I have angular!"//self can be anything, it's just how to bind
});