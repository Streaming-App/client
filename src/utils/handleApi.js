import axios from 'axios';

const handleApi = axios.create({
  baseURL: 'http://localhost:3333',
});

const userRegister = async (name, email, password) => {
  const { data } = await handleApi.post('/user', {
    name,
    email,
    password,
  });
  return data;
};

const userLogin = async (email, password) => {
  const { data } = await handleApi.post('/auth/login', {
    email,
    password,
  });
  return data;
};

export default { userRegister, userLogin };
