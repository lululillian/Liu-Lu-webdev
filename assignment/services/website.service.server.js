/**
 * Created by lululillian on 2/27/17.
 */
module.exports = function (app) {
    app.get('/api/user/:userId/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);
    app.post("/api/user/:userId/website", createWebsite);

    var websites = [
        { "_id": "123", "name": "Facebook",    update:new Date(), "developerId": "456", "description": "Lorem", created: new Date() },
        { "_id": "234", "name": "Tweeter",     update:new Date(), "developerId": "456", "description": "Lorem", created: new Date() },
        { "_id": "456", "name": "Boston Weather",     update:new Date(), "developerId": "456", "description": "Lorem", created: new Date() },
        { "_id": "567", "name": "Tic Tac Toe", update:new Date(), "developerId": "123", "description": "Lorem", created: new Date() },
        { "_id": "678", "name": "Checkers",    update:new Date(), "developerId": "123", "description": "Lorem", created: new Date() },
        { "_id": "789", "name": "Chess",       update:new Date(), "developerId": "234", "description": "Lorem", created: new Date() }
    ];

    function createWebsite(req, res) {
        var newWebsite = req.body;
        newWebsite.developerId = userId;
        newWebsite._id = (new Date()).getTime();
        newWebsite.created = new Date();
        newWebsite.update = website.created;
        websites.push(newWebsite);
        res.json(newWebsite);
    }

    function findWebsiteById(req, res) {
        var wid = req.params['websiteId'];
        for(var w in websites) {
            var website = websites[w];
            if(website._id === wid) {
                res.send(website);
                return;
            }
        }
        res.sendStatus(404).send({});
    }

    function updateWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        for(var w in websites) {
            var web = websites[w];
            if( web._id === websiteId ) {
                var newWebsite = req.body;
                websites[w].name = newWebsite.name;
                websites[w].description = newWebsite.description;
                websites[w].update = new Date();
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }

    function deleteWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        for(var w in websites) {
            if(websites[w]._id === websiteId) {
                websites.splice(w, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }

    function findAllWebsitesForUser(req, res) {
        var userId = req.params['userId'];
        var sites = [];
        for(var w in websites) {
            if(userId === websites[w].developerId) {
                sites.push(websites[w]);
            }
        }
        res.json(sites);
    }
};