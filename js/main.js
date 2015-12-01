$.fn.menuLeft = function () {
    var $windowWidth;
    var $menuWidth;
    var $windowHeight;
    var $headerHeight;
    var $personHeight;
    var $menubottomHeight;
    var $mainHeight;
    $windowWidth = $(window).width();
    $menuWidth = $(".mm-menu.mm-widescreen").width();
    $windowHeight = $(window).height();
    $headerHeight = $(".header").height();
    $mainHeight = $windowHeight - $headerHeight;
    $(".mm-menu").css("margin-top", $headerHeight);
    $(".mm-page").css("margin-top", $headerHeight);
    $(".person .dropdown-menu").removeClass("mm-listview");
    $("#mainScroll").height($windowHeight);
    $("#kciframe").height($mainHeight);//课程中心iframe高度
    $(".play").height($windowHeight);//播放页高度
    $("#muLuShow,#noteShow,#answerShow").height($windowHeight-$(".play .nav").height());//播放页目录高度
    $(".play .panel").height($windowHeight-90);//播放页高度
    $(".play .panel-default .panel-body").height($windowHeight-235);
    $("#paperScroll").height($mainHeight-130);
};
$(function () {
    var $tableRightH = $(".table-tree .table-right").height();
    $(".table-tree .table-left").height($tableRightH);
    var $tableLeftH = $(".table-tree .table-left").height();
    var $tableLeftheaderH = $(".table-tree .table-left .panel-heading").height();
    $(".table-tree .table-left .panel-body").height($tableLeftH - $tableLeftheaderH - 40);
    $('.table-left .collapse').on('shown.bs.collapse', function () {
        $(".table-tree .table-left .panel-body").height($tableLeftH - $tableLeftheaderH - 80);
    });
    $('.table-left .collapse').on('hidden.bs.collapse', function () {
        $(".table-tree .table-left .panel-body").height($tableLeftH - $tableLeftheaderH - 40);
    });//左右带树搜索表格
    var $mianRightH = $(".main-right").height();
    var $mianLeftH = $(".main-left").height();
    var $windowHeight = $(window).height();
    var $headerHeight = $(".header").height();
    var $mainHeight = $windowHeight - $headerHeight;
    if( $mianLeftH < $mainHeight ){
        $(".main-left").css("min-height",$mainHeight);
    }
    if( $mianLeftH > $mianRightH ){
        $(".main-right").height($mianLeftH);
    }else{
        $(".main-left").height($mianRightH);
    }//mian左右两模块颜色不同高度相等
    $(window).menuLeft();//左侧导航js
});
window.onresize = function(){
    $(window).menuLeft();//变更浏览器刷新左侧导航js
};