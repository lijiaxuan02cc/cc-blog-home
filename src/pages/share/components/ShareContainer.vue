<template>
    <div class="share-container">
        <div class="share-title text-primary">SHARE PLZ ;)</div>
        <div class="copy-container">
            <input
                id="copyinput"
                class="copy-input cursor-hand"
                type="text"
                v-model="shareUrl"
                readonly
                @focus="onFocus($event)"
            />
            <button class="copy-button cursor-hand" @click="copy">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ShareContainer',
    setup() {
        const shareUrl = ref('http://lijiaxuan.cc/space');
        const buttonText = ref('COPY');
        const onFocus = function (e: any) {
            e.currentTarget.select();
            document.execCommand('copy');
        };

        const copy = function (e: any) {
            const input = document.querySelector('#copyinput');
            (input as any).select();
            document.execCommand('copy');
            buttonText.value = 'SUCCESS';
        };
        return {
            shareUrl,
            buttonText,
            onFocus,
            copy
        };
    }
});
</script>

<style lang="scss" scoped>
.share-container {
    display: inline-block;
    height: 400px;
    .share-title {
        color: #34ff67;
        font-size: 100px;
        font-weight: 700;
    }
    .copy-container {
        display: flex;
        justify-content: stretch;
        width: 904px;
        height: 65px;
        max-width: 904px;
        margin: 80px 0px 20px;
    }
    .copy-input {
        flex: 1;
        vertical-align: middle;
        border: 2px solid #34ff67;
        color: #34ff67;
        text-align: left;
        box-shadow: none;
        user-select: text;
        padding: 2px 1rem 0;
        line-height: 60px;
        font-family: 'Comic Sans MS', cursive;
        font-size: 24px;
        background: none;
    }
    .copy-input::selection {
        background-color: #7cf679;
        color: #000;
    }
    .copy-button {
        min-width: 200px;
        vertical-align: middle;
        margin: 0;
        padding: 0;
        line-height: 60px;
        background: #34ff67;
        color: #000;
        font-family: 'Comic Sans MS', cursive;
        font-size: 18.8px;
        font-weight: 600;
        text-decoration: underline;
    }
}
</style>
