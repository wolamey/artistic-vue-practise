<template>
    <div class="page-calculator">
        <Calculator/>
    </div>
</template>



<script>
import Calculator  from '@/components/Calculator.vue';
export default{
    components:{Calculator}
}
</script>



<style scoped>

.page-calculator{
    padding: 150px 0;
}
</style>