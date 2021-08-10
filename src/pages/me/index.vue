<template>
    <div class="page-me">
        <Slogan />
        <Resume />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Slogan from './components/MeSlogan.vue';
import Resume from './components/MeResume.vue';

export default defineComponent({
    name: 'PageMe',
    components: {
        Slogan,
        Resume
    }
});
</script>

<style lang="scss" scoped>
.page-me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    overflow-y: scroll;
}
</style>
