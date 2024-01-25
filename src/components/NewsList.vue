<template>
    <div v-for="newsItem in displayedNewsList" :key="newsItem.id" class="mainPage_news">
        <img :src="newsItem.imageUrl" :alt="newsItem.title" class="mainPage_news__img">
        <div class="mainPage_news__content">
            <div class="mainPage_news__overlay">
                <p class="mainPage_news__name">{{ newsItem.title }}</p>
            </div>
            <div class="mainPage_news__details">
                <!-- <h3 class="mainPage_news__features">{{ newsItem.subtitle }}</h3> -->
                <router-link :to="`/blog/${newsItem.id}`" class="mainPage_news__features">
                    {{ newsItem.subtitle }}
                </router-link>
                <div class="mainPage_news__bottom">
                    <p class="mainPage_news__date">{{ newsItem.date }}</p>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'NewsList',
    props: {
        itemsToShow: {
            itemsToShow: Number
        }
    },
    computed: {
        displayedNewsList() {
            return this.newsList.slice(0, this.itemsToShow);
        }
    },
    data() {
        return {
            newsList: [
                {
                    id: 1,
                    title: 'Kitchen Design',
                    subtitle: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022',
                    imageUrl: require('@/assets/img/Photo-6.svg'),
                },
                {
                    id: 2,
                    title: 'Living Design',
                    subtitle: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '26 December, 2022',
                    imageUrl: require('@/assets/img/Photo-7.svg'),
                },
                {
                    id: 3,
                    title: 'Interior Design',
                    subtitle: 'Best For Any Office & Business Interior',
                    date: '22 December, 2022',
                    imageUrl: require('@/assets/img/Photo-8.svg'),
                },
                {
                    id: 4,
                    title: "Kitchan Design",
                    subtitle: "Let’s Get Solution For Building Construction Work",
                    date: "26 December, 2022",
                    imageUrl: require('@/assets/img/Photo-9.svg'),
                },
                {
                    id: 5,
                    title: "Living Design",
                    subtitle: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December, 2022",
                    imageUrl: require('@/assets/img/Photo-10.svg'),
                },
                {
                    id: 6,
                    title: "Interior Design",
                    subtitle: "Best For Any Office & Business Interior Solution",
                    date: "25 December, 2022",
                    imageUrl: require('@/assets/img/Photo-11.svg'),
                },
            ]
        };
    }
};
</script>
  
<style lang="scss">
@import "@/assets/css/style.scss";
</style>