interface IRegisterViewModel extends ng.IScope, IRegistration {
    save: () => void;
}

class RegisterViewModel {
    constructor($scope: IRegisterViewModel, $http: ng.IHttpService, private logger: ILogger) {
        $scope.save = () => {
            $http.post('/api/register', { name: $scope.name, salutation: $scope.salutation, age: $scope.age }, { headers: { "Content-Type": "application/json" } })
                .success(_ => {
                    alert('注册成功!')
                }).error(_=> {
                    alert('注册失败!')
                })
        }
    }
}