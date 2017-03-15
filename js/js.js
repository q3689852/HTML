window.onload=function()
		{
			var oDiv = document.getElementsByClassName("body")[0];
			var oIpt = oDiv.getElementsByTagName("input");
			var r_div = document.getElementById("right_body");
			var aDiv = r_div.getElementsByTagName("div");
			
			r_div.style="display:block";
			
			for(var i =0 ;i<oIpt.length;i++)
			{
				oIpt[i].index=i;
				oIpt[i].onclick=function()
				{
					for(var i = 0 ;i<oIpt.length;i++)
					{	
						oIpt[i].className="button";
						aDiv[i].style.display="none";
					}		
					this.className="button";
					aDiv[this.index].style.display="block";
				}
			}
		}