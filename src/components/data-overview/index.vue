<template>
    <div class="components-data-overview">
        <div v-for="(item, index) in overviewList" class="data-overview-item" :key="index">
            <p class="item-title text-primary">{{ item.title }}</p>
            <p class="item-data text-primary">{{ item.num }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'DataOverview',
    props: {
        overviewList: {
            type: Object,
            default: () => {
                return [];
            }
        }
    }
});
</script>

<style lang="scss" scoped>
.components-data-overview {
    display: flex;
    justify-content: center;
    align-items: center;
    .data-overview-item {
        display: inline-block;
        margin: 50px;
        .item-data {
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 300;
            font-size: 12px;
        }
    }
}
</style>
