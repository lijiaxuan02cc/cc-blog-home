<template>
    <div class="card-info-container">
        <div v-for="(item, index) in infoList" class="card-info" :key="index">
            <div class="card-icon" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></div>
            <span class="card-icon-des text-primary">{{ item.des }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
import { timestampTransform } from '../../utils/tools';

export default defineComponent({
    name: 'CardInfo',
    props: {
        createTime: {
            type: Number,
            default: 1626254538
        },
        previewNum: {
            type: Number,
            default: 99
        }
    },
    setup(props) {
        let { createTime, previewNum } = toRefs(props);

        const { year, month, day } = timestampTransform(createTime.value * 1000);
        const infoList = ref([
            {
                icon: 'https://cc-space.oss-cn-beijing.aliyuncs.com/yanjing.png',
                des: `${previewNum.value}阅读量`
            },
            {
                icon: 'https://cc-space.oss-cn-beijing.aliyuncs.com/rili.png',
                des: `${year}年${month}月${day}日`
            }
        ]);

        return {
            infoList
        };
    }
});
</script>

<style lang="scss" scoped>
.card-info-container {
    display: flex;
    justify-content: space-between;
    .card-info,
    .card-icon {
        display: inline-block;
        vertical-align: bottom;
    }
    .card-icon {
        margin-right: 5px;
        width: 20px;
        height: 24px;
        background-size: 100% 100%;
    }
    .card-icon-des {
        font-weight: 200;
        font-size: 12px;
    }
}
</style>
