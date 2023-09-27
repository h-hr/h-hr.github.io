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
