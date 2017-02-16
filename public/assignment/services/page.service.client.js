(function () {
    angular
        .module("WebAppMaker")
        .service("PageService", PageService);

    function PageService() {

        var pages = [
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
            ]
            ;

        this.createPage = createPage;
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;


        // 1. createPage
        function createPage(websiteId, page) {
            page.websiteId = websiteId;
            pages.push(page);
        }

        // 2. findPageByWebsiteId
        function findPageByWebsiteId(websiteId)   {
            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    return angular.copy(pages[p]);
                }
            }
            return null;
        }

        // 3. findPageById
        function findPageById(pageId)  {
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    return angular.copy(pages[p]);
                }
            }
            return null;
        }

        // 4. updatePage
        function updatePage(pageId, page)  {
            for(var p in pages) {
                var pag = pages[w];
                if( pag._id === pageId ) {
                    pages[p].name = page.name;
                    pages[p].description = page.description;
                    return pag;
                }
            }
            return null;
        }
        // 5. deletePage
        function deletePage(pageId) {
            for(var p in pages) {
                if(pages[w]._id === pageId) {
                    pages.splice(p, 1);
                }
            }
        }

    }
})();