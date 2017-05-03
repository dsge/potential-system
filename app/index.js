var angular = require('angular');

angular.module('myApp', [
    require('angular-route')
])
.config(require('./config/route'))
