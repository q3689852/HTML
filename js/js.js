window.onload = function() {
	
	var oDiv = document.getElementsByClassName("body")[0];
	var oIpt = oDiv.getElementsByClassName("mode");
	var r_div = document.getElementById("right_body");
	var aDiv = r_div.getElementsByClassName("mode_father");
	var oMo_but = r_div.getElementsByClassName("mode_button");

	r_div.style = "display:block";

	for(var i = 0; i < oIpt.length; i++) {
		oIpt[i].index = i;
		oIpt[i].onclick = function() {
			document.getElementById('right_body').style.background = "#DDDDDD";
			for(var i = 0; i < oIpt.length; i++) {
				oIpt[i].className = "mode";
				aDiv[i].style.display = "none";
			}
			this.className = "mode";
			aDiv[this.index].style.display = "block";
		}
	}
	oMo_but[0].onclick = function() {
		
		var Tipt = aDiv[0].getElementsByClassName("mode_text");
		
		var a = "&lt;" + "?xml version=" + "&quot;" + "1.0" + "&quot;" + " encoding=" + "&quot;" + "utf-8" + "&quot;" + "?" + "&gt;" +
			"&lt;" + "msg flag=" + "&quot;" + "0" + "&quot;" + " serviceID=" + "&quot;" + "77" + "&quot;" + " brief=" + "&quot;" + "新消息" + "&quot;" + " templateID=" + "&quot;" + "14" + "&quot;" + "  action=" + "&quot;" + "web" + "&quot;" + "&gt;" +
			"&lt;" + "item layout='3'" + "&gt;" + "&lt" + "button action=" + "&quot;" + "web" + "&quot;" + "   size=" + "&quot;" + "30" + "&quot;" + " color=" + "&quot;" + "【百变颜色9】" + "&quot;" + "&gt;"
		var b = "&lt;" + "/button" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item" + "&gt;" + "&lt;" + "hr" + "&gt;" + "&lt;" + "/hr" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item layout=" + "&quot;" + "0" + "&quot;" + "&gt;" + "&lt;" + "picture cover=" + "&quot;"
		var c = "&quot;" + "/" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item" + "&gt;" + "&lt;" + "hr" + "&gt;" + "&lt;" + "/hr" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item layout=" + "&quot;" + "3" + "&quot;" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + " color=" + "&quot;" + "【百变颜色3】" + "&quot;" + "&gt;"
		var d = "&lt;" + "/button" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色9】" + "&quot;" + "&gt;"
		var e = "&lt;" + "/button" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色6】" + "&quot;" + "&gt;"
		var f = "&lt;" + "/button" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item" + "&gt;" + "&lt;" + "hr" + "&gt;" + "&lt;" + "/hr" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item layout=" + "&quot;" + "3" + "&quot;" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + " color=" + "&quot;" + "【百变颜色9】" + "&quot;" + "&gt;"
		var g = "&lt;" + "/button" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色5】" + "&quot;" + "&gt;"
		var h = "&lt;" + "/button" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色8】" + "&quot;" + "&gt;"
		var i = "&lt;" + "/button" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item" + "&gt;" + "&lt;" + "hr" + "&gt;" + "&lt;" + "/hr" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item layout=" + "&quot;" + "3" + "&quot;" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色5】" + "&quot;" + "&gt;"
		var j = "&lt;" + "/button" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色9】" + "&quot;" + "&gt;"
		var k = "&lt;" + "/button" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色8】" + "&quot;" + "&gt;"
		var l = "&lt;" + "/button" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item" + "&gt;" + "&lt;" + "hr" + "&gt;" + "&lt;" + "/hr" + "&gt;" + "&lt;" + "/item" + "&gt;" +
			"&lt;" + "item layout=" + "&quot;" + "3" + "&quot;" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色9】" + "&quot;" + "&gt;"
		var m = "&lt;" + "/button" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色8】" + "&quot;" + "&gt;"
		var n = "&lt;" + "/button" + "&gt;" + "&lt;" + "button action=" + "&quot" + "web" + "&quot" + "  size=" + "&quot" + "30" + "&quot;" + "  color=" + "&quot;" + "【百变颜色7】" + "&quot;" + "&gt;"
		var o = "&lt;" + "/button" + "&gt;" + "&lt;" + "/item" + "&gt;" + "&lt;" + "/msg" + "&gt;" + "&nbsp;"
		document.write(a +Tipt[0].value+ b +Tipt[1].value+ c+Tipt[2].value + d+Tipt[3].value + e+Tipt[4].value + f+Tipt[5].value + g+Tipt[6].value + h+Tipt[7].value + i +Tipt[8].value+ j +Tipt[9].value+ k +Tipt[10].value+ l +Tipt[11].value+ m+Tipt[12].value + n+Tipt[13].value + o);
	}

	oMo_but[1].onclick = function() {
		var Tipt = r_div.getElementsByClassName("mode2_text");
		var okdiv = document.getElementsByClassName("mode_img")[1];
		var a = "&lt;" + "?xml version=" + "&quot;" + "1.0" + "&quot;" + " encoding=" + "&quot;" + "UTF-8" + "&quot;" + " standalone=" + "&quot;" + "yes" + "&quot;" + "?" + "&gt;" + "&lt;" + "msg serviceID=" + "&quot;" + "83" + "&quot;" + " templateID=" + "&quot;" + "12345" + "&quot;" + " action=" + "&quot;" + "plugin" + "&quot;" + " actionData=" + "&quot;"		
		var b = "&quot;" + " brief=" + "&quot;" + "机器人消息" + "&quot;" + " flag=" + "&quot;" + "2" + "&quot;" + "&gt;" + "&lt;" + "item layout=" + "&quot;" + "2" + "&quot;" + "&gt;" + "&lt;" + "picture cover=" + "&quot;"	
		var c = "&quot;" + " w=" + "&quot;" + "0" + "&quot;" + " h=" + "0" + "/" + "&gt;" + "&lt;" + "title" + "&gt;"	
		var d = "&lt;" + "/" + "title" + "&gt;" + "&lt;" + "summary" + "&gt;"
		var e = "&lt;" + "/" + "summary" + "&gt;" + "&lt;" + "/" + "item" + "&gt;" + "&lt;" + "/" + "msg" + "&gt;" + "&nbsp;"
		document.write(a + Tipt[0].value + b + Tipt[1].value + c + Tipt[2].value + d + Tipt[3].value + e);

	}

	oMo_but[2].onclick = function(){
		var Tipt = r_div.getElementsByClassName("mode3_text");
		var a = "&lt;"+"?xml version="+"&quot;"+"1.0"+"&quot;"+" encoding="+"&quot;"+"UTF-8"+"&quot;"+" standalone="+"&quot;"+"yes"+"&quot;"+"?"+"&gt;"+"&lt;"+"msg serviceID="+"&quot;"+"83"+"&quot;"+" templateID="
		+"&quot;"+"1"+"&quot;"+" flag="+"&quot;"+"9"+"&quot;"+" brief="+"&quot;"+"zhaiu.cn"+"&quot;"+"&gt;"+"&lt;"+"item layout="+"&quot;"+"5"+"&quot;"+"&gt;"+"&lt;"
		+"picture cover="+"&quot;"
		var b = "&quot;"+"/"+"&gt;"+"&lt;"+"/"+"item"+"&gt;"+"&lt;"+"item layout="+"&quot;"+"0"+"&quot;"+"&gt;"+"&lt;"+"summary size="+"&quot;"+"25"+"&quot;"+" color="+"&quot;"+"#9B30FF"+"&quot;"+"&gt;"
		var c = "&lt;"+"/"+"summary"+"&gt;"+"&lt;"+"hr/"+"&gt;"+"&lt;"+"/item"+"&gt;"+"&lt;"+"source name="+"&quot;"+"&quot;"+" icon="+"&quot;"+"&quot;"+" action="+"&quot;"+"&quot;"+" appid="+"&quot;"+"-1"+"&quot;"
		+"/"+"&gt;"+"&lt;"+"/msg"+"&gt;"+"&nbsp;"
		document.write(a + Tipt[0].value + b + Tipt[1].value + c);
	}














}
function helpson1() {window.open("http://www.2345.com/?k43252177");}
function helpson2() {window.open("http://pan.baidu.com/s/1hr4LVTU");}
function helpson3() {window.open("http://suo.im/");}
function helpson4() {window.open("https://jq.qq.com/?_wv=1027&k=42eHat9");}
function helpson5() {window.open("http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=TX57dXR1eH8NPDxjLiIg");}