<template>
    <div class="blog-content">
        <blog-card v-for="(item, index) in 4" class="blog-card" :key="index"></blog-card>
        <pagination class="blog-pagination"></pagination>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlogCard from '/@/components/blog-card/index.vue';
import Pagination from '/@/components/pagination/index.vue';

export default defineComponent({
    name: 'BlogContent',
    components: {
        BlogCard,
        Pagination
    }
});
</script>

<style lang="scss" scoped>
.blog-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 60%;
    min-height: 800px;
    padding: 30px 0px 150px;
    .blog-card {
        margin-bottom: 30px;
    }
    .blog-pagination {
        margin: 30px 0px;
    }
}
</style>
