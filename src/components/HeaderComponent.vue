<template>
    <header class="header center">
        <div class="header__left">
            <router-link to="/" class="logo">
                <img :src="require('@/assets/img/Logo-2.svg')" alt="logo">
            </router-link>
            <router-link to="/" class="logo2">
                <img :src="require('@/assets/img/Interno.svg')" alt="logo">
            </router-link>
        </div>
        <nav class="header__right">
            <router-link to="/" class="header__link-site">Home</router-link>
            <router-link to="/blog" class="header__link-site">Project</router-link>
            <router-link to="/blog-details" class="header__link-site">Blog</router-link>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'HeaderComponent'
};
</script>