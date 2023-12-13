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
        
        resultBox.innerHTML = result;
    }

    
    
}


fetchButton.onclick = fetchFunction;
