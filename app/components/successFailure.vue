<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-success" role="alert" v-if="status == 'success'">
               {{msg}}
            </div>
            <div class="alert alert-danger" role="alert" v-if="status == 'failure'">
               {{msg}} 
            </div>
        </div>
    </div>
</template>
 
<script setup>
    const props = defineProps(['status','msg'])
    
</script>
