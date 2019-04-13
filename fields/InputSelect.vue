<template>
  <div class="form-group">
    <div class="input-group">
      <select v-model="model[field.key]">
        <option
          v-for="(item, index) in field.options"
          :key="index"
          :value="item.value ? item.value : item"
          >{{ item.label ? item.label : item }}</option>
      </select>
    </div>
  </div>
</template>

<script>

  import baseField from './baseField';

  export default {
    mixins: [baseField],
  };
</script>
