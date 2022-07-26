let toggleBtn= ()=>{
    var elemnt = document.querySelector(".mobile-responsive");
    var humMenu = document.querySelector(".humbger_menu ")
  if(elemnt.style.display == "block"){
    elemnt.style.display = "none"

    humMenu.classList.remove("fa-xmark")
    humMenu.classList.add("fa-bars")
    humMenu.style.color="white"

  }else{
    elemnt.style.display = "block"
    humMenu.style.color="gray"


    humMenu.classList.remove("fa-bars")
    humMenu.classList.add("fa-xmark")
}


}





var item = document.getElementById("hide-show")






item.addEventListener('click', function handleClick(event) {

  var icon = document.getElementById("hide-show")
  var items = document.querySelector(".show-on-click");
  console.log("clicked")
  if(items.style.display=="block"){
    items.style.display ="none"
    icon.classList.add("fa-plus")
    icon.classList.remove("fa-minus")
  }
  else{
    items.style.display ="block"
    icon.classList.remove("fa-plus")
    icon.classList.add("fa-minus")
  }

  


  console.log(event.target.childElement.id);
});