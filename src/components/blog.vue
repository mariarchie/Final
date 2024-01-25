<template>
    <div class="top">
        <HeaderComponent />
        <div class="blogPage__center">
            <div class="blogPage__center__backImg"></div>
            <div class="blogPage__center__content">
                <h2 class="blogPage__center__heading">
                    <a @click.prevent="scrollToArticlesNews" class="scroll-link">Articles & News</a>
                </h2>
                <p class="blogPage__center__text">Home / Blog</p>
            </div>
        </div>

        <div class="blogPage__center__post center">
            <h2 class="blogPage__center__post__heading">Latest Post</h2>
            <div class="blogPage__center__post__object">
                <img :src="BlogCenter" alt="BlogCenter photo" class="blogPage__center__post__img">
                <div class="blogPage__center__post__content">
                    <h3 class="blogPage__center__post__caption">
                        Low Cost Latest Invented Interior Designing Ideas
                    </h3>
                    <p class="blogPage__center__post__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpis
                        dignissim maximus.posuere in.Contrary to popular belief.
                        <br><br>
                        Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>

                    <p class="blogPage__center__post__date">26 December, 2022<svg width="9" height="17" viewBox="0 0 9 17"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.77101 15.1855L7.71387 8.49983L1.77101 1.81412" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg></p>

                </div>
            </div>

        </div>

        <div class="blogPage__center__articles center">
            <h2 ref="articlesNews" class="blogPage__center__articles__heading">Articles & News</h2>
            <div class="blogPage__news-container center" id="app">
                <NewsList :itemsToShow="6" />
            </div>
        </div>
        <img :src="Pagination" alt="pages" class="blogPage__center__pages center">
    </div>
    <FooterComponent />
</template>
  
<script>
import HeaderComponent from './HeaderComponent.vue';
import NewsList from './NewsList.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name: 'BlogPage',
    data() {
        return {
            BlogCenter: require('@/assets/img/BlogCenter.svg'),
            Pagination: require('@/assets/img/Pagination.svg'),
        };
    },
    components: {
        HeaderComponent,
        NewsList,
        FooterComponent
    },
    methods: {
        scrollToArticlesNews() {
            const articlesNews = this.$refs.articlesNews;
            if (articlesNews) {
                articlesNews.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
};
</script>
  
<style lang="scss">
@import "@/assets/css/style.scss";
</style>