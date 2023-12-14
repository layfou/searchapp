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
        <p>${product.product}</p>
        <p>poipet: ${product.pp}</p>
        <p>svay: ${product.svay}</p>
        <p>btb: ${product.btb}</p>
        `
  
        resultBox.innerHTML = htmlResult;
      }
    });
  }
  
  logButton.onclick = logData;
  fetchButton.onclick = fetchFunction;