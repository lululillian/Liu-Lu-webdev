(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgets = WidgetService.findAllWidgets(vm.pageId);

        vm.getWidgetTemplateUrl = function (widgetType) {
            var url = 'views/widget/templates/widget-'+widgetType+'.view.client.html';
            return url;
        }

        vm.getTrustedHtml  = function (html) {
            return $sce.trustAsHtml(html);
        }

        vm.getYouTubeEmbedUrl = function (url) {
            var baseUrl="https://www.youtube.com/embed/";
            var urlParts = url.split('/');
            var id=urlParts[urlParts.length - 1];
            baseUrl += id;
            return $sce.trustAsResourceUrl(baseUrl);
        }
    }
})();