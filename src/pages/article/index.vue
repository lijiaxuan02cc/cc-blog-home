<template>
    <div class="page-article">
        <Project />
        <Blog />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Blog from '../blog/index.vue';
import Project from '../project/index.vue';

export default defineComponent({
    name: 'PageArticle',
    components: {
        Blog,
        Project
    }
});
</script>

<style lang="scss" scoped></style>
