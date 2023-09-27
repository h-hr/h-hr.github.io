
get_html()

window.addEventListener("hashchange", get_html);




function run_page(template){

  if(hash(1)==1){
    template=template.replace('</body>','<script type="text/javascript" src="'+hash(3)+'"></script>'+'</body>')
    document.querySelectorAll('iframe')[0].onload=''

  }
  else if(hash(1)==2){
document.querySelectorAll('iframe')[0].onload=function(){window.frames[0].frameElement.contentWindow.eval(hash(3));document.querySelectorAll('iframe')[0].style.opacity=1;}
    
  }
  
  
  if(hash(2)==1){
  
document.querySelectorAll('iframe')[0].style.opacity="0.00001";
    if(hash(1)==1){document.querySelectorAll('iframe')[0].onload=function(){document.querySelectorAll('iframe')[0].style.opacity=1;}}
  }
  else if(hash(2)==2){

document.querySelectorAll('iframe')[0].style.opacity="1";
    
  }
  
  
// Alt 1: Blob approach
var blob = new Blob([template], {type: "text/html"});
var blob_url = URL.createObjectURL(blob);
var blob_iframe = document.querySelector('#blob-src-test');
blob_iframe.src = blob_url;
}
function get_html(){

link='https://script.google.com/macros/s/AKfycbx0na-ogsC4KAHBs-bk9o_XLz1BBV8WzCuCK0ogyB8yXt3C1qytIySFbkwHBG0F7uB6/exec?url='
link=link+hash(0)

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(link, requestOptions)
  .then(response => response.text())
  .then(result => run_page(result))
  .catch(error => console.log('error', error)); 
  
  }

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
