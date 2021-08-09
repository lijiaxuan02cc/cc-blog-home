<template>
    <div class="index-header">
        <div class="herder-action cursor-hand" @click="headerClick('cc')">
            <div class="index-icon know-me"></div>
            <span>KNWO ME ？</span>
        </div>
        <div class="herder-action cursor-hand" @click="headerClick('share')">
            <span>SHARE ;)</span>
            <div class="index-icon share"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'IndexHeader',
    props: {
        borderStyle: {
            type: String,
            requierd: true
        }
    },
    setup(props, { emit }) {
        const $router = useRouter();
        const headerClick = function (path: string) {
            $router.push(`/${path}`);
            emit('openUpperLayer');
        };
        return {
            headerClick
        };
    }
});
</script>

<style lang="scss" scoped>
.index-header {
    display: flex;
    justify-content: space-between;
    width: 97%;
    padding: 20px 0;
    margin: 0 auto;
    border-bottom: 2px v-bind(borderStyle) #34ff67;
}
.herder-action {
    font-family: 'Comic Sans MS', cursive;
    font-size: 28px;
    font-weight: 600;
    color: #34ff67;
    .index-icon {
        transform: translateY(7px);
        display: inline-block;
        height: 40px;
        width: 40px;
        background-size: 100% 100%;
    }
    .know-me {
        margin-right: 20px;
        background-image: url('https://cc-space.oss-cn-beijing.aliyuncs.com/crown.png');
    }
    .share {
        margin-left: 20px;
        background-image: url('https://cc-space.oss-cn-beijing.aliyuncs.com/share.png');
    }
}
</style>
