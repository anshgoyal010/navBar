$(document).ready(function(){
	$(".nav-item .nav-link").click(function(){
		console.log("click");
		navHandler($(this));
	})
});


function navHandler(ele){
	if(ele.hasClass("dropdown-toggle")){
		if(ele.hasClass("show")){
			ele.removeClass("show");
			ele.siblings().each(function(){
				if($(this).hasClass("dropdown-menu")){
					$(this).addClass("none");
				}
			})
			ele.removeClass("active");

		}
		else{
			$(".dropdown-menu").addClass("none");
			$(".dropdown-toggle").removeClass("show");
			ele.siblings().each(function(){
				if($(this).hasClass("dropdown-menu")){
					$(this).removeClass("none");
				}
			})
			ele.addClass("show")
		}
	}

	else{
		
		$(".dropdown-menu").addClass("none");
		$(".dropdown-toggle").removeClass("show");


		var dataToggle = ele.parent().data('page');
		$(".nav-item .active").removeClass("active");
		ele.addClass("active");

		$(".page").each(function(){
			if($(this).data('page')==dataToggle){
				$('.page').addClass("none");
				$(this).removeClass("none");
			}
		});

	}
};


