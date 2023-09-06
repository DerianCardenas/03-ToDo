<template>
    <header class="d-flex justify-content-between">
      <h1 class="p-4 ms-4">
        TABLERO DE ACTIVIDADES
      </h1>
      <div class="p-4">
          <button class="p-3 btn fs-5" 
            :class="theme == 0 
                ? 'btn-outline-secondary' : 'btn-outline-light'"
             @click="toggleMode">
             {{theme == 0 ? "Tema Oscuro" : "Tema Claro"}}
        </button>
      </div>
    </header>
  </template>
  <script setup>
  import 'bootstrap/dist/css/bootstrap.css';
  import { onMounted , ref} from 'vue';
  const theme = ref(0)
  onMounted(() => {
      const classList = document.body.classList;
      if(classList.contains("light-theme")){
          theme.value = 0
      }else{
          theme.value = 1
      }
  })
  const toggleMode = () => {
      const classList = document.body.classList;
      if(classList.contains("light-theme")){
          document.body.classList.remove("light-theme");
          document.body.classList.add("dark-theme")
          theme.value = 1
      }else{
          document.body.classList.add("light-theme");
          document.body.classList.remove("dark-theme")
          theme.value = 0
      }
  }
  </script>
  <style>
  </style>