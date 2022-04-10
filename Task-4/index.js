
function hesabla(){
    let deger = document.getElementById('input_1').value;
    let ay = document.getElementById('input_2').value;
    let faiz = document.getElementById('input_3').value;  
    console.log(ay);
    deger=Number(deger);
    ay=Number(ay);
    faiz=Number(faiz);
    

    let cem = ((deger * faiz)/100)*(ay/12);
    document.getElementById('domain').innerHTML = cem;
    let monthly = (Number(deger + cem)/ay);
    document.getElementById('domain_2').innerHTML = monthly;
}