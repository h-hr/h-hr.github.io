ll={"sq":"Albanian","am":"Amharic","ar":"Arabic","hy":"Armenian","az":"Azerbaijani","eu":"Basque","be":"Belarusian","bg":"Bulgarian","ca":"Catalan","zh_tw":"Chinese (Traditional)","hr":"Croatian","cs":"Czech","da":"Danish","nl":"Dutch","en":"English","eo":"Esperanto","et":"Estonian","fi":"Finnish","fr":"French","gl":"Galician","de":"German","el":"Greek","ht":"Haitian Creole","hi":"Hindi","hu":"Hungarian","is":"Icelandic","id":"Indonesian","ga":"Irish","it":"Italian","ja":"Japanese","kn":"Kannada","ko":"Korean","ku":"Kurdish (Kurmanji)","la":"Latin","lv":"Latvian","lt":"Lithuanian","mk":"Macedonian","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Maori","mr":"Marathi","mn":"Mongolian","my":"Myanmar (Burmese)","fa":"Persian","pl":"Polish","pt":"Portuguese","ro":"Romanian","ru":"Russian","gd":"Scots Gaelic","sr":"Serbian","sk":"Slovak","sl":"Slovenian","es":"Spanish","sv":"Swedish","te":"Telugu","th":"Thai","tr":"Turkish","uk":"Ukrainian","uz":"Uzbek","vi":"Vietnamese","cy":"Welsh","zu":"Zulu","he":"Hebrew","zh_cn":"Chinese (Simplified)"};

function xhr(url){
const request = new XMLHttpRequest();
request.open('GET', url, false);
request.send(null);
if (request.status === 200) {
return request.responseText
}
}
function grn(rn){return Math.floor(Math.random()*rn)}

function translate(lang,text){

return JSON.parse(xhr(`https://${['translate-service.scratch.mit.edu/translate','trampoline.turbowarp.org/translate/translate'][grn(2)]}?language=${lang}&text=${text}`)).result

}
result=[];
for (let index = 0; index < Object.keys(ll).length; index++) {
result.push(`<option value="${Object.keys(ll)[index]}">${Object.values(ll)[index]}</option>`)
}
document.querySelectorAll('select')[0].innerHTML=result.join('');

function b_onclick(){
document.querySelectorAll('textarea')[0].value=translate(document.querySelector('select').value.replaceAll('_','-'),document.querySelectorAll('textarea')[1].value)
}
