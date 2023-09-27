function synchronousPostRequest(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    return xhr.responseText;
}

var response = synchronousPostRequest("https://example.com/api/submit", { name: "John", age: 30 });
console.log(response);
