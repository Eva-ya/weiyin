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
		var str_b=['<h3>组织云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>人事云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>薪酬云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>报销云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>奖金云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>绩效云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>考勤云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>社保云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>审批云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>个税云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>政策 云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>招聘 云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',
		'<h3>福利云</h3><h5>组织架构轻松管理</h5><p>①公司组织架构快速搭建，配置灵活</p><p>②总公司、分公司、多部门、组织架构清晰展现</p><img src="../img/website_build/content_b_ipad.png" />',];
			
		$(".b_left li").eq(0).find("span").addClass("content_b_left_li");
		$(".b_left li").each(function(){
			var ind=$(this).index();
			$(this).click(function(){
				$(this).find("span").addClass("content_b_left_li");
				$(this).siblings().find("span").removeClass("content_b_left_li");
				$(".b_right .word").html(str_b[ind]);
				$(this).parent().find(".middle").appendTo(this);
			})
		})
		$(".content_c .main td").hover(function(){
			$(this).find("img.pict").addClass("content_c_main_img_pict")
		},function(){
			$(this).find("img.pict").removeClass("content_c_main_img_pict")
		})
		
		
	})