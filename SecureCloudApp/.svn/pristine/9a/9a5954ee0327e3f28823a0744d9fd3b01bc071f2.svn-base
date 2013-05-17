// JavaScript Document


//登陆弹框
$(function(){
  $("#uedcool").popup();
  $("#welcome_lb").hide();
  
  
  $.ajax({
         url:"http://192.168.1.134/SecureCloud.svc/GetInfoWeb",
         type:'get',
         contentType:'application/json',
         data:'',
         success:function(result){
         
         var sb = new StringBuffer();
         
         $.each(result.d,function(i,item){
                
                sb.append("<li>·<a href='"+item.WebUrl+"' target='_blank'>"+item.Title+"</a></li>");
                });
         var content = sb.toString();
         $("#newslist").html(content);
         }
  
         });
  
  
  });
function StringBuffer(){
    this.data = [];
}
StringBuffer.prototype.append = function(){
    this.data.push(arguments[0]);
    return this;
}
StringBuffer.prototype.toString = function(){
    return this.data.join("");
}
   
   


function login(){
    
    var un = $("#un").val().trim();
    var pw = $("#pw").val();
    
    var res="";
    
    var user = {"Name":un,"Password":pw};
    
    var user = "s="+JSON.stringify(user);
    
    if(un==""||pw==""){
        document.getElementById("mes").innerHTML="帐户和密码不能为空。";
        return;
    }
    
    $.ajax({
           url:"http://192.168.1.134/SecureCloud.svc/Check",
           type:'get',
           contentType:'application/json',
           data:user,
           success:function(result){
                res = result.d;
           
                if(res=="false"){
                    document.getElementById("mes").innerHTML="帐户或密码不正确。";
                }
                else if(res=="true"){           
                    $("#uedcool").popup("close");
                    $("#login_link").hide();
                    document.getElementById("welcome_lb").innerHTML="欢迎您，"+un;
                    $("#welcome_lb").show();
                }

           }
                              
    });
    //alert("success");
}