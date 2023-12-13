/*
Add to the end of the "Web App URL" ?path=Sheet1&action=read b. Write to the Sheet (Add a new row)
Add to the end of the "Web App URL" ?path=Sheet1&action=write&Users=[name]
*/

const GOOGLE_SHEET = 'https://docs.google.com/spreadsheets/d/1KNxwsIShGKJsc3pPSaUK7qyPM6m_ygclHh-Q2DuAQH4/edit?usp=sharing'
const EXEC_URL = 'https://script.google.com/macros/s/AKfycbxweMNmz6ifGrqhPqLlIhUwaJ1JOBMBCll4VAqZjfimrX7XHwhkMSVfya15TDrQ9O4y/exec'
const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=VsV1BIE-Wc_mgNQ1GdUq_UvjNbUn1l6QKGDRgAvDDzvTemAEpivAVgfnXJrjgB4ApIhHQ6ekynE03Sud1oBA6eAT_DtwnIegOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6nikWno1f-VKHPFX0X19Ef9tFPkJLyaUE21lA0lVElLzy_6pIb2GSnTIrIX_F9daAExd9siZ1tt0n6jY6BzsA0FtHNV-MPRP-X2KnvcqMMGFZR6btdKBkCY8-paDNctvg&lib=MdL01nxbIA4RZutQerUeDb7G3QRRPN2Ds';

// API read 
const fetchFunction = async () => {
  try {
    const response = await fetch(URL);
    const responseData = await response.json();
    
    if (!response.ok) {
      console.log(data.description);
      return
    }
    
    // DATA EXECUTION
    const {data} = responseData;
    // let html = "";
    
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

    // END DATA EXECUTION
  } 
  catch { console.log(error) }
};