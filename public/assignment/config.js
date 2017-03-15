(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider, $locationProvider, $httpProvider) {

        // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        // $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
        $routeProvider
            // 1.
            .when("/login",{
                templateUrl: 'views/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model',
                CSS:"css/styles.css"
            })
            // 2.
            .when("/register",{
                templateUrl: 'views/user/templates/register.view.client.html',
                controller:'registerController',
                controllerAs:'model'
            })
            // 3.
            .when("/profile/:uid",{
                templateUrl: 'views/user/templates/profile.view.client.html',
                controller: 'profileController',
                controllerAs: 'model'
            })
            // 4.
            .when("/user/:uid/website",{
                templateUrl: 'views/website/templates/website-list.view.client.html',
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            // 5.
            .when("/user/:uid/website/new",{
                templateUrl: 'views/website/templates/website-new.view.client.html',
                controller: "WebsiteNewController",
                controllerAs: "model"
            })
            // 6.
            .when("/user/:uid/website/:wid",{
                templateUrl: 'views/website/templates/website-edit.view.client.html',
                controller: "WebsiteEditController",
                controllerAs: "model"
            })
            // now do all the page routes using websites as an example
            // 7.
            .when("/user/:uid/website/:wid/page",{
                templateUrl: 'views/page/templates/page-list.view.client.html',
                controller: "PageListController",
                controllerAs: "model"
            })
            // 8.
            .when("/user/:uid/website/:wid/page/new",{
                templateUrl: 'views/page/templates/page-new.view.client.html',
                controller: "PageNewController",
                controllerAs: "model"
            })
            // 9.
            .when("/user/:uid/website/:wid/page/:pid",{
                templateUrl: 'views/page/templates/page-edit.view.client.html',
                controller: "PageEditController",
                controllerAs: "model"
            })
            // 10.
            .when("/user/:uid/website/:wid/page/:pid/widget",{
                templateUrl: 'views/widget/templates/widget-list.view.client.html',
                controller: "WidgetListController",
                controllerAs: "model"
            })
            // 11.
            .when("/user/:uid/website/:wid/page/:pid/widget/new",{
                templateUrl: 'views/widget/templates/widget-chooser.view.client.html',
                controller: "WidgetChooserController",
                controllerAs: "model"
            })
            // 12.
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid",{
                templateUrl: 'views/widget/templates/widget-edit.view.client.html'
                ,controller: "WidgetEditController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid/flickr",{
                templateUrl: 'views/widget/templates/widget-flickr-search.view.client.html'
                ,controller: "FlickrController",
                controllerAs: "model"
            })


            // 13.
            .when("/user/:uid/website/:wid/page/:pid/widget/getTemplate",{
                templateUrl: 'views/widget/templates/'
            });

    }
})();