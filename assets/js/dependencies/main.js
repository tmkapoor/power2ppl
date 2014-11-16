 $(document).ready(function(){

 	var dataSelected = 0;

 	$(".clickable").click(function(e){
 		if(!($(this).hasClass('active-card'))){
 			dataSelected++;
 		}
 		else{
 			dataSelected--;
 		}
 		$(this).toggleClass('active-card');
 		if($("#graph").is(":visible") ){
 			$("#graph").hide("slow");
 		}
 		if(dataSelected > 0){
 			$("#graph").show( "slow", function() {
				$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	  			return false;
			});
 		}
	});

	$(".map").click(function(e) {
		var holder = $(".holder");
		var pos = holder.position();
		var w = holder.width();
		var h = holder.height();
		var bigMap = $(".floater");
		bigMap.show();
		bigMap.css({ 
		    position: "absolute",
		    top: pos.top,
		    left: pos.left,
		    height: h,
		    width: w,
		});
	});

	$(".floater").click(function(e){
		var isGraphShown = false;

		if($("#graph").is(":visible") ){
 			$("#graph").hide("fast");
 			isGraphShown = true;
 		}

		//Close the map
		$(this).hide();
		//Show recalculating
		var holder = $(".holder");
		var pos = holder.position();
		var w = holder.width();
		var h = holder.height();

		var modal = $(".recalc-modal");

		modal.css({ 
		    position: "absolute",
		    top: pos.top,
		    left: 0,
		    height: h,
		    width: "100%",
		});
		modal.slideToggle("fast").delay(1250);
		modal.slideToggle("fast", function(){
			if(isGraphShown){
				$("#graph").show( "slow", function() {
					$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		  			return false;
				});
			}
		});
		//Go back to normal
	});
 });