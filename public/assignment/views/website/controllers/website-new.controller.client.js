(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.website = {};

        vm.nameError = nameError;
        function nameError(){
            var q=  document.getElementById("q");
            q.hidden = true;
        }


        function init() {

            vm.createWeb = function  (website) {
                if(website != undefined && website.name!=undefined &&website.name !=""){
                    website._user = vm.userId;
                    WebsiteService.createWebsite(vm.userId,website);
                    $location.url("/user/"+vm.userId+"/website");
                }
                else{
                    var q=  document.getElementById("q");
                    q.hidden = false;
                    var e=  document.getElementById("e");
                    e.hidden = false;
                }

            };
        }
        init();


    }
})();