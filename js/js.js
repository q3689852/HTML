window.onload=function()
		{
			var oDiv = document.getElementsByClassName("body")[0];
//			var oIpt = oDiv.getElementsByTagName("input");
			var oIpt = oDiv.getElementsByClassName("mode");
			var r_div = document.getElementById("right_body");
			var aDiv = r_div.getElementsByClassName("mode_father");
			var oMo_but = r_div.getElementsByClassName("mode_button");
					
			r_div.style="display:block";
			
			for(var i =0 ;i<oIpt.length;i++)
			{
				oIpt[i].index=i;
				oIpt[i].onclick=function()
				{
					for(var i = 0 ;i<oIpt.length;i++)
					{	
						oIpt[i].className="mode";
						aDiv[i].style.display="none";
					}		
					this.className="mode";
					aDiv[this.index].style.display="block";
				}
			}
			
			
			
			oMo_but[0].onclick=function()
			{
				var Bipt = document.getElementById("biaoti");
				var Tipt = document.getElementById("tupian");
				var Tipt = r_div.getElementsByClassName("mode_text");
			}
			oMo_but[1].onclick=function()
			{
				var Tipt = r_div.getElementsByClassName("mode2_text");	
				var okdiv = document.getElementsByClassName("mode_img")[1];
				var a = "&lt;"+"?xml version="+"&quot;"+"1.0"+"&quot;"+" encoding="+"&quot;"+"UTF-8"+"&quot;"+" standalone="+"&quot;"+"yes"+"&quot;"+"?"+"&gt;"+"&lt;"+"msg serviceID="+"&quot;"+"83"+"&quot;"+" templateID="+"&quot;"+"12345"+"&quot;"+" action="+"&quot;"+"plugin"+"&quot;"+" actionData="+"&quot;"
				//ni hao 
				var b = "&quot;"+ " brief="+"&quot;"+"机器人消息"+"&quot;"+" flag="+"&quot;"+"2"+"&quot;"+"&gt;"+"&lt;"+"item layout="+"&quot;"+"2"+"&quot;"+"&gt;"+"&lt;"+"picture cover="+"&quot;"
				//tu pian lianjie 
				var c = "&quot;"+" w="+"&quot;"+"0"+"&quot;"+" h="+"0"+"/"+"&gt;"+"&lt;"+"title"+"&gt;"
				//hell world
				var d = "&lt;"+"/"+"title"+"&gt;"+"&lt;"+"summary"+"&gt;"
				//qing shi yong shou ji denglu 
				var e = "&lt;"+"/"+"summary"+"&gt;"+"&lt;"+"/"+"item"+"&gt;"+"&lt;"+"/"+"msg"+"&gt;"+"&nbsp;"
				document.write(a+Tipt[0].value+b+Tipt[1].value+c+Tipt[2].value+d+Tipt[3].value+e);
							
				
			
				
			}	
		}
		

