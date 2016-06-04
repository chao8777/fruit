/**
 * @author Íô³¬
 * @des Â·ÓÉ
 * */

angular.module("fruitApp", ['ui.router']).config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("user/index", {
                url: "/user/index",
                templateUrl: "module/user/index.html",
                controller:"userController"
            })
            .state("user/orderlist", {
                url: "/user/orderlist",
                templateUrl: "module/user/orderlist.html",
                controller:"userOrderlistController"
            })
            .state("user/address", {
                url: "/user/address",
                templateUrl: "module/user/address.html",
                controller:"userAddressController"
            })
            .state("user/address/edit", {
                url: "/user/address/edit",
                templateUrl: "module/user/address-edit.html",
                controller:"userAddressEditController"
            })
            .state("user/coupon", {
                url: "/user/coupon",
                templateUrl: "module/user/coupon.html",
                controller:"userCouponController"
            })
            .state("user/coupon/rule", {
                url: "/user/coupon/rule",
                templateUrl: "module/user/coupon-rule.html",
                controller:"userCouponRuleController"
            })
            .state("user/idea", {
                url: "/user/idea",
                templateUrl: "module/user/idea.html",
                controller:"userIdeaController"
            })
            .state("user/help", {
                url: "/user/help",
                templateUrl: "module/user/help.html",
                controller:"userHelpController"
            })
            .state("user/aboutus", {
                url: "/user/aboutus",
                templateUrl: "module/user/aboutus.html",
                controller:"userAboutusController"
            })
            .state("user/quest", {
                url: "/user/quest",
                templateUrl: "module/user/quest.html",
                controller:"userQuestController"
            })
            .state("user/login", {
                url: "/user/login",
                templateUrl: "module/user/login.html",
                controller:"userLoginController"
            })
            .state("user/register", {
                url: "/user/register",
                templateUrl: "module/user/register.html",
                controller:"userRegisterController"
            })
            .state("cat/index", {
                url: "/cat/index",
                templateUrl: "module/cat/index.html",
                controller:"userCatController"
            })
            .state("product/index", {
                url: "/product/index",
                templateUrl: "module/product/index.html",
                controller:"productController"
            })
            .state("product/info", {
                url: "/product/info",
                templateUrl: "module/product/info.html",
                controller:"productInfoController"
            })
    }
]);