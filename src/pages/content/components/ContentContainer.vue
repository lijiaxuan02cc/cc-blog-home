<template>
    <div class="content-container shadow-inset">
        <div class="center-img" :style="{ backgroundImage: 'url(' + config.coverImg + ')' }"></div>
        <div class="center-tab-container">
            <div
                v-for="(item, index) in config.tabList"
                class="center-tab text-primary"
                :class="{ 'center-tab-select': item.seleted, 'shadow-inset': item.seleted }"
                :key="index"
                @click="changePage(index)"
            >
                {{ item.name }}
            </div>
        </div>
        <avter class="avter"></avter>
        <div class="author text-primary">C.C.</div>
        <call-me class="call-me"></call-me>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { indexConfig } from '../../../config/page-index';
import Avter from '/@/components/avter/index.vue';
import CallMe from '/@/components/call-me/index.vue';

export default defineComponent({
    name: 'ContentContainer',
    components: {
        Avter,
        CallMe
    },
    setup() {
        const $router = useRouter();
        const config = reactive(indexConfig);

        const changePage: (index: number) => void = function (index: number): void {
            config.tabList.forEach((el) => {
                el.seleted = false;
            });
            config.tabList[index].seleted = true;
            $router.push(config.tabList[index].path);
        };

        onMounted(() => {
            config.tabList.forEach((el) => {
                el.seleted = false;
                if (window.location.href.includes(el.name.toLowerCase())) {
                    el.seleted = true;
                }
            });
        });

        return {
            config,
            changePage
        };
    }
});
</script>

<style lang="scss" scoped>
.content-container {
    position: relative;
    width: 1254px;
    height: 568px;
    margin-top: 20px;
    border-radius: 4px;
    .center-img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 440px;
        border-radius: 4px;
        background-size: 100% 100%;
    }
    .center-tab-container {
        position: absolute;
        right: 0px;
        bottom: 0px;
        .center-tab {
            display: inline-block;
            width: 100px;
            height: 48px;
            border-radius: 4px;
            font-weight: 700;
            line-height: 48px;
            transition: all 0.2s ease;
        }
        .center-tab-select {
            color: #1f4630;
        }
    }
    .avter {
        position: absolute;
        top: 370px;
        left: 40px;
    }
    .call-me {
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translate(-50%);
    }
    .author {
        position: absolute;
        top: 530px;
        left: 85px;
        font-size: 24px;
        font-weight: 600;
    }
}
</style>
