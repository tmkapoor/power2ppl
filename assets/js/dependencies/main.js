 $(document).ready(function(){
 	$(".clickable").click(function(e){
 		if($("#graph").is(":visible") ){
 			$("#graph").hide("slow");
 		}
 		$("#graph").show( "slow", function() {
			$("html, body").animate({ scrollTop: $(document).height() }, "slow");
  			return false;
		});
	});
 });