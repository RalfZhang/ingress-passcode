var redcode__wst = [
    ];
var i=0;
var t_val = setInterval(function()
{
 console.log(redcode__wst[i]);
 document.getElementById("passcode").value= redcode__wst[i];
 document.getElementById("submit").click();
 if(i++> redcode__wst.length) {
  clearInterval(t_val);
 }
}
,10000+Math.random()*30000);