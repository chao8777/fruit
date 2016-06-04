/**
 * @author Íô³¬
 * @des ²å¼þ
 * */

angular.module("fruitApp").directive("categoriesItem", function () {

    return {
        replace: false,
        restrict: 'A',
        controller: function ($scope, $element) {

        },
        link: function ($scope, iElement) {

            $(iElement).on("touchstart", ".categories-item", function () {

                $(this).addClass("theme-border-decorate").siblings("li").removeClass("theme-border-decorate");
            })

            $(iElement).on("touchstart", ".filter-title", function () {
                var _type = $(this).data("type");
                var _parant = $(this).closest("div");

                _parant.removeClass("expand expand-sort expand-sub");
                if (_type == 0) {
                    _parant.addClass("expand expand-sort");
                } else {
                    _parant.addClass("expand expand-sub");
                }


            })

        }
    }
}).directive("goback", function () {
    return {
        replace: false,
        restrict: 'A',
        link: function ($scope, iElement) {
            $(iElement).bind("click", function(){
                history.back();
            });
        }
    }
});