/**
 * Created by lululillian on 2/27/17.
 */
module.exports = function (app) {
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);
    app.post("/api/page/:pageId/widget", createWidget);

    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post ("/api/upload", upload.single('myFile'), uploadImage);

    function uploadImage(req, res) {

        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype      = myFile.mimetype;


        console.log(widgetId);
        console.log(width);
        console.log(myFile);
        console.log(originalname);
        console.log(filename);
        console.log(path);
        console.log(destination);
        console.log(size);
        console.log(mimetype);
    }




        var widgets = [
        { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 1, "text": "BOSTON SNOW STROM 2017"},
        { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 3, "text": "Snow will cause a slippery evening commute in Boston"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "90%",
            "url": "https://www.boston.com/wp-content/uploads/2017/01/Untitled-1-850x478$large.png"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "size":5, "text": 'A low-grade snowstorm will drop one to three inches of snow on the Greater Boston area Tuesday afternoon, causing a slippery ride home during evening rush hour. Snow broke out as early as 1 p.m. across western Massachusetts, and began in Boston just before the commute. There’s already two inches of snow on the ground in southern Massachusetts and Rhode Island, so expect that it will take you longer than usual to arrive home.'},
        { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 3, "text": "Dangerous storm could dump about a foot of snow in Boston"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "90%",
            "url": "https://www.youtube.com/watch?v=sVMPjg2lwuA" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "size":5, "text": "The crowds that streamed into Friends’ Marketplace in Orleans Saturday reminded grocer Brian Junkins of an equally busy time — but in a warmer, sunnier month. “For a few hours this morning, it felt like it was almost Fourth of July week,” Junkins said in a telephone interview. “We’ve basically done three-quarters of a day’s worth of sales in a few hours.” Junkins and his customers were in the unenviable position of having to prepare for the most treacherous conditions of 2017’s first major storm, which threatened to dump nearly 2 feet of snow on parts of Southeastern Massachusetts, the Cape, and the Islands."}
    ];

    // 1. createWidget
    function createWidget(req, res){
        var newWidget = req.body;
        widgets.push(newWidget);
        res.json(newWidget);

    }

    // 2. findWidgetsByPageId
    function findAllWidgetsForPage(req, res) {
        var pageId = req.params['pageId'];
        var sites = [];
        for (var w in widgets) {
            if (widgets[w].pageId === pageId) {
                sites.push(widgets[w]);
            }
        }
         res.json(sites);
    }
    // 3. findWidgetById
    function findWidgetById(req, res) {
        var widgetId = req.params['widgetId'];
        for(var w in widgets) {
            if(widgets[w]._id === widgetId) {
                res.send(widgets[w]);
                return;
            }
        }
        res.sendStatus(404).send({});
    }

    // 4. updateWidget
    function updateWidget(req, res) {
        var widgetId = req.params['widgetId'];
        for(var w in widgets) {
            var widget = widgets[w];
            if( widget._id === widgetId ) {
                var newWidget = req.body;
                if(newWidget.size != undefined) widget.size = newWidget.size;
                if(newWidget.text!=undefined) widget.text = newWidget.text;
                if(newWidget.width != undefined) widget.width = newWidget.width;
                if(newWidget.url != undefined) widget.url = newWidget.url;
                widgets[w].pageId = pageId;
                res.sendStatus(200);
                return;
            }
        }
        //widgets.push(widget); I dont know how to edit this sentence
        res.sendStatus(404);
    }


    // 5. deleteWidget
    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        for(var w in widgets) {
            if(widgets[w]._id === widgetId) {
                widgets.splice(w, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }


};