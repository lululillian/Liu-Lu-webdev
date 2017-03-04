(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgetId = $routeParams.wgid;
        vm.getEditorTemplateUrl = getEditorTemplateUrl;
        vm.update_widget = WidgetService.updateWidget;
            WidgetService.findWidgetById(vm.widgetId)
                .success(function (widget) {
                    vm.widget = widget;
                })
                .error(function (widgets) {
                    vm.error = 'widget not found';
                });

        function getEditorTemplateUrl() {
            if(vm.widget == undefined) return;
            return 'views/widget/templates/editors/widget-'+vm.widget.widgetType+'-editor.view.client.html';
        }
    }
})();