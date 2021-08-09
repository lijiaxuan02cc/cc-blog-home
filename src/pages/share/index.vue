<template>
    <div class="page-share">
        <Container />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/ShareContainer.vue';

export default defineComponent({
    name: 'PageShare',
    components: {
        Container
    }
});
</script>

<style lang="scss" scoped>
.page-share {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
