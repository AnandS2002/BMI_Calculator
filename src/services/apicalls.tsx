import axios from 'axios';
export const fetchData = async () => {
  const base_url = 'https://jsonplaceholder.typicode.com';
  const callObject = {
    method: 'get',
    url: `${base_url}/posts/`,
  };
  const response = await axios(callObject);

  return response.data;
};
export const post = async (fullName: string, email: string) => {
  const base = 'https://reqres.in';
  console.log(fullName);
  console.log(email);

  const respo = await axios.post(`${base}/api/users`, {fullName, email});
  return respo.status;
};
