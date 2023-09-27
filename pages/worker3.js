function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {srcc=`data:text/js;charset=utf-8;base64,`+btoa(`
	
onmessage = function(event) {
      postMessage(eval(event.data));
    }

	
	`)
      w = new Worker(srcc);
	  
	  

	  
	  
	  
    }
    w.onmessage = function(event) {
  console.log(event.data)
      
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}
