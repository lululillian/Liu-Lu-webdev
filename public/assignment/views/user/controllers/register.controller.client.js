(function(){
    angular
        .module("WebAppMaker")
        .controller("registerController", registerController);

    function registerController(UserService, $location) {
        var vm = this;
        vm.register = register;

        function register(user,confirm) {
            if(confirm != user.password) {
                alert("Password not match!");
                return;
            }
            var registerUser = UserService.createUser(user);
            if(registerUser != null) {
                $location.url('/profile/' + registerUser._id);
                alert("Successful Register. Now redirect to profile page.")
            } else {
                vm.error = 'user not found';
            }
        }
    }
})();