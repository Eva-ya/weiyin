$(function(){
		$(window).resize(function(){
			var wid=$(window).width();
		    $(".content_a").width(wid);
		    $(".a_carousel img").width(wid);
		});
		var wid=$(window).width();
		$(".content_a").width(wid);
		$(".a_carousel img").width(wid);
		$(".a_carousel").css("left",-wid+"px");
		var t=setInterval(fun_a,6000);
		function fun_a(){
			$(".a_carousel").animate({
				left:-2*wid+"px"
			},2000,function(){
				$(".a_carousel img").eq(0).appendTo($(".a_carousel"));
				$(".a_carousel").css("left",-wid+"px")
			})
		}
		$(".a_left").click(function(){
			if(!($(".a_carousel").is(":animated"))){
				fun_a();
			}
			
		})
		$(".a_right").click(function(){
			if(!($(".a_carousel").is(":animated"))){
				$(".a_carousel").animate({
				left:"0"
				},2000,function(){
				$(".a_carousel img").eq(2).prependTo($(".a_carousel"));
				$(".a_carousel").css("left",-wid+"px")
			})
			}
			
		})
		setInterval(fun_b,4000);
		var wid_b=$(".content_b .main").width();
		function fun_b(){
			$(".b_carousel").animate({
				left:-wid_b+"px"
			},2000,function(){
				$(".b_carousel section:lt(3)").appendTo($(".b_carousel"));
				$(".b_carousel").css("left","0")
			})
		}
		$(".content_c .main ul:gt(1)").find("li").hover(function(){
			if(!$(".c_carousel img:last-child").is(":animated")){
				$(".c_carousel img:last-child").animate({
					top:"0"
				},1000,function(){
					$(this).prev().css("top","100%").appendTo($(".c_carousel"));
				})
			}
			
		})
		//  鼠标滚动事件
		var flag_f=true;
		$(".content_a .up").click(function(){
			$("body").animate({
				scrollTop:0
			});
		})
		$(document).scroll(function(){
			var he=$(window).height();
			var doc_top=$(this).scrollTop();
//			console.log("he"+he)
//			console.log("doc_top"+doc_top)
			var doc_bottom=doc_top+he;
			var con_b_top=$(".content_b").offset().top;
			
			if(doc_bottom>=con_b_top){
				$(".content_a .aaa").stop().animate({
					right:"-10px"
				},1000);
			}else{
				$(".content_a .aaa").stop().animate({
					right:"-100%"
				},1000)
			}
			
			var con_f_top=$(".content_f").offset().top;
//			console.log("con_f_top"+con_f_top)
			if((doc_bottom>=con_f_top)&&(flag_f)){
				$(".content_f input").eq(0).animate({
					value:20
				},{
					step:function(n,b){
						$(this).prev().html(parseInt(n))
					},duration:1000
				})
				$(".content_f input").eq(1).animate({
					value:1000
				},{
					step:function(n,b){
						$(this).prev().html(parseInt(n))
					},duration:1000
				})
				$(".content_f input").eq(2).animate({
					value:500
				},{
					step:function(n,b){
						$(this).prev().html(parseInt(n))
					},duration:1000
				})
				$(".content_f input").eq(3).animate({
					value:8
				},{
					step:function(n,b){
						$(this).prev().html(parseInt(n))
					},duration:1000
				})
			}
			
		})
		$(".content_d .d_box").hover(function(){
			$(this).addClass("content_d_d_box")
		},function(){
			$(this).removeClass("content_d_d_box")
		})
		
		$(".content_g .g_people").hover(function(){
			$(this).addClass("content_g_people")
		},function(){
			$(this).removeClass("content_g_people")
		})

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
//		$(".nav_ li").eq(3).click(function(){
//			$(this).addClass("nav_li").siblings().removeClass("nav_li");
//			$("nav").removeClass("nav_change");
//			$("nav .nav_2").css("display","none");
//			$("nav .nav_2 .nav_b").css("display","none");
//				
//			$("nav").addClass("nav_change");
//			$("nav .nav_2").css("display","block");
//			$("nav .nav_2 .nav_d").css("display","block");
//			
//			$(".nav_ li").eq(3).click(function(){
//			$(".nav_ li").removeClass("nav_li");
//			$("nav").removeClass("nav_change");
//			$("nav .nav_2").css("display","none");
//			$("nav .nav_2 .nav_d").css("display","none");
//			})
//			
//		})
		$(".content_h img").addClass("content_h_img");
		$(".content_h img").hover(function(){
			$(this).removeClass("content_h_img");
		},function(){
			$(this).addClass("content_h_img")
		})
		$(".content_m .foot li").hover(function(){
			$(this).parent().find("li:first-child").addClass("content_m_foot_ul")
		},function(){
			$(this).parent().find("li:first-child").removeClass("content_m_foot_ul")
		})
		
		
	})