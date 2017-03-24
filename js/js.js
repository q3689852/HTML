window.onload=function()
		{
			var oDiv = document.getElementsByClassName("body")[0];
//			var oIpt = oDiv.getElementsByTagName("input");
			var oIpt = oDiv.getElementsByClassName("mode");
			var r_div = document.getElementById("right_body");
			var aDiv = r_div.getElementsByClassName("mode_father");
			
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
			
		}