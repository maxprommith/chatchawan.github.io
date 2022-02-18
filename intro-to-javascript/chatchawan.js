function askMyName() {
    const name = prompt("Please enter your name");
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
   const h1message = document.getElementById("name").innerHTML
      alert(h1message + ' เลิกกับพี่ ได้ดีทุกคน')                   
 }

 function calAge() {
   const BirthYear = Number(prompt("กรอกปีเกิดของคุณ (ค.ศ.) "));
   const year = new Date().getFullYear()
   const age = year - BirthYear
   alert(`ยินดีด้วย! คุณอยู่บนโลกนี้มา ${age} ปีแล้ว`)
}

function loadProfile() {
   const name = "Chatchawan"
   const province = "Chiang Mai"
   document.getElementById("my-name").innerHTML = name
   document.getElementById("my-province").innerHTML = province
}