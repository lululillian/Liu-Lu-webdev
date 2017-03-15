(function(){
    angular
        .module("WebAppMaker")
        .controller("registerController", registerController);


    function registerController($http,$location) {
        var vm = this;
        vm.createUser = createUser;

        function createUser(user) {
            $http
                .post('/api/user', user)
                .success(function(newUser){
                    $location.url('/profile/' + newUser._id);
                });
        }

        function findUserIdByUsername(username){

        }
   /*
        function registerUser(user) {
            UserService
                .findUserByUsername(user.username)
                .success(function (user) {
                    vm.error = "sorry that username is taken"
                })
                .error(function(){
                    UserService
                        .createUser(user)
                        .success(function(user){
                            $location.url('/profile/' + user._id);
                        })
                        .error(function () {
                            vm.error = 'sorry could not register';
                        });
                });
        }
        */
    }
})();