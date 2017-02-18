(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, $location, PageService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        function init() {
            //vm.pages = PageService.findAllPagesForUser(vm.websiteId);
            vm.create_page = function  (page) {
                PageService.createPage(vm.websiteId, page);
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            };
        }
        init();
    }
})();
