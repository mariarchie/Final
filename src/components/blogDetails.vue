<template>
    <div class="top">
        <HeaderComponent />
        <div class="blogDetailsPage">
            <div class="blogDetailsPage__banner">
                <img :src="bannerImage" alt="banner" class="blogDetailsPage__banner__img">
            </div>

            <div class="blogDetailsPage__center center">
                <div class="blogDetailsPage__center__main">
                    <div v-if="selectedArticleByTag" class="selected-article">
                        <h2 class="blogDetailsPage__center__articleTitle">{{ selectedArticleByTag.title }}</h2>
                        <div>
                            <img :src="selectedArticleByTag.content.image" alt="Article Image">
                            <div class="blogDetailsPage__center__underImg">
                                <p class="blogDetailsPage__center__articleDate">{{ selectedArticleByTag.content.date }}</p>
                                <p>{{ selectedArticleByTag.content.category }}</p>
                            </div>
                            <p class="blogDetailsPage__center__text" v-html="selectedArticleByTag.content.text"></p>
                            <div class="blogDetailsPage__center__slogan-container">
                                <img class="blogDetailsPage__center__slogan" :src="selectedArticleByTag.content.sloganImg"
                                    alt="Slogan Image">
                            </div>
                            <h2 class="blogDetailsPage__center__articleTitle">{{ selectedArticleByTag.content.secondTitle }}
                            </h2>
                            <p class="blogDetailsPage__center__text">{{ selectedArticleByTag.content.secondText }}</p>
                            <ol class="blogDetailsPage__center__list">
                                <li v-for="item in selectedArticleByTag.content.list" :key="item">{{ item }}</li>
                            </ol>
                            <img class="blogDetailsPage__center__img2" :src="selectedArticleByTag.content.secondImage"
                                alt="Second Article Image">
                            <p class="blogDetailsPage__center__text">{{ selectedArticleByTag.content.thirdText }}</p>
                        </div>
                    </div>
                </div>

                <div class="blogDetailsPage__center__tags">
                    <h2 class="blogDetailsPage__center__title">Tags</h2>
                    <div class="blogDetailsPage__tag-container">
                        <span v-for="tag in allTags" :key="tag"
                            :class="['blogDetailsPage__tag', { 'blogDetailsPage__selected-tag': selectedTag === tag }]"
                            @click="selectTag(tag)">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import BlogDetailsArt1 from '@/assets/img/BlogDetailsArt1.svg';
import BlogDetailsArt2 from '@/assets/img/BlogDetailsArt2.svg';
import BlogDetailsSlogan from '@/assets/img/BlogDetailsSlogan.svg';

export default {
    name: 'BlogDetailsPage',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data() {
        return {
            bannerImage: require('@/assets/img/bannerBlogDetails.svg'), 
            selectedTag: '',
            selectedArticleByTag: null,
            articles: [
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    content: {
                        image: BlogDetailsArt1,
                        date: '26 December, 2022 ',
                        category: 'Interior / Home / Decore',
                        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>
                            Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                        sloganImg: BlogDetailsSlogan,
                        secondTitle: 'Design sprints are great',
                        secondText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                        secondImage: BlogDetailsArt2,
                        thirdText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`
                    },
                    tags: ['Kitchen', 'Kitchen planning']
                },
                {
                    title: "Best For Any Office & Business Interior Solution",
                    content: {
                        image: BlogDetailsArt1,
                        date: '26 December, 2022 ',
                        category: 'Interior / Home / Decore',
                        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>
                            Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                        sloganImg: BlogDetailsSlogan,
                        secondTitle: 'Design sprints are great',
                        secondText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                        secondImage: BlogDetailsArt2,
                        thirdText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`
                    },
                    tags: ['Bedroom', 'Building']
                },
                {
                    title: "Low Cost Latest Invented Interior Designing Ideas",
                    content: {
                        image: BlogDetailsArt1,
                        date: '15 January, 2023 ',
                        category: 'Architecture / Innovation / Trends',
                        text: `Exploring the frontiers of architecture, this piece delves into the innovative use of space and materials. From the synergy of nature and design to the fusion of traditional methods with modern technology, discover how architects shape the future of our urban landscapes.`,
                        sloganImg: BlogDetailsSlogan,
                        secondTitle: 'Blending Spaces with Nature',
                        secondText: 'Discover the seamless integration of natural elements in urban design. Learn about the architects who are redefining the boundaries between the built environment and natural habitats.',
                        list: ['Innovative materials making a sustainable impact in modern architecture.', 'Architectural designs inspired by natural forms and structures.', 'The rise of eco-friendly buildings in urban landscapes.'],
                        secondImage: BlogDetailsArt2,
                        thirdText: `Join us on a journey through the aesthetics of sustainability. From green rooftops to energy-efficient designs, we cover the evolution of eco-conscious architecture.`
                    },
                    tags: ['Architecture']
                },
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    content: {
                        image: BlogDetailsArt1,
                        date: '20 February, 2023 ',
                        category: 'Interior Design / Essentials / Guide',
                        text: `This article offers a primer on the must-have elements for any stylish home. We cover the essentials of color theory, furniture selection, and the art of decluttering to create a harmonious living space.`,
                        sloganImg: BlogDetailsSlogan,
                        secondTitle: 'Color Your World',
                        secondText: 'Dive into the psychological impact of colors in interior design. Understand how to choose the right palette for your homes atmosphere.',
                        list: ['The psychology behind color choices in home decor.', 'Five timeless furniture pieces for any interior style.', 'Tips for maintaining a minimalist aesthetic in your home.'],
                        secondImage: BlogDetailsArt2,
                        thirdText: `From the basics of layout planning to the finishing touches of accessorizing, learn how to bring a professional touch to your personal spaces.`
                    },
                    tags: ['Building']
                },
                {
                    title: "Best For Any Office & Business Interior Solution",
                    content: {
                        image: BlogDetailsArt1,
                        date: '18 April, 2023 ',
                        category: 'Lifestyle / Outdoor / Living',
                        text: `Outdoor living spaces are becoming the heart of the home. Learn how to transform your backyard into a serene retreat or an entertainment hub with these design ideas.`,
                        sloganImg: BlogDetailsSlogan,
                        secondTitle: 'Bringing the Indoors Out',
                        secondText: 'Expand your living area by creating an outdoor space that reflects the comfort and style of your interior design.',
                        list: ['Creative lighting solutions for your outdoor sanctuary.', 'Choosing durable materials for all-weather outdoor furniture.', 'Landscaping tips for creating a private and peaceful backyard.'],
                        secondImage: BlogDetailsArt2,
                        thirdText: `Whether you're looking for a quiet place to unwind or an open area for hosting gatherings, we'll guide you through the essentials of outdoor living design.`
                    },
                    tags: ['Building', 'Architecture']
                },
                {
                    title: "Low Cost Latest Invented Interior Designing Ideas",
                    content: {
                        image: BlogDetailsArt1,
                        date: '5 March, 2023 ',
                        category: 'Renovation / Kitchen / Modern',
                        text: `Revamp your culinary space with our guide to modern kitchen makeovers. We discuss trending materials, smart appliances, and how to maximize efficiency without sacrificing style.`,
                        sloganImg: BlogDetailsSlogan,
                        secondTitle: 'Smart Kitchens for Smart Cooks',
                        secondText: 'Embrace the future with smart kitchen technologies that simplify meal prep and enhance your cooking experience.',
                        list: ['Top trends in kitchen countertops and cabinetry.', 'Smart appliances that are changing the way we cook.', 'Designing a kitchen thats both beautiful and functional.'],
                        secondImage: BlogDetailsArt2,
                        thirdText: `With an eye for detail and a taste for innovation, discover how to create a kitchen that's ready for the future of cooking.`
                    },
                    tags: ['Architecture', 'Kitchen']
                }
            ],
            allTags: []
        };
    },
    computed: {
        filteredArticles() {
            if (this.selectedTag === '') {
                return this.articles;
            } else {
                return this.articles.filter(article => article.tags.includes(this.selectedTag));
            }
        },
        blogPostExists() {
            return this.selectedArticleByTag !== null;
        }
    },
    methods: {
        selectTag(tag) {
            this.selectedTag = tag;
            this.selectedArticleByTag = this.articles.find(article => article.tags.includes(tag));
        }
    },
    created() {

        this.allTags = [];
        this.articles.forEach(article => {
            article.tags.forEach(tag => {
                if (!this.allTags.includes(tag)) {
                    this.allTags.push(tag);
                }
            });
        });

        if (this.allTags.length > 0) {
            this.selectedTag = this.allTags[0];
            this.selectedArticleByTag = this.articles.find(article => article.tags.includes(this.selectedTag));
        }
    },
    mounted() {
        if (!this.blogPostExists) {
            this.$router.push('/404');
        }
    },
};
</script>

<style lang="scss">
@import "@/assets/css/style.scss";
</style>