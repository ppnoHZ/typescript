angular.module("RegistrationApp", ['ngRoute'])
    .factory('logger', () => {
    return new DefaultLogger();
})
    .controller('RegistrationsContrller', RegistrationsViewModel)
    .controller('RegisterController', RegisterViewModel)
    .config(($routeProvider) => {
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