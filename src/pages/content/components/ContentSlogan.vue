<template>
    <div class="content-slogan">
        <div class="slogan shadow-soft text-primary">
            <div class="pens-icon pens-icon-right"></div>
            {{ des }}
            <div class="pens-icon"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ContentSlogan',
    props: {
        des: {
            type: String,
            default: '半山腰总是最挤得，你要去山顶看看'
        }
    }
});
</script>

<style lang="scss" scoped>
.content-slogan {
    display: flex;
    justify-content: center;
    margin: 50px 0px 0px 0px;
    .slogan {
        width: 920px;
        padding: 10px 24px;
        text-align: center;
    }
    .pens-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0px 10px 0px 10px;
        background-image: url('https://cc-space.oss-cn-beijing.aliyuncs.com/Pens.png');
        background-size: 100% 100%;
        transform: translateY(5px);
    }
    .pens-icon-right {
        transform: rotateY(180deg) translateY(5px);
    }
}
</style>
