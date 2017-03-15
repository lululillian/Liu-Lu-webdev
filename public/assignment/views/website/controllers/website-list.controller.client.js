(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, $location, WebsiteService) {
        var userId = $routeParams.uid;
        var vm = this;
        WebsiteService.findAllWebsitesForUser(userId)
            .success(function(websites){
                vm.websites = websites;
            })
            .error(function(websites) {
                vm.error = 'websites not found';
            });


        vm.userId = userId;
        console.log(vm.websites);

    }
})();