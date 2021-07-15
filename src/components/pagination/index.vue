<template>
    <div class="components-pagination">
        <div
            v-for="(item, index) in pageList"
            class="pagination-item btn-primary"
            :key="index"
            @click="$emit('changePage', index)"
        >
            {{ item }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref } from 'vue';

export default defineComponent({
    name: 'Pagination',
    props: {
        total: {
            type: Number,
            default: 32
        },
        pageSize: {
            type: Number,
            default: 6
        }
    },
    setup(props) {
        const { total, pageSize } = toRefs(props);
        const pageCount: number = Math.ceil(total.value / pageSize.value);

        const pageList = ['<<', 1, '>>'];

        for (let value = 2; value <= pageCount; value++) {
            pageList.splice(value, 0, value);
        }

        return {
            pageList
        };
    }
});
</script>

<style lang="scss" scoped>
.components-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    .pagination-item {
        margin: 5px;
        width: 52px;
        height: 46px;
    }
}
</style>
