



function load(htmll) {
document.body.onload='';

  const myWindow = window.open("", "_self");
	
        g='\x3Cscript type="text/javascript" src="html.js">\x3C/script>'

	htmll=htmll+g

  myWindow.document.write(htmll);
document.querySelectorAll('html')[0].innerHTML=htmll

//myWindow.eval(`for (var count = 0; count < document.querySelectorAll('script').length; count++) {eval(document.querySelectorAll('script')[count].innerHTML)}`)//
   
	
   for (var count = 0; count < document.querySelectorAll('script').length; count++) {myWindow.eval(document.querySelectorAll('script')[count].innerHTML)}

	
	
	
	
  if(count==document.querySelectorAll('script').length){
  
	  if(typeof deldel=='undefined'){document.querySelectorAll('script')[document.querySelectorAll('script').length-1].remove()} else{setTimeout(deldel, 0000)}
	  

  
  }




}




function windowlocationhash(hashh) { thash=0; while (window.location.hash.slice(2)[thash] != '/') {thash++} thash=thash+4; if (typeof hashh!='undefined'){window.location.hash=window.location.hash.slice(0,-(window.location.hash.slice(thash).length))+hashh}; return decodeURIComponent(window.location.hash.slice(thash)); };
function deldel() {
if(document.body.onload!=null){document.body.onload()}
};



function hash(hash_id,value){

hashlist=window.location.hash.split('#');


if(typeof value=='undefined'){

if(isNaN(parseInt(hashlist[hash_id+1]))==false){return parseInt(hashlist[hash_id+1]) }
else{return decodeURIComponent(hashlist[hash_id+1])}

}
else{hashlist[hash_id+1]=value;
window.location.hash=hashlist.join('#')
}


window.location.hash=decodeURIComponent(window.location.hash);
}


function replace_src(image){
image.onerror=''
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(image.id, requestOptions)
  .then(response => response.text())
  .then(result => image.src=result)
  .catch(error => console.log('error', error));


}

