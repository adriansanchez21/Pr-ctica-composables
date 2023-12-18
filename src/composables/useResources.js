import { ref } from "vue";

export default function useResource(request = "posts") {
    const dadesElement = ref([]);
    const info = ref(null);
    const baseUrl = "https://jsonplaceholder.typicode.com/";

    const llegirMoltsElements = async () => {
        const url = baseUrl + request
        const response = await fetch(url);
        dadesElement.value = await response.json();
    };

    const llegirElement = async (id) => {
        const url = baseUrl + request + "/" + id
        const response = await fetch(url);
        info.value = await response.json();
    };

    return {
        dadesElement,
        llegirMoltsElements,
        info,
        llegirElement
    };
}