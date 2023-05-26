import axios from 'axios';
export const fetchData = async (userid) => {
  const base_url='https://jsonplaceholder.typicode.com'
  const callObject = {
    method: 'get',
    url: `${base_url}/posts/${userid}`,
  };  
  const response = await axios(callObject);


      return response.data
      
    
  
};
