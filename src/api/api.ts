import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  getAllPosts: async () => {
    const response = await http.get('/post')
    return response.data

    // const response = await fetch(`${baseUrl}/posts`);
    // const json = await response.json();
    // return json;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    const response = await http.post(`/posts`, {
        title, body, userId
    });
    return response.data;

    // const response = await fetch(`${baseUrl}/posts`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title,
    //     body,
    //     userId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const json = await response.json();
    // return json;
  },
};
