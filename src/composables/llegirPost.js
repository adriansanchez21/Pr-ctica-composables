import { ref } from 'vue'
export default async function llegirPost(id) {

    const post = ref(null)
    const baseURL = "https://jsonplaceholder.typicode.com/posts/"
    const urlPost = baseURL+id
    console.log(urlPost);
    
    const response = await fetch(urlPost)
    post.value = await response.json()
    
    return {
        post,
        llegirPost,
    }
}