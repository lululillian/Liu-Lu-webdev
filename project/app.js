/**
 * Created by lululillian on 2/27/17.
 */
module.exports = function (app) {



    var websiteModel = require('./models/website/website.model.server.js')();
    require('./services/website.service.server.js')(app, websiteModel);
    var pageModel = require('./models/page/page.model.server.js')();
    require('./services/page.service.server.js')(app, pageModel);
    var widgetModel = require('./models/widget/widget.model.server.js')();
    require('./services/widget.service.server.js')(app, widgetModel);


    var tradeModel = require('./models/game/trade.model.server.js')();
    require('./services/trade.service.server.js')(app, tradeModel);
    var userModel = require('./models/user/user.model.server.js')();
    require('./services/user.service.server.js')(app, userModel,tradeModel);



}