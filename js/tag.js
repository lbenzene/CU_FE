$(document).ready(function(){
    tag_ready("tag1", "tag2", "tag3", 500, 200);

    $("div.tag-choosing").children("div").click(function(){
        var id_chosen = $(this).attr("id");
        // alert(id_chosen);
        var flg = 0;
        for (var i = 1; i < 4; i++) {
            if (id_chosen == ("tag"+i)) {
                tag_chosen("#tag"+i);
            } else {
                tag_out("#tag"+i, 500, 200*flg++ + 200);
            }
        }

        setTimeout("reset_all('tag1', 'tag2', 'tag3')", 1500);
    });
});

function reset_all(id1, id2, id3) {
    reset_tag(id1);
    reset_tag(id2);
    reset_tag(id3);
    tag_ready("tag1", "tag2", "tag3", 500, 200);
}

function reset_tag(id) {
    $("#"+id).css({"left":"100%","margin-left":"1rem","margin-right":"0","opacity":"1"});
    $("#"+id).children("a").removeClass("chosen");
}

function tag_ready(id1, id2, id3, during, delay) {
    tag_in("#"+id1, during, 0);
    tag_in("#"+id2, during, delay);
    tag_in("#"+id3, during, 2*delay);
}


 /**
  * 标签进入动画
  * @param  {[type]} obj   [标签]
  * @param  {[type]} during  [所需时间]
  * @param  {[type]} delay [延迟]
  * @return {[type]}       
  */
function tag_in(obj, during, delay) { 
	$(function(){
	var $tag = $(obj);
	// var offset = $panel.offset()-$panel.width();
	// var x= offset.left;
	// var y= offset.top;
    setTimeout(function(){
        $tag.animate({"left":"0","margin-left":"0"},during);
        }, delay);
	// $panel.animate({left:0},fx);
	// $panel.offset({ top: y, left: x });
		
	})
}

 /**
  * 标签退出动画
  * @param  {[type]} obj   [标签]
  * @param  {[type]} during  [所需时间]
  * @param  {[type]} delay [延迟]
  * @return {[type]}       
  */
function tag_out(obj, during, delay) {
    var $tag = $(obj);
    setTimeout(function(){
        $tag.animate({"left":"-100%","margin-right":"1rem"},during);
        }, delay);
}

function tag_chosen(obj) {
    var $tag = $(obj);
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
