<template>
  <div class="detail">
    <div class="component" v-if="recepte">
      <h2>{{ recepte.title }}</h2>
      <a @click.prevent="toggle" href="#">{{visible ? 'Hidden' : 'Show'}}</a>
      <p v-if="visible">{{ recepte.description }}</p>
      <button class="btn remove" @click="$emit('removeRecepte', recepte.id)">Remove</button>
    </div>
  </div>
</template>
<script>
import {useToggle} from "@/hook/useToggle";
import {watch} from "vue";
import toggleMixin from "@/components/toggleMixin";

export default {
  props: {
    recepte: Object
  },
  setup:(props) => {
    const {visible, toggle} = useToggle()
    watch(() => props.recepte, () => {
      visible.value = false
    })
     return {
       visible, toggle
     }
  },
  // mixins: [toggleMixin]
  // data:() => ({
  //   visible: false
  // }),
  // methods: {
  //   toggle() {
  //     this.visible = !this.visible
  //   }
  // },
  // watch: {
  //   recepte() {
  //     this.visible = false
  //   }
  // }
}
</script>
<style>
.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.component p {
  font-size: .8rem;
  margin-bottom: .5rem;
}
.component a, .component h2 {
  margin-bottom: .5rem;
}
</style>