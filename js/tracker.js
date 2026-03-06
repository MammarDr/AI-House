function updatetracker(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let id=document.getElementById("studentid").value
let dept=document.getElementById("department").value

let step1=document.getElementById("dot1")
let step2=document.getElementById("dot2")
let step3=document.getElementById("dot3")
let step4=document.getElementById("dot4")

step1.style.background=name ? "#027e02" : "#1b2742"
step2.style.background=email ? "#FF7D04" : "#1b2742"
step3.style.background=id ? "#027e02" : "#1b2742"
step4.style.background=dept ? "#FF7D04" : "#111827"

}