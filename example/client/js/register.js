class RegisterViewModel {
    constructor($scope, $http, logger) {
        this.logger = logger;
        $scope.save = () => {
            $http.post('/api/register', { name: $scope.name, salutation: $scope.salutation, age: $scope.age }, { headers: { "Content-Type": "application/json" } })
                .success(_ => {
                alert('注册成功!');
            }).error(_ => {
                alert('注册失败!');
            });
        };
    }
}
//# sourceMappingURL=register.js.map