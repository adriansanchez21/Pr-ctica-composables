import { ref } from 'vue'
export default function useUser() {

    const user = ref(null)
    const baseURL = "https://jsonplaceholder.typicode.com/users/"

    const llegirUser = async (id) => {
        const urlUser = baseURL + id
        const response = await fetch(urlUser)
        user.value = await response.json()
    }

    return {
        user,
        llegirUser,
    }
}