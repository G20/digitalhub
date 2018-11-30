<template>
  <div style="background: white">
    <div id="header-menu" class="container flex row align:center pad-y:3">
      <div class="fit">
        <router-link :to="{ name: 'projects' }">
          <img id="logo-main" src="/assets/images/logo.png" alt="G20">
        </router-link>
      </div>
      <nav class="flex column">
        <router-link :to="{ name: 'detf' }" class="mar-lef:10">DETF</router-link>
        <router-link :to="{ name: 'links' }" class="mar-lef:10">LINKS</router-link>
        <router-link :to="{ name: 'about' }" class="mar-lef:10">ABOUT</router-link>
      </nav>      
      <!-- <nav class="flex row">
        <router-link :to="{ name: 'detf' }" class="mar-lef:10">DETF</router-link>
        <router-link :to="{ name: 'links' }" class="mar-lef:10">LINKS</router-link>
        <router-link :to="{ name: 'about' }" class="mar-lef:10">ABOUT</router-link>
      </nav> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>
