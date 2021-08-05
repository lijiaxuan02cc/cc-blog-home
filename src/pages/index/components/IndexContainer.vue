<template>
    <div class="index-container">
        <Header :borderStyle="borderStyle" @openUpperLayer="openUpperLayer" />
        <template v-if="borderStyle === 'none'">
            <Center />
        </template>
        <UpperLayer v-else />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
        const borderStyle = ref('none');
        const openUpperLayer = function () {
            borderStyle.value = 'solid';
        };
        return {
            borderStyle,
            openUpperLayer
        };
    }
});
</script>

<style lang="scss" scoped>
.index-container {
    width: 100%;
    height: 100%;
}
</style>
