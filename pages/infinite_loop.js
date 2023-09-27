document.body.innerHTML=0;function infiniteLoop() {
  document.body.innerHTML=BigInt(document.body.innerHTML)+1n
  setTimeout(infiniteLoop,0);
}

infiniteLoop()
