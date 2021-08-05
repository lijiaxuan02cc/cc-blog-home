<template>
    <div class="page-blog">
        <container> </container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/container.vue';

export default defineComponent({
    name: 'PageBlog',
    components: {
        Container
    }
});
</script>

<style lang="scss" scoped>
.page-blog {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 100vw;
}
</style>
