<template>
  <div class="list" :class="{empty: reception.length === 0}">
    <div v-if="reception.length">
      <div class="card"
           v-for="recepte in reception"
           @click="$emit('select',recepte.id)"
      >
        <h2 class="card-title">{{ recepte.title }}</h2>
      </div>
    </div>
    <p v-else class="center">No components. Add one</p>
  </div>
</template>

<script>
export default {
  props: {
    reception: {
      type: Array
    }
  },

}
</script>

<style>
.card {
  border-bottom: 1px solid #eee;
  padding: 1rem;
  transition: 300ms all ease;
  cursor: pointer;
  background: #fff;
}
.empty {
  padding: 1rem;
  background: #fff!important;
}
.card-title {
  padding: 1rem;
  text-align: center;
}
.card:hover {
  background: #eee;
}
.list {
  background: #fffeee;
}
</style>