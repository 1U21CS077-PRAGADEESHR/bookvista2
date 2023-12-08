//selecting addbutton popupbox popupoverlay
var popupbox= document.querySelector(".popupbox")
var popupoverlay=document.querySelector(".popupoverlay")
var addbutton=document.querySelector(".addbutton")

addbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

//selecting "cancelbook"
var cancelbook=document.getElementById("cancelbook")

cancelbook.addEventListener("click",function(event){
    event.preventDefault()

    popupbox.style.display="none"
    popupoverlay.style.display="none"

})
//selecting container addbook book-title-input book-author-input book-description-input

var container = document.querySelector(".container")
var addbook = document.getElementById("addbook")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput= document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){

    event.preventDefault()
    var div= document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h1 style="color: rgb(140, 210, 35);">${booktitleinput.value}</h1>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletei(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})
    function deletei(event){
        event.target.parentElement.remove()

    }


