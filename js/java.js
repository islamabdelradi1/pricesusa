var form =document.getElementById("form");
var btn =document.getElementById("btn");
btn.addEventListener("click",forms)

function forms(e) {
    fetch('https://api.exchangerate.host/latest')
    .then(ress => ress.json())
    .then( data => {
        var inp=document.getElementById("inp").value.toUpperCase();
        var price = data.rates[inp]
        var kam=document.getElementById("kam"); 
        var titles=document.getElementById("titles"); 

            if (price !== undefined) {
                kam.innerHTML=`${price.toFixed(3)} ${inp}`;
                titles.innerHTML='USA To'  + " " + inp
            }else{
                kam.innerText="Filed";
            }  
            return false;    
    })
    e.preventDefault()

}