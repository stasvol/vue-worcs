import {ref} from "vue";

export const useReception = () => {

        let reception = ref([])
        let current = ref(null)

    const addReception = (recepte) => {
        reception.value.push(recepte)
    }

    const select = (id) => {
        current.value = reception.value.find(recepte => recepte.id === id)
    }

   const  removeRecepte = (id) => {
        current.value = null
        reception.value = reception.value.filter(recepte => recepte.id !== id)
    }

    return {reception, current, useReception, addReception, select, removeRecepte}
}