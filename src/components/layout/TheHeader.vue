<template>

  <header class="up">
    <nav>
      <ul>
        <li>
          <router-link to="/question">Q&A</router-link>
        </li>
        <li>
          <router-link to="/review">REVIEW</router-link>
        </li>
        <li>
          <router-link to="/notice">NOTICE</router-link>
        </li>
        <li>
          <router-link to="/search">SEARCH</router-link>
        </li>
      </ul>
    </nav>
  </header>




  <header>
    <nav class="low">
      <h1>
        <router-link to="/">엘사키즈</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/join">Join</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
        </li>
        <li>
          <router-link to="/order">Order</router-link>
        </li>
        <li>
          <router-link to="/mypage">My Page</router-link>
        </li>
      </ul>
    </nav>
  </header>

  <header>
    <nav class="low">
      <ul>
        <li>
          <router-link to="/login">Best</router-link>
        </li>
        <li>
          <router-link to="/requests">Outer</router-link>
        </li>
        <li>
          <router-link to="/requests">Top</router-link>
        </li>
        <li>
          <router-link to="/requests">Shirts & Blouse</router-link>
        </li>
        <li>
          <router-link to="/requests">Knit & Cardigan</router-link>
        </li>
        <li>
          <router-link to="/requests">Pants</router-link>
        </li>
        <li>
          <router-link to="/requests">Jean</router-link>
        </li>
        <li>
          <router-link to="/requests">Skirt & Dress</router-link>
        </li>
        <li>
          <router-link to="/requests">Shoes</router-link>
        </li>
        
      </ul>

    </nav>
  </header>

  <header>
    <nav class="low">
      <ul>
        <li>
            <router-link to="/login">Weekly Best</router-link>
        </li>
        <li>
            <router-link to="/login">Best Item</router-link>
        </li>
        <li>
            <router-link to="/login">Weekly Photo Queen</router-link>
        </li>
      </ul>
    </nav>

  </header>


</template>

<style scoped>




header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header.up
{
  justify-content: right;
}



header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav.low {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
}


header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>