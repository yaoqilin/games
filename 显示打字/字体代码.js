$(document).ready(function (e) {

		/*禁止右键和隐藏鼠标*/
		$("body").bind("contextmenu", function () {
			return false;
		});
		/*定义文字最底部显示到哪儿*/



		var guangs = ["　", "|", "　", "|"];
		var guangBiao = "/";
		var guangSub = 0;
		var guang = setInterval("$.guang()", 120);

		var subs = 0;
		var string = "郭峰： ██你好███有时觉得你很聪明██但是██大多时候觉得你很傻██真的██我相信你以后会越来越傻的██希望你在2017年██忽然灵光突现██你可能会变聪明██████████另外██提醒你████████ 记得出门带脑子";
		$.intent = function (str) {
			str = "　　" + str;
			//var reg=new RegExp("/█{1,2}/","i"); //创建正则RegExp对象
			str = str.replace(eval("/█/gi"), "█");

			return str;
		}
		string = $.intent(string);

		var echo = setInterval("$.echo()", 300);



		$.guang = function () {
			if (guangSub < guangs.length - 1) {
				guangSub++;
			} else {
				guangSub = 0;
			}
			guangBiao = guangs[guangSub];
			$("#guang").html(guangBiao);

		}

		$.echo = function () {
			if (subs < string.length) {
				$("#txt").html($("#txt").html() + $.repl(string.substr(subs, 1)));
				if ($("#guang").offset().top > document.body.scrollHeight / 2) {
					window.scrollTo(0, $("#guang").offset().top);
				}
				$(".des").css("bottom", "0px");
				subs++;
			}
		}
		$.repl = function (str) {
			str = str.replace("\r\n", "<br/>");
			str = str.replace("\n", "<br/>");
			str = str.replace("█", "<br/>");
			return str;
		}
	});
