function item1_1(){
		$(".item1-1").hide();
		$(".item1-3").hide();
		$(".item1-2").show();
	}
	function item1_2(){
		$(".item1-1").hide();
		$(".item1-2").hide();
		$(".item1-2").show();
	}
	function item1_3(){
		$(".item1-1").hide();
		$(".item1-2").hide();
		$(".item1-3").show();
		$(".item1-3").addClass('item1-3-style')
	}
	function item2(){
		$(".item2").addClass('item2-style')
	}
	function item3_1(){
		$(".item3-1").addClass('item3-1-style')
	}
	function item3_2(){
		$(".item3-2").addClass('item3-2-style')
	}
	function item3_3(){
		$(".item3-3").addClass('item3-3-style')
	}
	function item3_4(){
		$(".item3-4").addClass('item3-4-style')
	}
	function item4(){
		$(".item4").addClass('item4-style')
	}
	function item5(){
		$(".item5").addClass('item5-style')
	}
	function item6(){
		$(".item6").addClass('item6-style')
	}
	function item7(){
		$(".item7").addClass('item7-style')
	}
	function item8(){
		$(".item8").addClass('item8-style')
	}
	function item9(){
		$(".item9").addClass('item9-style')
	}
	function item10(){
		$(".item10").addClass('item10-style')
	}
	function item11(){
		$(".item11").addClass('item11-style')
	}

	function load_left_bg(){
		$(".load-left").addClass('load-left-bg')
	}
	function load_right_bg(){
		$(".load-right").addClass('load-right-bg')
	}
	function process(){
		$(".process").addClass('process-style')
	}
	function process_num(){
		var pl = $(".process").width()
		var a = pl/145;
		var b = a.toFixed(2)*100
		document.getElementById("process-num").innerText= parseInt(b) + "%";
		if(pl=="145"){
			$("img").addClass('running-animation');
			$(".animation ").addClass('running-animation');
			$(".process").addClass('running-animation');
			$(".load-left").addClass('running-animation');
			$(".load-right").addClass('running-animation');
			
			// $("#begin-box").show();
			// $("#paused").hide();

			// $(".item1-2").hide();
			// $(".item1-3").hide();
			// $(".item1-1").show();

			// $(".animation").removeClass('bgchange');
			// $(".item1-3").removeClass('item1-3-style')
			// $(".item2").removeClass('item2-style')
			// $(".item3-1").removeClass('item3-1-style')
			// $(".item3-2").removeClass('item3-2-style')
			// $(".item3-3").removeClass('item3-3-style')
			// $(".item3-4").removeClass('item3-4-style')
			// $(".item4").removeClass('item4-style')
			// $(".item5").removeClass('item5-style')
			// $(".item6").removeClass('item6-style')
			// $(".item7").removeClass('item7-style')
			// $(".item8").removeClass('item8-style')
			// $(".item9").removeClass('item9-style')
			// $(".item10").removeClass('item10-style')
			// $(".item11").removeClass('item11-style')

			// $(".load-left").removeClass('load-left-bg')
			// $(".load-right").removeClass('load-right-bg')
			// $(".process").removeClass('process-style')
			// document.getElementById("process-num").innerText=0+ "%";
			// document.getElementById("recover").value ="暂停"
		}
	}
	
