import {ref} from "vue";

export const useToggle = () => {
    const visible =ref(true)
    const toggle = () => {
        return  visible.value = !visible.value
    }
    return {visible, toggle}
}