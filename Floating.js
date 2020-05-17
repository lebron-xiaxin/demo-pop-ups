  //浮窗的定位left，top;dialog的url地址
 var smartt = {
	FloatDialog : function(json){
    //设置浮层位置
    var leftValue=555;
	var topValue=window.screen.height/2-200;
    var systemCode='aaa';
    //传参用参，没传默认
    leftValue=json.left == undefined ? leftValue : json.left;
    topValue=json.top == undefined ? topValue : topValue+json.top;
    systemCode = json.code == undefined ? systemCode : json.code;
    // 引用css样式
    var head=document.getElementsByTagName("head");
    var styleLink=document.createElement("link");
    styleLink.href="./style/floatStyle.css"
    styleLink.rel="stylesheet";
    styleLink.type="text/css";
    head[0].appendChild(styleLink);                                               
    // 创建Html                                  
    //小T图片                            
    var feedBack = document.createElement("div");
    feedBack.id='hrxt-feedBack';
    feedBack.style.marginLeft=leftValue+"px";
    feedBack.style.top=topValue+"px";
	feedBack.style.display="none";
    //弹出层
    var popContainer = document.createElement("div");
    popContainer.id='hrxt-pop-container'
    // 插入Html 跨站点配置
    feedBack.innerHTML +="<img id='clickImg' src='./image/btn.png' alt='咨询' style='border:none'/>";
    popContainer.innerHTML +="<div class='hrxt-dialog-content animated zoomIn'><a id='hrxt-close-pop'></a><iframe src=https://www.bilibili.com/" + " frameb+order='0' scrolling='no' width='100%' height='100%' style='border:none;background-color:#fff'></iframe></div>";

    // 创建div
    document.body.appendChild(feedBack); 
    // 在线提问点击事件
    document.getElementById('clickImg').onclick=function(){
      document.body.appendChild(popContainer);
      document.getElementById('hrxt-close-pop').onclick=function(){
        document.body.removeChild(popContainer);
      }
    }
	setTimeout(function(){ feedBack.style.display="block";}, 350);
  },
  ShowDialog : function(json){
    var systemCode='HRPortal';
    systemCode = json.code == undefined ? systemCode : json.code;
	// 引用css样式
    var head=document.getElementsByTagName("head");
    var styleLink=document.createElement("link");
    styleLink.href='./style/floatStyle.css';//本地
    styleLink.rel="stylesheet";
    styleLink.type="text/css";
    head[0].appendChild(styleLink);  
    //弹出层
    var popContainer = document.createElement("div");
    popContainer.id='hrxt-pop-container'
    // 插入Html 跨站点配置
    popContainer.innerHTML +="<div class='hrxt-dialog-content animated zoomIn'><a id='hrxt-close-pop'></a><iframe src=http://www.baidu.com" +  " frameb+order='0' scrolling='no' width='100%' height='100%' style='border:none;background-color:#fff'></iframe></div>";

    // 在线提问点击事件
	document.body.appendChild(popContainer);
	document.getElementById('hrxt-close-pop').onclick=function(){
		document.body.removeChild(popContainer);
	}
  }
}

