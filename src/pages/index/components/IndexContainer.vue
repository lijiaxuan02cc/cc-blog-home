<template>
    <div class="index-container" :class="{ 'open-upper-layer': borderStyle === 'solid' }">
        <Header :borderStyle="borderStyle" @openUpperLayer="openUpperLayer" />
        <template v-if="borderStyle === 'none'">
            <Center @openUpperLayer="openUpperLayer" />
        </template>
        <UpperLayer v-else @hideUpperLayer="hideUpperLayer" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from './IndexHeader.vue';
import Center from './IndexCenter.vue';
import UpperLayer from './IndexUpperLayer.vue';

export default defineComponent({
    name: 'IndexContainer',
    components: {
        Header,
        Center,
        UpperLayer
    },
    setup() {
        const $router = useRouter();
        const borderStyle = ref('none');
        const openUpperLayer = function () {
            borderStyle.value = 'solid';
        };

        const hideUpperLayer = function () {
            borderStyle.value = 'none';
            $router.push('/');
        };
        return {
            borderStyle,
            openUpperLayer,
            hideUpperLayer
        };
    }
});
</script>

<style lang="scss" scoped>
.index-container {
    width: 100%;
    height: 100%;
}
.open-upper-layer {
    background-color: #000;
}
</style>
