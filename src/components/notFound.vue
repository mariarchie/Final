<template>
    <div class="notFoundPage">
        <HeaderComponent />

        <div class="notFoundPage-container">
            <div class="notFoundPage__content">
                <h1 class="notFoundPage__heading">404</h1>
                <p class="notFoundPage__text">We are sorry, but the page you requested was not found</p>
                <router-link to="/" class="notFoundPage__back-home">Back To Home <svg width="18" height="17"
                        viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>
            <div class="notFoundPage__image">
                <img :src="Img404" alt="Page Not Found" class="notFoundPage__img">
            </div>
        </div>
    </div>
</template>
  
<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
    name: 'NotFoundPage',
    data() {
        return {
            Img404: require('@/assets/img/404.svg'),
        };
    },
    components: {
        HeaderComponent
    }
};
</script>

<style lang="scss">
@import "@/assets/css/style.scss";
</style>