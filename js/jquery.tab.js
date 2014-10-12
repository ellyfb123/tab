(function($){
	$.fn.tab = function(comment){
		for(var i = 0; i < comment.length; i ++){
			$(".tab").append("<div index="+i+" style='display: inline-block; text-align:center;\
				width: 80px;margin-right: 4px;background-color: grey;'>tab "+i+"</div>");
		}
		$(".tab").css({"width":"280px","margin":"auto"})
		         .append("<p style='width:250px;border:2px solid black;\
		height: 300px;overflow-y:scroll;text-indent:14px;'>"+comment[0]+"</p>");

		$("div[index]").click(function(){
			var currentTab = $(this).attr("index");
			$("div[index = "+currentTab+"]").css("background-color","red");
			$("div[index][index != "+currentTab+"]").css("background-color","grey");
			$("p").text(comment[currentTab]);
		});
	};
}(jQuery));