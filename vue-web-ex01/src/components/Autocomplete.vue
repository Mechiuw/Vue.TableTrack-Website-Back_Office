<!-- Autocomplete.vue -->
<template>
  <div class="autocomplete" ref="autocompleteRef">
    <input
      type="text"
      v-model="inputValue"
      @input="handleInput"
      @keydown.down="handleArrowDown"
      @keydown.up="handleArrowUp"
      @keydown.enter="selectItem"
    />
    <ul v-show="showDropdown" class="autocomplete-dropdown">
      <li
        v-for="(item, index) in filteredOptions"
        :key="index"
        @click="selectOption(item)"
        :class="{ active: index === selectedOptionIndex }"
      >
        {{ item[fieldName] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref , onMounted , onUnmounted } from 'vue';
import axios from 'axios';

export default {
  props: {
    apiUrl: String,
    fieldName: String,
    value: null,
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const inputValue = ref('');
    const showDropdown = ref(false);
    const selectedOptionIndex = ref(-1);
    const filteredOptions = ref([]);
    const autocompleteRef = ref(null);

    const handleInput = async () => {
      try {
        console.log('Fetching data for input:', inputValue.value);
        const response = await axios.get(`${props.apiUrl}?input=${inputValue.value}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          }
        });
        console.log('Response:', response.data); 
        filteredOptions.value = response.data.data; 
        showDropdown.value = true;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const handleArrowDown = () => {
      if (selectedOptionIndex.value < filteredOptions.value.length - 1) {
        selectedOptionIndex.value++;
      }
    };

    const handleArrowUp = () => {
      if (selectedOptionIndex.value > 0) {
        selectedOptionIndex.value--;
      }
    };

    const selectOption = (option) => {
      inputValue.value = option[props.fieldName];
      emit('update:value', option);
      showDropdown.value = false;
    };

    const handleClickOutside = (event) => {
      if(autocompleteRef.value && autocomplete.value.contains(event.target)){
        showDropdown.value = false
      }
    }

    const selectItem = () => {
      if (selectedOptionIndex.value !== -1) {
        selectOption(filteredOptions.value[selectedOptionIndex.value]);
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      inputValue,
      showDropdown,
      selectedOptionIndex,
      filteredOptions,
      handleInput,
      handleArrowDown,
      handleArrowUp,
      selectOption,
      selectItem,
    };
  },
};
</script>

<style scoped>
.autocomplete {
  position: relative;
  width: 100%;
}

.autocomplete input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}

.autocomplete .autocomplete-dropdown {
  position: absolute;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  color: black;
  z-index: 1;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
}

.autocomplete .autocomplete-dropdown li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete .autocomplete-dropdown li.active {
  background-color: #ddd;
}
</style>
