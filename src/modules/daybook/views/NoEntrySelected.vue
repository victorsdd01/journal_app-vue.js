import { defineAasyncComponent } from 'vue';
<template>
  <div class="d-flex justify-content-center">
    <h1 class="aling-self-center">No hay nada seleccionado :(</h1>
  </div>
  <Fab
    @onClick="goToCreateNewEntry"
  />
</template>

<script>

import {defineAsyncComponent} from 'vue'
export default {

  components:{
    Fab: defineAsyncComponent(()=> import('@/modules/daybook/components/FloatinActionButtom.vue'))
  },
  methods:{
    goToCreateNewEntry(){
      this.$router.push({name:'entry', params:{id:'new'} })
    }
  }
}
</script>

<style lang="scss" scoped>

    div{
        height: 100%;
    }
</style>