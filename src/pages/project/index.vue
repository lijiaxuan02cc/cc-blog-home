<template>
    <div class="page-project">
        <container></container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/container.vue';

export default defineComponent({
    name: 'Project',
    components: {
        Container
    }
});
</script>

<style lang="scss" scoped>
.page-project {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 100vw;
    min-height: 1200px;
}
</style>
