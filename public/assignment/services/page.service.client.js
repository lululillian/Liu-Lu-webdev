(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService() {
        var pages = [
                { "_id": "321", "name": "Boston Weather 2017", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
            ];

        var api = {
            "createPage" : createPage,
            "findPageByWebsiteId":findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage,
            "findAllPagesForUser":findAllPagesForUser
            }
        return api;



        // 1. createPage
        function createPage(websiteId, page) {
            page.websiteId = websiteId;
            pages.push(page);
        }

        // 2. findPageByWebsiteId
        function findPageByWebsiteId(websiteId)   {
            var pageList = [];
            for(var p in pages) {
                var page = pages[p];
                if(page.websiteId === websiteId) {
                    pageList.push(page);
                }
            }
            return pageList;
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

        function findAllPagesForUser(websiteId) {
            var set = [];
            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    set.push(pages[p]);
                }
            }
            return set;
        }

    }
})();