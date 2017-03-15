/**
 * Created by lululillian on 2/27/17.
 */
module.exports = function (app,userModel) {
    app.get("/api/user", userModel.findUser);
    app.get("/api/user/:userId", userModel.findUserByUserId);
    app.put("/api/user/:userId", userModel.updateUser);
    app.delete("/api/user/:userId", userModel.deleteUser);
    app.post("/api/user", userModel.createUser);

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firsatName: "Jose",   lastName: "Annunzi" }
    ];




    function findUserByUsername(req, res) {
        var username = req.query['username'];
        var user = users.find(function(u){
            return u.username == username;
        });
        if(user) {
            res.send(user);
        } else {
            res.sendStatus(404).send('User not found for username: ' + username);
        }
    }


};