$(function(){
	$(".content_c .main td").hover(function(){
		$(this).find(".pict").addClass("content_c_main_img_pict")
	},function(){
		$(this).find(".pict").removeClass("content_c_main_img_pict")
	})
})
