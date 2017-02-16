(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, $location, WebsiteService) {
        var userId = $routeParams.uid;
        var websites = WebsiteService.findAllWebsitesForUser(userId);
        var vm = this;
        vm.websites = websites;
        vm.userId = userId;

        vm.goback = function(){
            $location.url('/profile/' + vm.userId);
        }
    }
})();