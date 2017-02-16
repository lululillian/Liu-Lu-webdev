(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService() {
        var websites = [
            { "_id": "123", "name": "Facebook",    update:new Date(), "developerId": "456", "description": "Lorem", created: new Date() },
            { "_id": "234", "name": "Tweeter",     update:new Date(), "developerId": "456", "description": "Lorem", created: new Date() },
            { "_id": "456", "name": "Gizmodo",     update:new Date(), "developerId": "456", "description": "Lorem", created: new Date() },
            { "_id": "567", "name": "Tic Tac Toe", update:new Date(), "developerId": "123", "description": "Lorem", created: new Date() },
            { "_id": "678", "name": "Checkers",    update:new Date(), "developerId": "123", "description": "Lorem", created: new Date() },
            { "_id": "789", "name": "Chess",       update:new Date(), "developerId": "234", "description": "Lorem", created: new Date() }
        ];
        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser":findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite":updateWebsite,
            "deleteWebsite": deleteWebsite,
            "findAllWebsitesForUser": findAllWebsitesForUser
        };
        return api;

        // 1. createWebsite
        function createWebsite(userId, website) {
            website.developerId = userId;
            website._id = (new Date()).getTime();
            websites.push(website);
        }

        // 2. findWebsitesByUser
        function findWebsitesByUser(userId) {
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    return angular.copy(websites[w]);
                }
            }
            return null;
        }

        // 3. findWebsiteById
        function findWebsiteById(wid) {
            for(var w in websites) {
                if(websites[w]._id === wid) {
                    return angular.copy(websites[w]);
                }
            }
            return null;
        }

        // 4. updateWebsite
        function updateWebsite(websiteId, website) {
            for(var w in websites) {
                var web = websites[w];
                if( web._id === websiteId ) {
                    websites[w].name = website.name;
                    websites[w].description = website.description;
                    return web;
                }
            }
            return null;
        }

        // 5. deleteWebsite
        function deleteWebsite(websiteId) {
            for(var w in websites) {
                if(websites[w]._id === websiteId) {
                    websites.splice(w, 1);
                }
            }
        }


        function findAllWebsitesForUser(userId) {
            var sites = [];
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    sites.push(websites[w]);
                }
            }
            return sites;
        }
    }
})();