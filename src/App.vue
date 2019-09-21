<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap');

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  color: rgba(0, 0, 0, 0.89);
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  padding: 44px 41px;
  .error-block {
    border: 1px solid;
    font-size: 16px;
    color: #ee514a;
    padding: 1rem;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
  }
}
</style>
