const BASE_URL = 'https://thinkful-list-api.herokuapp.com/aaron-joseph';

function getItems(){
  return fetch(`${BASE_URL}/items`);
}
const createItem = function (name){
  const newItem = JSON.stringify({name});
  return fetch(`${BASE_URL}/items`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: newItem
  });
};
export default { 
  getItems,
  createItem
};


// const blogData = JSON.stringify({
//     title: "Because I'm Batman",
//     author: 'Bruce Wayne',
//     content: 'No one will ever guess my secret identity. Haha!'  
//   });
  
//   fetch('http://example.api.com/blogs', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: blogData
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err.message));
