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
      return `<li class="list-group-item" onclick="selectInput(this)">${option}</li>`
  });

  resultBox.innerHTML = `<ul class="list-group list-group-flush">${htmlOptions.join('')}</ul>`
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
      const resultHTML  = 
      `
      <li>${product.product}</li>
      <li>poipet: ${product.pp}</li>
      <li>svay: ${product.svay}</li>
      <li>btb: ${product.btb}</li>
      <button onclick="edit()">Edit</button>
      `

      resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
    }
  });
}

function edit() {
  const editHTML = 
  `
  dasfiaiefl
  <button onclick="update()">Update</button>
  `


  resultBox.innerHTML = editHTML;

}

function update() {
  
}

logButton.onclick = logData;
fetchButton.onclick = fetchFunction;