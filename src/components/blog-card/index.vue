<template>
    <div class="components-blog-card shadow-soft">
        <div class="blog-card-title text-primary">{{ title }}</div>
        <div class="blog-card-des text-primary">{{ des }}</div>
        <component-button class="blog-card-btn"></component-button>
        <card-info class="blog-card-info"></card-info>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentButton from '/@/components/button/index.vue';
import CardInfo from '/@/components/card-info/index.vue';

export default defineComponent({
    name: 'BlogCard',
    components: {
        ComponentButton,
        CardInfo
    },
    props: {
        title: {
            type: String,
            default: '如何突破996 & pua的迷雾？'
        },
        des: {
            type: String,
            default: '你是否因为996而感到身体疲惫？是否因为pua而充满精神压力？突破996 & pua的迷雾，看这一篇就够了！'
        }
    },
    setup() {
        const tagList = [
            {
                name: '情感交流'
            },
            {
                name: '至理名言'
            }
        ];

        return {
            tagList
        };
    }
});
</script>

<style lang="scss" scoped>
.components-blog-card {
    position: relative;
    width: 720px;
    height: 200px;
    border-radius: 20px;
    .blog-card-title {
        margin: 30px 0px 0px 20px;
        text-align: left;
        font-size: 20px;
    }
    .blog-card-des {
        font-size: 12px;
        width: 400px;
        margin: 30px 0px 0px 20px;
        text-align: left;
    }
    .blog-card-btn {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translate(0, -50%);
    }
    .blog-card-info {
        width: 200px;
        margin: 20px 0px 0px 20px;
    }
}
</style>
