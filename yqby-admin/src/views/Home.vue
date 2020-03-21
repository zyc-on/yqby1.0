<template>
  <div>Home</div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
