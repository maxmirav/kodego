let btn = document.getElementById("btn-rate");
let para = document.getElementById("output");

btn.addEventListener("click", () => {
    let rates = document.getElementsByName("rate");
    //alert(rates);

    rates.forEach( (rate) => {
        if(rate.checked){
            document.getElementById("output").innerHTML = `You selected ${rate.value}`;
        }
    })
})

let btn2 = document.getElementById("btn-count");

btn2.addEventListener("click", () =>{
    let heading = document.getElementsByTagName("h2");
    alert(heading.length);

})

let menu = document.getElementById("menu");                  //parent element
let items = menu.getElementsByClassName("item");             //descendant element


//------------list descendant elements using MAP-----------------------------------//
let myArray = document.getElementsByTagName("li");

//use empty array [] to iterate HTML collections
let list = [].map.call( items, i => { return i.textContent});
console.log(list);
//////////////STUFF ABOVE IS VERY IMPORTANT///////////////////////////////////////