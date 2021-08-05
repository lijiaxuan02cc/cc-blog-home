<template>
    <div class="page-content">
        <container></container>
        <slogan></slogan>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/ContentContainer.vue';
import Slogan from './components/ContentSlogan.vue';

export default defineComponent({
    name: 'PageContent',
    components: {
        Container,
        Slogan
    }
});
</script>

<style lang="scss" scoped>
.page-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
}
</style>
