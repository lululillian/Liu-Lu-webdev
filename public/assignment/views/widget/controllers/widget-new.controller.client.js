(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController", WidgetChooserController);

    function WidgetChooserController($sce, $routeParams, WidgetService, $location) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        //vm.widgets = WidgetService.findAllWidgetsForPage(vm.pageId);
        WidgetService.findAllWidgetsForPage(vm.pageId)
            .success(function(widgets){
                vm.widgets = widgets;
            })
            .error(function(widgets) {
                vm.error = 'widget not found';
            });


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
            WidgetService.createWidget(newWidget);
            var URL ="/user/" +
                vm.userId + "/website/"+
                vm.websiteId+"/page/"+vm.pageId+"/widget/"+ newWidgetID;
                $location.url(URL);

        }

    }




})();