(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, $location, PageService) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        PageService.findPageById(vm.pageId)
            .success(function(page){console.log(page);vm.page = page;});
        vm.websiteId = websiteId;
        vm.userId = userId;

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
