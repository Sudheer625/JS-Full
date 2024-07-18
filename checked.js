const myCheckBox = document.getElementById("myCheckBox");
const PhonePay = document.getElementById("PhonePay");
const Paytm = document.getElementById("Paytm");
const COD = document.getElementById("COD");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You Are Notified !`;
    }
    else{
        subResult.textContent = `NOTIFY ERR :`;
    }

    if(PhonePay.checked){
        paymentResult.textContent = `You are Using Phone Pay !`;
    }
    else if(Paytm.checked){
        paymentResult.textContent = `You are  Using Paytm !`;
    }
    else if(COD.checked){
        paymentResult.textContent = `You are Using COD !`;
    }
    else{
        paymentResult.textContent = `PAYMENT ERR :`;
    }
}