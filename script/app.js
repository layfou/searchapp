inputBox.onkeyup = () => {
    let options;
    const input = inputBox.value;
  
    if (input.length) {
        options = availableKeyword.filter(keyword => {
            return (keyword
                .toLowerCase()
                .includes(input.toLowerCase()));
        })
    
    display(options)
    }
}
  
function display(options) {
  const htmlOptions = options.map(option => {
      return `<li onclick="selectInput(this)">${option}</li>`
  });

  resultBox.innerHTML = `<ul>${htmlOptions.join('')}</ul>`
}
  
function selectInput(options) {
  inputBox.value = options.innerHTML;
  resultBox.innerHTML = '';
  show();
  inputBox.value = '';
}
  
function logData() {
  console.log(availableKeyword);
}

function show() {
  fetchedData.forEach(product => {
    if (inputBox.value == product.product) {
      const htmlResult  = 
      `
      <li>${product.product}</li>
      <li>poipet: ${product.pp}</li>
      <li>svay: ${product.svay}</li>
      <li>btb: ${product.btb}</li>
      <button onclick="">Edit</button>
      `

      resultBox.innerHTML = `<ul>${htmlResult}</ul>`;
    }
  });
}
  
logButton.onclick = logData;
fetchButton.onclick = fetchFunction;