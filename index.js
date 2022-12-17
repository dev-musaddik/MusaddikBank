
console.log('musaddik');
document.body.style.background="red";
let second_work=document.getElementById('second_section');
let login_area=document.getElementById('login_area');
document.getElementById('submit_btn').addEventListener('click',function(){
   login_area.style.display="none";
   second_work.style.display="block";
});

/////////////////////////////////////////////deposit money 

document.getElementById('add_money_submit').addEventListener('click',function(){

   var usr_add_value=parseFloat(document.getElementById('add_money').value);
   // document.getElementById('show_deposit_money').innerHTML=usr_add_money;
   var usr_add_money_innerhtml= parseFloat(document.getElementById('show_deposit_money').innerHTML);
   if(usr_add_value>-1){
      document.getElementById('show_deposit_money').innerHTML=usr_add_value+usr_add_money_innerhtml;
     }
    else if(usr_add_value<0){
      alert("you give negative number!");
     }
   else{
      alert('something error ,try again');
      document.getElementById('show_deposit_money').innerHTML=usr_add_money_innerhtml;
   }

   var deposit_balance =usr_add_value;
   document.getElementById('add_money').value ="";
   
   // document.getElementById('show_total_money').innerHTML=deposit_balance;
 var total_balance=parseFloat(document.getElementById('show_total_money').innerHTML);
 if(deposit_balance>-1){
   var total_balance_plus=deposit_balance + total_balance;
 }
 else{ 
   deposit_balance= deposit_balance;
  total_balance_plus= total_balance;
  
 }
  document.getElementById('show_total_money').innerHTML=total_balance_plus;
  deposit_balance=0;

});


//////////////////////////////////////////////////////////withdraw money

document.getElementById("remove_money_submit").addEventListener('click',function (){
   var withdraw_money=parseFloat(document.getElementById('remove_money').value);
   document.getElementById('remove_money').value="";
   var total_balance=parseFloat(document.getElementById('show_total_money').innerHTML);
   var new_balance;
   var new_show_withdraw_money;
   var show_withdraw_money=parseFloat( document.getElementById("show_withdraw_money").innerHTML);
    if(withdraw_money>-1){
      new_balance=total_balance-withdraw_money;
      new_show_withdraw_money = show_withdraw_money +  withdraw_money ;
      if(new_balance <0){
         alert('not enough balance');
         new_balance=total_balance;
         new_show_withdraw_money = show_withdraw_money;
      }
      if(new_balance <30){
       alert('you have very little money ');
      }
      
    }
    else if(withdraw_money<0){
      alert("you give negative number!");
     }
    else{
      new_show_withdraw_money=show_withdraw_money;
      new_balance=total_balance;
      alert('something error ,try again');
    }
    document.getElementById("show_withdraw_money").innerHTML=new_show_withdraw_money;
    document.getElementById('show_total_money').innerHTML=new_balance;
});

