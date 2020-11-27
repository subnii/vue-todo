<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="onRemoveAll()">Clear All</span>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    onRemoveAll(){
      this.$store.commit('onClearAllItems')
    }
  }
}
</script>

<style scoped>
.clearAllContainer{
  width:8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color: #e20303;
  display: block;
}
</style>