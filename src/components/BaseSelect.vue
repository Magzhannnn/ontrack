<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { validateSelectOptions } from '../validators'
import BaseButton from './BaseButton.vue'

// defineProps(['options', 'placeholder', 'selected'])
defineProps({
  selected: Number,
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  placeholder: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-2">
    <BaseButton><XMarkIcon class="h-8" /></BaseButton>
    <select class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none">
      <option selected disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="selected === value"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
