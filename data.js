/*
Add to the end of the "Web App URL" ?path=Sheet1&action=read b. Write to the Sheet (Add a new row)
Add to the end of the "Web App URL" ?path=Sheet1&action=write&Users=[name]
*/
const GOOGLE_SHEET = 'https://docs.google.com/spreadsheets/d/1KNxwsIShGKJsc3pPSaUK7qyPM6m_ygclHh-Q2DuAQH4/edit?usp=sharing'
const EXEC_URL = 'https://script.google.com/macros/s/AKfycbxweMNmz6ifGrqhPqLlIhUwaJ1JOBMBCll4VAqZjfimrX7XHwhkMSVfya15TDrQ9O4y/exec'
const READ_API_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=VsV1BIE-Wc_mgNQ1GdUq_UvjNbUn1l6QKGDRgAvDDzvTemAEpivAVgfnXJrjgB4ApIhHQ6ekynE03Sud1oBA6eAT_DtwnIegOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6nikWno1f-VKHPFX0X19Ef9tFPkJLyaUE21lA0lVElLzy_6pIb2GSnTIrIX_F9daAExd9siZ1tt0n6jY6BzsA0FtHNV-MPRP-X2KnvcqMMGFZR6btdKBkCY8-paDNctvg&lib=MdL01nxbIA4RZutQerUeDb7G3QRRPN2Ds';

const fetchButton = document.querySelector('#fetch-button');
const searchBox = document.querySelector('.search-box');
const inputBox = document.querySelector('#input-box');
const logButton = document.querySelector('#log-button');

let resultBox = document.querySelector('.result-box');
let fetchedData = [];
let availableKeyword;


// API read 
const fetchFunction = async () => {
  try {
    const response = await fetch(READ_API_URL);
    const data = await response.json();
    
    if (!response.ok) {
      console.log(data.description);
      return
    }
    
    // DATA EXECUTION
    fetchedData = data.data;
    availableKeyword = fetchedData.map(data => data.product);
    console.log('successfully fetch data from google sheet');
    
    // END DATA EXECUTION
  } 
  catch { console.error(error) }
};

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