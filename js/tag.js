
var tag = new Array();
tag[0] = $("#tag1");
tag[1] = $("#tag2");
tag[2] = $("#tag3");
tag[3] = $("#tag4");
tag[4] = $("#tag5");


$(document).ready(function(){
    tag_ready(tag, 500, 200);

    $("div.tag-choosing").children("div").click(function(){
        var oa = $(this).children("a");
        if (oa.hasClass("chosen")) {
            oa.removeClass("chosen");
            //delete
        } else {
            oa.addClass("chosen");
        }
    })
});
/*
    $("div.tag-choosing").children("div").click(function(){
        var id_chosen = $(this).attr("id");
        // alert(id_chosen);
        var flg = 0;
        for (var i = 0; i < 3; i++) {
            if ( id_chosen == (tag[i].attr("id")) ) {
                tag_chosen(tag[i]);
            } else {
                tag_out(tag[i], 500, 200*flg++ + 200);
            }
        }

        setTimeout(function(){reset_all(tag)}, 1500);
    });
*/
function reset_all(tag) {
    for (var i = 0; i < tag.length; i++) {
        reset_tag(tag[i]);
    };
    tag_ready(tag, 500, 200);
}

function reset_tag(obj) {
    obj.animate({"left":"100%","margin-left":"1rem","margin-right":"0","opacity":"1"}, 0);
    obj.children("a").removeClass("chosen");
}

function tag_ready(tag, during, delay) {
    for (var i = 0; i < tag.length; i++) {
        tag_in(tag[i], during, i*delay);
    };
}


 /**
  * 标签进入动画
  * @param  {[type]} obj   [对象]
  * @param  {[type]} during  [所需时间]
  * @param  {[type]} delay [延迟]
  * @return {[type]}       
  */
function tag_in(obj, during, delay) { 
	var $tag = obj;
	// var offset = $panel.offset()-$panel.width();
	// var x= offset.left;
	// var y= offset.top;
    setTimeout(function(){
        $tag.animate({left:"0",marginLeft:"-.5rem"}, during, function(){
            $tag.animate({marginLeft:"0"},100);})
    }, delay);
	// $panel.animate({left:0},fx);
	// $panel.offset({ top: y, left: x });
}

 /**
  * 标签退出动画
  * @param  {[type]} obj   [标签]
  * @param  {[type]} during  [所需时间]
  * @param  {[type]} delay [延迟]
  * @return {[type]}       
  */
function tag_out(obj, during, delay) {
    var $tag = obj;
    setTimeout(function(){
        $tag.animate({left:"-100%",marginRight:"1rem"},during);
        }, delay);
}

function tag_chosen(obj) {
    var $tag = obj;
    var $taga = $tag.children("a");

    $taga.addClass("chosen");
    setTimeout(function(){
        $tag.animate({"opacity":"0"}, 500);
        // $taga.animate({"width":"110%","height":"110%","top":"-5%","left":"-5%"}, 500);
        }, 200);
    // var hfly = '<span class="tag" ';
    // hfly +='style=' + $taga.text() +'</span>';
    // $("body").append(hfly);
    // $tag.add
    // $(document).appendChild
}
