function askMyName() {
    const name = prompt("Please enter your name",);
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("name").innerHTML
    alert(h1message + ' เลิกกับพี่ ได้ดีทุกคน')
 }