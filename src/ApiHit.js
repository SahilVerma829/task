
export const signup=user=>{
   return fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export const getUser=()=>{
  return  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .catch((err) => console.log(err));
}

export const deleteUser=()=>{
   return fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

export const updateUser=(user)=>{
 return fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify(user),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}