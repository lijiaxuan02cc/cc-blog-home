<template>
    <div class="components-tab">
        <div v-for="(item, index) in tagList" class="tab-container inline-block-style shadow-soft" :key="index">
            <div class="tab-icon inline-block-style"></div>
            <span class="tab-name text-primary">{{ item.name }}</span>
            <div v-if="item.num" class="tab-num text-primary inline-block-style shadow-inset-shallow">
                {{ item.num }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Tab',
    props: {
        tagList: {
            type: Array,
            default: () => {
                [];
            }
        }
    }
});
</script>

<style lang="scss" scoped>
.inline-block-style {
    display: inline-block;
}
.tab-container {
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
    .tab-icon {
        transform: translateY(5px);
        width: 20px;
        height: 18px;
        background-image: url('https://cc-space.oss-cn-beijing.aliyuncs.com/tag.png');
        background-size: 100% 100%;
    }
    .tab-name {
        margin: 0px 3px;
    }
    .tab-num {
        width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 50%;
        font-size: 12px;
    }
}
</style>
