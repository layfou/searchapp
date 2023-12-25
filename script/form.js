const createButton = document.querySelector('#create-button');

async function create() {
    const createInputBox = document.querySelector('#create-input-box');
    const ppInput = document.querySelector('#pp-input');
    const svayInput = document.querySelector('#svay-input');
    const btbInput = document.querySelector('#btb-input');
    const messegeBox = document.querySelector('.messege-box');

    const CREATE_EXEC = `?path=Sheet1&action=create&product=${createInputBox.value}&pp=${ppInput.value}&svay=${svayInput.value}&btb=${btbInput.value}`
    const createApi = EXEC_URL + CREATE_EXEC;
    await fetch(createApi)
    messegeBox.innerHTML = `<p>${createInputBox.value} added successfully!</p>`
}

createButton.onclick = create;


