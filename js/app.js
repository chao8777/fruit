/**
 * @author 汪超
 * @des 控制器 mm
 * */
angular.module("fruitApp").controller("userController", ["$scope", "serviceApi", function ($scope, serviceApi) {
    console.log("userController1");
    console.log(serviceApi);

}]).controller("userAddressController", ["$scope", "serviceApi", function ($scope, serviceApi) {
    console.log("userAddressController");


}]).controller("userCouponController", ["$scope", "serviceApi", function ($scope, serviceApi) {
    serviceApi.getcouponlist().success(function (result) {
        if (serviceApi.checkAjaxStatus(result)) {
            $scope.data = result.data;
        }
    })
    $scope.bindcoupon=function(){
        var coupon = $scope.couponcode;
        if(!coupon){
            tools.alert("请填写兑换码");
            return ;
        }
        serviceApi.bindcoupon({coupon_code:coupon}).success(function (result) {
            if (serviceApi.checkAjaxStatus(result)) {
                tools.alert("兑换成功");
            }
        })
    }
}]).controller("userCatController", ["$scope", "serviceApi", function ($scope, serviceApi) {
    console.log("userCatController")


}]).controller("productController", ["$scope", "serviceApi", function ($scope, serviceApi) {
    console.log("productController")


}]).controller("productInfoController", ["$scope", "serviceApi", function ($scope, serviceApi) {
    console.log("productInfoController")


}]).controller("userAddressEditController", ["$scope", "serviceApi", function ($scope, serviceApi) {


}]).controller("userCouponRuleController", ["$scope", "serviceApi", function ($scope, serviceApi) {


}]).controller("userIdeaController", ["$scope", "serviceApi", function ($scope, serviceApi) {


}]).controller("userIdeaController", ["$scope", "serviceApi", function ($scope, serviceApi) {


}]).controller("userAboutusController", ["$scope", "serviceApi", function ($scope, serviceApi) {


}]).controller("userQuestController", ["$scope", "serviceApi", function ($scope, serviceApi) {


}]).controller("userHelpController", ["$scope", "serviceApi", function ($scope, serviceApi) {

}]).controller("userLoginController", ["$scope", "serviceApi", function ($scope, serviceApi) {

    $scope.loginSubmit = function () {
        var mobile = $scope.mobile,
            password = $scope.password;

        if (!/^1\d{10}$/.test(mobile)) {
            tools.alert("请填写正确的手机号码");
            return;
        }
        if (!/^[\w|\W]{6,}$/.test(password)) {
            tools.alert("请填写6为以上的密码");
            return;
        }

        serviceApi.userlogin({
            mobile: mobile,
            password: password
        }).success(function (data) {
            if (serviceApi.checkAjaxStatus(data)) {
                //登录成功
            }
        })
    }
}]).controller("userRegisterController", ["$scope", function ($scope) {

    $scope.loginSubmit = function () {
        var mobile = $scope.mobile,
            code = $scope.code;

        if (!/^1\d{10}$/.test(mobile)) {
            tools.alert("请填写正确的手机号码")
            return;
        }
        if (!/^\d{4,6}$/.test(yzm)) {
            tools.alert("请填写正确的验证码");
            return;
        }

        serviceApi.userlogin({
            mobile: mobile,
            code: code
        }).success(function (data) {
            if (serviceApi.checkAjaxStatus(data)) {

            }
        })
    }
}]);


/*
 .controller("userRegisterController", ["$scope", function ($scope) {

 }])*/