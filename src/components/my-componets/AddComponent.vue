<template>
  <form class="form" @submit.prevent="onSubmit" >
    <h1>Add Component</h1>
    <div v-if="visible">
    <div class="input">
      <input  type="text" placeholder="add component" v-model="form.title">
    </div>
    <div class="input">
      <input type="text" placeholder="component description" v-model="form.description">
    </div>
    </div>
    <div class="buttons">
      <button class="btn" type="submit" :disabled="!valid">Add component</button>
      <button class="btn-secondary" @click="toggle">
        {{visible ? 'Hide' : 'Add'}} Form</button>
    </div>
  </form>
</template>
<script>
import toggleMixin from "@/components/toggleMixin";
import {ref, reactive, computed} from 'vue'
import {useToggle} from "@/hook/useToggle";
import {useForm} from "@/hook/useForm";

export default {
  props: {
    addReception:{
      type: Function,
      required: true
    }
  },
  // mixins:[toggleMixin],
  setup:(props) => {
    // const visible =ref(true)
    // const toggle = () => {
    //   return  visible.value = !visible.value
    // }

    // const form = reactive({
    //   title: '',
    //   description: '',
    // })
    //
    // const onSubmit = () => {
    //   const recepte = {
    //     title: form.title.trim(),
    //     description: form.description.trim(),
    //     id: Date.now().toString()
    //   }
    //   form.title = form.description = ''
    //   props.addReception(recepte)
    // }
    // const valid = computed(() => {
    //  return  form.title.trim() && form.description.trim()
    // })
    // const {visible: show, toggle: changeShow} = useToggle()
    return {
       // visible, toggle,
      // show, changeShow,
      ...useToggle(),
      // form, onSubmit, valid,
      ...useForm(props)
    }

  },
  // data:() => ({
  //   title: '',
  //   description: '',
  //   // visible: true
  // }),
  // methods: {
  //   onSubmit() {
  //     const recepte = {
  //       title: this.title.trim(),
  //       description: this.description.trim(),
  //       id: Date.now().toString()
  //     }
  //      this.title = this.description = ''
  //      this.addReception(recepte)
  //   },
  //   // toggle() {
  //   //   this.visible = !this.visible
  //   // }
  // },
  // computed: {
  //   valid() {
  //     return this.title.trim() && this.description.trim()
  //   }
  // }
}
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 1rem;
}
.form h1 {
  margin: 0;
  margin-bottom: 1rem;
}
.input {
  margin-bottom: 1rem;
}
.input input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 8px;
  width: 400px;
}
.buttons {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
 .btn {
 margin-right: 1rem;
  background: #3f5872;
   color: #fff;
   padding: .5rem;
   border-radius: .5rem;
}
.btn-secondary {
  background: #949292;
  color: #fff;
  padding: .5rem;
  border-radius: .5rem;
}
</style>