/**
 * Created by lululillian on 3/13/17.
 */
module.exports = function (app) {

    //app.get("/api/user", findUser);
    //app.get("/api/user/:userId", findUserById);
    //app.put("/api/user/:userId", updateUser);
   // app.delete("/api/user/:userId", deleteUser);
    var api = {
        createUser: createUser,
        findUserByUserId:findUserByUserId,
        updateUser:updateUser,
        deleteUser:deleteUser,
        findUser:findUser,
        findUserByFacebookId: findUserByFacebookId,
        findUserByUsername:findUserByUsername,
        findUserById:findUserById
    };

    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;

    var UserSchema = require('./user.schema.server')();
    var UserModel = mongoose.model('UserModel', UserSchema);


    function deleteUser(req, res) {
        var userId = req.params.userId;
        UserModel
            .remove({_id: userId})
            .then(
                function (movies) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function createUser(user) {
        return UserModel
            .create(user);

    }

    function findUserByUserId(req, res) {
        var userId = req.params.userId;
        UserModel
            .findById(userId)
            .then(
                function (user) {
                    res.json(user);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function updateUser(req, res) {
        var userId = req.params.userId;
        var user = req.body;
        UserModel
            .update({_id: userId}, {$set: {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email

            }})
            .then(
                function (status) {
                    res.json(status);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findUserById(id) {
        return UserModel
            .findById(id);
    }




    function findUserByFacebookId(facebookId) {
        return UserModel.findOne({'facebook.id': facebookId});
    }

    function findUserByUsername(username) {
        return UserModel
            .findOne({username:username});
    }
    function findUser(req, res) {

        var username = req.query['username'];
        var password = req.query['password'];
        if(username && password) {
            findUserByCredentials(req, res);
        } else if(username) {
            findUserByUsername(req, res);
        }
    }


    function findUserByCredentials(req,res) {

        var username = req.query['username'];
        var password = req.query['password'];
        UserModel
            .findOne({username:username,password:password})
            .then(
                function (user) {
                    res.json(user);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    return api;

};