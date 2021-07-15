<template>
    <div class="components-avter shadow-inset">
        <div class="components-avter-content"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Acter'
});
</script>

<style lang="scss" scoped>
.components-avter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 147px;
    height: 147px;
    border-radius: 50%;
    .components-avter-content {
        width: 121px;
        height: 121px;
        border: 10px solid transparent;
        border-color: #1f4630;
        border-radius: 50%;
        background-size: 100% 100%;
        background-image: url('https://img0.baidu.com/it/u=2007860528,3967414055&fm=26&fmt=auto&gp=0.jpg');
    }
}
</style>
