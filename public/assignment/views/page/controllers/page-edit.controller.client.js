(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, $location, PageService) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var pages = PageService.findPageByWebsiteId(websiteId);
        vm.pageId = $routeParams.pid;
        vm.page = PageService.findPageById(vm.pageId);
        vm.websiteId = websiteId;
        vm.userId = userId;
        vm.pages =pages;

        vm.goback = function () {
            $location.url('/profile/' + vm.userId);
        }
        vm.update_Page = function (page) {
            PageService.updatePage(vm.pageId, page);
        }

        vm.delete_page = function (){
            PageService.deletePage(vm.pageId);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
        };
    }


})();
