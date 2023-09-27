el=['input[type=text]']



for (let index2 = 0; index2 < el.length; index2++) {



const bound=document.querySelectorAll(el[index2])


for (let index = 0; index < bound; index++) {
    

bound[index].addEventListener("onmouseover", () => {
  make_all_undraggagle()
});



bound[index].addEventListener("onmouseout", () => {
  if(localStorage.draggable=='true'){make_all_draggagle()}
});


}




}
