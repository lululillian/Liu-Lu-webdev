(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);


    function PageListController($routeParams, $location, PageService) {
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var pages = PageService.findPageByWebsiteId(websiteId);

        var vm = this;
        vm.pages = pages;
        vm.websiteId = websiteId;
        vm.userId = userId;

        vm.goback = function(){
            $location.url('/profile/' + vm.userId);
        }
    }

})();

