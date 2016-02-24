var DefaultLogger = (function () {
    function DefaultLogger() {
    }
    DefaultLogger.prototype.log = function (text) {
        console.log(text);
    };
    return DefaultLogger;
})();
var Registration = (function () {
    function Registration(registration) {
        this.salutation = registration.salutation;
        this.name = registration.name;
        this.age = registration.age;
    }
    Registration.prototype.isValid = function () {
        return this.age >= 18;
    };
    return Registration;
})();
var RegistrationsViewModel = (function () {
    function RegistrationsViewModel($scope, $http, logger) {
        this.logger = logger;
        $scope.registrations = new Array();
        $scope.refresh = function () {
            logger.log('Requesting...');
            $scope.registrations = [];
            $http.get('/api/registrations').success(function (result) {
                result.forEach(function (r) { return $scope.registrations.push(r); });
            });
        };
    }
    return RegistrationsViewModel;
})();
//# sourceMappingURL=registrations.js.map