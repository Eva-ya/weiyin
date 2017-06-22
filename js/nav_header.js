$(function(){
	// 手机导航效果
		var flag_phone=true;
		$("nav img.phone").click(function(){
			if(flag_phone){
				$("nav ul.nav_").css("display","block");
			}
			else{
				$("nav ul.nav_").css("display","none");
			}
			flag_phone=!flag_phone;
		})
		
		//   导航下拉列表
		var flag_nav1=true;
		$(".nav_ li").eq(1).click(function(){
			if(!flag_nav2){
				$(".nav_ li").removeClass("nav_li");
				$("nav").removeClass("nav_change");
				$("nav .nav_2").css("display","none");
				$("nav .nav_2 .nav_d").css("display","none");
				flag_nav2=!flag_nav2;
			}
			if(flag_nav1){
				$(this).addClass("nav_li").siblings().removeClass("nav_li");
				$("nav").addClass("nav_change");
				$("nav .nav_2").css("display","block");
				$("nav .nav_2 .nav_b").css("display","block");	
			}else{
				$(".nav_ li").removeClass("nav_li");
				$("nav").removeClass("nav_change");
				$("nav .nav_2").css("display","none");
				$("nav .nav_2 .nav_b").css("display","none");
			}
			flag_nav1=!flag_nav1;
			
		});
		var flag_nav2=true;
		$(".nav_ li").eq(3).click(function(){
			if(!flag_nav1){
				$(".nav_ li").removeClass("nav_li");
				$("nav").removeClass("nav_change");
				$("nav .nav_2").css("display","none");
				$("nav .nav_2 .nav_b").css("display","none");
				flag_nav1=!flag_nav1;
			}
			if(flag_nav2){
				$(this).addClass("nav_li").siblings().removeClass("nav_li");
				$("nav").addClass("nav_change");
				$("nav .nav_2").css("display","block");
				$("nav .nav_2 .nav_d").css("display","block");	
			}else{
				$(".nav_ li").removeClass("nav_li");
				$("nav").removeClass("nav_change");
				$("nav .nav_2").css("display","none");
				$("nav .nav_2 .nav_d").css("display","none");
			}
			flag_nav2=!flag_nav2;
			
		})
})
