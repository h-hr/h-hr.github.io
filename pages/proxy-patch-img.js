function patch(element){

do_times=document.querySelectorAll(element).length


for (let index = 0; index < do_times; index++) {

csd=document.querySelectorAll(element)[index].outerHTML.split('src')
csd[1]=csd[1].split('=')
l_one=csd[1][1][1]
if(l_one=='/'){document.querySelectorAll(element)[index].src='https://'+decodeURIComponent(window.location.hash.slice(1))+document.querySelectorAll(element)[index].src.slice(window.location.origin.length)}

}


}