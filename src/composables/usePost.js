import { ref } from 'vue'
export default function usePost() {

    const posts = ref([])
    const post = ref(null)
    const baseURL = "https://jsonplaceholder.typicode.com/posts/"

    const llegirPosts = async () => {
        const response = await fetch(baseURL)
        posts.value = await response.json()
    }

    const llegirPost = async (id) => {
        const urlPost = baseURL + id
        const response = await fetch(urlPost)
        post.value = await response.json()
    }

    return {
        posts,
        llegirPosts,
        post,
        llegirPost,
    }
}