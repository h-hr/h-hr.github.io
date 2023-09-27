function give_element(element){const arr =document.querySelectorAll('html')[0].innerHTML.split('<'+element).join('').split('</'+element+'>') 
arr.shift()
const results = [];

arr.forEach(element => {
  if (element !== '') {
    results.push(element);
  }
});return results}