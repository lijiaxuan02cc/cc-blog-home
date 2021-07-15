<template>
    <div class="blog-container">
        <div class="blog-title text-primary">Blogs</div>
        <div class="blog-main">
            <blog-content></blog-content>
            <blog-nav></blog-nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlogContent from './blog-content.vue';
import BlogNav from './blog-nav.vue';

export default defineComponent({
    name: 'BlogContainer',
    components: {
        BlogContent,
        BlogNav
    }
});
</script>

<style lang="scss" scoped>
.blog-container {
    position: relative;
    width: 1254px;
    min-height: 800px;
    margin-top: 150px;
    .blog-title {
        font-size: 28px;
        font-weight: 800;
    }
    .blog-main {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }
}
</style>
