/*
Add to the end of the "Web App URL" ?path=Sheet1&action=read b. Write to the Sheet (Add a new row)
Add to the end of the "Web App URL" ?path=Sheet1&action=write&Users=[name]
*/ 
const execURL = 'https://script.google.com/macros/s/AKfycbxweMNmz6ifGrqhPqLlIhUwaJ1JOBMBCll4VAqZjfimrX7XHwhkMSVfya15TDrQ9O4y/exec'
const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=VsV1BIE-Wc_mgNQ1GdUq_UvjNbUn1l6QKGDRgAvDDzvTemAEpivAVgfnXJrjgB4ApIhHQ6ekynE03Sud1oBA6eAT_DtwnIegOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6nikWno1f-VKHPFX0X19Ef9tFPkJLyaUE21lA0lVElLzy_6pIb2GSnTIrIX_F9daAExd9siZ1tt0n6jY6BzsA0FtHNV-MPRP-X2KnvcqMMGFZR6btdKBkCY8-paDNctvg&lib=MdL01nxbIA4RZutQerUeDb7G3QRRPN2Ds';

// API read 
const fetchFunction = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    if (!response.ok) {
      console.log(data.description);
      return
    }
    
    // replace 'console.log(data)' with your desired execution
    console.log(data);

  } catch { console.log(error) }
};

fetchFunction();