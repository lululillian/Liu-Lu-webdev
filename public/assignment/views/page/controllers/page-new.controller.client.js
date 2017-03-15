(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, $location, PageService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        function init() {
            vm.create_page = function  (page) {
                page._website = vm.websiteId;
                PageService.createPage(vm.websiteId, page);
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            };
        }
        init();
    }
})();
