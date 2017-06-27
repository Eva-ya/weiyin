$(function(){
	// 手机导航效果
	var wid=$(window).width();
		var flag_phone=true;
		$("nav img.phone").click(function(){
			if(flag_phone){
				$("nav ul.nav_").css("display","block");
				$("nav").addClass("nav_change2");
			}
			else{
				$("nav ul.nav_").css("display","none");
				$("nav").removeClass("nav_change2");
			}
			flag_phone=!flag_phone;
		})
		
		var flag_nav1=true;
		$(".nav_ li.first").click(function(){
			if(!flag_nav2){
				if(wid>800){
					$(".nav_ li").removeClass("nav_li");
					$("nav").removeClass("nav_change");
					$("nav .nav_2").css("display","none");
					$("nav .nav_2 .nav_d").css("display","none");
				}
				if(wid<=800){
					$("nav .nav_").find(".word2").slideUp();
				}
				flag_nav2=!flag_nav2;
			}
			if(flag_nav1){
				if(wid>800){
					$(this).addClass("nav_li").siblings().removeClass("nav_li");
					$("nav").addClass("nav_change");
					$("nav .nav_2").css("display","block");
					$("nav .nav_2 .nav_b").css("display","block");
				}
				if(wid<=800){
					$(this).find(".word2").slideDown();
				}
					
			}else{
				if(wid>800){
					$(".nav_ li").removeClass("nav_li");
					$("nav").removeClass("nav_change");
					$("nav .nav_2").css("display","none");
					$("nav .nav_2 .nav_b").css("display","none");
				}
				if(wid<=800){
					$(this).find(".word2").slideUp();
				}
				
			}
			flag_nav1=!flag_nav1;
			
		});
		var flag_nav2=true;
		$(".nav_ li.second").click(function(){
			if(!flag_nav1){
				if(wid>800){
					$(".nav_ li").removeClass("nav_li");
					$("nav").removeClass("nav_change");
					$("nav .nav_2").css("display","none");
					$("nav .nav_2 .nav_b").css("display","none");
				}
				if(wid<=800){
					$("nav .nav_").find(".word2").slideUp();
				}
				
				flag_nav1=!flag_nav1;
			}
			if(flag_nav2){
				if(wid>800){
					$(this).addClass("nav_li").siblings().removeClass("nav_li");
					$("nav").addClass("nav_change");
					$("nav .nav_2").css("display","block");
					$("nav .nav_2 .nav_d").css("display","block");
				}
				if(wid<=800){
					$(this).find(".word2").slideDown();
				}
					
			}else{
				if(wid>800){
					$(".nav_ li").removeClass("nav_li");
					$("nav").removeClass("nav_change");
					$("nav .nav_2").css("display","none");
					$("nav .nav_2 .nav_d").css("display","none");
				}
				if(wid<=800){
					$(this).find(".word2").slideUp();
				}
				
			}
			flag_nav2=!flag_nav2;
			
		})
})
