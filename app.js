const fetchButton = document.querySelector('#fetch-button');
const searchBox = document.querySelector('.search-box');
const inputBox = document.querySelector('#input-box');

let resultBox = document.querySelector('.result-box');
let availableKeywords = [
    'សោរ solex',
    'broucher',
    'ព្រីរន្ធ3 vena',
    'brocoli',
    'unicef',
    'a',
    'b',
    'c'
    
]

inputBox.onkeyup = () => {
    let result;
    const input = inputBox.value;

    if (input.length) {
        result = availableKeywords.filter(keyword => {
            return (keyword
                .toLowerCase()
                .includes(input.toLowerCase()));
        })
        
    display(result)
    }
}

function display(results) {
    const htmlResult = results.map(result => {
        return `<li onclick="selectInput(this)">${result}</li>`
    });

    resultBox.innerHTML = `<ul>${htmlResult.join('')}</ul>`
}

function selectInput(result) {
    inputBox.value = result.innerHTML;
    resultBox.innerHTML = '';
    fetchFunction()
}


fetchButton.onclick = fetchFunction;
