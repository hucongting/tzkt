$(function() {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?7e8b931a9b138d095673181619178304";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  var controlFlag = {};
  controlFlag.phoneLogining = false; //是否正在手机快捷登录中
  controlFlag.accountLogining = false; //是否正在账号密码登录中
  controlFlag.waitSmsSecond = 0; //多少秒才能再次发送短信
  controlFlag.smsNeedImageCodeCount = 3; //需要图片验证码的次数
  controlFlag.smsMaxCount = 5; //最大发短信次数
  controlFlag.needImageCode = false; //是否需要图片验证码
  controlFlag.smsCount = 0; //已发短信次数
  var PHONE_ZONE_CODE = [
    { name: "中国", id: "+86" },
    { name: "中国香港特别行政区", id: "+852" },
    { name: "中国澳门特别行政区", id: "+853" },
    { name: "台湾", id: "+886" },
    { name: "阿尔巴尼亚", id: "+355" },
    { name: "阿尔及利亚", id: "+213" },
    { name: "阿富汗", id: "+93" },
    { name: "阿根廷", id: "+54" },
    { name: "爱尔兰", id: "+353" },
    { name: "埃及", id: "+20" },
    { name: "埃塞俄比亚", id: "+251" },
    { name: "爱沙尼亚", id: "+372" },
    { name: "阿拉伯联合酋长国", id: "+971" },
    { name: "阿鲁巴", id: "+297" },
    { name: "阿曼", id: "+968" },
    { name: "安道尔", id: "+376" },
    { name: "安哥拉", id: "+244" },
    { name: "安圭拉", id: "+1264" },
    { name: "安提瓜和巴布达", id: "+1268" },
    { name: "澳大利亚", id: "+61" },
    { name: "奥地利", id: "+43" },
    { name: "阿塞拜疆", id: "+994" },
    { name: "巴巴多斯", id: "+1246" },
    { name: "巴布亚新几内亚", id: "+675" },
    { name: "巴哈马", id: "+1242" },
    { name: "白俄罗斯", id: "+375" },
    { name: "百慕大", id: "+1441" },
    { name: "巴基斯坦", id: "+92" },
    { name: "巴拉圭", id: "+595" },
    { name: "巴林", id: "+973" },
    { name: "巴拿马", id: "+507" },
    { name: "保加利亚", id: "+359" },
    { name: "巴西", id: "+55" },
    { name: "北马里亚纳群岛", id: "+1670" },
    { name: "贝宁", id: "+229" },
    { name: "比利时", id: "+32" },
    { name: "冰岛", id: "+354" },
    { name: "博茨瓦纳", id: "+267" },
    { name: "波多黎各", id: "+1" },
    { name: "波兰", id: "+48" },
    { name: "玻利维亚", id: "+591" },
    { name: "伯利兹", id: "+501" },
    { name: "波斯尼亚和黑塞哥维那", id: "+387" },
    { name: "不丹", id: "+975" },
    { name: "布基纳法索", id: "+226" },
    { name: "布隆迪", id: "+257" },
    { name: "朝鲜", id: "+850" },
    { name: "赤道几内亚", id: "+240" },
    { name: "丹麦", id: "+45" },
    { name: "德国", id: "+49" },
    { name: "东帝汶", id: "+670" },
    { name: "多哥", id: "+228" },
    { name: "多米尼加", id: "+1767" },
    { name: "多米尼加共和国", id: "+1809" },
    { name: "厄瓜多尔", id: "+593" },
    { name: "厄立特里亚", id: "+291" },
    { name: "俄罗斯", id: "+7" },
    { name: "法国", id: "+33" },
    { name: "法罗群岛", id: "+298" },
    { name: "梵蒂冈", id: "+39" },
    { name: "法属波利尼西亚", id: "+689" },
    { name: "斐济", id: "+679" },
    { name: "菲律宾", id: "+63" },
    { name: "芬兰", id: "+358" },
    { name: "佛得角", id: "+238" },
    { name: "福克兰群岛", id: "+500" },
    { name: "冈比亚", id: "+220" },
    { name: "刚果（布）", id: "+242" },
    { name: "刚果（金）", id: "+243" },
    { name: "格陵兰", id: "+299" },
    { name: "格林纳达", id: "+1473" },
    { name: "格鲁吉亚", id: "+995" },
    { name: "哥伦比亚", id: "+57" },
    { name: "哥斯达黎加", id: "+506" },
    { name: "关岛", id: "+1671" },
    { name: "古巴", id: "+53" },
    { name: "圭亚那", id: "+592" },
    { name: "海地", id: "+509" },
    { name: "韩国", id: "+82" },
    { name: "哈萨克斯坦", id: "+7" },
    { name: "黑山共和国", id: "+382" },
    { name: "荷兰", id: "+31" },
    { name: "荷属安的列斯群岛", id: "+599" },
    { name: "洪都拉斯", id: "+504" },
    { name: "加纳", id: "+233" },
    { name: "加拿大", id: "+1" },
    { name: "柬埔寨", id: "+855" },
    { name: "加蓬", id: "+241" },
    { name: "吉布提", id: "+253" },
    { name: "捷克共和国", id: "+420" },
    { name: "吉尔吉斯斯坦", id: "+996" },
    { name: "基里巴斯", id: "+686" },
    { name: "几内亚", id: "+224" },
    { name: "几内亚比绍", id: "+245" },
    { name: "开曼群岛", id: "+1345" },
    { name: "喀麦隆", id: "+237" },
    { name: "卡塔尔", id: "+974" },
    { name: "科科斯群岛", id: "+61" },
    { name: "克罗地亚", id: "+385" },
    { name: "科摩罗", id: "+269" },
    { name: "肯尼亚", id: "+254" },
    { name: "科特迪瓦", id: "+225" },
    { name: "科威特", id: "+965" },
    { name: "库克群岛", id: "+682" },
    { name: "莱索托", id: "+266" },
    { name: "老挝人民民主共和国", id: "+856" },
    { name: "拉脱维亚", id: "+371" },
    { name: "黎巴嫩", id: "+961" },
    { name: "利比里亚", id: "+231" },
    { name: "利比亚", id: "+218" },
    { name: "列支敦士登", id: "+423" },
    { name: "立陶宛", id: "+370" },
    { name: "罗马尼亚", id: "+40" },
    { name: "卢森堡", id: "+352" },
    { name: "卢旺达", id: "+250" },
    { name: "马达加斯加", id: "+261" },
    { name: "马尔代夫", id: "+960" },
    { name: "马耳他", id: "+356" },
    { name: "马来西亚", id: "+60" },
    { name: "马拉维", id: "+265" },
    { name: "马里", id: "+223" },
    { name: "曼岛", id: "+44" },
    { name: "毛里求斯", id: "+230" },
    { name: "毛里塔尼亚", id: "+222" },
    { name: "马其顿", id: "+389" },
    { name: "马绍尔群岛", id: "+692" },
    { name: "马约特", id: "+262" },
    { name: "美国", id: "+1" },
    { name: "美属萨摩亚", id: "+1684" },
    { name: "美属维京群岛", id: "+1340" },
    { name: "蒙古", id: "+976" },
    { name: "孟加拉国", id: "+880" },
    { name: "蒙塞拉特群岛", id: "+1664" },
    { name: "缅甸", id: "+95" },
    { name: "密克罗尼西亚联邦", id: "+691" },
    { name: "秘鲁", id: "+51" },
    { name: "摩尔多瓦", id: "+373" },
    { name: "摩洛哥", id: "+212" },
    { name: "摩纳哥", id: "+377" },
    { name: "莫桑比克", id: "+258" },
    { name: "墨西哥", id: "+52" },
    { name: "纳米比亚", id: "+264" },
    { name: "南非", id: "+27" },
    { name: "南极洲", id: "+672" },
    { name: "瑙鲁", id: "+674" },
    { name: "尼泊尔", id: "+977" },
    { name: "尼加拉瓜", id: "+505" },
    { name: "尼日尔", id: "+227" },
    { name: "尼日利亚", id: "+234" },
    { name: "纽埃", id: "+683" },
    { name: "挪威", id: "+47" },
    { name: "帕劳", id: "+680" },
    { name: "皮特凯恩群岛", id: "+870" },
    { name: "葡萄牙", id: "+351" },
    { name: "日本", id: "+81" },
    { name: "瑞典", id: "+46" },
    { name: "瑞士", id: "+41" },
    { name: "萨尔瓦多", id: "+503" },
    { name: "塞尔维亚", id: "+381" },
    { name: "塞拉利昂", id: "+232" },
    { name: "塞内加尔", id: "+221" },
    { name: "塞浦路斯", id: "+357" },
    { name: "塞舌尔群岛", id: "+248" },
    { name: "萨摩亚", id: "+685" },
    { name: "沙特阿拉伯", id: "+966" },
    { name: "圣巴泰勒米", id: "+590" },
    { name: "圣诞岛", id: "+61" },
    { name: "圣多美和普林西比", id: "+239" },
    { name: "圣赫勒拿", id: "+290" },
    { name: "圣基茨和尼维斯", id: "+1869" },
    { name: "圣卢西亚", id: "+1758" },
    { name: "圣马丁", id: "+1599" },
    { name: "圣马力诺", id: "+378" },
    { name: "圣皮埃尔和密克隆", id: "+508" },
    { name: "圣文森特和格林纳丁斯", id: "+1784" },
    { name: "斯里兰卡", id: "+94" },
    { name: "斯洛伐克", id: "+421" },
    { name: "斯洛文尼亚", id: "+386" },
    { name: "斯威士兰", id: "+268" },
    { name: "苏丹", id: "+249" },
    { name: "所罗门群岛", id: "+677" },
    { name: "索马里", id: "+252" },
    { name: "泰国", id: "+66" },
    { name: "塔吉克斯坦", id: "+992" },
    { name: "汤加", id: "+676" },
    { name: "坦桑尼亚", id: "+255" },
    { name: "特克斯和凯科斯群岛", id: "+1649" },
    { name: "特立尼达和多巴哥", id: "+1868" },
    { name: "土耳其", id: "+90" },
    { name: "土库曼斯坦", id: "+993" },
    { name: "突尼斯", id: "+216" },
    { name: "托克劳", id: "+690" },
    { name: "图瓦卢", id: "+688" },
    { name: "瓦利斯和富图纳", id: "+681" },
    { name: "瓦努阿图", id: "+678" },
    { name: "危地马拉", id: "+502" },
    { name: "委内瑞拉", id: "+58" },
    { name: "文莱", id: "+673" },
    { name: "乌干达", id: "+256" },
    { name: "乌克兰", id: "+380" },
    { name: "乌拉圭", id: "+598" },
    { name: "乌兹别克斯坦", id: "+998" },
    { name: "西班牙", id: "+34" },
    { name: "希腊", id: "+30" },
    { name: "新加坡", id: "+65" },
    { name: "新喀里多尼亚", id: "+687" },
    { name: "新西兰", id: "+64" },
    { name: "匈牙利", id: "+36" },
    { name: "叙利亚", id: "+963" },
    { name: "牙买加", id: "+1876" },
    { name: "亚美尼亚", id: "+374" },
    { name: "也门", id: "+967" },
    { name: "意大利", id: "+39" },
    { name: "伊拉克", id: "+964" },
    { name: "伊朗", id: "+98" },
    { name: "印度", id: "+91" },
    { name: "印度尼西亚", id: "+62" },
    { name: "英国", id: "+44" },
    { name: "英属维京群岛", id: "+1284" },
    { name: "以色列", id: "+972" },
    { name: "约旦", id: "+962" },
    { name: "越南", id: "+84" },
    { name: "赞比亚", id: "+260" },
    { name: "乍得", id: "+235" },
    { name: "直布罗陀", id: "+350" },
    { name: "智利", id: "+56" },
    { name: "中非共和国", id: "+236" },
  ];
  var channelId =
    (document.cookie.match(/channel\=(\d+)/) &&
      document.cookie.match(/channel\=(\d+)/)[1]) ||
    "";
  setLoginZoneCodeList(); // 设置区号列表
  $("body").on("click", "#closeLoginDiv", function() {
    _hmt.push(["_setUserTag", "2395", 1]);
    hideWin();
  });
  //登陆切换
  $("body").on("click", "#commonLogin", function() {
    $("#codeLogin").removeClass("none");
    $("#commonLogin").addClass("none");
    $("#codeLoginDiv").addClass("none");
    $("#commonLoginDiv").removeClass("none");
  });
  $("body").on("click", "#passwordLogin", function() {
    $("#commonLogin").click();
  });
  $("body").on("click", "#codeLogin", function() {
    get2DCode();
    $("#codeLogin").addClass("none");
    $("#commonLogin").removeClass("none");
    $("#codeLoginDiv").removeClass("none");
    $("#commonLoginDiv").addClass("none");
  });
  $("body").on("click", "#weixinLogin", function() {
    weiCode();
  });
  $("body").on("click", "#weiboLogin", function() {
    weiboLogin();
  });
  $("body").on("click", "#qqLogin", function() {
    qqLogin();
  });
  $("body").on("click", "#phoneLogin", function() {
    $("#phoneLogin").addClass("line-bottom");
    $("#accountLogin").removeClass("line-bottom");
    $("#accountLoginDiv").addClass("none");
    $("#phoneLoginDiv").removeClass("none");
  });
  $("body").on("click", "#accountLogin", function() {
    $("#accountLogin").addClass("line-bottom");
    $("#phoneLogin").removeClass("line-bottom");
    $("#accountLoginDiv").removeClass("none");
    $("#phoneLoginDiv").addClass("none");
  });
  //不同环境切换认证中心域名
  var mc = location.host.match(/\w+((\-(?:dev|test|pro|git))*)/),
    env = "-dev";
  if (mc && mc.length > 1) {
    env = mc[1] || "";
  }
  window.authUrl = "//auth2" + env + ".shiguangkey.com/api";

  $("#loginDiv").keydown(function(e) {
    if (e.keyCode == 13) {
      enterLogin();
    }
  });
  $("body").on("click", ".loginButtom", function() {
    enterLogin();
  });
  $("body").on("click", ".free-to-register", function() {
    toRegister();
  });
  $("#loginAccount")
    .focus(function() {
      $(".login-account-tip").css("visibility", "visible");
    })
    .blur(function() {
      $(".login-account-tip").css("visibility", "hidden");
    });
  var smsCount = getCookie("smsCount");
  if (smsCount) {
    controlFlag.smsCount = smsCount;
    if (smsCount >= controlFlag.smsNeedImageCodeCount) {
      $("#imageCodeDiv").removeClass("none");
      $("#imageCodeError")
        .parent()
        .parent()
        .removeClass("none");
      controlFlag.needImageCode = true;
    }
  }
  createImageCode();
  var params = {
    url: "/api/auth/myInfo",
    type: "POST",
    dataType: "json",
    success: function(data) {
      if (!data.data.user) {
        if (getCookie("third")) {
          delCookie("third");
          tokenSync();
        }
      }
    },
  };
  $.ajax(params);

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function statusChangeCallback(response) {
    //console.log(response);
    if (response.status === "connected") {
      // Logged into your app and Facebook.
      facebookiLoginSuccess();
    } else if (response.status === "unknown") {
      //console.log("1111111111");
      FB.login(function(response) {
        // Person is now logged out
        //console.log(response);
      });
    }
  }

  function facebookiLoginSuccess() {
    FB.api(
      "/me?fields=name,first_name,last_name,email,cover,age_range,gender,picture",
      function(response) {
        //console.log('Successful login for: ' + response.name,response);
        //console.log(response);
        var gender = 2;
        if (response.gender == "female") {
          gender = 0;
        } else if (response.gender == "male") {
          gender = 1;
        }
        $.ajax({
          type: "GET",
          url: window.authUrl + "/login/facebook",
          async: true,
          dataType: "jsonp",
          jsonp: "callback",
          data: {
            nickname: response.name,
            unionid: response.id,
            headimgurl: response.picture.data.url,
            gender: gender,
            platformType: 4,
            terminalType: 1000,
          },
          success: function(data) {
            //console.log(data);
            if (data.data.token) {
              login(data.data.token);
            }
          },
        });
      }
    );
  }

  function facebookLogout() {
    FB.logout(function(response) {
      // Person is now logged out
      //console.log(response);
    });
  }

  function facebookLogin() {
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = function() {
        FB.init({
          appId: "877295469104164",
          cookie: true,
          xfbml: true,
          version: "v2.8",
        });
        FB.AppEvents.logPageView();
      };

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
      setTimeout("facebookLogin()", 1000);
    } else {
      FB.login(
        function(response) {
          statusChangeCallback(response); //登录回调函数
        },
        { scope: "email" }
      );
    }
  }

  function weiboLogin() {
    _hmt.push(["_setVisitTag", "2392", 1]);
    var params = {
      url: window.authUrl + "/login/weibo/authorizeLink",
      type: "GET",
      data: {
        redirectUrl: location.href,
      },
      dataType: "jsonp",
      jsonp: "callback",
      success: function(data) {
        if (data.status === 0) {
          setCookie("third", true, 1);
          location.href = data.data.authorizeLink;
        } else {
          errorTip(data.msg);
        }
      },
      error: function(data) {
        errorTip("服务器繁忙！");
      },
    };
    $.ajax(params);
  }

  function qqLogin() {
    _hmt.push(["_setVisitTag", "2389", 1]);
    var params = {
      url: window.authUrl + "/login/qq/authorizeLink",
      type: "GET",
      data: {
        redirectUrl: location.href,
      },
      dataType: "jsonp",
      jsonp: "callback",
      success: function(data) {
        if (data.status === 0) {
          setCookie("third", true, 1);
          location.href = data.data.authorizeLink;
        } else {
          errorTip(data.msg);
        }
      },
      error: function(data) {
        errorTip("服务器繁忙！");
      },
    };
    $.ajax(params);
  }

  function weiCode() {
    _hmt.push(["_setVisitTag", "2390", 1]);
    var params = {
      url: window.authUrl + "/login/wechat/qrcode",
      type: "GET",
      data: {
        redirectUrl: window.location.href,
      },
      dataType: "jsonp",
      jsonp: "callback",
      success: function(data) {
        if (data.status === 0) {
          setCookie("third", true, 1);
          location.href = data.data.qrcodeURI;
        } else {
          errorTip(data.msg);
        }
      },
      error: function(data) {
        errorTip("服务器繁忙！");
      },
    };
    $.ajax(params);
  }

  function toLogin(callback) {
    showLoginWin();
    window.callback = callback;
  }

  function errorTip(msg) {
    $(".loginerror-pro p").text(msg);
    $(".loginerror-pro").removeClass("none");
    $("#loginDiv").removeClass("none");
    setTimeout(function() {
      $(".loginerror-pro").addClass("none");
    }, 2000);
  }

  function showLoginError(msg) {
    $(".acc-error>span")
      .html(msg)
      .parent()
      .stop(true, true)
      .show(0)
      .delay(2000)
      .hide(0);
  }

  function checkPhone() {
    //校验手机号码
    var $phone = $("#phone"),
      $zone = $(".zone-code-selected");
    if ($phone.val() == "") {
      showLoginError("手机号码不能为空");
      $phone.focus();
      return false;
    }
    var flag =
      $zone.data("id") == "86"
        ? /^1\d{10}$/.test($phone.val())
        : /^\d{5,}$/.test($phone.val());
    if (flag) return true;
    showLoginError("手机号填写有误");
    $phone.focus();
  }

  function checkPwd() {
    var pwd = $(".not-register-pwd");
    if (/^[\w]{6,}$/.test(pwd.val())) return true;
    showLoginError("密码输入有误");
    pwd.focus();
    return false;
  }

  function checkNick() {
    var nick = $(".not-register-nick");
    if (/^[\u4e00-\u9fa5\w]{2,15}$/.test($.trim(nick.val()))) return true;
    showLoginError("昵称输入有误");
    nick.focus();
    return false;
  }

  function checkImageCode() {
    //校验验证码
    $("#smsCodeError")
      .text("")
      .siblings()
      .addClass("none");
    if (!controlFlag.needImageCode) return true; //不需要图片验证码
    if ($("#imageCode").val() == "") {
      showLoginError("验证码不能为空");
      $("#imageCode").focus();
      return false;
    }
    return true;
  }
  $(".refesh-img-code").click(refush);

  function refush() {
    //刷新验证码
    createImageCode();
    $("#imageCode").focus();
  }

  function checkSmsCode() {
    //校验短信验证码
    if ($("#smsCode").val() == "") {
      showLoginError("短信验证码不能为空");
      $("#smsCode").focus();
      return false;
    }
    return true;
  }

  function checkAccount() {
    //校验账号
    if ($("#loginAccount").val() == "") {
      showLoginError("账号不能为空");
      $("#loginAccount").focus();
      return false;
    }
    return true;
  }

  function checkPassword() {
    //密码不能为空
    if ($("#password").val() == "") {
      showLoginError("密码不能为空");
      $("#password").focus();
      return false;
    }
    $("#passwordError")
      .text("")
      .siblings()
      .addClass("none");
    return true;
  }

  function checkSmsCode() {
    //校验短信验证码
    if ($("#smsCode").val() == "") {
      showLoginError("短信验证码不能为空");
      $("#smsCode").focus();
      return false;
    }
    return true;
  }

  function setLoginZoneCodeList() {
    var zoneCode = $(".zone-code-selected"),
      zoneCodeList = $(".zone-code-list"),
      html = "",
      tmp = [];
    if ($.trim(zoneCodeList.html())) return;
    for (var i = 0; i < PHONE_ZONE_CODE.length; i++) {
      tmp.push(
        "<li data-id='" +
          PHONE_ZONE_CODE[i].id +
          "'>" +
          PHONE_ZONE_CODE[i].name +
          "<i>" +
          PHONE_ZONE_CODE[i].id +
          "</i></li>"
      );
    }
    html = tmp.join("");
    zoneCodeList.html(html);
    zoneCodeList.on("click", "li", function(e) {
      e.stopPropagation();
      zoneCode.text($(this).data("id"));
      zoneCode.data(
        "id",
        $(this)
          .data("id")
          .slice(1)
      );
      zoneCodeList.slideUp();
    });
    zoneCode.click(function(e) {
      e.stopPropagation();
      zoneCodeList.stop(true, true).slideToggle();
    });
    $(document.body).click(function() {
      zoneCodeList.slideUp();
    });
  }

  function loginUsePhone() {
    //手机快捷登录
    if (!checkPhone()) {
      return;
    }
    if (!checkSmsCode()) {
      return;
    }
    function loginByPhone(account) {
      if (controlFlag.phoneLogining) return;
      controlFlag.phoneLogining = true;
      var data = {
        phone:
          $(".zone-code-selected").data("id") + "-" + $.trim($("#phone").val()),
        code: $("#smsCode").val(),
      };
      _hmt.push(["_setVisitTag", "2393", data.phone]);
      if (controlFlag.notRegister) {
        //第一次注册带上推广来源
        data.inviteCode = channelId;
      }
      var params = {
        url: window.authUrl + "/login/phone",
        data: data,
        dataType: "jsonp",
        success: function(data) {
          if (data.status === 0) {
            login(data.data.token);
          } else if (data.status === 1010) {
            selectUserLogin(
              data.data.users,
              function(account) {
                controlFlag.phoneLogining = false;
                loginByPhone(account);
                showLoginWin();
              },
              function() {
                controlFlag.phoneLogining = false;
              }
            );
          } else {
            showLoginError(data.msg);
            controlFlag.phoneLogining = false;
          }
        },
        error: function(data) {
          showLoginError("服务器繁忙！");
          controlFlag.phoneLogining = false;
        },
      };
      if (account) params.data.account = account;
      $.ajax(params);
    }
    loginByPhone();
  }

  function loginUseAccount() {
    //账号密码登录
    if (!checkAccount()) {
      return;
    }
    if (!checkPassword()) {
      return;
    }

    var phone = "";

    function loginByAccount(account) {
      if (controlFlag.accountLogining) return;
      controlFlag.accountLogining = true;
      _hmt.push(["_setVisitTag", "2393", $("#loginAccount").val()]);
      var params = {
        url: window.authUrl + "/login/standard",
        type: "GET",
        data: {
          account: $("#loginAccount").val(),
          password: b64_md5($("#password").val()),
        },
        dataType: "jsonp",
        jsonp: "callback",
        success: function(data) {
          if (data.status === 0) {
            login(data.data.token, phone);
          } else if (data.status === 1010) {
            phone = $("#loginAccount").val();
            selectUserLogin(
              data.data.users,
              function(account) {
                controlFlag.accountLogining = false;
                loginByAccount(account);
                showLoginWin();
              },
              function() {
                controlFlag.accountLogining = false;
              }
            );
          } else {
            showLoginError(data.msg);
            controlFlag.accountLogining = false;
          }
        },
        error: function(data) {
          showLoginError("服务器繁忙！");
          controlFlag.accountLogining = false;
        },
      };
      if (account) params.data.account = account;
      $.ajax(params);
    }
    loginByAccount();
  }

  /**
   * 手机登录时，选择多个绑定帐号中的一个登录
   * @param {Array} users
   * @param {Function} fn
   */
  function selectUserLogin(users, fn, cancel) {
    hideWin();

    function haveVipCourse(user) {
      return user.vipcount
        ? '<span class="contain-vip">包含VIP课程<i>' +
            user.vipcount +
            "</i>门</span>"
        : "";
    }

    function centerThisWin() {
      var $dlg = $(".register-choiceUser"),
        dlgHeight = $dlg.height(),
        winHeight = document.documentElement.clientHeight;
      $dlg.css("top", (winHeight - dlgHeight) / 2);
    }
    var html = "",
      tps = {
        0: "普通注册帐号",
        1: "QQ注册",
        2: "微信注册",
        3: "微博注册",
      };
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      html += [
        '<a href="javascript:;" class="registerPond-div" data-account="' +
          user.account +
          '">',
        "<h3><i>" +
          user.account +
          "</i><span>(" +
          user.nickname +
          ")</span></h3>",
        "<h4>" + tps[user.loginType] + haveVipCourse(user) + "</h4>",
        '<div class="registerPond-divClick">',
        '<img src="/res/images/gonggao-lan.png" alt="" />',
        "</div>",
        "</a>",
      ].join("");
    }
    $(".bind-phone-account-count").text(users.length);
    $(".registerPond-choice")
      .html(html)
      .filter(function() {
        return !$(this).data("isbind");
      })
      .on("click", ".registerPond-div", function() {
        if ($(this).is(".registerPond-divBlue")) return;
        $(".registerPond-div").removeClass("registerPond-divBlue");
        $(this).addClass("registerPond-divBlue");
      })
      .data("isbind", 1);
    $(".registerPond-ChoiceBtn")
      .filter(function() {
        return !$(this).data("isbind");
      })
      .click(function() {
        var account = $(".registerPond-divBlue").data("account");
        fn(account);
      })
      .data("isbind", 1);
    $(".register-pond-x").click(function() {
      // 点击关闭时，把该窗口隐藏，并把帐号密码登录显示出来
      showLoginWin();
      cancel && cancel();
    });
    $(".registerPond-div")
      .eq(0)
      .click();
    showChoseUser();
    centerThisWin();
  }

  /**
   * 检测用户手机绑定的帐号情况
   */
  function toUnbind(phone) {
    var def = $.Deferred();
    showToUnbind();
    $(".gonggaoTs-btn1,.close-unbind-popup").click(function() {
      hideWin();
      def.reject();
    });
    $(".gonggaoTs-btn2").click(function() {
      hideWin();
      def.resolve();
    });
    return def;
  }

  function getUserInfo(token) {
    return $.ajax({
      url: window.authUrl + "/userInfo/mine",
      dataType: "jsonp",
      data: {
        token: token,
      },
    }).then(function(res) {
      if (res.status > 0) return $.Deferred().reject();
      var data = res.data.userDetail;
      data["token"] = token;
      return res.data.userDetail;
    });
  }

  function login(token) {
    // 通过手机登录过来的  带手机
    setCookie("token", token, 24 * 30 * 6);
    var params = {
      url: "/api/auth/login?token=" + token,
      type: "GET",
      dataType: "json",
      beforeSend: function() {
        $(".loging").removeClass("none");
        $(".loginButtom").addClass("none");
      },
      complete: function() {
        $(".loging").addClass("none");
        $(".loginButtom").removeClass("none");
      },
      success: function(data) {
        if (data.status == 0) {
          bindPhoneStatus(token)
            .then(function() {
              // 检测是否需要绑定。是否需要解绑
              hideWin();
              if (window.callback) {
                window.callback(data);
              } else {
                location.reload();
              }
            })
            .fail(function(users) {
              if (!(users instanceof Array)) return;
              if (users.length) {
                toUnbind(users[0].phone)
                  .then(function() {
                    _hmt.push(["_setVisitTag", "2398", users[0].phone]);
                    location.replace(
                      "/user/unbind.html?phone=" + users[0].phone
                    );
                  })
                  .fail(function() {
                    location.reload();
                  });
              } else {
                // 第三方老账户绑定逻辑
                getUserInfo(token).then(toBindPhone);
              }
            });
        } else {
          if (controlFlag.accountLogining) {
            $("#passwordError")
              .text(data.msg)
              .siblings()
              .removeClass("none");
          }
          if (controlFlag.phoneLogining) {
            $("#smsCodeError")
              .text(data.msg)
              .siblings()
              .removeClass("none");
          }
        }
        controlFlag.accountLogining = false;
        controlFlag.phoneLogining = false;
      },
      error: function(data) {
        if (controlFlag.accountLogining) {
          $("#passwordError")
            .text("服务器繁忙！")
            .siblings()
            .removeClass("none");
        }
        if (controlFlag.phoneLogining) {
          $("#smsCodeError")
            .text("服务器繁忙！")
            .siblings()
            .removeClass("none");
        }
        controlFlag.accountLogining = false;
        controlFlag.phoneLogining = false;
      },
    };
    $.ajax(params);
  }

  function logout(callback) {
    var params = {
      url: "/api/auth/logout",
      type: "GET",
      dataType: "json",
      success: function(data) {
        if (data.status == 0) {
          var params2 = {
            url: window.authUrl + "/login/ignore",
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            success: function() {
              if (data.status == 0) {
                delCookie("token");
                if (callback) {
                  callback();
                } else {
                  location.href = "/";
                }
              } else {
                errorTip(data.msg);
              }
            },
            error: function() {
              errorTip("认证中心服务器繁忙！");
            },
          };
          $.ajax(params2);
        } else {
          errorTip(data.msg);
        }
      },
      error: function() {
        errorTip("服务器繁忙！");
      },
    };
    $.ajax(params);
  }

  $("#getSMS").click(sendSMS);

  function sendSMS() {
    //发送手机验证码
    if (controlFlag.smsCount >= controlFlag.smsMaxCount) {
      showLoginError("发送过于频繁！");
      return;
    }
    controlFlag.needImageCode =
      controlFlag.smsCount >= controlFlag.smsNeedImageCodeCount;
    if (controlFlag.needImageCode) {
      $("#imageCodeDiv").removeClass("none");
      $("#imageCodeError")
        .parent()
        .parent()
        .removeClass("none");
    } else {
      $("#imageCodeDiv").addClass("none");
      $("#imageCodeError")
        .parent()
        .parent()
        .addClass("none");
    }
    if (!checkPhone()) {
      return;
    }
    if (!checkImageCode()) {
      return;
    }

    function centerThisWin() {
      var $dlg = $(".login-pop"),
        dlgHeight = $dlg.height(),
        winHeight = document.documentElement.clientHeight;
      $dlg.css("top", (winHeight - dlgHeight) / 2);
    }
    $("#smsCode").text("");
    controlFlag.smsCount++;
    setCookie("smsCount", controlFlag.smsCount, 1);
    controlFlag.waitSmsSecond = 60;
    var aa = setInterval(function() {
      controlFlag.waitSmsSecond--;
      $("#waitSmsSecond").text(controlFlag.waitSmsSecond);
      if (controlFlag.waitSmsSecond == 0) {
        clearInterval(aa);
        $("#getSMS").removeClass("none");
        $(".acc-time").addClass("none");
        $("#waitSmsSecond").text(60);
      }
    }, 1000);
    var datas = {},
      phone =
        $(".zone-code-selected").data("id") + "-" + $.trim($("#phone").val());
    datas.phone = phone;
    datas.smsType = 1;
    if (controlFlag.needImageCode) {
      datas.imageCode = $("#imageCode").val();
      datas.uniqueId = window.uuid;
    }
    var params = {
      url: window.authUrl + "/verify/sms/send",
      data: datas,
      dataType: "jsonp",
      success: function(data) {
        if (data.status == 0) {
          $("#getSMS").addClass("none");
          $(".acc-time").removeClass("none");
        } else {
          showLoginError(data.msg);
          clearInterval(aa);
          $("#getSMS").removeClass("none");
          $(".acc-time").addClass("none");
          $("#waitSmsSecond").text(60);
        }
      },
    };
    $.ajax(params);
    return $.ajax({
      url: window.authUrl + "/verify/available/phone",
      data: { phone: phone },
      dataType: "jsonp",
    })
      .then(function(res) {
        if (res.status > 0) {
          return $.Deferred().reject(res.msg);
        } else if (res.data.result) {
          controlFlag.notRegister = true;
        } else {
          controlFlag.notRegister = false;
        }
      })
      .fail(function(msg) {
        showLoginError(msg || "查询手机号注册情况失败");
        return $.Deferred().reject();
      });
    //createImageCode();
  }

  function createImageCode() {
    //生成验证码
    window.uuid = getUUID();
    var params = {
      url: window.authUrl + "/verify/imageCode/create",
      type: "POST",
      data: {
        uniqueId: window.uuid,
      },
      dataType: "jsonp",
      jsonp: "callback",
      success: function(data) {
        $("#imageCodeUrl").attr(
          "src",
          "data:image/png;base64," + data.data.base64Image
        );
      },
    };
    $.ajax(params);
  }

  function getUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
  }

  function enterLogin() {
    //回车登录
    if (!$("#phoneLoginDiv").hasClass("none")) {
      loginUsePhone();
    } else if (!$("#accountLoginDiv").hasClass("none")) {
      loginUseAccount();
    }
  }

  $(".reget-qr").click(get2DCode);

  function get2DCode() {
    window.mark = getUuid();
    $(".codes-fail").addClass("none");
    var params = {
      url: window.authUrl + "/login/qrcode/authMark",
      type: "GET",
      data: {
        mark: window.mark,
      },
      dataType: "jsonp",
      jsonp: "callback",
      success: function(data) {
        if (data.status === 0) {
          $("#twoDCode").attr(
            "src",
            "data:image/png;base64," + data.data.base64Image
          );
          //						saveScan();//此处模拟扫码
          window.overTime = false;
          checkLogin();
          setTimeout(setOverTime, 120000);
        } else {
          $("#twoDCode").attr("src", "/res/images/yard.jpg");
          $(".codes-fail").removeClass("none");
          $(".codes-title").text("二维码获取失败");
        }
      },
      error: function(data) {
        $("#twoDCode").attr("src", "/res/images/yard.jpg");
        $(".codes-fail").removeClass("none");
        $(".codes-title").text("二维码获取失败");
      },
    };
    $.ajax(params);
  }

  // 在total时间内每秒执行任务fn，时间完成后resolve
  function secoundTimer(totalTime, fn) {
    var def = $.Deferred(),
      intv = setInterval(function() {
        fn && fn(totalTime);
        totalTime -= 1000;
        if (totalTime < 0) {
          clearInterval(intv);
          def.resolve();
        }
      }, 1000);
    return def;
  }

  function setZoneCodeList() {
    var zoneCode = $(".bind-phone-zonecode"),
      zoneCodeList = $(".bind-phone-select-zonecode"),
      html = "",
      tmp = [];
    if ($.trim(zoneCodeList.html())) return;
    for (var i = 0; i < PHONE_ZONE_CODE.length; i++) {
      tmp.push(
        "<li data-id='" +
          PHONE_ZONE_CODE[i].id +
          "'>" +
          PHONE_ZONE_CODE[i].name +
          "<i>" +
          PHONE_ZONE_CODE[i].id +
          "</i></li>"
      );
    }
    html = tmp.join("");
    zoneCodeList.html(html);
    zoneCodeList.on("click", "li", function(e) {
      e.stopPropagation();
      zoneCode.text($(this).data("id"));
      zoneCode.data(
        "id",
        $(this)
          .data("id")
          .slice(1)
      );
      zoneCodeList.slideUp();
    });
    zoneCode.click(function(e) {
      e.stopPropagation();
      zoneCodeList.stop(true, true).slideToggle();
    });
    $(document.body).click(function() {
      zoneCodeList.slideUp();
    });
  }

  function toBindPhone(info) {
    showBindPhoneWin();
    $(".to-login-a").css("display", "none");
    var phone = $(".bind-phone-number"),
      zoneCode = $(".bind-phone-zonecode"),
      code = $(".bind-phone-code"),
      sendBtn = $(".bind-phone-send-btn"),
      errorDiv = $(".register-error"),
      submitBtn = $(".registerPond-btn"),
      close = $(".bind-phone-close"),
      uuid = "",
      isLogin = false,
      bindOne = false; //手机号是否已经绑定了一个帐号
    if (info.account) {
      isLogin = true; // 第三方老账户
    } else {
      _hmt.push(["_setUserTag", "2397", phone]);
    }
    setZoneCodeList();

    function error(msg) {
      errorDiv
        .find("span")
        .html(msg)
        .parent()
        .stop(true, true)
        .show(100)
        .delay(3000)
        .hide(100);
    }

    function check(el, msg, fn) {
      var def = $.Deferred();
      if (fn()) {
        def.resolve();
      } else {
        def.reject();
        error(msg);
        el.focus();
      }
      return def;
    }

    function checkPhone() {
      return check(phone, "手机号填写有误", function() {
        return zoneCode.data("id") == "86"
          ? /^1\d{10}$/.test(phone.val())
          : /^\d{5,}$/.test(phone.val());
      });
    }

    function checkCode() {
      return check(code, "手机验证码填写有误", function() {
        return /^\d{4,6}$/.test(code.val());
      });
    }

    function checkPhoneBindStatus(phoneNumber) {
      return $.ajax({
        dataType: "jsonp",
        url: window.authUrl + "/userInfo/query-by-phone",
        data: {
          phone: phoneNumber,
        },
      }).then(function(res) {
        if (res.status > 0) return $.Deferred().reject(res.msg);
        if ((res.data.count == 1 && isLogin) || res.data.count > 1) {
          return $.Deferred().reject(
            "该手机已绑定了其它帐号<br>请更换手机或解绑其它帐号"
          );
        }
        return res.data;
      });
    }

    function sendSms(phoneNumber) {
      return $.ajax({
        dataType: "jsonp",
        url: window.authUrl + "/verify/sms/send",
        data: {
          smsType: 2,
          uniqueId: (uuid = getUUID()),
          phone: phoneNumber,
        },
      }).then(function(res) {
        if (res.status > 0) return $.Deferred().reject(res.msg);
      });
    }

    function login() {
      var apis = {
          1: "/login/qq/bindphone",
          2: "/login/wechat/bindphone",
          3: "/login/weibo/bindphone",
        },
        data = {
          phone: zoneCode.data("id") + "-" + phone.val(),
          code: code.val(),
          state: info.stateKey,
          inviteCode: channelId,
        };

      return $.ajax({
        dataType: "jsonp",
        url: window.authUrl + apis[info.loginType],
        data: data,
      });
    }

    function bind() {
      return $.ajax({
        dataType: "jsonp",
        url: window.authUrl + "/bind/phone",
        data: {
          phone: zoneCode.data("id") + "-" + phone.val(),
          code: code.val(),
          token: info.token,
        },
      });
    }

    sendBtn.click(function() {
      if ($(this).data("timeout")) return;
      var that = this,
        phoneNumber = zoneCode.data("id") + "-" + phone.val();
      $(this).data("timeout", 1);
      checkPhone()
        .then(function() {
          return checkPhoneBindStatus(phoneNumber);
        })
        .then(function(data) {
          if (data.count == 1 || isLogin) {
            //手机绑定了一个帐号，或者是老账户
            bindOne = true;
          }
        })
        .then(function() {
          return sendSms(phoneNumber);
        })
        .then(function() {
          return secoundTimer(60e3, function(t) {
            sendBtn.addClass("bind-phone-retry");
            sendBtn.text(parseInt(t / 1000) + "s后重新获取");
          });
        })
        .fail(function(err) {
          if (err) error(err);
        })
        .always(function() {
          $(that).data("timeout", 0);
          sendBtn.text("重新获取");
        });
    });
    submitBtn.click(function() {
      var self = this,
        icons = {
          1: "/res/images/register-qq.png",
          2: "/res/images/register-vx.png",
          3: "/res/images/register-weibo.png",
        };
      // 已经登录的情况下无需检查密码
      checkPhone()
        .then(checkCode)
        .then(isLogin ? bind : login)
        .then(function(res) {
          if (res.status > 0) {
            return $.Deferred().reject(res.msg);
          } else if (res.data.token) {
            // 新账号绑定
            setCookie("token", res.data.token, 24 * 30 * 6);
          }
          location.reload();
          //$('.bind-phone-success-icon').attr('src', info.headImg ? '/res/images/register-tz.png' : icons[info.loginType]);
          //$('.bind-phone-number-text').text(phone.val());
          //showBindPhoneSuccessWin();
          //$(self).data('finish', 1);
          //close.data('finish', 1);
        })
        .fail(function(msg) {
          if (msg) error(msg);
        });
    });
    close.click(function() {
      if (isLogin) {
        location.reload();
        return;
      }
      $(".bind-phone-giveup-title").text("您确定要放弃登录吗？");
      showBindPhoneGiveup();
      $(".bind-phone-giveup-ok").click(function() {
        location.reload();
      });
      $(".bind-phone-giveup-close").click(function() {
        showBindPhoneWin();
      });
    });
    $(".register-pond").show();
  }

  function bindPhoneStatus(token) {
    return $.ajax({
      url: window.authUrl + "/userInfo/query-phone-status",
      dataType: "jsonp",
      data: { token: token },
    }).then(function(res) {
      if (res.status > 0) {
        alert(res.msg);
        return $.Deferred().resolve();
      }
      if (res.data.count === 1) return $.Deferred().resolve();
      if (res.data.count > 1 || res.data.count === 0)
        return $.Deferred().reject(res.data.users || []);
    });
  }

  function tokenSync() {
    var params = {
      url: window.authUrl + "/userInfo/syncAuthStatus",
      dataType: "jsonp",
      success: function(data) {
        if (data.data.token) {
          login(data.data.token);
        } else if (data.data.quickLoginData) {
          // 处理第三方登录帐号绑定
          toBindPhone(data.data.quickLoginData);
        } else {
          if (data.status == 6101) {
            return;
          }
          errorTip(data.msg);
        }
      },
      error: function() {
        errorTip("验证第三方登陆请求失败！");
      },
    };
    $.ajax(params);
  }

  function setOverTime() {
    window.overTime = true;
  }

  function checkOvertime() {
    if (!$("#loginDiv").hasClass("none")) {
      if (!$("#codeLoginDiv").hasClass("none")) {
        if (window.overTime) {
          $("#twoDCode").attr("src", "/res/images/yard.jpg");
          $(".codes-fail").removeClass("none");
          $(".codes-title").text("二维码超时失效");
          return;
        }
        setTimeout(checkLogin, 1000);
      }
    }
  }

  function checkLogin() {
    var params = {
      url: window.authUrl + "/login/qrcode/auth",
      type: "GET",
      data: {
        mark: window.mark,
      },
      dataType: "jsonp",
      jsonp: "callback",
      success: function(data) {
        if (data.data.token) {
          login(data.data.token);
        } else {
          checkOvertime();
        }
      },
      error: function() {
        checkOvertime();
      },
    };
    $.ajax(params);
  }

  function saveScan() {
    var params = {
      url: window.authUrl + "/login/qrcode/saveScan",
      type: "GET",
      data: {
        mark: window.mark,
        appToken: "1493863302426992652",
      },
      dataType: "jsonp",
      jsonp: "callback",
      success: function(data) {},
    };
    $.ajax(params);
  }

  function setCookie(name, value, expiresHours) {
    var cookieStr = name + "=" + encodeURIComponent(value);
    var date = new Date();
    date.setTime(date.getTime() + expiresHours * 3600 * 1000);
    cookieStr += ";expires=" + date.toUTCString() + ";path=/";
    document.cookie = cookieStr;
  }

  function getCookie(name) {
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }

  function delCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "= ;expires=" + date.toUTCString() + ";path=/";
  }
  /**
   * 生成uuid
   * @returns
   */
  function getUuid() {
    var len = 32; //32长度
    var radix = 16; //16进制
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
      ""
    );
    var uuid = [],
      i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join("");
  }

  function showLoginWin() {
    $(".popup-win").css("display", "none");
    $(".login-pop").css("display", "block");
    $("#loginDiv").removeClass("none");
    $("#phone").focus();
  }

  function showBindPhoneGiveup() {
    $(".popup-win").css("display", "none");
    $(".bind-phone-giveup").css("display", "block");
    $("#loginDiv").removeClass("none");
  }

  function showBindPhoneWin() {
    $(".popup-win,.bind-phone-child-wind").css("display", "none");
    $(".register-pond,.bind-phone-wind").css("display", "block");
    $("#loginDiv").removeClass("none");
    $(".bind-phone-number").focus();
  }

  function showBindPhoneSuccessWin() {
    $(".popup-win,.bind-phone-child-wind").css("display", "none");
    $(".register-pond,.bind-phone-success").css("display", "block");
    $("#loginDiv").removeClass("none");
  }

  function showRegisterWin() {
    $(".popup-win,.bind-phone-child-wind").css("display", "none");
    $(".register-pond,.resister-popup-win").css("display", "block");
    $("#loginDiv").removeClass("none");
    $(".register-phone-number").focus();
  }

  function showChoseUser() {
    $(".popup-win").css("display", "none");
    $(".register-choiceUser").show();
    $("#loginDiv").removeClass("none");
  }

  function showToUnbind() {
    $(".popup-win").css("display", "none");
    $(".register-gonggao-ts").show();
    $("#loginDiv").removeClass("none");
  }

  function hideWin() {
    $("#loginDiv").addClass("none");
  }

  function toRegister() {
    _hmt.push(["_setUserTag", "2382", 1]);
    setZoneCodeList();
    showRegisterWin();
    $(".to-login-a").css("display", "block");
    var errorDiv = $(".register-error"),
      close = $(".bind-phone-close").data("finish", 2),
      sendBtn = $(".register-send-code"),
      phone = $(".register-phone-number"),
      zoneCode = $(".bind-phone-zonecode"),
      code = $(".register-phone-code"),
      pwd = $(".register-phone-pwd"),
      nick = $(".register-phone-nick"),
      submitBtn = $(".registerPond-btn").data("finish", 2);

    function error(msg) {
      errorDiv
        .find("span")
        .html(msg)
        .parent()
        .stop(true, true)
        .show(100)
        .delay(3000)
        .hide(100);
    }
    close.click(function() {
      if ($(this).data("finish") != 2) return;
      _hmt.push(["_setVisitTag", "2357", 1]);
      hideWin();
    });

    function check(el, msg, fn) {
      var def = $.Deferred();
      if (fn()) {
        def.resolve();
      } else {
        def.reject();
        error(msg);
        el.focus();
      }
      return def;
    }

    function checkPhone() {
      return check(phone, "手机号填写有误", function() {
        return zoneCode.data("id") == "86"
          ? /^1\d{10}$/.test(phone.val())
          : /^\d{5,}$/.test(phone.val());
      });
    }

    function checkCode() {
      return check(code, "手机验证码填写有误", function() {
        return /^\d{4,6}$/.test(code.val());
      });
    }

    function checkPwd() {
      return check(pwd, "密码输入有误", function() {
        return /^[\w]{6,}$/.test(pwd.val());
      });
    }

    function checkNick() {
      return check(nick, "昵称输入有误", function() {
        return /^[\u4e00-\u9fa5\w]{2,15}$/.test($.trim(nick.val()));
      });
    }

    function checkPhoneBindStatus(phoneNumber) {
      return $.ajax({
        dataType: "jsonp",
        url: window.authUrl + "/userInfo/query-by-phone",
        data: {
          phone: phoneNumber,
        },
      }).then(function(res) {
        if (res.status > 0) return $.Deferred().reject(res.msg);
        if (res.data.count > 0) {
          return $.Deferred().reject(
            "该手机已绑定了其它帐号<br>请更换手机或解绑其它帐号"
          );
        }
      });
    }

    function sendSms(phoneNumber) {
      _hmt.push(["_setVisitTag", "2387", phoneNumber]);
      return $.ajax({
        dataType: "jsonp",
        url: window.authUrl + "/verify/sms/send",
        data: {
          smsType: 2,
          uniqueId: (uuid = getUUID()),
          phone: phoneNumber,
        },
      }).then(function(res) {
        if (res.status > 0) return $.Deferred().reject(res.msg);
      });
    }

    function register() {
      _hmt.push(["_setVisitTag", "2353", 1]);
      return $.ajax({
        dataType: "jsonp",
        url: window.authUrl + "/login/phone",
        data: {
          phone: zoneCode.data("id") + "-" + phone.val(),
          code: code.val(),
          password: b64_md5(pwd.val()),
          nickname: $.trim(nick.val()),
          inviteCode: channelId,
        },
      }).then(function(res) {
        if (res.status > 0) return $.Deferred().reject(res.msg);
        return res;
      });
    }

    sendBtn.click(function() {
      if ($(this).data("timeout")) return;
      var that = this,
        phoneNumber = zoneCode.data("id") + "-" + phone.val(),
        isSend = false;
      checkPhone()
        .then(function() {
          return checkPhoneBindStatus(phoneNumber);
        })
        .then(function() {
          $(that).data("timeout", 1);
          return sendSms(phoneNumber);
        })
        .then(function() {
          return secoundTimer(60e3, function(t) {
            isSend = true;
            sendBtn.text(parseInt(t / 1000) + "s后重新获取");
            sendBtn.addClass("bind-phone-retry");
          });
        })
        .fail(function(err) {
          if (err) error(err);
        })
        .always(function() {
          $(that).data("timeout", 0);
          isSend && sendBtn.text("重新获取");
        });
    });
    submitBtn.click(function() {
      if ($(this).data("finish") != 2) {
        return;
      }
      var self = this;
      checkPhone()
        .then(checkCode)
        .then(checkPwd)
        .then(checkNick)
        .then(register)
        .then(function(res) {
          if (res.data.token) {
            setCookie("token", res.data.token, 24 * 30 * 6);
            error("注册成功");
            setTimeout(function() {
              location.reload();
            }, 1000);
          } else {
            return res.msg;
          }
        })
        .fail(function(msg) {
          if (msg) error(msg);
        });
    });

    $(".register-pond").show();
  }

  // 公告
  if (!document.cookie.match(/showAnnouncement\=[^;]+/)) {
    $.post("/api/message/getActiveSysNotices")
      .then(function(res) {
        if (res.status > 0 || !res.data.sysNotices)
          return $.Deferred().reject();
        return res.data.sysNotices;
      })
      .then(function(obj) {
        var d = new Date();
        if (+d > obj.endTime || +d < obj.startTime)
          return $.Deferred().reject();
        d.setTime(
          Math.min(+d + obj.intervalTime * 60 * 60 * 1000, obj.endTime)
        );
        document.cookie =
          "showAnnouncement=1;path=/;expires=" + d.toGMTString();
        var def = $.Deferred();
        $('<div id="an-wrap-div"></div>')
          .appendTo(document.body)
          .load("/user/SystemAnnouncement.html", function() {
            def.resolve(obj);
          })
          .on("click", ".an-close-btn", function() {
            $(this)
              .closest("#an-wrap-div")
              .hide();
          });
        return def;
      })
      .then(function(obj) {
        $(".an-title").text(obj.title);
        $(".an-content").html(obj.content);
      });
  }

  // 暴露部分函数到全局
  window.toRegister = toRegister;
  window.toLogin = toLogin;
  window.logout = logout;
});
