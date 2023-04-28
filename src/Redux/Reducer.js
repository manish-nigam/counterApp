 
const initialData = {
    name:" 0"
 }
 
 const counterApp = (storData = initialData, action) => {
    if (action.type === "num") {
       return {
          name: action.count 
       }
    } 
      
    return storData;
 }
 
 export default counterApp;