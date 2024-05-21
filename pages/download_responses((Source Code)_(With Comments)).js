// Parse the length of responses
respones_length = parseInt(document.querySelectorAll('[type="number"]')[1].parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.innerText);

// Parse the number of responses
respone_number = parseInt(document.querySelectorAll('[type="number"]')[1].value);

// Calculate the current length of responses
current_respones_length = respones_length - respone_number;

// Store the original response number
respone_number_old = respone_number;

// Function to get the file name
function get_file_name(file_nam) {
    // Find elements with the given file name
    find_file_name = Array.from(document.querySelectorAll('span,div')).filter(span => span.textContent === file_name__);

    if (find_file_name[find_file_name.length - 1].nodeName == "DIV") {
        founded = find_file_name[find_file_name.length - 1].parentElement.parentElement.nextElementSibling.innerText.trim();
    } else if (find_file_name[find_file_name.length - 1].nodeName == "SPAN") {
        founded = find_file_name[find_file_name.length - 1].parentElement.parentElement.parentElement.parentElement.nextElementSibling.innerText;
    }
    return founded.trim();
}

// Accessing DOM element
res_element = document.querySelector('[id="ResponsesView"]').childNodes[0].childNodes[3].childNodes[0].childNodes[2];

// Create a trusted type policy to escape HTML
escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
    createHTML: (to_escape) => to_escape
});

// Accessing DOM element
my_element = res_element.previousElementSibling.previousElementSibling;

// Append a textarea element to my_element
my_element.innerHTML = escapeHTMLPolicy.createHTML(my_element.innerHTML + '<textarea id="file_names_area" style="height: 100%; width: 100%;"></textarea>');

// Function to convert HTML to Blob
function html_to_blob(template) {
    var blob = new Blob([template], { type: "text/html" });
    var blob_url = URL.createObjectURL(blob);
    return blob_url;
}

// Function to download Blob
function download_blob(blob_src, file_name_a) {
    const a = document.createElement('a');
    a.href = blob_src;
    a.download = file_name_a;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to save current response
function save_current_response(file_nameo) {
    download_blob(html_to_blob(res_element.outerHTML + document.head.innerHTML), file_nameo + '.html');
}

// Event handler for input change
document.querySelector('#file_names_area').oninput = function do_them() {
    // Recalculate current response length
    respones_length = parseInt(document.querySelectorAll('[type="number"]')[1].parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.innerText);
    respone_number = parseInt(document.querySelectorAll('[type="number"]')[1].value);
    current_respones_length = respones_length - respone_number;
    times = current_respones_length + 1;
    clicker();
    // Remove event listener after first input
    this.oninput = '';
}

// Initialize file name
file_name__ = '';

// Event handler for click
function clickHandler(event) {
    // Set file_name__ to the clicked element's text
    file_name__ = event.target.innerText.trim();
    console.log(file_name__);
    // If the clicked element is not a div or span, set file_name__ to its parent's text
    if (event.target.nodeName != 'DIV' && 'SPAN') { file_name__ = event.target.parentElement.innerText.trim('') }
    res_element.removeEventListener("click", clickHandler);
    respones_length = parseInt(document.querySelectorAll('[type="number"]')[1].parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.innerText);
    respone_number = parseInt(document.querySelectorAll('[type="number"]')[1].value);
    current_respones_length = respones_length - respone_number;
    times = current_respones_length + 1;
    clicker();
}

// Add click event listener to response element
res_element.addEventListener("click", clickHandler);

// Function to get the file name
function get_file_name_2() {
    // Extract the id element
    id_elem = document.querySelectorAll('[type="number"]')[1].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.querySelector('[aria-selected="true"]').innerText.split('@')[0].slice(3);
    // Extract and format file names
    file_names = document.querySelector('#file_names_area').value.split('\n').map(function (item) {
        if (String(item.split('-')[2].trim()) == String(id_elem)) { return item }
    }).join('');
    // If no file names found, generate a default name
    if (file_names == '') { file_names = 'file_name_not_available_' + parseInt(document.querySelectorAll('[type="number"]')[1].value) }
    return file_names;
}

// Function to get the file name
function get_file_name_3() {
    if (file_name__ != '') { return get_file_name(file_name__) } else { return get_file_name_2() }
}

// Timeout duration
timeoute = 1200;

// Function to perform click actions recursively
function clicker() {
    if (times != 0) {
        // Fetch with timeout
        fetch(`https://timeout.h-hr.workers.dev/?t=${timeoute}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('error');
                }
            })
            .then(data => {
                // Recursive call if conditions are met
                if ((['', 'none'].indexOf(Array.from(document.querySelectorAll('span')).map(span => (span.innerText.includes('…') && span.parentElement.parentElement.style.display == 'none' ? span : null)).filter(span => span !== null).slice(-1)[0].parentElement.parentElement.style.display))) {
                    if (times != 0) { click_next(); times = times - 1 };
                    clicker();
                } else {
                    if (times != 0) { clicker() }
                }
            })
            .catch(error => {
                console.error('error', error);
            });
    }
}

// Function to trigger click on next response
function click_next() {
    save_current_response(get_file_name_3());
    document.querySelectorAll('[type="number"]')[1].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.querySelector('span').querySelector('span').click();
}

// Restore original response number
document.querySelectorAll('[type="number"]')[1].value = respone_number_old;
