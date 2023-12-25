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

function show() {
  fetchedData.forEach(product => {
    if (inputBox.value == product.product) {
      const resultHTML  = 
      `
      <li>${product.product}</li>
      <li>poipet: ${product.pp}</li>
      <li>svay: ${product.svay}</li>
      <li>btb: ${product.btb}</li>
      <button id="edit-button" data-name="${product.product}">Edit</button>
      <button id="delete-button" data-name="${product.product}">Delete</button>
      `

      resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
    }
  });
}

function editProduct() {
  const editHTML = 
  `
  dasfiaiefl
  <button onclick="update()">Update</button>
  `


  resultBox.innerHTML = editHTML;

}

resultBox.addEventListener('click', (e) => {
  const name = e.target.dataset.name;
  if (e.target.id == 'edit-button') {
    console.log(`${name} edited successfully`)
  }

  if (e.target.id == 'delete-button') {
    console.log(`${name} deleted successfully`)
  }
  
});

fetchButton.onclick = fetchFunction;