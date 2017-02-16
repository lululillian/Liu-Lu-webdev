(function () {
    angular
        .module("WebAppMaker")
        .service("WidgetService", WidgetService);

    function WidgetService() {

        var widgets = [
            { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "https://i.kinja-img.com/gawker-media/image/upload/s--UE7cu6DV--/c_scale,fl_progressive,q_80,w_800/xoo0evqxzxrrmrn4ayoq.jpg"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>Anker’s kevlar-reinforced PowerLine cables are <a href="http://gear.lifehacker.com/your-favorite-lightning-cables-anker-powerline-and-pow-1782036601" target="_blank" rel="noopener">far and away our readers’ top choice for charging their gadgets</a>, and you can save on several models today, including some from the nylon-wrapped PowerLine+ collection. I use these cables every single day, and I’ve never had one fray or stop working. Just be sure to note the promo codes below.<br></p>'},
            { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        this.findAllWidgets = findAllWidgets;
        this.findWidgetById = findWidgetById;
        this.createWidget = createWidget;
        this.findWidgetsByPageId = findWidgetsByPageId;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;


        function findAllWidgets(pageId) {
            return widgets;
        }

        // 1. createWidget
        function createWidget(pageId, widget){
            widget.pageId = pageId;
            widgets.push(widget);
        }

        // 2. findWidgetsByPageId
        function findWidgetsByPageId(pageId)  {
            for(var w in widgets) {
                if(widgets[w].pageId === pageId) {
                    return angular.copy(widgets[w]);
                }
            }
            return null;
        }

        // 3. findWidgetById
        function findWidgetById(widgetId) {
            for(var w in widgets) {
                if(widgets[w]._id === widgetId) {
                    return angular.copy(widgets[w]);
                }
            }
            return null;
        }

        // 4. updateWidget
        function updateWidget(widgetId, widget) {
            for(var w in widgets) {
                var wid = widgets[w];
                if( wid._id === widgetId ) {
                    widgets[w].widgetType = widget.widgetType;
                    widgets[w].size = widget.size;
                    widgets[w].text = widget.text;
                    widgets[w].width = widget.width;
                    widgets[w].url = widget.url;
                    return wid;
                }
            }
            return null;
        }
        // 5.
        function deleteWidget(widgetId) {
            for(var w in widgets) {
                if(widgets[w]._id === widgetId) {
                    widgets.splice(w, 1);
                }
            }
        }

    }
})();