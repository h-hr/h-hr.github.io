function xhr(url){
const request = new XMLHttpRequest();
request.open('GET', url, false);
request.send(null);
if (request.status === 200) {
return request.responseText
}}function appscript(code){
url='https://script.google.com/macros/s/AKfycbxAYp0OKjti6x5wwh1dv0TU0rvG8EA23vKy2Wo4-r_tL5dqhdeoR45gE6avD4aTDcvwxw/exec?code='
url=url+encodeURIComponent(code)
return xhr(url)
}
