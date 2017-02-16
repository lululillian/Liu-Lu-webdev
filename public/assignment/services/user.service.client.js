(function(){
    angular
        .module("WebAppMaker")
        .factory('UserService', userService);

    function userService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            "users": users,
            "createUser": createUser,
            "updateUser": updateUser,
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "deleteUser":deleteUser
        };
        return api;

        // 1. createUser
        function createUser(user){
            for(var u in users){
                var localuser = users[u];
                if(localuser.username === user.username){
                    alert("Existing same username, please try another one! ");
                    return null;
                }
            }
            user._id = (new Date()).getTime();
            users.push(user);
            return user;
        }

        // 2. findUserById
        function findUserById(uid) {
            for(var u in users) {
                var user = users[u];
                if( user._id === uid ) {
                    return angular.copy(user);
                }
            }
            return null;
        }

        // 3. findUserByUsername
        function findUserByUsername(username) {
            for(var u in users) {
                var user = users[u];
                if( user.username === username) {
                    return angular.copy(user);
                }
            }
            return null;
        }

        // 4. findUserByCredentials
        function findUserByCredentials(username, password) {
            for(var u in users) {
                var user = users[u];
                if( user.username === username &&
                    user.password === password) {
                    return angular.copy(user);
                }
            }
            return null;
        }

        // 5. updateUser
        function updateUser(userId, newUser) {
            for(var u in users) {
                var user = users[u];
                if( user._id === userId ) {
                    users[u].firstName = newUser.firstName;
                    users[u].lastName = newUser.lastName;
                    return user;
                }
            }
            return null;
        }

        // 6. deleteUser
        function deleteUser(userId){
            for(var u in users) {
                if(users[u]._id === userId ) {
                    users.splice(u,1);
                }
            }
        }

    }
})();