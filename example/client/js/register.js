var RegisterViewModel = (function () {
    function RegisterViewModel($scope, $http, logger) {
        this.logger = logger;
        $scope.save = function () {
            $http.post('/api/register', { name: $scope.name, salutation: $scope.salutation, age: $scope.age }, { headers: { "Content-Type": "application/json" } })
                .success(function (_) {
                alert('注册成功!');
            }).error(function (_) {
                alert('注册失败!');
            });
        };
    }
    return RegisterViewModel;
})();
//# sourceMappingURL=register.js.map