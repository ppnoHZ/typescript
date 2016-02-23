class DefaultLogger {
    log(text) {
        console.log(text);
    }
}
class Registration {
    constructor(registration) {
        this.salutation = registration.salutation;
        this.name = registration.name;
        this.age = registration.age;
    }
    isValid() {
        return this.age >= 18;
    }
}
class RegistrationsViewModel {
    constructor($scope, $http, logger) {
        this.logger = logger;
        $scope.registrations = new Array();
        $scope.refresh = () => {
            logger.log('Requesting...');
            $http.get('/api/registrations').success(result => {
                result.forEach(r => $scope.registrations.push(r));
            });
        };
    }
}
//# sourceMappingURL=registrations.js.map