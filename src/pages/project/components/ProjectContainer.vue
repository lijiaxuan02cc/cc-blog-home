<template>
    <div class="project-container">
        <div class="project-title text-primary">Project</div>
        <div class="project-card-container">
            <card v-for="(item, index) in 6" class="project-card" :key="index"></card>
        </div>
        <pagination class="project-pagination"></pagination>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '/@/components/project-card/index.vue';
import Pagination from '/@/components/pagination/index.vue';

export default defineComponent({
    name: 'ProjectContainer',
    components: {
        Card,
        Pagination
    }
});
</script>

<style lang="scss" scoped>
.project-container {
    position: relative;
    width: 1254px;
    margin-top: 150px;
    .project-title {
        font-size: 28px;
        font-weight: 800;
    }
    .project-card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        margin-top: 20px;
    }
    .project-card {
        margin: 30px;
    }
    .project-pagination {
        margin: 50px 0px 100px 0px;
    }
}
</style>
