<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="container">
    <AddComponent :addReception="addReception"/>
    <div class="columns">
      <ListComponent @select="select" :reception="reception"/>
      <DetailsComponent :recepte="current" @removeRecepte="removeRecepte"/>

    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AddComponent from '@/components/my-componets/AddComponent'
import ListComponent from '@/components/my-componets/ListComponent'
import DetailsComponent from '@/components/my-componets/DetailsComponent'
import {useReception} from "@/hook/useReception";

export default {
  name: 'App',
  setup() {
    return {
      ...useReception()
    }
  },
  // data: () => ({
  //   reception: [],
  //   current: null
  // }),
  // methods: {
  //   addReception(recepte) {
  //     this.reception.push(recepte)
  //   },
  //   select(id) {
  //     this.current = this.reception.find(recepte => recepte.id === id)
  //   },
  //   removeRecepte(id) {
  //     this.current = null
  //     this.reception = this.reception.filter(recepte => recepte.id !== id)
  //   }
  // },
  components: {
    AddComponent,
    DetailsComponent,
    ListComponent
    // HelloWorld
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #222;
}

a {
  text-decoration: none;
  color: darkblue;
  transition: .3s all ease;
}

.center {
  text-align: center;
}

a:hover {
  cursor: pointer;
  opacity: .7;
  text-decoration: underline;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
}

.columns {
  display: flex;
}

.detail, .list {
  width: 50%;
  border: 1px solid #eee;
}

.list {
  border-right: 0;
}

.btn {
  border-radius: 5px;
  background: darkblue;
  color: #fff;
  padding: 6px 14px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #eee;
  color: black;
  cursor: not-allowed;
}

.btn.remove {
  background: darkred;
}

.btn.secondary {
  background: grey;
}

/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
