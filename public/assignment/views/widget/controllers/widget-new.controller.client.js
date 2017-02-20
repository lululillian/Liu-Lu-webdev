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
        vm.getEditorURL =function (type) {
            return 'views/widget/templates/editors/widget-' + type + '-editor.view.client.html';
        }
        vm.createWidget =  function (type){
            console.log(type);
            var newWidgetID = new Date().getTime();
            var newWidget = {};
            newWidget._id = newWidgetID.toString();
            newWidget.widgetType = type;
            newWidget.pageId= vm.pageId;
            WidgetService.createWidget(newWidget);
            var URL ="/user/" +
                vm.userId + "/website/"+
                vm.websiteId+"/page/"+vm.pageId+"/widget/"+ newWidgetID;
                $location.url(URL);

        }

    }




})();