

function xhr(url){
const request = new XMLHttpRequest();
request.open('GET', url, false);
request.send(null);
if (request.status === 200) {
return request.responseText
}}function appscript(code){
url='https://script.google.com/macros/s/AKfycbyEzrfkG0sbMABXPzOYYTyL97_A9KzCrSNg1fBKB1VUpl_t5wrWiE92TWf93gBuI8I_kA/exec?code='
url=url+encodeURIComponent(code)
return xhr(url)
};


url2='https://google.com'
html=appscript('fetch("'+url2+'")')
inject='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><base href="'+url2+'"'+'>'
html=html.replace('<head>','<head>'+inject)
document.querySelector('html').innerHTML=html

