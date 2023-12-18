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

  /* 
  2) Per obtenir els posts de la json placeholder api ho podem fer amb el fetch.
  3) Necessitem una variable de tipus reactiva per a guardar els posts ja que si canvia la url canviaran les dades dels posts.
  5) Fa que la funció sigui síncrona. Accedeix a la api i espera a que aconsegueixi totes les dades i després executa la resta del codi.
  */