import apiHelper from './apiHelper';

const login = ({username, password }) => {
  const data = apiHelper('post', 'https://api.taiga.io/api/v1/auth', {
    username,
    password,
    type: 'normal',
  });
  return data
}
export default login;