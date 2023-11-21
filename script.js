let button=document.querySelector('#btn');
let Color=document.querySelector('#colorname');
let colorvalue=()=>{
    return Math.floor(Math.random()*256); // Math.random range --> (0-1)
}

let randomcolor=()=>{
    let colorchange=`rgb(${colorvalue()},${colorvalue()},${colorvalue()})`;
    document.body.style.backgroundColor=colorchange;
    Color.innerHTML=colorchange; // this will print the color value on screen
}
let time=setInterval(randomcolor,3000); /*setInterval automatically changes the color */
button.addEventListener('click',randomcolor); //on button click
window.addEventListener('load',randomcolor); //on window load