<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="onClearAllItems()">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return{

    }
  },
  methods:{
    ...mapMutations(['onClearAllItems'])
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