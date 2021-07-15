<template>
    <div class="page-index">
        <container></container>
        <slogan></slogan>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/container.vue';
import Slogan from './components/slogan.vue';

export default defineComponent({
    name: 'PageIndex',
    components: {
        Container,
        Slogan
    }
});
</script>

<style lang="scss" scoped>
.page-index {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
}
</style>
