
                function previewFile() {
  const preview = document.querySelectorAll('[id="uPsrc"]')[0];
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
setTimeout(upload, 200);

};

            
function upload() {var old

 if (document.querySelectorAll('[id="uPsrc"]')[0].src != 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=') {
  link=document.querySelectorAll('[id="uPsrc"]')[0].currentSrc


for (var count = 0; count < 200; count++) {
  

if (link == '') {
  document.querySelectorAll('[id="uP0"]')[count].value='#'

} else {

 document.querySelectorAll('[id="uP0"]')[count].value=link.slice(0,50000)

}



link=link.slice(50000)

}
if (document.querySelectorAll('[id="uPsrc"]')[0].src!=old) {
  document.querySelectorAll('[id="uP00"]')[0].click();

}
old=document.querySelectorAll('[id="uPsrc"]')[0].src}
};

function getlen() {
  var xhttp = new XMLHttpRequest(); var id2,ip1,ip2,ip3,ip4
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      id2 =
      JSON.parse(this.responseText);
idid=parseInt(id2.values[0][0].slice(3)-1)
isrc='data:text/html;base64,PGh0bWw+PGhlYWQ+DQogICAgDQogICAgDQogICAgDQogICAgDQogICAgDQoNCjwvaGVhZD4NCjxib2R5IHN0eWxlPSJkaXNwbGF5OiBub25lOyIgb25sb2FkPSJteUZ1bmN0aW9uKCkiPjxjZW50ZXI+DQogICAgDQo8ZGl2IGNsYXNzPSJjb250YWluZXIgcmVnaXN0ZXIiPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4NCiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSB0ZXh0LWFsaWduIGZvcm0tbmV3IiBpZD0iaG9tZSIgcm9sZT0idGFicGFuZWwiIGFyaWEtbGFiZWxsZWRieT0iaG9tZS10YWIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz0icmVnaXN0ZXItaGVhZGluZyI+Q29ubmVjdCBHb29nbGUgU3ByZWFkc2hlZXQgdG8gSFRNTDwvaDM+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93IHJlZ2lzdGVyLWZvcm0iPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPSJwb3N0IiBhdXRvY29tcGxldGU9Im9mZiIgbmFtZT0iZ29vZ2xlLXNoZWV0Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1ncm91cCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJ1aWQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSJ1aWQiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZGF0YSIgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9ImRhdGEiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ic3VibWl0IiBuYW1lPSJzdWJtaXQiIGNsYXNzPSJidG5TdWJtaXQgYnRuLWJsb2NrIiB2YWx1ZT0ic2VuZCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY+DQogICAgICAgICAgDQogICAgICAgICAgPHNjcmlwdD4NCiAgICAgICAgICAgIGNvbnN0IHNjcmlwdFVSTCA9ICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnpCdTN5SWM0SFlKeEQxM25OUkVtM2dFNE51V2syWlNVWXF2MFFac1dJc1hoRkVRdnpiUnFnM1FuN0xCYXJLQ0pzQi9leGVjJw0KICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydnb29nbGUtc2hlZXQnXQ0KICAgICAgICAgIA0KICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHsNCiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpDQogICAgICAgICAgICAgIGZldGNoKHNjcmlwdFVSTCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogbmV3IEZvcm1EYXRhKGZvcm0pfSkNCiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0cnVlKQ0KICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciEnLCBlcnJvci5tZXNzYWdlKSkNCiAgICAgICAgICAgIH0pDQogICAgICAgICAgPC9zY3JpcHQ+DQoNCiAgICAgICAgDQogICAgICAgIA0KDQoNCg0KPHNjcmlwdD4NCmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7DQogIA0KdmFyIHRleHh0LCBDb3VudCwgaTsNCg0KDQp0ZXh4dCA9ICcnOw0KQ291bnQgPSAwOw0KaSA9IDA7DQoNCkNvdW50ID0gaTsNCndoaWxlIChDb3VudCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5sZW5ndGgpIHsNCg0KDQoNCkNvdW50ID0gKHR5cGVvZiBDb3VudCA9PT0gJ251bWJlcicgPyBDb3VudCA6IDApICsgMTsNCiAgdGV4eHQgPSB0ZXh4dCArIHdpbmRvdy5sb2NhdGlvbi5ocmVmW2NvdW50XTsNCn0NCg0KDQp2YXIgaTsNCmk9IDA7DQp3aGlsZSAoISh3aW5kb3cubG9jYXRpb24uaHJlZltpXSA9PSAiIyIpKSB7aT0gaSsgMTsNCg0KDQppb2w9aQ0KDQoNCg0KfQ0KdmFyIHRleHh0LCBDb3VudCwgaTsNCg0KaSA9IChpKzEpDQp0ZXh4dCA9ICcnOw0KQ291bnQgPSAwOw0KDQoNCkNvdW50ID0gaTsNCndoaWxlIChDb3VudCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5sZW5ndGgpIHsNCg0KDQoNCkNvdW50ID0gKHR5cGVvZiBDb3VudCA9PT0gJ251bWJlcicgPyBDb3VudCA6IDApICsgMTsNCiAgdGV4eHQgPSB0ZXh4dCArIHdpbmRvdy5sb2NhdGlvbi5ocmVmW2NvdW50XTsNCn0NCg0KDQp2YXIgaTsNCndoaWxlICghKHdpbmRvdy5sb2NhdGlvbi5ocmVmW2ldID09ICIjIikpIHtpPSBpKyAxOw0KDQoNCg0KDQoNCg0KfQ0KDQoNCnk9d2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoaW9sKzEsaSkNCnkyPXdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKGkrMSkNCmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IilbMF0udmFsdWU9ZGVjb2RlVVJJQ29tcG9uZW50KHkpDQpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCJpbnB1dCIpWzFdLnZhbHVlPWRlY29kZVVSSUNvbXBvbmVudCh5MikNCmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IilbMl0uY2xpY2soKTsNCg0KDQoNCg0KfQ0KPC9zY3JpcHQ+DQoNCg0KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPjwvY2VudGVyPjwvYm9keT48L2h0bWw+'
document.querySelectorAll('iframe')[document.querySelectorAll('iframe').length-1].outerHTML='<iframe allowtransparency="true" frameborder="0" scrolling="no" src="none" class="hide"></iframe>'
document.querySelectorAll('iframe')[document.querySelectorAll('iframe').length-1].src=isrc+'#'+localStorage.uid+'#'+idid

ssrc=document.querySelectorAll('img')[document.querySelectorAll('img').length-1].src
a= '<img onclick="hidde();teest(this.src);getid(this.src);" ' +'id2="immage" '+'id='+idid+' '+ 'src="' +ssrc+'"  width="200" height="200" >'
document.querySelectorAll('alc')[0].innerHTML=document.querySelectorAll('alc')[0].innerHTML+a





    }
  };
  xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1wxFeq4630DmBmv6vBRwkp_utfWyHmT9tf9a6k2s8WEs/values/Sheet1!GS1?key="+keys[Math.floor(Math.random() *17)], true);
  xhttp.send();
};

function sendud() {
  document.querySelectorAll('[id="uid"]')[0].value=localStorage.uid
document.querySelectorAll('[id="data"]')[0].value=id
document.querySelectorAll('[id="sendud"]')[0].click()
};

function p() {
if (document.querySelectorAll('label')[1].innerText == document.querySelectorAll('question').length
) {
 pushlist()
	document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].outerHTML=
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].outerHTML+
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].outerHTML;document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-1].innerHTML='';
document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-2].innerHTML=''
document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-3].innerHTML=''
document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-4].innerHTML=''
document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-5].innerHTML='';document.querySelectorAll('[id2="imbox"]')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)].src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=';ubkg()}
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].style="display: none;"
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)].style="display:"
  
 document.querySelectorAll('label')[1].innerText=parseInt(document.querySelectorAll('label')[1].innerText)+1 
document.querySelectorAll('label')[0].innerText=document.querySelectorAll('question').length;
ubkg();
refresh()
	
}
function n() {
if (document.querySelectorAll('label')[1].innerText != 1)
{document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].style="display: none;"
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-2].style="display;"
  
document.querySelectorAll('label')[1].innerText=parseInt(document.querySelectorAll('label')[1].innerText)-1}
document.querySelectorAll('label')[0].innerText=document.querySelectorAll('question').length;
ubkg();
refresh()
	
}
function loadimages() {
if (document.querySelectorAll('question')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].style.display=='') {
document.body.style.zoom=0.5
document.querySelectorAll('[id="myInput2"]')[0].style.display='none'
document.querySelectorAll('question')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].style.display='none'
document.querySelectorAll('alc')[0].style.display=''

if(document.querySelectorAll('alc')[0].querySelectorAll('img').length==0){
get_baths(localStorage.username,localStorage.password)
}
document.querySelectorAll('[id="bhide"]')[0].style.display=''
document.querySelectorAll('[id="bhide"]')[1].style.display=''
document.querySelectorAll('[id="bhide"]')[2].style.display=''
document.querySelectorAll('[id="bbhide"]')[0].style.display='none'
document.querySelectorAll('[id="divv"]')[0].outerHTML=document.querySelectorAll('[id="divv"]')[0].outerHTML.replaceAll('&nbsp;', '')
	
	
	
} else {
document.body.style.zoom=1
document.querySelectorAll('[id="myInput2"]')[0].style.display=''
document.querySelectorAll('question')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].style.display=''
document.querySelectorAll('alc')[0].style.display='none'
document.querySelectorAll('[id="bhide"]')[0].style.display='none'
document.querySelectorAll('[id="bhide"]')[1].style.display='none'
document.querySelectorAll('[id="bhide"]')[2].style.display='none'
document.querySelectorAll('[id="bbhide"]')[0].style.display=''
document.querySelectorAll('label')[0].outerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+document.querySelectorAll('label')[0].outerHTML
document.querySelectorAll('label')[1].outerHTML=document.querySelectorAll('label')[1].outerHTML+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	
}
};

function teest(img) {
if (document.querySelectorAll('[id="bhide"]')[0].innerText!='🆗'){

immmg=img
document.querySelectorAll('alc')[0].style.display='none'
document.querySelectorAll('[id2="imbox"]')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].src=img


loadimages()
;ubkg()

}

};

function getid(iddd) {

  if(document.querySelectorAll('[id="bhide"]')[0].innerText=='🆗')
  {
	  
idid2=iddd
isrc='data:text/html;base64,PGh0bWw+PGhlYWQ+DQogICAgDQogICAgDQogICAgDQogICAgDQogICAgDQoNCjwvaGVhZD4NCjxib2R5IHN0eWxlPSJkaXNwbGF5OiBub25lOyIgb25sb2FkPSJteUZ1bmN0aW9uKCkiPjxjZW50ZXI+DQogICAgDQo8ZGl2IGNsYXNzPSJjb250YWluZXIgcmVnaXN0ZXIiPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4NCiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSB0ZXh0LWFsaWduIGZvcm0tbmV3IiBpZD0iaG9tZSIgcm9sZT0idGFicGFuZWwiIGFyaWEtbGFiZWxsZWRieT0iaG9tZS10YWIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz0icmVnaXN0ZXItaGVhZGluZyI+Q29ubmVjdCBHb29nbGUgU3ByZWFkc2hlZXQgdG8gSFRNTDwvaDM+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93IHJlZ2lzdGVyLWZvcm0iPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPSJwb3N0IiBhdXRvY29tcGxldGU9Im9mZiIgbmFtZT0iZ29vZ2xlLXNoZWV0Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1ncm91cCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJ1aWQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSJ1aWQiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZGF0YSIgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9ImRhdGEiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ic3VibWl0IiBuYW1lPSJzdWJtaXQiIGNsYXNzPSJidG5TdWJtaXQgYnRuLWJsb2NrIiB2YWx1ZT0ic2VuZCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY+DQogICAgICAgICAgDQogICAgICAgICAgPHNjcmlwdD4NCiAgICAgICAgICAgIGNvbnN0IHNjcmlwdFVSTCA9ICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnpCdTN5SWM0SFlKeEQxM25OUkVtM2dFNE51V2syWlNVWXF2MFFac1dJc1hoRkVRdnpiUnFnM1FuN0xCYXJLQ0pzQi9leGVjJw0KICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydnb29nbGUtc2hlZXQnXQ0KICAgICAgICAgIA0KICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHsNCiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpDQogICAgICAgICAgICAgIGZldGNoKHNjcmlwdFVSTCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogbmV3IEZvcm1EYXRhKGZvcm0pfSkNCiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0cnVlKQ0KICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciEnLCBlcnJvci5tZXNzYWdlKSkNCiAgICAgICAgICAgIH0pDQogICAgICAgICAgPC9zY3JpcHQ+DQoNCiAgICAgICAgDQogICAgICAgIA0KDQoNCg0KPHNjcmlwdD4NCmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7DQogIA0KdmFyIHRleHh0LCBDb3VudCwgaTsNCg0KDQp0ZXh4dCA9ICcnOw0KQ291bnQgPSAwOw0KaSA9IDA7DQoNCkNvdW50ID0gaTsNCndoaWxlIChDb3VudCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5sZW5ndGgpIHsNCg0KDQoNCkNvdW50ID0gKHR5cGVvZiBDb3VudCA9PT0gJ251bWJlcicgPyBDb3VudCA6IDApICsgMTsNCiAgdGV4eHQgPSB0ZXh4dCArIHdpbmRvdy5sb2NhdGlvbi5ocmVmW2NvdW50XTsNCn0NCg0KDQp2YXIgaTsNCmk9IDA7DQp3aGlsZSAoISh3aW5kb3cubG9jYXRpb24uaHJlZltpXSA9PSAiIyIpKSB7aT0gaSsgMTsNCg0KDQppb2w9aQ0KDQoNCg0KfQ0KdmFyIHRleHh0LCBDb3VudCwgaTsNCg0KaSA9IChpKzEpDQp0ZXh4dCA9ICcnOw0KQ291bnQgPSAwOw0KDQoNCkNvdW50ID0gaTsNCndoaWxlIChDb3VudCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5sZW5ndGgpIHsNCg0KDQoNCkNvdW50ID0gKHR5cGVvZiBDb3VudCA9PT0gJ251bWJlcicgPyBDb3VudCA6IDApICsgMTsNCiAgdGV4eHQgPSB0ZXh4dCArIHdpbmRvdy5sb2NhdGlvbi5ocmVmW2NvdW50XTsNCn0NCg0KDQp2YXIgaTsNCndoaWxlICghKHdpbmRvdy5sb2NhdGlvbi5ocmVmW2ldID09ICIjIikpIHtpPSBpKyAxOw0KDQoNCg0KDQoNCg0KfQ0KDQoNCnk9d2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoaW9sKzEsaSkNCnkyPXdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKGkrMSkNCmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IilbMF0udmFsdWU9ZGVjb2RlVVJJQ29tcG9uZW50KHkpDQpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCJpbnB1dCIpWzFdLnZhbHVlPWRlY29kZVVSSUNvbXBvbmVudCh5MikNCmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IilbMl0uY2xpY2soKTsNCg0KDQoNCg0KfQ0KPC9zY3JpcHQ+DQoNCg0KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPjwvY2VudGVyPjwvYm9keT48L2h0bWw+'
document.querySelectorAll('iframe')[document.querySelectorAll('iframe').length-1].outerHTML='<iframe allowtransparency="true" frameborder="0" scrolling="no" src="none" class="hide"></iframe>'
document.querySelectorAll('iframe')[document.querySelectorAll('iframe').length-1].src=isrc+'#'+localStorage.uid+'#'+-idid2
	  
  document.querySelectorAll("[id="+'"'+iddd+'"'+']')[0].remove()
  
  }
  else{
  document.querySelectorAll('[id2="imbox"]')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].id=iddd
  
if (fromliste.length==0)(linksaved())
	  
  }
  
  
};

function ubkg() {
 document.querySelectorAll('[id="image"]')[0].innerHTML= 'body { background-image:url("'+ document.querySelectorAll('[id2="imbox"]')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].src+ '"); background-repeat: no-repeat; background-size: 100% 100%; } html { height: 100% }'
};
function hidde() {

if (document.querySelectorAll('[id="bhide"]')[0].innerText!='🆗'){

document.querySelectorAll('alc')[0].style.display='none'
}



};
function myFunctioncopy() {
list=[]
replist=1
for (var count = 0; count < parseInt(document.querySelectorAll('[id="a1b"]')[0].innerHTML); count++) {



q1='#'+document.querySelectorAll('[id2="imbox"]')[replist-1].id
q2='#'+document.querySelectorAll('[id="asd"]')[replist*5-5].innerText
q3='#'+document.querySelectorAll('[id="asd"]')[replist*5-4].innerText
q4='#'+document.querySelectorAll('[id="asd"]')[replist*5-3].innerText
q5='#'+document.querySelectorAll('[id="asd"]')[replist*5-2].innerText
q6='#'+document.querySelectorAll('[id="asd"]')[replist*5-1].innerText

if (cl[replist*4-4]==false) {c1='#'+0} else {c1='#'+1}
if (cl[replist*4-3]==false) {c2='#'+0} else {c2='#'+1}
if (cl[replist*4-2]==false) {c3='#'+0} else {c3='#'+1}
if (cl[replist*4-1]==false) {c4='#'+0} else {c4='#'+1}
replist=replist+1

list.push(q1+q2+q3+q4+q5+q6+c1+c2+c3+c4);



}

document.querySelectorAll('[id="myInput"]')[0].value='https://hussainalhabeb1000.github.io/pages/quizloader.html'+list.join('')+'#link##'+document.querySelectorAll('question').length+'$0'
  /* Get the text field */
  ///var copyText = document.getElementById("myInput");

  /* Select the text field */
  ///copyText.select();
 /// copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  ///navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  /*alert("Copied the text: " + copyText.value);*/
savequiz()
	
};


function myFunction() {
  
var texxt, Count, i;


texxt = '';
Count = 0;
i = 0;

Count = i;
while (Count == window.location.href.length) {



Count = (typeof Count === 'number' ? Count : 0) + 1;
  texxt = texxt + window.location.href[count];
}


var i;
i= 0;
while (!(window.location.href[i] == "#")) {i= i+ 1;


iol=i



}
var texxt, Count, i;

i = (i+1)
texxt = '';
Count = 0;


Count = i;
while (Count == window.location.href.length) {



Count = (typeof Count === 'number' ? Count : 0) + 1;
  texxt = texxt + window.location.href[count];
}


var i;
while (!(window.location.href[i] == "#")) {i= i+ 1;






}


y=window.location.href.slice(iol+1,i)
y2=window.location.href.slice(i+1)
document.querySelectorAll("input")[0].value=decodeURIComponent(y)
document.querySelectorAll("input")[1].value=decodeURIComponent(y2)
document.querySelectorAll("input")[2].click();




};

function toimag(id2,num2,iage2) {


  if(typeof delen=='undefined'){delen=0}
  

  delen=delen+1



if (delen==iframes.length) {
		
	for (var count = 0; count < iframes.length; count++) {
 
						

	  ttt()
							  
							  
							  }
	
				 
				 
				 
				 }
 
};

function ttt() {

  dige=document.querySelectorAll('iframe')[0].contentWindow.iage
did=document.querySelectorAll('iframe')[0].contentWindow.id-1
document.querySelectorAll('iframe')[0].outerHTML=
'<img onclick="hidde();teest(this.src);getid(this.id);" ' + 'src="' +dige+'"  width="200" height="200" >'
	
if(iframes.length==document.querySelectorAll('img').length-parseInt(document.querySelectorAll('[id="a1b"]')[0].innerText)-1
){

document.querySelectorAll('alc')[0].outerHTML=document.querySelectorAll('alc')[0].outerHTML.replaceAll('height="200">,<img','height="200"><img')
	
loadsaved()
	
}
	
};

function upclick() {
   document.querySelectorAll('[id="upload"]')[0].click()

};

function dte() {
  if(document.querySelectorAll('[id="bhide"]')[0].innerText=='🗑️')
  {
  document.querySelectorAll('[id="bhide"]')[0].innerText='🆗'
  
  }
  else{
  
  document.querySelectorAll('[id="bhide"]')[0].innerText='🗑️'
  
  }
  
  
  
  
};

function removelist() {
// write to liste

liste=[]
for (var count = 0; count < list.length; count++) {

if(list[count].includes('-')){liste.push(list[count])}

}


// delete from - list

llength=list.length
lcount=-1
for (var count = 0; count < llength; count++) {
lcount=lcount+1
if(list[lcount].includes('-')){

list.splice(lcount,1)
lcount=lcount-1

}
}





// delete item from list


for (var count = 0; count < liste.length; count++) {
list.splice(list.indexOf(liste[count].slice(1)),1)


}
};
////////////

function linksaved() {
  repliste=1
toliste=[]


for (var count = 0; count < parseInt(document.querySelectorAll('[id="a1b"]')[0].innerHTML); count++) {

toliste.push(document.querySelectorAll('[id2="imbox"]')[repliste-1].id)
toliste.push(document.querySelectorAll('[id="asd"]')[repliste*5-5].innerText)
toliste.push(document.querySelectorAll('[id="asd"]')[repliste*5-4].innerText)
toliste.push(document.querySelectorAll('[id="asd"]')[repliste*5-3].innerText)
toliste.push(document.querySelectorAll('[id="asd"]')[repliste*5-2].innerText)
toliste.push(document.querySelectorAll('[id="asd"]')[repliste*5-1].innerText)

toliste.push(cl[repliste*4-4])
toliste.push(cl[repliste*4-3])
toliste.push(cl[repliste*4-2])
toliste.push(cl[repliste*4-1])

repliste=repliste+1


}
window.location.href=window.location.origin+window.location.pathname+'#'+JSON.stringify(toliste)
}
//////////
function pushlist() {
  if(typeof cl=='undefined'){cl=[]}
  cl.push(false)
  cl.push(false)
  cl.push(false)
  cl.push(false)
}
//////////////////
function refresh() {
  

refreshh=parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)*4


document.querySelectorAll('question')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].querySelectorAll('[id="dsa"]')[0].checked=cl[refreshh-4]
document.querySelectorAll('question')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].querySelectorAll('[id="dsa"]')[1].checked=cl[refreshh-3]
document.querySelectorAll('question')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].querySelectorAll('[id="dsa"]')[2].checked=cl[refreshh-2]
document.querySelectorAll('question')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].querySelectorAll('[id="dsa"]')[3].checked=cl[refreshh-1]




}
///////////////////////////
function cbchecked(check) {
  
if (cl[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)*4-check]==false)

{


cl[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)*4-check]=true

document.querySelectorAll('input')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)*4-check].checked=true

}



else{


cl[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)*4-check]=false

document.querySelectorAll('input')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)*4-check].checked=false


}

linksaved()

}
////////////////////////
function loadimages2() {
  if(window.location.href.includes('#')){loadimages();loadimages();
 savedlink=window.location.href.slice(String(window.location.origin+window.location.pathname).length+1)
					}else{fromliste=[]}

}
/////////////////////////////

function loadsaved() {
  fromliste=savedlink
fromliste=decodeURIComponent(fromliste)
fromliste=JSON.parse(fromliste)
repliste=0
reliste=fromliste.length/10
reqliste=1
for (var count = 0; count < reliste; count++) {



if(fromliste[0]!=''){loadimages();document.querySelectorAll('[id2="immage"]'+'[src='+'"'+fromliste[0]+'"'+']')[0].click()}
fromliste.shift()

document.querySelectorAll('question')[repliste].querySelectorAll('[id="asd"]')[0].innerText=fromliste[0]
fromliste.shift()

document.querySelectorAll('question')[repliste].querySelectorAll('[id="asd"]')[1].innerText=fromliste[0]
fromliste.shift()

document.querySelectorAll('question')[repliste].querySelectorAll('[id="asd"]')[2].innerText=fromliste[0]
fromliste.shift()

document.querySelectorAll('question')[repliste].querySelectorAll('[id="asd"]')[3].innerText=fromliste[0]
fromliste.shift()

document.querySelectorAll('question')[repliste].querySelectorAll('[id="asd"]')[4].innerText=fromliste[0]
fromliste.shift()

cl[reqliste*4-4]=fromliste[0]
fromliste.shift()

cl[reqliste*4-3]=fromliste[0]
fromliste.shift()

cl[reqliste*4-2]=fromliste[0]
fromliste.shift()

cl[reqliste*4-1]=fromliste[0]
fromliste.shift()





repliste=repliste+1
reqliste=reqliste+1
if(fromliste.length!=0){p()}

}

refresh()
fromliste=[]

linksaved()

}
////////////////////////////

function deletequestion() {
  



if(document.querySelectorAll('question').length!=1){


removee=parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1


if(removee+1==document.querySelectorAll('question').length){


n()
document.querySelectorAll('question')[removee].remove()


}
else if(removee==0){


p()
document.querySelectorAll('question')[removee].remove()

	if(parseInt(document.querySelectorAll('label')[1].innerText)>parseInt(document.querySelectorAll('label')[0].innerText)){

document.querySelectorAll('label')[1].innerText=parseInt(document.querySelectorAll('label')[0].innerText)

}

}
else{


p()
document.querySelectorAll('question')[removee].remove()
document.querySelectorAll('label')[1].innerText=parseInt(document.querySelectorAll('label')[1].innerText)-1

}


document.querySelectorAll('label')[0].innerText=document.querySelectorAll('question').length


if(document.querySelectorAll('label')[0].innerText==1){document.querySelectorAll('label')[1].innerText=1}


}

linksaved()
	
}
///////////
function fetchlink() {
  const scriptURL2 = 'https://script.google.com/macros/s/AKfycbyTBCExeDurOB0awi2SaKUcfLeLh3v5GKlJEWa0D7292fRUziwGIzxd0W62DtHGw9qmMA/exec'
            
			const form2 = document.forms['google-sheet2']


			fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
                .then(response => getlen2())
                .catch(error => console.error('Error!', error.message))
}
/////////////

function savequiz() {
  
  
  link2=document.querySelectorAll('[id="myInput"]')[0].value


for (var count = 0; count < 42; count++) {
  

if (link2 == '') {
  document.querySelectorAll('[id="0uP0"]')[count].value=''

} else {

 document.querySelectorAll('[id="0uP0"]')[count].value=link2.slice(0,50000)

}



link2=link2.slice(50000)

if(count==41){
			
			fetchlink()

			
}

}
  
  
}

/////////////

function getlen2() {
  var xhttp = new XMLHttpRequest(); var id2,ip1,ip2,ip3,ip4
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      id2 =
      JSON.parse(this.responseText);
idid2=parseInt(id2.values[0][0].slice(3))-1


/////
document.querySelectorAll('[id="myInput"]')[0].value='https://hussainalhabeb1000.github.io/pages/quizload.html#'+idid2
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  /*alert("Copied the text: " + copyText.value);*/
////

    }
  };
  xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1OnCDJwqDpzc5-hUuLv1BL08XwWeT4G_cbU1xExVz0dw/values/Sheet1!AQ1?key="+keys[Math.floor(Math.random() *17)], true);
  xhttp.send();
}

/////////////
