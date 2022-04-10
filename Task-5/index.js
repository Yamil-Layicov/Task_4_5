let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');
let zero = document.getElementById('zero');
 
  let value = 0;
  
increase.addEventListener('click',function(){
    value+=1;
    zero.innerHTML = value;
    zero.style.color = 'green';
})

reset.addEventListener('click',function(){
    value = 0;
    zero.innerHTML = value;
    zero.style.color = 'black';
})

decrease.addEventListener('click',function(){
    value-=1;
    zero.innerHTML = value;
    zero.style.color = 'red';
})