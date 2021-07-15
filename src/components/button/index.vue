<template>
    <div class="components-btn btn-primary">{{ buttonText }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Button',
    props: {
        buttonText: {
            type: String,
            default: 'See details'
        },
        width: {
            type: String,
            default: '132px'
        }
    }
});
</script>

<style lang="scss" scoped>
.components-btn {
    width: v-bind(width);
    height: 44px;
}
</style>
