(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.website = {};
        function init() {

            vm.createWeb = function  (website) {
                console.log(website);
                website._user = vm.userId;
                WebsiteService.createWebsite(vm.userId,website);
                $location.url("/user/"+vm.userId+"/website");
            };
        }
        init();


    }
})();