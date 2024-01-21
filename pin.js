function getpin(){
    const pin=generatepin();
    const pinString=pin+'';

    if(pinString.length ===4){
        return pin;
    }else{
        return getpin();
    }
}

function generatepin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const PIN=getpin();
    const inputpin=document.getElementById('input-field');
    inputpin.value=PIN;
})

document.getElementById('calculator').addEventListener('click', function(event){
 const number=event.target.innerText;
 const previoustypenumber=document.getElementById('input-');
 const inputtypefeild=previoustypenumber.value;
 if(isNaN(number)){
    if(number==='C'){
        previoustypenumber.value='';
    }else if(number==='<'){
      const digits=inputtypefeild.split('');
      digits.pop();
      const remaingnumber=digits.join('');
      previoustypenumber.value=remaingnumber;
    }
}else{
 const newtypenumber=inputtypefeild+number;
    previoustypenumber.value=newtypenumber;
}

})
document.getElementById('submit-').addEventListener('click', function(){
    const displayfeild=document.getElementById('input-field');
    const display=displayfeild.value;

    const inputfield=document.getElementById('input-');
    const inputt=inputfield.value;

    const pinmessagesuccess=document.getElementById('success');
    const pinmessagfailure=document.getElementById('failure');


    if(display===inputt){
        
        pinmessagesuccess.style.display='block';
         pinmessagfailure.style.display='none';
        

    }else{
       
        pinmessagfailure.style.display='block';
        pinmessagesuccess.style.display='none';
        
    }
})