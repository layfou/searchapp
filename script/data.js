// import {API_KEY3, EXEC_URL, READ_EXEC, readAPI} from "./variables.js"

// API read 
export const fetchFunction = async () => {
  try {
    const response = await fetch(readAPI);
    const data = await response.json();
    
    if (!response.ok) {
      console.log(data.description);
      return
    }
    
    // DATA EXECUTION
    fetchedData = data.data;
    availableKeyword = fetchedData.map(data => data.product);
    const statusIcon = document.getElementById('status-icon');
    statusIcon.className = 'far fa-circle-check';
    statusIcon.style.color = 'rgb(46, 194, 68)';
    
    // END DATA EXECUTION
  } 
  catch { console.error(error) }
};

