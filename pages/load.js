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
function load_url(url){var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://script.google.com/macros/s/AKfycby39I9blZQj-sJKUFXbR8y8y61nNIH7_ZGkDymgrbPu9IAFHhVt2FSRiFXcS3Kb8m18/exec?url="+url, requestOptions)
  .then(response => response.text())
  .then(result => load(result))
  .catch(error => console.log('error', error));}
