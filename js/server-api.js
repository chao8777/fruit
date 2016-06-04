/**
 * @author 汪超
 * @des api
 * */

angular.module("fruitApp").service("serviceApi", ["$http", function ($http) {

    var timeOver = 10000;   // ajax请求超时时间10s

    function setCookie(name, value, path, cycle) {
        var expires = "";
        if (!this.isEmpty(cycle)) {
            var maxCycle = new Date();
            maxCycle.setTime(maxCycle.getTime() + cycle * 1000);
            expires = ";expires=" + maxCycle.toGMTString();
        }
        path = path ? ";path=" + path : "";
        document.cookie = name + "=" + escape(value) + expires + path;
    }

    /*
     *获取cookie
     *name    [string|String]   cookie的属性名
     */
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    }

    function delCookie(name, path) {
        var endCycle = new Date();
        endCycle.setTime(endCycle.getTime() - 1);
        var delValue = this.getCookie(name);
        path = path ? ";path=" + path : "";
        document.cookie = name + "=" + delValue + ";expires=" + endCycle.toGMTString() + path;
    }


    function getAjax(url) {
        var uid = getCookie('user_token');
        return $http({
            method: 'get',
            cache: false,
            headers: {
                "X-User-Token": uid
            },
            timeout: timeOver,
            url: url
        }).error(function () {
            tools.alert("系统繁忙。请稍后再试")
        });
    }

    function postAjax(url, params) {
        var uid = getCookie('user_token');
        if (!params) params = {};
        return $http({
            method: 'post',
            headers: {
                "X-User-Token": uid
            },
            data: params,
            cache: false,
            timeout: timeOver,
            url: url
        }).error(function () {
            tools.alert("系统繁忙。请稍后再试")
        });
    }

    var rootUrl = "/fruit/json";
    var suffixUrl = ".json";

    return {
        checkAjaxStatus: function (data) {
            if (data && data.code == 200) {
                return true
            }
            tools.alert(data.message);
            return false;
        },
        /////////////////////////
        /////////user////////////
        /////////////////////////
        /*
         * @param mobile
         * @param code
         * */
        userRegister: function (data) {
            var url = rootUrl + "/user/register" + suffixUrl;
            return postAjax(url, data);
        },
        /*
         * @param mobile
         * @param password
         * */
        userlogin: function (data) {
            var url = rootUrl + "/user/login" + suffixUrl;
            return postAjax(url, data);
        },
        getuserinfo: function () {
            var url = rootUrl + "/user/getuserinfo" + suffixUrl;
            return getAjax(url);
        },
        /*
         * @param mobile
         * @param type 1：注册 2：忘记密码
         * */
        userSendSms: function (data) {
            var url = rootUrl + "/user/SendSms" + suffixUrl;
            return postAjax(url, data);
        },
        /**
         * @param username
         * @param sex
         * @param mobile
         * @param city
         * @param area
         * @param detail
         * */
        addaddress: function (data) {
            var url = rootUrl + "/user/addaddress" + suffixUrl;
            return postAjax(url, data);
        },
        /**
         * @parma int
         * */
        updateaddress: function (id) {
            var url = rootUrl + "/user/updateaddress" + suffixUrl;
            return getAjax(url + "?id=" + id);
        },
        /**
         * @parma int
         * */
        deleteaddress: function (id) {
            var url = rootUrl + "/user/deleteaddress" + suffixUrl;
            return getAjax(url + "?id=" + id);
        },
        addresslist: function () {
            var url = rootUrl + "/user/addresslist" + suffixUrl;
            return getAjax(url);
        },
        /////////////////////////
        //////////coupon/////////
        /////////////////////////
        getcouponlist: function () {
            var url = rootUrl + "/coupon/getcouponlist" + suffixUrl;
            return getAjax(url);
        },
        /**
         * @param coupon_code
         * */
        bindcoupon: function () {
            var url = rootUrl + "/coupon/bindcoupon" + suffixUrl;
            return getAjax(url);
        },


        /////////////////////////
        ///////feedback//////////
        /////////////////////////
        /**
         * @param words
         * @param int
         * */
        addfeedback: function (data) {
            var url = rootUrl + "/feedback/addfeedback" + suffixUrl;
            return postAjax(url, data);
        },
        feedback: function () {
            var url = rootUrl + "/feedback" + suffixUrl;
            return getAjax(url);
        },

        /////////////////////////
        /////////order///////////
        /////////////////////////
        getorderlist: function () {
            var url = rootUrl + "/order/getorderlist" + suffixUrl;
            return getAjax(url);
        },
        /**
         * @param order_id
         * */
        getorderdetail: function (id) {
            var url = rootUrl + "/order/getorderdetail" + suffixUrl;
            return getAjax(url + "?order_id=" + id);
        },

        /////////////////////////
        /////////product///////////
        /////////////////////////
        getproductlist: function () {
            var url = rootUrl + "/product/getproductlist" + suffixUrl;
            return getAjax(url);
        },
        /**
         * @param product_id
         * */
        getproductdetail: function (id) {
            var url = rootUrl + "/product/getproductdetail" + suffixUrl;
            return getAjax(url + "?product_id=" + id);
        }

    }
}]);
/*

 addfeedback:function(){
 var  url = rootUrl + "" + suffixUrl;
 return getAjax(url);
 }
 *
 * */



