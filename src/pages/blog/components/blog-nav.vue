<template>
    <div class="blog-nav">
        <div class="search-container">
            <component-input label="搜索："></component-input>
        </div>
        <div class="tag-container">
            <div class="tag-title text-primary">Tags</div>
            <component-tag :tag-list="tagList"></component-tag>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentInput from '/@/components/input/index.vue';
import ComponentTag from '/@/components/tag/index.vue';

export default defineComponent({
    name: 'BlogNav',
    components: {
        ComponentInput,
        ComponentTag
    },
    setup() {
        // todo 换成接口
        const tagList = [
            {
                name: 'CSS',
                num: 5
            },
            {
                name: 'HTML',
                num: 5
            },
            {
                name: 'CSS',
                num: 5
            },
            {
                name: 'JavaScript',
                num: 5
            },
            {
                name: 'Node',
                num: 5
            },
            {
                name: 'JavaScript',
                num: 5
            },
            {
                name: 'Node',
                num: 5
            }
        ];
        return {
            tagList
        };
    }
});
</script>

<style lang="scss" scoped>
.blog-nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 35%;
    padding: 30px 0px;
    .search-container {
        width: 90%;
    }
    .tag-container {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-top: 50px;
        .tag-title {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 600;
            text-align: left;
        }
    }
}
</style>
