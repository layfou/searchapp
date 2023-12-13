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
    console.log('successfully retrieve data from google sheet')
    /*
    data.forEach(element => {
      
      if (element.Users == inputBox.value) {
        const htmlTemplate = 
        `
        <div class="card">
          <p class="users">${element.Users}</p>
          <p class="age">${element.age}</p>
          <p class="school">${element.school}</p>  
        </div>
        `;
        
        resultBox.innerHTML = htmlTemplate;
      }
    });
    */

    // END DATA EXECUTION
  } 
  catch { console.error(error) }
};


let availableKeyword = fetchedData.map(data => data.product)

inputBox.onkeyup = () => {
  let result;
  const input = inputBox.value;

  if (input.length) {
      result = availableKeyword.filter(keyword => {
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
}

function logData() {
  let availableKeyword = fetchedData.map(data => data.product)
  console.log(availableKeyword);
}

logButton.onclick = logData;
fetchButton.onclick = fetchFunction;