<template>
  <div id="app">
    <div class="row at-row no-gutter flex-center">
      <div :class="`col-md-8`">
        <div class="at-box-row bg-c-brand-dark">
          <router-view/>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
