<template>
  <div>
    <router-view />
  </div>
</template>

<script>
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body::-webkit-scrollbar{
  background: transparent;
  border-radius: 2rem;
  width: 0.8rem;
}
body::-webkit-scrollbar-thumb{
  background: rgba(203, 203, 203, 0.619);
  border-radius: 2rem;
}
</style>
