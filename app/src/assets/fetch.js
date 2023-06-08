const axios = require('axios');

exports.getAllBooks = async ()=>
{
  const obj= await axios.get('http://localhost:5000/books');
  return obj.data.data;
}