<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDayBook" class="btn btn-primary"> journal </button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
   
  },

  methods:{
    goToDayBook(){
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>
