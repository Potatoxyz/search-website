var iscount=0;
var iscount2=0;
/*选择类型*/
var sendtype = $('.kind-btn.chosed').attr('data-kind');			//保留选择的信息类型
console.log(sendtype);
$('.kind .kind-btn').click(function () {
    $('.kind .kind-btn').removeClass('chosed');
    $(this).addClass('chosed');
    console.log($(this).attr("data-kind"))
    if($(this).attr("data-kind") == "其他"){
        $('#search').attr('placeholder','请输入您要查询的内容')
    }else{
        $('#search').attr('placeholder','请输入您要查询的'+$(this).attr("data-kind"))
    }
    var getword = $(this).attr('data-kind');
    sendtype = getword;
});

$(".jubao-btn").click(function(){
    $(".gray-bc").show();
    $(".alert-jubao").show();
    $(".jubao-box").show();
})

//随机生成字符串
function random(length) {
    var str = Math.random().toString(36).substr(2);
    if (str.length >= length) {
        return str.substr(0, length);
    }
    str += random(length - str.length);
    return str;
}

//对象 ascall排序
function sort_ASCIIToString(obj) {
    var arr = new Array();
    var num = 0;
    for (var i in obj) {
        arr[num] = i;
        num++;
    }
    var sortArr = arr.sort();
    var sortObj = {};
    for (var i in sortArr) {
        sortObj[sortArr[i]] = obj[sortArr[i]];
    }
    var sortObjStr = JSON.stringify(sortObj);
    sortObjStr = sortObjStr.replace(/,/g, "&");
    sortObjStr = sortObjStr.replace(/:/g, "=");
    sortObjStr = sortObjStr.replace(/{/g, "");
    sortObjStr = sortObjStr.replace(/}/g, "");
    sortObjStr = sortObjStr.replace(/"/g, "");
    return sortObjStr;
}
//添加新的cookie
function addCookie(objName,objValue){
    var objHours = 24*30*12
    var str = objName + "=" + escape(objValue);

    //为0时不设定过期时间，浏览器关闭时cookie自动消失
    if(objHours > 0){
        var date = new Date();
        var ms = objHours*3600*1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toString();
    }
    document.cookie = str;
};
//获取指定名称的cookie的值
function getCookie(objName){
    var arrStr = document.cookie.split("; ");
    for(var i = 0;i < arrStr.length;i ++){
        var temp = arrStr[i].split("=");
        if(temp[0] == objName) return unescape(temp[1]);
    }
};
function numberChange(){
    $('.counter').countUp();
}
/*数值增加*/
window.onload=function(){
    var num1_value='';
    var num2_value='';
    if(getCookie("num1_value_bdcq6") && getCookie("num1_value_bdcq6") !=''&& getCookie("num2_value_bdcq6") !=''){
        num1_value=getCookie("num1_value_bdcq6");
        num2_value=getCookie("num2_value_bdcq6");
        num1_value=num1_value.toString()
        num2_value=num2_value.toString()
        var html_1=''
        var html_2=''
        console.log(num1_value.length)
        for(var i=0;i<num1_value.length;i++){
            html_1 +='<span class="num num_1">'+num1_value[i]+'</span >'
        }
        for(var i=0;i<num2_value.length;i++){
            html_2 +='<span class="num num_2">'+num2_value[i]+'</span >'
        }
        $("#num1").text('');
        $("#num1").html(html_1);

        $("#num2").text('');
        $("#num2").html(html_2);
    }else{
        console.log("none")
        num1_value=4951;
        num2_value=6432;
        addCookie("num1_value_bdcq6",num1_value);
        addCookie("num2_value_bdcq6",num2_value);
        num1_value=num1_value.toString()
        num2_value=num2_value.toString()
        var html_1=''
        var html_2=''
        console.log(num1_value.length)
        for(var i=0;i<num1_value.length;i++){
            html_1 +='<span class="num num_1">'+num1_value[i]+'</span >'
        }
        for(var i=0;i<num2_value.length;i++){
            html_2 +='<span class="num num_2">'+num2_value[i]+'</span >'
        }
        $("#num1").text('');
        $("#num1").html(html_1);

        $("#num2").text('');
        $("#num2").html(html_2);
        num1_value *= 1;
        num2_value *= 1;
    }
    window.setInterval(function () {
        var num1_value=getCookie("num1_value_bdcq6");
        var num2_value=getCookie("num2_value_bdcq6");
        num1_value++;
        num2_value++;
        addCookie("num1_value_bdcq6",num1_value);
        addCookie("num2_value_bdcq6",num2_value);
        /* document.getElementById("num1_value").innerHTML = num1_value;
         document.getElementById("num2_value").innerHTML = num2_value;*/
        num1_value=num1_value.toString()
        num2_value=num2_value.toString()
        var html_1=''
        var html_2=''
        console.log(num1_value.length)
        for(var i=0;i<num1_value.length;i++){
            html_1 +='<span class="num num_1">'+num1_value[i]+'</span >'
        }
        for(var i=0;i<num2_value.length;i++){
            html_2 +='<span class="num num_2">'+num2_value[i]+'</span >'
        }
        $("#num1").text('');
        $("#num1").html(html_1);

        $("#num2").text('');
        $("#num2").html(html_2);
    }, 10000);
}


function checkParameterone() {
    var getname = document.getElementById("name").value;
    var getphone = document.getElementById("phone").value;
    // var verify = $("#code").val();
    if (getname.length < 1) {
        // alert('用户名不能为空！');
        layer.msg('请输入您的姓名！');
        $("#name").focus();
        return;
    }
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(getphone)) {
        // alert('手机号格式不正确！');
        layer.msg('请正确输入您的手机号！');
        $("#phone").focus();
        return false;
    }
   /* if(verify.length != 6){
        layer.msg('请输入六位验证码！');
        $("#code").focus();
        return false;
    }*/
    var redomNum = random(32);
    var data = {};
    data.name = getname;
    data.mobile = getphone;
    data.platform = '影视平台查询中心-百度长齐-' + sendtype;
    data.title = $("#chaxun-name").text();
    data.types = 4;			//来源管理辨识
    data.from_url = encodeURIComponent(window.location.href);
    data.timestamp = Date.parse(new Date()) / 1000;
    data.nonce = redomNum;
    // data.verify = verify;
    data.sign = md5(sort_ASCIIToString(data));
    // console.log(data)
    $.ajax({
        url: "http://tg.xiaoyingtou.com/api/index/setuserdata",
        data: data,
        type: "POST",
        async: false,
        success: function (req) {
            var res = JSON.parse(req);
            if (res.code == 200) {
                $('#myModal').fadeOut();
                $('.alert-myModal').fadeOut();
                $('#search,#name,#phone,#code').val('');
                $(".tip-box").fadeIn()
                setTimeout(function () {
                    $(".tip-box").fadeOut()
                    $('.gray-bc').hide();
                },2000)
            } else {
                $('#myModal').fadeOut();
                $('#search,#name,#phone,#code').val('');
                $('.alert-myModal').fadeOut();
                $('.gray-bc').hide();
                layer.msg(res.note);
            }
        },
        error: function (req) {
            var res = JSON.parse(req);
            console.log(req.note);
            layer.msg(res.note);
        }
    })

}


function ajaxcallback1(data) {
    // console.log(data);
    if (data.code >= 0) {
        alert(data.msg);
        $("#phone").val('');
        $("#name").val('');
        $("#myModal").hide();
        $(".alert-myModal").hide();
    }
}

function showJubao(){
    $(".gray-bc").show();
    $(".jubao-box").show();
}
/*举报*/
function tojubao() {
    var timestamp = Date.parse(new Date()) / 1000;
    var name = $("#jubao-name").val();
    var mobile = $("#jubao-phone").val();
    var content = $("#jubao-text").val();
    var platform =59;
    var redomNum = random(32);
    // var verify = $("#code2").val();
    var data={};
    if(content == ''){
        layer.msg('请输入您想举报的内容！');
        $("#jubao-text").focus();
        return;
    }
    if (name.length < 1) {
        // alert('用户名不能为空！');
        layer.msg('请输入您的姓名！');
        $("#jubao-name").focus();
        return false;
    }
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(mobile)) {
        // alert('手机号格式不正确！');
        layer.msg('请正确输入您的手机号');
        $("#jubao-phone").focus();
        return false;
    }
  /*  if(verify.length !=6){
        layer.msg('请输入六位验证码');
        $("#code2").focus();
        return false;
    }*/
    data.timestamp=timestamp;
    data.nonce = redomNum;
    data.mobile = mobile;
    data.name = name;
    data.content = content;
    data.platform = platform;
    // data.verify = verify;
    data.sign =md5(sort_ASCIIToString(data));
    $.ajax({
        url: "http://tg.xiaoyingtou.com/api/index/setreport",
        //url: domain + "/v1/user/setnoticeread",
        data: data,
        type: "POST",
        async: false,
        success: function (req) {
            var res = JSON.parse(req);
            if (res.code == 0) {
                $('.jubao-box').fadeOut();
                $('#jubao-text,#jubao-name,#jubao-phone,#code2').val('');
                $("#tip").html("提交成功！");
                $(".jubao-box").hide()
                $(".alert-jubao").hide()
                $(".tip-box").fadeIn()
                setTimeout(function () {
                    $(".tip-box").fadeOut()
                    $('.gray-bc').hide();
                },2000)
            } else {
                $('.jubao-box').fadeOut();
                $('.gray-bc').hide();
                $('#jubao-text,#jubao-name,#jubao-phone,#code2').val('');
                layer.msg(res.note);
            }
        },
        error: function (req) {
            var res = JSON.parse(req);
            console.log(req.note);
            layer.msg(res.note);
        }
    })
}

/*换一批*/
function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}
// var ArrList=["双生","唐人街探案3","攀登者","流浪地球","前任3","美国邀请函","蒸汽世界","小城故事","囧妈"];


$(".close-btn").click(function () {
    $(".gray-bc").hide();
    $(".alert").hide();
    $("#myModal").hide();
    $(".jubao-box").hide();
    $(".alert-jubao").hide();
    $("#phone").val('');
    $("#name").val('');
    $("#jubao-name").val('');
    $("#jubao-phone").val('');
    $("#jubao-text").val('');
    $(".error-input").removeClass("error-input");
})

/*开始查询*/
$("#begin").click(function () {
    var keyword = $("#search").val();
    if (keyword == '') {
        layer.msg('请输入您的查询内容！');
        $("#search").focus();
        return;
    } else {
        $(".chaxun-name").text($("#search").val());
        $(".gray-bc").show();
        $("#myjia").show();
        $(".keyword").text(keyword);
        $(".progress-bar").animate({
            width: "99%"
        }, 1500);
        var count = 0;
        var timer = setInterval(function () {
            count++;
            if (count >= 60) {
                clearInterval(timer);
                $("#myjia").hide();
                $("#myModal").show();
                $(".alert-myModal").show();
                $(".progress-bar").animate({width: "2%"});
                // $(".progress-bfb").text("0%");
            }
            var x= $(".progress-bar").width();
            var y= $(".progress").width();
            var z=parseInt(x/y*100) ;
            $(".progress-bfb").text(z+"%");
        }, 60)
    }
});
/*获取验证码*/
function getCode() {
    var mobile = $("#phone").val();
    var title = $("#search").val();
    var getname = $("#name").val();
    if (getname.length < 1) {
        // alert('用户名不能为空！');
        layer.msg('请输入您的姓名！');
        $("#name").focus();
        return;
    }
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(mobile)) {
        // alert('手机号格式不正确！');
        /*  $('#tel'+i).val('').addClass('error-input').attr('placeholder', '请正确输入您的手机号')*/
        layer.msg('请输入正确的手机号码！');
        $("#phone").focus();
        return false;
    }
    //倒数计时函数
    function resetTime(time) {
        iscount = 1;
        var timer = null;
        var t = time;
        var m = 0;
        var s = 0;
        m = Math.floor(t / 60 % 60);
        m < 10 && (m = '0' + m);
        s = Math.floor(t % 60);

        function countDown() {
            s--;
            s<10&&(s='0'+s);
            if(s.length>=3){
                s=59;
                m="0"+(Number(m)-1);
            }
            if(m.length>=3){
                m='00';
                s='00';
                // $('.send-btn').text('获取验证码')
                // clearInterval(timer);
            }
            $('#getCode').text('已发送（'+s+'）'+'s')
            if(s=='00'){
                $('#getCode').text('获取验证码')
                clearInterval(timer);
                iscount=0;
                // $("#getCode").css("background-color","#4D92FF")
            }
        }
        timer=setInterval(countDown,1000);
    }
    if(iscount==0){
        resetTime(60)
        // $("#getCode").css("background-color","#5F88C9")
        //请求验证码接口
        var nonce = random(32);
        var timestamp = Date.parse(new Date()) / 1000;
        var data={};
        data.mobile=mobile;
        data.nonce = nonce;
        data.timestamp = timestamp;
        data.platform = 59;
        data.sign = md5(sort_ASCIIToString(data));
        $.ajax({
            url: "http://tg.xiaoyingtou.com/api/index/sendsms",
            data: data,
            type: "POST",
            async: false,
            success: function (req) {
                var res = JSON.parse(req);
                if (res.code == 200) {
                } else {

                }
            },
            error: function (req) {
                console.log(req.note);
            }
        })
    }else{
        console.log('已经在倒数计时了')
    }
}

/*获取验证码*/
function getjubaoCode() {
    var mobile = $("#jubao-phone").val();
    var getname = $("#jubao-name").val();
    var jubao_text = $("#jubao-text").val();
    if (getname.length < 1) {
        // alert('用户名不能为空！');
        layer.msg('请输入您的姓名！');
        $("#jubao-name").focus();
        return;
    }
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(mobile)) {
        // alert('手机号格式不正确！');
        /*  $('#tel'+i).val('').addClass('error-input').attr('placeholder', '请正确输入您的手机号')*/
        layer.msg('请输入正确的手机号码！');
        $("#jubao-phone").focus();
        return false;
    }
    //倒数计时函数
    function resetTime(time) {
        iscount2 = 1;
        var timer = null;
        var t = time;
        var m = 0;
        var s = 0;
        m = Math.floor(t / 60 % 60);
        m < 10 && (m = '0' + m);
        s = Math.floor(t % 60);

        function countDown() {
            s--;
            s<10&&(s='0'+s);
            if(s.length>=3){
                s=59;
                m="0"+(Number(m)-1);
            }
            if(m.length>=3){
                m='00';
                s='00';
                // $('.send-btn').text('获取验证码')
                // clearInterval(timer);
            }
            $('#getCode2').text('已发送（'+s+'）'+'s')
            // $('#getCode2').css("background-color","#5F88C9")
            if(s=='00'){
                $('#getCode2').text('获取验证码')
                clearInterval(timer);
                iscount2=0;
                // $('#getCode2').css("background-color","#4D92FF")
            }
        }
        timer=setInterval(countDown,1000);
    }
    if(iscount2==0){
        resetTime(60)
        //请求验证码接口
        var nonce = random(32);
        var timestamp = Date.parse(new Date()) / 1000;
        var data={};
        data.mobile=mobile;
        data.nonce = nonce;
        data.timestamp = timestamp;
        data.platform = 59;
        data.sign = md5(sort_ASCIIToString(data));
        $.ajax({
            url: "http://tg.xiaoyingtou.com/api/index/sendsms",
            data: data,
            type: "POST",
            async: false,
            success: function (req) {
                var res = JSON.parse(req);
                if (res.code == 200) {
                } else {

                }
            },
            error: function (req) {
                console.log(req.note);
            }
        })
    }else{
        console.log('已经在倒数计时了')
    }
}

$(".hot_search").on("click","span",function () {
    var keyword=$(this).text();
    $(".chaxun-name").text($(this).text());
    console.log($(this).text())
    // return
    $(".gray-bc").show();
    $("#myjia").show();
    $(".keyword").text(keyword);
    $(".progress-bar").animate({
        width: "99%"
    }, 1500);
    var count = 0;
    var timer = setInterval(function () {
        count++;
        if (count >= 60) {
            clearInterval(timer);
            $("#myjia").hide();
            $("#myModal").show();
            $(".alert-myModal").show();
            $(".progress-bar").animate({width: "2%"});
            // $(".progress-bfb").text("0%");
        }
        var x= $(".progress-bar").width();
        var y= $(".progress").width();
        var z=parseInt(x/y*100) ;
        $(".progress-bfb").text(z+"%");
    }, 60)
})