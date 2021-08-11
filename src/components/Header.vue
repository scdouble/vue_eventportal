<template>
  <header class="header">
    <div>Company Logo</div>
    <nav>
      <ul>
        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="nav-link" :to="{ name: 'event' }"
          >Events</router-link
        >
      </ul>
    </nav>

    <input type="text" /> <button>Search</button>
    <button>English</button>
    <button>マイページ</button>
    <button>login</button>
    <button>logout</button>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #333;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.header a:hover {
  color: #000;
}
.header ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}

.nav-link {
  margin-right: 10px;
  list-style: none;
}
</style>
