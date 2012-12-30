 function SendLR1(num){
  var email=document.getElementById('em').value;
  var amount=document.getElementById('amnt').value;
  var opt=num;
  var comm='Bet on Grid '+opt;
var str='https://sci.libertyreserve.com/en?lr_acc=U9404864&lr_amnt='+amount+'&lr_currency=LRUSD&lr_merchant_ref=&lr_comments='+comm+'&lr_fee_amnt=0.00&lr_merchant_ref='+email+'&pay_id='+opt+'&lr_success_url=http://testnewsponsor.blogspot.com/p/successful.html&lr_success_url_method=GET&lr_fail_url=http://testnewsponsor.blogspot.com/p/fail.html&lr_fail_url_method=GET';
  window.location.href=str;
	 }
	 
 function SendPM1(num){
  var email=document.getElementById('em').value;
  var amount=document.getElementById('amnt').value;
  var opt=num;
  var comm='Bet on Grid '+opt;
   document.pm.PAYMENT_AMOUNT.value = amount;
   document.pm.PAYMENT_ID.value = opt;
   document.pm.SUGGESTED_MEMO.value = comm;
   document.pm.COMMENT.value = comm;
   document.pm.EMAIL.value = email;
   document.pm.submit(); 
	 } 
	 
 function $(id){
return document.getElementById(id); 
} 

function clos(el){
var c=$(el);	 
if(c.style.display=='block'){	 
c.style.display='none';
  }else{
	c.style.display='block';
	  }	 	   
}		

var UDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var UMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
function UDate() {
var tm=new Date();
var d=tm.getUTCDay();
var day = tm.getUTCDate();
var mon = tm.getUTCMonth();
var year = tm.getFullYear();
document.getElementById('date').innerHTML=UDay[d]+', '+year+', '+UMonth[mon]+' '+day;
} 

function startTime()
{
var tm=new Date();
var h=tm.getUTCHours();
var m=tm.getUTCMinutes();
var s=tm.getUTCSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML="Current UTC Time: "+h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}	  