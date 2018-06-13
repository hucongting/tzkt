<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>视频详细页</title>
<link rel="stylesheet" href="ico/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="css/a.css"> 
<script src="js/analytics.js"></script>
<script type="text/javascript" src="js/a.js"></script>
<script type="text/javascript" src="js/track.js"></script>
<script type="text/javascript" src="js/layer.js"> </script>
<link id="layui_layer_skinlayercss" href="css/layer.css" rel="stylesheet">
<script src="js/hm.js"></script>
<link href="css/mob-share.css" type="text/css" rel="stylesheet">
<script src="js/mob-share.js"></script>
<script src="js/course.js"></script>
<link href="css/login.css" rel="stylesheet">
<link href="css/registerOrPond.css" rel="stylesheet">
<link href="css/register.css" rel="stylesheet">
<link href="css/SystemAnnouncement.css" rel="stylesheet">
<script src="js/base64HalfMd5.js"></script>
<script src="js/loginDiv.js"></script>
<style type="text/css">
    .acctype {
        background: #fff;
        border: none;
        width: 315px !important;
    }
    
    .w249 {
        width: 315px;
        margin-left: 30px;
    }
    
    .acode {
        border: none;
        border-left: 1px solid #D9DAE3;
        height: 20px !important;
        line-height: 20px !important;
        background: #fff;
        margin-top: 7px;
    }
    
    .height486 {
        height: auto;
    }
    
    .atin {
        margin-left: 20px !important;
    }
    
    .code {
        left: 145px;
    }
    
    .refesh-img-code {
        position: absolute;
        left: 285px;
        top: 13px;
        width: 24px;
        height: 24px;
    }
</style>
<script type="text/javascript">
	$(".btn-x").click(function(){
	    $(".SystemAnnouncement").hide();
	});
</script>

</head>
<body>
	<!--header 开始-->
<div class="header-bg">
    <div class="w1195">
       <h1 class="courlogo fl">
       	<a href="https://www.shiguangkey.com/" target="_blank"><img src="" alt="logo"></a>
       </h1>
       <div class="fl cour-nav">
       	<ul>
       		<li><a href="https://www.shiguangkey.com/" target="_blank">首页</a></li>
            <li><a href="https://www.shiguangkey.com/course/list" target="_blank">全部课程</a></li>
        </ul>
       </div>
       <div class="search fl w290">
           <div class="seainput w252">
           	 <i class="icon searchimg fr cour-search" onclick="searchCourse();"></i>
              <input placeholder="搜索课程" maxlength="15" id="searchKey" class="inputtext w203" type="text">
           </div>
       </div>
       <!--登录 - 开始-->
       <div class="login fr courlogin">
           <!--未登录展示效果 - 开始-->
           <div class="logged" id="login">
               <div class="clobut fr">
                   <a href="javascript:void(0);" onclick="tologin()" style="margin-right:25px;">登录</a>|
                   <a href="javascript:;" onclick="toRegister()">注册</a>
               </div>
           </div>
           
           
           <!--已登录展示效果 - 开始-->
           <div class="thelogin none" id="thelogin">
       	       <div class="personal fr">
                   <a href="https://www.shiguangkey.com/i/" target="_blank" class="perimg"><img id="imgId" src="img/default.png"></a>
                   <div class="peohover">
                       <i class="icon pericon"></i>
                       <ul class="perul">
                           <li><a href="https://www.shiguangkey.com/i/course" target="_blank">课表</a></li>
                           <li><a href="https://www.shiguangkey.com/i/order" target="_blank">我的订单</a></li>
                           <li><a href="https://www.shiguangkey.com/i/profile" target="_blank">个人信息</a></li>
                           <li><a href="javascript:void(0);" class="pertopbor" id="logout">退出</a></li>
                       </ul>
                   </div>
               </div>
               <div class="loginbut fr">
                   <div class="fr teacher none" id="isTeacher">
                       <a href="https://www.shiguangkey.com/teacherAdmin/main.html#liveClass" style="color:#fff" target="_bank">教务管理</a>
                   </div>
               </div>
           </div>
           </div>
       </div>
    <div class="clear"></div>
</div>

<!--conter - 开始-->
    <div class="w1195"> 
   		<!--面包屑 - 开始-->
    	<div class="breadcrumbs">
    		<a href="https://www.shiguangkey.com/">首页</a>
            <i>&gt;</i>
            <a href="https://www.shiguangkey.com/course/list?cateId=258">IT互联网</a>
            <i>&gt;</i>
            <a href="https://www.shiguangkey.com/course/list?cateId=268">前端开发</a>
            <i>&gt;</i>
            <a href="https://www.shiguangkey.com/course/list?cateId=664">DIV</a>
            <i>&gt;</i>
            <span>WEB前端项目实战</span>
    	</div>
    	<input id="courseId" value="1576" type="hidden">
		<input id="courseType" value="5311" type="hidden">
    	<div class="cour-infor">
    		<div class="c-banner fl">
            	<img src="img/20180524190435360521481.png">
            </div>
           <div class="fr cour-right">
            	<div class="crtitle">
                	<a>WEB前端项目实战</a>
                </div>   
                	<!--免费-->
	                <div class="cont">
	                    <!--公开课 - 价格 购买人数 时间 - 开始-->
	                    <div class="cour-price">
	                    	<!--免费-->
	                    	<div class="free">免费</div>
	                        <div class="cour-time">
	                            <span>报名人数：<a id="public_applyNum">34952</a></span><br>
									<span>开课时间：<a id="public_applyNum">
										2018年06月05日-2018年06月30日
									</a></span>
	                        	<!---->
	                        </div>
	                        <!--公开课-已经报名 - 开始-->
		                    <span id="applyImg" class="cour-buy none"><img src="img/sign.png"></span>
	                    </div>
	                    <!--收藏 分享 - 开始-->
	                    <div class="collec-share">

	                        <!--分享-->
	                     <div class="share fl">
								<a href="javascript:void(0);"><i class="icon share-icon"></i>分享</a>
								<div class="share-hover">
							    	<i class="icon ssan"></i>
							    	<div class="share-txt">
							        <div class="shareDom">
							               <ul class="-mob-share-open">
							                    <li><a href="javascript:void(0)" title="分享到QQ" class="-mob-share-qq share-qq -mob-share-initialized" id="share_qq"><img src="img/share-qq.png"></a></li>
							                    <li><a href="javascript:void(0)" title="分享到微信" class="-mob-share-weixin share-wx -mob-share-initialized"><img src="img/share-wx.png"></a></li>
							                    <li><a href="javascript:void(0)" title="分享到空间" class="-mob-share-qzone share-qzone -mob-share-initialized"><img src="img/share-qzone.png"></a></li>
							                    <li><a href="javascript:void(0)" title="分享到微博" class="-mob-share-weibo share-wb -mob-share-initialized"><img src="img/share-wb.png"></a></li>
							               </ul>
							        </div> 
							        </div>
							    </div>
							</div> 
	                        <div class="clear"></div>
	                    </div>
	                    <!--按钮 - 开始-->   
	                    <div class="cour-but">
	                        <div class="notbuy courbut-all">
	                            <!--公开课按钮-  开始-->
	                            <div class="fl">
									<a href="javascript:void(0);" onclick="onLive('1576','5311')" id="gotoStudy" class="notb-immedi notbg-blue none">进入教室</a>
									<a href="javascript:void(0);" onclick="onSignupCourse('0','1576')" id="applyButton" class="notb-immedi notbg-blue">预约学习</a>
									<input value="6102" id="live-status" type="hidden">
	                            </div>

	                        </div>
	                    </div>
	                 
	                </div>
           </div>
    	   <div class="clear"></div>
    	</div>

        <!--课程介绍 课程目录 - 开始-->
        <div class="main w1195">
        	<!--左边内容 - 开始-->
<div class="fl mleft">
	<div class="mleft-title">
    	<a href="javascript:void(0);" class="borbot">课程介绍</a>
    	<a class="" href="javascript:void(0);">课程目录</a>
    </div>
    <div class="cournav">
        <!--课程介绍-->
		<div class="mleft-txt">
<p></p><p></p> 
<p>&nbsp;</p> 
<p>&nbsp;</p> 
<img src="img/20180329093536370690589.jpg" alt="undefined" style="float:none;height: auto;width: auto">
<p></p>
        </div>
        <!--课程目录-->
        <div class="mleft-txt none">
            <ul class="class-chapter-list">
        	
        		<li>
                  	<p class="cour-catalog">响应式网站设计</p>
                  		<span class="ended fr">直播已结束</span>
                </li>

        		<li>
                  	<p class="cour-catalog">美食汇经典菜品</p>
                		<span class="ended fr">开课时间：
                		2018-06-30
                		 14:00:00
							</span>

                </li>
        		<li>
                  	<p class="cour-catalog">天猫购物车抛物线收纳效果</p>
                		<span class="ended fr">开课时间：
                		2018-06-30
                		 20:00:00
							</span>

                </li>
            </ul>
        </div>
    </div>
</div>            <!--右边内容 - 开始-->
<div class="fr mright">
	    <div class="start-school bgfff mtop20">
    	<div class="mleft-title mrti">xx老师</div>
    	<div class="school-txt">
			<div class="teacher-intro">
				<span class="teachimg"><img src="img/20180516190344413295510.png"></span>
				<div class="fr teach-text">
					<p class="teach-title">万章</p>
					<p class="teachtxt">
						资深web高级工程师。9年WEB开发经验，精通原生JavaScrip、CSS3、HTML... 
					</p>
				</div>
				<div class="clear"></div>
			</div>
        </div>    
    </div>
</div>        </div>
	</div>
	<div class="clear"></div>

    <!--右边操作 - 开始-->
<div class="rightside">
    	<div class="rside">
      	
    		<div class="downapp">
            	<a href="javascript:void(0);" class="sidecomm">
                	<i class="icon feedback"></i>
                    <span class="commn-span">问题反馈</span>
                </a>
            </div>
            <div class="downapp">
            	<a href="https://www.shiguangkey.com/help/student" target="_blank" class=" icon-help-hover">
                	<i class="icon-help"></i>
                    <span class="commn-span">帮助中心</span>
                </a>
            </div>
            <div style="display: none;" class="downapp back-top">
            	<a href="javascript:void(0);" class="downclick">
                	<i class="icon backtop"></i>
                    <span class="commn-span">回到顶部</span>
                </a>
            </div>
    	</div>
</div>


<!--问题反馈 弹窗-->    
    <div class="problem none pshow">
    	<div class="pro-title">
        	<a href="javascript:void(0);" class="prolose closepup fr"><img src="img/prolose.png"></a>
        	您好，我是xx课堂的产品经理，欢迎您向我们反馈问题、提出宝贵建议
        </div>
        <div class="pro-txt">
        	<div class="pro-tiinput">
            	<input id="mailTitle" class="title-input fr" placeholder="请慨括您要反馈的问题" type="text">
            	<span class="w70">标题：</span>
                <div class="clear"></div>
            </div>
            <div class="pro-tiinput">
            	<textarea id="mailContent" class="title-input height187 fr" name="" cols="" rows="" placeholder="请慨括您要反馈的问题"></textarea>
            	<span class="w70">问题描述：</span>
                <div class="clear"></div>
            </div>
            <div class="pro-but">
            	<a href="javascript:void(0);" class="pro-deter" onclick="onMail()" id="onMail">确定</a>
            	<a href="javascript:void(0);" class="pro-cancel closepup">取消</a>
            </div>
    	</div>
    </div>

    <div class="mask none closepup"></div>

</body>
</html>