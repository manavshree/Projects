let imgBox=document.querySelector('#imgBox');
let qrImage=document.querySelector('#qrImage');
let userInput=document.querySelector('#userInput');

function genearateQrCode(){
     qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+userInput.value;
}

qrImage