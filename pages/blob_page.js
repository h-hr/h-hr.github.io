function html_to_blob(template){
var blob = new Blob([template], {type: "text/html"});
var blob_url = URL.createObjectURL(blob);
return blob_url
}
