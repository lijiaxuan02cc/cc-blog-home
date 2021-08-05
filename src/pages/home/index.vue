<template>
    <div class="page-home">
        <data-overview class="home-data-overvie" :overview-list="overviewList"></data-overview>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataOverview from '/@/components/data-overview/index.vue';
export default defineComponent({
    name: 'PageHome',
    components: {
        DataOverview
    },
    setup() {
        // todo 变成接口
        const overviewList = [
            {
                title: '文章数量',
                num: 50
            },
            {
                title: '项目数量',
                num: 50
            },
            {
                title: '运行天数',
                num: 50
            },
            {
                title: '访问数量',
                num: 50
            }
        ];

        return {
            overviewList
        };
    }
});
</script>

<style lang="scss" scoped>
.page-home {
    min-width: 100vw;
    .home-data-overvie {
        margin-top: 50px;
    }
}
</style>
