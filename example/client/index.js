angular.module("RegistrationApp", ['ngRoute'])
    .factory('logger', function () {
    return new DefaultLogger();
})
    .controller('RegistrationsContrller', RegistrationsViewModel)
    .controller('RegisterController', RegisterViewModel)
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/registrations.html',
        controller: 'RegistrationsContrller'
    })
        .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
    });
});
//# sourceMappingURL=index.js.map