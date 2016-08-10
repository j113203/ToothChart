		(function(j1Lib_ToothChart){
			/*j1Lib_ToothChart
				for IVE IA
			*/
			var j1Lib_pseudo_ = function(pseudo,key,value){				
				document.styleSheets[0].insertRule(pseudo+"{"+key+":"+value+"}",0);
			};
			
			var j1Lib_indexOf = function(e){
				var a = Array.prototype.slice.call(e.parentNode.getElementsByTagName(e.nodeName));
				a = a.filter(function(v, i){
					return v.parentNode === e.parentNode; 
				});
				return a.indexOf(e)+1;
			};
			
			var j1Lib_path = function(e){		
				var path = [];
				do {
					path.unshift(e.nodeName+":nth-of-type("+j1Lib_indexOf(e)+")");	
				} while ((e.nodeName.toUpperCase() != 'J1LIB_TOOTHCHART') && (e = e.parentNode));
				return path.join(">");			
			};
			
			var j1Lib_pseudo = function(e,orient,text,size){
					
				if (["left","top"].indexOf(orient)+1){
					var o="before";
				}else{
					var o="after";
				}			
				var path = j1Lib_path(e)+"::"+o;
				j1Lib_pseudo_(path,"content","'"+text+"'")
				j1Lib_pseudo_(path,"font-size",size+"em");
				

				j1Lib_pseudo_(path,orient,"-1.2em");
				j1Lib_pseudo_(path,"text-align","center");			
				j1Lib_pseudo_(path,"position","absolute");
				
				if (["left","right"].indexOf(orient)+1){
					j1Lib_pseudo_(path,"top","50%");
					j1Lib_pseudo_(path,"transform","translateY(-50%)");		
					j1Lib_pseudo_(path,"width","1em");
					j1Lib_pseudo_(path,"word-wrap","break-word");
					j1Lib_pseudo_(path,"white-space","pre-wrap");
					j1Lib_pseudo_(path,"overflow","hidden");
				}else{
					j1Lib_pseudo_(path,"left","50%");
					j1Lib_pseudo_(path,"transform","translateX(-50%)");
					j1Lib_pseudo_(path,"font-family","'Droid Sans Mono', monospace");
				}

			};
			
			var j1Lib_ToothChart_render = function(parent,element,width,height,border,left,right,size,center){
				var e = document.createElement(element);
				parent.appendChild(e);
				e.style.width=width;
				e.style.height=height;
				e.style.position="relative";			
				if (border){
					e.style.border="1px solid #000";	
				}
				size = size || "1.5";
				if (left){
					j1Lib_pseudo(e,"left",left,size);				
				}
				if (right){
					j1Lib_pseudo(e,"right",right,size);				
				}
				if (center){
					e.style.left="50%";
					e.style.transform="translateX(-50%)";
				}
				return e;
			};
			
			var j1Lib_custom_event = function(event,parent,item,index){
				item.addEventListener(event, function(ev){
					parent.dispatchEvent(new CustomEvent("on"+event, {
						detail: {
							event : ev,
							item : item,
							index : index
						}							
					}));
				});
			};
			
			var canvas = document.createElement("canvas");
			canvas.width = "60";
			canvas.height = "60";
			var ctx = canvas.getContext("2d");
			ctx.lineWidth = "1";
			ctx.strokeStyle = "black";
			
			var j1Lib_ToothChart_render_tooth_cache = {};
			var j1Lib_ToothChart_render_tooth = function(left,top,right,bottom,middle){
			
				if(j1Lib_ToothChart_render_tooth_cache[Array.prototype.slice.call(arguments)]){
					return j1Lib_ToothChart_render_tooth_cache[Array.prototype.slice.call(arguments)];
				}else{
					ctx.clearRect(0,0,60,60);
					
					if (arguments.length==4){
					
						ctx.beginPath();
						ctx.moveTo(1,1);
						ctx.lineTo(1,59);
						ctx.lineTo(15,30);
						ctx.lineTo(1,1);
						ctx.fillStyle=left;
						ctx.fill();
						ctx.stroke();
						ctx.closePath();
						
						ctx.beginPath();
						ctx.moveTo(1,1);
						ctx.lineTo(59,1);
						ctx.lineTo(45,30);
						ctx.lineTo(15,30);
						ctx.lineTo(1,1);
						ctx.fillStyle=top;
						ctx.fill();	
						ctx.stroke();
						ctx.closePath();
					
						ctx.beginPath();
						ctx.moveTo(59,1);
						ctx.lineTo(59,59);
						ctx.lineTo(45,30);
						ctx.lineTo(59,1);
						ctx.fillStyle=right;
						ctx.fill();	
						ctx.stroke();
						ctx.closePath();
						
						ctx.beginPath();
						ctx.moveTo(59,59);
						ctx.lineTo(1,59);
						ctx.lineTo(15,30);
						ctx.lineTo(45,30);
						ctx.lineTo(59,59);
						ctx.fillStyle=bottom;
						ctx.fill();	
						ctx.stroke();
						ctx.closePath();
					
					}else{
					
						ctx.beginPath();
						ctx.moveTo(1,1);
						ctx.lineTo(10,10);
						ctx.lineTo(10,50);
						ctx.lineTo(1,59);
						ctx.lineTo(1,1);
						ctx.fillStyle=left;
						ctx.fill();	
						ctx.stroke();
						ctx.closePath();
						
						ctx.beginPath();
						ctx.moveTo(1,1);
						ctx.lineTo(59,1);
						ctx.lineTo(50,10);
						ctx.lineTo(10,10);
						ctx.lineTo(1,1);
						ctx.fillStyle=top;
						ctx.fill();	
						ctx.stroke();
						ctx.closePath();
					
						ctx.beginPath();
						ctx.moveTo(59,1);
						ctx.lineTo(59,59);
						ctx.lineTo(50,50);
						ctx.lineTo(50,10);
						ctx.lineTo(59,1);
						ctx.fillStyle=right;
						ctx.fill();	
						ctx.stroke();
						ctx.closePath();
					
						ctx.beginPath();
						ctx.moveTo(1,59);
						ctx.lineTo(59,59);
						ctx.lineTo(50,50);
						ctx.lineTo(10,50);
						ctx.lineTo(1,59);
						ctx.fillStyle=bottom;
						ctx.fill();	
						ctx.stroke();
						ctx.closePath();
						
						ctx.beginPath();
						ctx.moveTo(10,10);
						ctx.lineTo(50,10);
						ctx.lineTo(50,50);
						ctx.lineTo(10,50);
						ctx.lineTo(10,10);
						ctx.fillStyle=middle;
						ctx.fill();	
						ctx.stroke();
						ctx.closePath();
					}
					
					var src = canvas.toDataURL();
					j1Lib_ToothChart_render_tooth_cache[arguments] = src;
					return src;
				}
						
			};
			
			var j1Lib_ToothChart_render_teeth = function(e,number,orient,event,etc){
				
				var e_ = j1Lib_ToothChart_render(e,"div","100%",etc.size+"px");
				var o = ["top","bottom"];
				
				if (o.indexOf(orient)+1){				
					e_.style.position="absolute";
					e_.style[orient]="0px";
				}else{
					e_.style.top="50%";
					e_.style.transform="translateY(-50%)";
				}
				
				for(var i=number;i;i--){
					
					var teeth = j1Lib_ToothChart_render(e_,"div",100/number+"%","100%");
					teeth.style.display="inline-block";
					var i_ = number/2+1-i;
					if (i>number/2){
						i_=i-number/2;
					}
					
					if (o.indexOf(orient)+1){
						j1Lib_pseudo(teeth,o[(3+o.indexOf(orient))%2],i_,"0.9");
					}
					
					var teeth_ = j1Lib_ToothChart_render(teeth,"img","100%","100%");
					
					var teeth_array = ["#fff","#fff","#fff","#fff"];
					if (i_>3){
						teeth_array.push("#fff");
					}
					
					teeth_.render = function(arg){
						etc.json[this.index] = arg;
						this.src = j1Lib_ToothChart_render_tooth.apply(this, arg);
					};
					
					var index = event.getElementsByTagName("IMG").length;
					
					teeth_.index = index;
					
					teeth_.render(teeth_array);
					
					j1Lib_custom_event("mouseover",event,teeth_,index);	
					
					j1Lib_custom_event("mouseout",event,teeth_,index);
					
					j1Lib_custom_event("click",event,teeth_,index);			
					
				}
			};
			
			var j1Lib_ToothChart_DomElement = document.getElementsByTagName("j1Lib_ToothChart");
			for (var i=0;i-j1Lib_ToothChart_DomElement.length;i++){
				(function(e){
					
					if (e.hasAttribute("width")){
						var w = e.getAttribute("width");
						if (w == parseInt(w)){
							w += "px";							
						}
						e.style.width = w;
					}
					
					if (e.hasAttribute("height")){
						var h = e.getAttribute("height");
						if (h == parseInt(h)){
							h += "px";							
						}
						e.style.height = h;
					}					
				
					var etc = {
						w : e.offsetWidth,
						h : e.offsetHeight,
						size : e.offsetWidth/16,
						json : {}
					};
					
					var RL = j1Lib_ToothChart_render(e,"div","100%","100%",false,"R","L","2.5");
					RL.style.whiteSpace="nowrap";
					
					var BP = j1Lib_ToothChart_render(RL,"div","100%","50%",true);				
					
					var LB = j1Lib_ToothChart_render(RL,"div","100%","50%",true);
						
					var B1P = j1Lib_ToothChart_render(BP,"div","100%","50%",false,"B1P","B2P");
					
					j1Lib_ToothChart_render_teeth(B1P,16,"top",e,etc);			
					
					var B5L = j1Lib_ToothChart_render(BP,"div","62.5%","50%",false,"B5L","B5L","1.5",true);
					
					j1Lib_ToothChart_render_teeth(B5L,10,"middle",e,etc);
					
					var LBB = j1Lib_ToothChart_render(LB,"div","62.5%","50%",false,"LBB","LBB","1.5",true);
					
					j1Lib_ToothChart_render_teeth(LBB,10,"middle",e,etc);
					
					var L4B = j1Lib_ToothChart_render(LB,"div","100%","50%",false,"L4B","L3B");	

					j1Lib_ToothChart_render_teeth(L4B,16,"bottom",e,etc);
					
					window.addEventListener("resize",function(event){
						
						etc.size = e.offsetWidth/16;
						B1P.children[0].style.height = etc.size+"px";
						B5L.children[0].style.height = etc.size+"px";
						LBB.children[0].style.height = etc.size+"px";
						L4B.children[0].style.height = etc.size+"px";
						
					});
					
					Object.defineProperty(e, "data", {
						get: function(){
							return etc.json;
						},
						set: function(url){
							j1Lib_ajax(url, function(data) {
								data = JSON.parse(data.response);
								for(index in data){
									e.getElementsByTagName("IMG")[index-1].render(data[index]);
								}
							}, function(){
								//onerror
							}).send();
						}
					});
					
					if (e.hasAttribute("data")){						
						e.data=e.getAttribute("data");
					}
					
					
				})(j1Lib_ToothChart_DomElement[i]);
			}
		})();