<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>xxx课堂</title>
<link rel="stylesheet" href="ico/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="css/a.css"> 
<script type="text/javascript" src="js/analytics.js"></script>
<script type="text/javascript" src="css/a"></script>
<script src="js/hm.js"></script>
<script type="text/javascript" src="js/layer.js"> </script>
<link rel="stylesheet" href="css/layer.css" id="layui_layer_skinlayercss">
<link href="css/login.css" rel="stylesheet">
<link href="css/registerOrPond.css" rel="stylesheet">
<script src="js/base64HalfMd5.js"></script>
<script src="js/loginDiv.js"></script>
<link href="css/register.css" rel="stylesheet">
<link href="css/SystemAnnouncement.css" rel="stylesheet">
<script src="js/index.js"></script> 
<!-- 左边导航条 主分类字体样式 -->
<style type="text/css">
	.wrap-hover li .whleft a{color:#333}
</style>
</head>
<body>
	<div class="w1195 header">
    	<h1 class="logo fl"><a href="#" target="_blank">
    		<img src="img/logo1.png" alt="logo"></a>
   		</h1>
<!-- 搜索关键字 --> 
<div class="search fl">
      	<div class="sea-top">
          	<div class="seainput">
              	<i class="icon searchimg"></i>
			    <input placeholder="请输入课程标题的关键词" maxlength="15" class="inputtext" id="searchKey" type="text">
            </div>
            <a href="javascript:void(0);" onclick="searchCourse();" class="seabut">搜索课程</a>
         </div>   
         <div class="seaword">
		           </div>     
</div>	    <!--登录 - 开始-->
<div class="login fr">
        	<!--未登录展示效果 - 开始-->
        	<div class="logged" id="login">
                <div class="loginbut fr">
                	<a href="javascript:void(0);" onclick="tologin()" style="margin-left:14px;margin-right:22px;">登录</a>|
                	<a href="javascript:;" onclick="toRegister()">注册</a>
                </div>
        	</div>
            <!--已登录展示效果 - 开始-->
            <div class="thelogin none" id="thelogin">
                <div class="personal fr">
                	<a href="#" target="_blank" class="perimg">
                	<img src="img/default.png" id="imgId1"></a>
                	<div class="peohover">
                    	<i class="icon pericon"></i>
                		 <ul class="perul">
                             <li><a href="#" target="_blank">课表</a></li>
                             <li><a href="#" target="_blank">我的订单</a></li>
                             <li><a href="#" target="_blank">个人信息</a></li>
                             <li><a href="javascript:void(0);" class="pertopbor" id="logout">退出</a></li>
                       </ul>
                	</div>
                </div>
                <div class="loginbut fr">
                    <div class="fr teacher none" id="isTeacher">
                        <a href="#" target="_bank">教务管理</a>
                    </div>
                </div>
        	</div>
</div>
<div class="clear"></div>
</div>
<!--banner 开始-->
<div class="banner">
    	<div class="bg-banner">
    		<div class="w1195 wrapall">
      	      	<!--主导航 - 开始-->
        		<div class="navigation">
            	<ul>	
            		<li><a href="#" target="_blank">首页</a></li>
                    <li><a href="#" target="_blank">全部课程</a></li>
            	</ul>
         	</div>
            	<!--导航 - 开始-->
                <div class="nav">
                    <ul class="navul">
                		<li class="navtitle">
                        	<i class="icon navicon"></i><span>全部课程分类</span>
                     </li>
                     
                     <li>
	                        <div class="wrap-nav">
	                        		<div class="wrap-top">
	                                	<i class="icon wrap-it"></i>
	                                	<a href="#" target="_blank">IT互联网</a>
	                              </div>
	                            	<div class="wrap-txt">
	                                		<a href="#" target="_blank">编程语言</a>
	                                		<a href="#" target="_blank">电商运营</a>
	                                		<a href="#" target="_blank">SEO</a>
	                              </div>
	                        </div>
	                        
	                        <div class="wrap-hover">
	                        	<ol>
									  <li>
									     <span class="whleft">
											 <a href="#" target="_blank">编程语言</a>
								     	  </span>
									     <div class="whright">
									        	|<a href="#" target="_blank">C</a>
									        	|<a href="#" target="_blank">PHP</a>
									        	|<a href="#" target="_blank">Python</a>
									        	|<a href="#" target="_blank">R</a>
									        	|<a href="#" target="_blank">C++</a>
									        	|<a href="#" target="_blank">Java</a>
									     </div>
									   </li>
					
									  <li>
									     <span class="whleft">
											 <a href="#" target="_blank">前端开发</a>
								     	 </span>
									     <div class="whright">
									        	|<a href="#" target="_blank">JavaScript</a>
									        	|<a href="#" target="_blank">HTML5</a>
									        	|<a href="#" target="_blank">AngularJS</a>
									        	|<a href="#" target="_blank">DIV</a>
									     </div>
									   </li>
									   
									  <li>
									     <span class="whleft">
											 <a href="#" target="_blank">移动开发</a>
								     	 </span>
									     <div class="whright">
									        	|<a href="#" target="_blank">android</a>
									        	|<a href="#" target="_blank">iOS</a>
									     </div>
									   </li>
				
									  <li>
									     <span class="whleft">
											 <a href="#" target="_blank">后端开发</a>
								     	 </span>
									     <div class="whright">
									        	|<a href="#" target="_blank">J2EE</a>
									        	|<a href="#" target="_blank">.Net</a>
									        	|<a href="#" target="_blank">区块链</a>
									     </div>
									   </li>
									  
									</ol>
	                    		</div> 
	                        </li>
	                        
	                  <c:forEach items="${type_list }" var="t">
	                        <li>
	                        	<div class="wrap-nav">
	                        		<div class="wrap-top">
	                                	<i class="icon wrap-language"></i>
	                                	<a href="#" target="_blank">${t.onetp_name }</a>
	                                </div>
	                            	<div class="wrap-txt">
	                            		<c:forEach items="${t.twotplist }" var="tt">
	                                		<a href="#" target="_blank">${tt.twotp_name }</a>
	                                	</c:forEach>
	                                </div>
	                            </div>
	                            <div class="wrap-hover">
	                        <ol>
	                        
									<c:forEach items="${t.twotplist }" var="tt">
									  <li>
										     <span class="whleft">
												 <a href="#" target="_blank">${tt.twotp_name }</a>
									     	  </span>
										     <div class="whright">
									     	  <c:forEach items="${tt.threetplist }" var="ttl">
										        	|<a href="#" target="_blank">${ttl.threetp_name }</a>
									     	  </c:forEach>
										     </div>
									   </li>
									</c:forEach>
									</ol>
									
	                    		</div> 
	                     </li>
	                     
	                 </c:forEach>
   
                    </ul>       
                </div>
                <!--导航 - 结束-->
                
                <!--登录区域 - 开始-->
                <div class="wraplayout" id="loginWindow">
                    <!--已登录 - 开始-->
                    <div id="loginShow" class="login-succ plr12 none">
                    	<div class="login-img">
                        	<div class="fr login-name">
                            	<a href="#" target="_blank" id="nick"></a>
                            </div>
                        	<a href="#" target="_blank"><img src="img/default.png" alt="个人图像" id="imgId"></a>
                            <div class="clear"></div>
                         </div>
                    	<div class="login-perinfor">
                            <a href="#" class="percourse" target="_blank">
                                <span class="cournum" id="userCourse"></span>
                                <span class="courtitle">课程</span>
                            </a>
                            <a href="#" class="percourse mlr9" target="_blank">
                                <span class="cournum" id="userOrder"></span>
                                <span class="odertitle">订单</span>
                            </a>
                          
                        </div>
                        <!--上下滚动播放课程 - 开始-->
                        <div class="cour-roilly">
                        	<!--没有课程时展示效果 - 开始-->
                        	<div class=" defauly-none none" id="userCourse_flase">	
                        		<div class="riolly">
                                    <div class="fr riotxt">
                                        <div class="riotitle">
                                            <a>您的课表今日暂无直播课程</a>
                                        </div>
                                    </div>
                                    <a href="#" target="_blank"><img src="imh/defaully.png" alt="全部课程"></a>
                                </div>
                            </div> 
                            <!-- 有课程时展示效果 - 开始-->
                        	<div class="roilly-all none" id="userCourse_true" style="margin-top: 0px;">
                        				
                            </div>
                        </div>
                    </div>
                    <!--未登录 - 开始-->
                    <div id="loginNone" class="login-no plr12">
                    	<div class="notlogged-in">嗨，欢迎来到xx课堂！</div>
                    	<div class="login-img limgcent"><img src="img/default.png" alt="个人图像"></div>
                    	<div class="login-but">
                        	<a href="javascript:void(0);" class="loginimmedi" onclick="tologin()">马上登录</a>  
                        </div>
                    </div>
                </div>
      	    </div>
      	    
            <!--滚动图片 轮播 - 开始-->
            <div class="banner-img">
            	<div class="banner-ul" style="width: 500%; left: -200%;">
	                   
               </div>
            </div>
            <!--滚动图片 轮播 - 结束-->
            
        </div>
</div>	
<!--专题展示区域 - 开始--> 
<div class="project w1195">
</div>	 
<!--楼层 - 开始-->	
	    <!-- 一栏 -->
		<div class="recommend">
	    	<div class="cortitle w1195">
	        	<div class="public-ti">类型xxx</div>
	      </div>
	    	<div class="courseall w1241">
	    		<div class="courimg">
		            <div class="course-item h240 fl">
		            		<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                   <a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                   </a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		                <a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
							  <a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		                <a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		                <a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	        </div>
	        <div class="clear"></div>
	        </div>
	   </div>
	    
	    <!-- 二栏 -->
		<div class="recommend">
	    	<div class="cortitle w1195">
	        	<div class="public-ti">类型xxx</div>
	      </div>
	    	<div class="courseall w1241">
		            <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	                <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	                <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	                <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	                <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	        </div>
	        <div class="clear"></div>
	    </div>
<div class="clear"></div>

	    <!-- 三栏 -->
		<div class="recommend">
	    	<div class="cortitle w1195">
	        	<div class="public-ti">类型xxx</div>
	      </div>
	    	<div class="courseall w1241">
		            <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
		            <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	                <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	                <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	                <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	               
	                <div class="course-item h240 fl">
		            	<a href="#" target="_blank" class="cimg">
	                        <img src="img/20180428105130722636496.jpg">
	                    </a>
		                <div class="itemcont">
		                    	<a href="#" title="测试标题" target="_blank" class="ictxt">
		                    			测试标题
		                    	</a>
		                 </div>
	                    <span class="green">免费</span>
								<a class="item-txt fr"><span style="color: #888;">播放次数：</span>999</a>
		                <div class="clear"></div>
	               </div>
	        </div>
	        <div class="clear"></div>
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
            	<a href="#" target="_blank" class=" icon-help-hover">
                	<i class="icon-help"></i>
                    <span class="commn-span">帮助中心</span>
                </a>
            </div>
            <div class="downapp back-top">
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
        	您好，我是xx课堂的xx经理，欢迎您向我们反馈问题、提出宝贵建议
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
<!--问题反馈 弹窗 结束-->     
<div class="SystemAnnouncement none" id="message">
	<div class="btn-x"><img src="img/X-w.png"></div>
	<h1 id="messageType"></h1>
	<h2 id="messageTitle"></h2>
	<h3 id="messageCreateTime"></h3>
	<h4 id="messageContent"></h4>
	<input id="messageId" type="hidden">
	<button id="checkDetail" onclick="onGetMessage()">查看详情</button>
</div>
<script type="text/javascript">
	$(".btn-x").click(function(){
	    $(".SystemAnnouncement").hide();
	});
</script>

</body>
</html>