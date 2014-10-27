$(document).ready(function(){
    tag_in("#tag1", 500, 0);
    tag_in("#tag2", 500, 200);
    tag_in("#tag3", 500, 400);
    $("div.tag-choosing").children("div").click(function(){
        var id_chosen = $(this).attr("id");
        // alert(id_chosen);
        var flg = 0;
        for (var i = 1; i < 4; i++) {
            if (id_chosen == ("tag"+i)) {
                tag_chosen("#tag"+i);
            } else {
                tag_out("#tag"+i, 500, 200*flg++ + 200)
            }
        };
    });

});


function tag_ready(id1, id2, id3, during, delay) {
    tag_in("#"+id1, during, 0);
    tag_in("#"+id2, during, delay);
    tag_in("#"+id3, during, 2*delay);
}

function tag_already() {

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
    var offset = $tag.offset() - 0.5*$tag.width();
    var x = offset.left;
    var y = offset.top;
    $taga.addClass("chosen");
    setTimeout(function(){
        $tag.animate({"opacity":"0"}, 500);
        $taga.animate({"width":"0","height":"0","top":"50%","left":"50%"}, 500);
        }, 200);
                  
    var hfly = '<span class="tag">' + $taga.text +'</span>';
    $("body").append(hfly);
    // $tag.add
    // $(document).addelement
}
