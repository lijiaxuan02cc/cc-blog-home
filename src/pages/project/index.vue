<template>
    <div class="page-project">
        <container></container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/ProjectContainer.vue';

export default defineComponent({
    name: 'PageProject',
    components: {
        Container
    }
});
</script>

<style lang="scss" scoped>
.page-project {
    display: flex;
    justify-content: center;
    min-width: 100vw;
}
</style>
