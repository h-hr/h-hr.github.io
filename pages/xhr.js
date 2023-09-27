function xhr(url){
const request = new XMLHttpRequest();
request.open('GET', url, false);
request.send(null);
if (request.status === 200) {
return request.responseText
}
}
