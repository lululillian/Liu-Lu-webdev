(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.deleteWebsite = deleteWebsite;
        function init() {
            WebsiteService.findWebsiteById(vm.websiteId).
                            success(function(newWebsite){
                            vm.website = newWebsite;
            });

            vm.update = function(website) {
                WebsiteService.updateWebsite(vm.websiteId,website);
                $location.url("/user/"+vm.userId+"/website");
            }
        }
        init();

        function deleteWebsite () {
            WebsiteService.deleteWebsite(vm.websiteId);
            $location.url("/user/"+vm.userId+"/website");
        };
    }
})();