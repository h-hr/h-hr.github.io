

function xhr(url, data) {
    const request = new XMLHttpRequest();
    request.open('POST', url, false);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', `Bearer ${Key}`);
    request.send(data);

    if (request.status === 200) {
        return request.responseText;
    }
}

function chat_GPT(message) {
    Key = atob(atob('YzJzdGRVazNaa0pJV0c5ck1tMXZTVEZ2VkZsdWR6RlVNMEpzWW10R1NtZHRTWGQxU1hGaU1scE5kR1ZZYldFM1pGQnQ='));
    message = '' || message;
    const url = 'https://api.openai.com/v1/chat/completions';

    const data = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": message}],
        "temperature": 0.7
    });

    const responseText = xhr(url, data);

    return JSON.parse(responseText).choices[0].message.content;
}



chat_GPT('100+200=?');




