document.body.innerHTML += `
<div class="overlay" id="overlay"></div>
<div class="popup" id="popup">
<h2 id="popupText"></h2>
<button onclick="closePopup()">ok</button>
</div>`

document.head.innerHTML += `<link rel="stylesheet" href="https://p0pup.playcode.io/style.css">`

function show(text){
    document.getElementById("popupText").textContent = text
    document.getElementById("popup").style.display = 'block'
    document.getElementById("overlay").style.display = 'block'
    
}

function closePopup() {
    document.getElementById("overlay").style.display = 'none'
    document.getElementById("popup").style.display = 'none'

}