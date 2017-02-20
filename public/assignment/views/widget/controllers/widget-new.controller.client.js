(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController", WidgetChooserController);

    function WidgetChooserController($sce, $routeParams, WidgetService, $location) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgets = WidgetService.findAllWidgets(vm.pageId);
        vm.types = ["HTML","IMAGE","YOUTUBE","HEADING"];

        vm.newWidget = function(type){
            $location.path("/user/" + vm.userId
                + "/website/" + vm.websiteId
                + "/page/" + vm.pageId
                + "/widget/" + "-1"
                + "/" + type);
        };
    }




})();