<template>
    <div class="components-card shadow-soft">
        <div class="project-name text-primary">{{ projectName }}</div>
        <div class="project-des text-primary">{{ des }}</div>
        <component-button class="project-btn"></component-button>
        <card-info class="project-info"></card-info>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentButton from '/@/components/button/index.vue';
import CardInfo from '/@/components/card-info/index.vue';

export default defineComponent({
    name: 'ProjectCard',
    components: {
        ComponentButton,
        CardInfo
    },
    props: {
        projectName: {
            type: String,
            default: 'C.C.  UI'
        },
        des: {
            type: String,
            default: '一个可以适配各种框架与不同版本的UI组件库'
        },
        createTime: {
            type: Number,
            default: 1626254538
        },
        previewNum: {
            type: Number,
            default: 99
        }
    }
});
</script>

<style lang="scss" scoped>
.components-card {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 348px;
    height: 359px;
    border-radius: 10px;
    .project-name {
        margin-top: 40px;
        font-weight: 600;
        font-size: 30px;
    }
    .project-des {
        margin-top: 40px;
        width: 70%;
    }
    .project-btn {
        position: absolute;
        bottom: 40px;
    }
    .project-info {
        position: absolute;
        bottom: 120px;
        width: 70%;
    }
}
</style>
