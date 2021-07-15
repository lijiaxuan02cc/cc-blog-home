<template>
    <div class="components-input-group">
        <label for="components-input" class="text-primary">{{ label }}</label>
        <input
            class="components-input shadow-inset text-primary"
            type="text"
            id="components-input"
            placeholder="输入关键字"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Input',
    props: {
        label: {
            type: String,
            default: ''
        }
    }
});
</script>

<style lang="scss" scoped>
.components-input {
    display: inline-block;
    width: 250px;
    padding: 8px 12px;
    border-radius: 10px;
    font-weight: 300;
    border: 1px solid #18634b;
    text-align: left;
    transition: all 0.3s ease-in-out;
}
.components-input:focus {
    box-shadow: 6px 6px 12px #b8b9be, -6px -6px 12px #fff;
}
</style>
