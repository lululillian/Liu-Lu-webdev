(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;

        function init() {
            vm.websites = WebsiteService.findAllWebsitesForUser(vm.userId);

            vm.createWeb = function  (website) {
                WebsiteService.createWebsite(vm.userId, website);
                //vm.websites = WebsiteService.findAllWebsitesForUser(vm.userId);
                $location.url("/user/"+vm.userId+"/website");
            };
        }
        init();


    }
})();