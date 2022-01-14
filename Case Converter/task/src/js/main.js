let textarea = document.querySelector("textarea");

function upperCase(){
    let value = textarea.value;
    textarea.value = value.toUpperCase();
}

function lowerCase() {
    let value = textarea.value;
    textarea.value = value.toLowerCase();
}

function properCase() {
    let value = textarea.value;
    let text = value.toLowerCase();
    let listText = text.split(" ");
    for (let i = 0; i < listText.length; i++) {
        listText[i] = (listText[i].charAt(0).toUpperCase() + listText[i].slice(1));
    }
    textarea.value = listText.join(" ");
}

function sentenceCase() {
    let value = textarea.value;
    let text = value.toLowerCase();
    let listText = text.split(". ");
    listText.forEach(text => text.trim())
    console.log(listText);
    for (let i = 0; i < listText.length; i++) {
        listText[i] = (listText[i].charAt(0).toUpperCase() + listText[i].slice(1));
    }
    textarea.value = listText.join(". ");
}

function download(filename) {
    let element = document.createElement('a');
    let value = textarea.value;
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(value));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
