import {computed, reactive} from "vue";

export const useForm = (props) => {
    const form = reactive({
        title: '',
        description: '',
    })

    const onSubmit = () => {
        const recepte = {
            title: form.title.trim(),
            description: form.description.trim(),
            id: Date.now().toString()
        }
        form.title = form.description = ''
        props.addReception(recepte)
    }
    const valid = computed(() => {
        return  form.title.trim() && form.description.trim()
    })
    return { form, onSubmit,valid }
}