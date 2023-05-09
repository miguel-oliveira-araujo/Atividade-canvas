
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
    ctx.fillStyle ='red';
    ctx.fillRect(10,10,1500,1000);


    ctx.fillStyle ='white';
    ctx.fillRect(300,250,300,100);



     ctx.fillStyle='black';
     ctx.beginPath();
     ctx.arc(250,80,50,0,Math.PI*2)
     ctx.fill();

     ctx.fillStyle='white';
     ctx.beginPath();
     ctx.arc(75,75,50,0,Math.PI*1)
     ctx.stroke();

     ctx.fillStyle='blue';
     ctx.beginPath();
     ctx.moveTo(25,25);
     ctx.lineTo(500,25);
     ctx.stroke();

var imagem = new Image();
imagem.onload=function(){
ctx.drawImage(this, 18, 150);}
imagem.src = 'img/nm.jpg';