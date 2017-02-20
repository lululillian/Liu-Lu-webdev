(function () {
    angular
        .module("WebAppMaker")
        .service("WidgetService", WidgetService);

    function WidgetService() {

        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 1, "text": "BOSTON SNOW STROM 2017"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 3, "text": "Snow will cause a slippery evening commute in Boston"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "90%",
                "url": "https://www.boston.com/wp-content/uploads/2017/01/Untitled-1-850x478$large.png"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "size":5, "text": 'A low-grade snowstorm will drop one to three inches of snow on the Greater Boston area Tuesday afternoon, causing a slippery ride home during evening rush hour. Snow broke out as early as 1 p.m. across western Massachusetts, and began in Boston just before the commute. There’s already two inches of snow on the ground in southern Massachusetts and Rhode Island, so expect that it will take you longer than usual to arrive home.'},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 3, "text": "Dangerous storm could dump about a foot of snow in Boston"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "90%",
                "url": "https://www.youtube.com/embed/sVMPjg2lwuA" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "size":5, "text": "The crowds that streamed into Friends’ Marketplace in Orleans Saturday reminded grocer Brian Junkins of an equally busy time — but in a warmer, sunnier month. “For a few hours this morning, it felt like it was almost Fourth of July week,” Junkins said in a telephone interview. “We’ve basically done three-quarters of a day’s worth of sales in a few hours.” Junkins and his customers were in the unenviable position of having to prepare for the most treacherous conditions of 2017’s first major storm, which threatened to dump nearly 2 feet of snow on parts of Southeastern Massachusetts, the Cape, and the Islands."}
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
        function createWidget(widget){
            widgets.push(widget);
            console.log(widgets);
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
                    if(widget.size != undefined)widgets[w].size = widget.size;
                    if(widget.text!=undefined)widgets[w].text = widget.text;
                    if(widget.width != undefined)widgets[w].width = widget.width;
                    if(widget.url != undefined)widgets[w].url = widget.url;
                    return wid;
                }
            }
            widgets.push(widget);
            return widget;
        }
        // 5. deleteWidget
        function deleteWidget(widgetId) {
            for(var w in widgets) {
                if(widgets[w]._id === widgetId) {
                    widgets.splice(w, 1);
                }
            }
        }

    }
})();