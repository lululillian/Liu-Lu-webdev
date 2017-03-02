/**
 * Created by lululillian on 2/27/17.
 */
module.exports = function (app) {
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);
    app.post("/api/website/:websiteId/page", createPage);

    var pages = [
        { "_id": "321", "name": "Boston Weather 2017", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    function createPage(req, res) {
        var newPage = req.body;
        newPage.websiteId = websiteId;
        newPage._id = (new Date()).getTime();
        pages.push(newPage);
        res.json(newPage);
    }

    function findPageById(req, res)  {
        var pageId = req.params['pageId'];
        for(var p in pages) {
            if(pages[p]._id === pageId) {
                res.send(pages[p]);
                return;
            }
        }
        res.sendStatus(404).send({});
    }

    function updatePage(req, res)  {
        var pageId = req.params['pageId'];
        for(var p in pages) {
            var pag = pages[p];
            if( pag._id === pageId ) {
                var newPage = req.body;
                pages[p].name = newPage.name;
                pages[p].description = newPage.description;
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }

    function deletePage(req, res) {
        var pageId = req.params['pageId'];
        for(var p in pages) {
            if(pages[p]._id === pageId) {
                pages.splice(p, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        var sites = [];
        for (var p in pages) {
            if (pages[p].websiteId === websiteId) {
                sites.push(pages[p]);
            }
        }
        res.json(sites);
    }


};