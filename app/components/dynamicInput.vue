<template>
  <div>
      <label :for="labelName" class="form-label">{{ inputName }}</label>
     <input :type="inputType" :value="modelValue" @input="updateSharedValue" :id="labelName" class="form-control" required/>
  </div>
</template>

<script setup>

const { modelValue, inputType } = defineProps(['modelValue','inputType','labelName','inputName']);
const emit = defineEmits(['update:modelValue']);

const updateSharedValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
