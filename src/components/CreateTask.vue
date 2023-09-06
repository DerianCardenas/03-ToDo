<template>
    <div class="row">
        <div class="col-lg-4 mb-4">    
            <label class="form-label fs-5" for="task">Nombre de la actividad</label>
            <input v-model="nombre" class="form-input form-control" type="text" name="task" id="task">
        </div>
        <div  class="col-lg-4 mb-4">    
            <label class="form-label fs-5" for="desc">Descripción de la actividad</label>
            <input v-model="desc" class="form-input form-control" type="text" name="desc" id="desc">
        </div>
        <div class="col-lg-4 mb-4">    
            <label class="form-label fs-5" for="date">Fecha de Vencimiento</label>
            <input v-model="fecha" class="form-input form-control" type="date" name="date" id="date">
        </div>
        <div class="col-lg-12 d-flex">
            <button class="btn btn-success px-4 mx-auto" @click="handleClick" >GUARDAR 
                <font-awesome-icon icon="save" /> </button>
            
        </div>
    </div>
</template>
<script setup>
import Swal from 'sweetalert2/dist/sweetalert2'
import {ref} from "vue"
import { v4 as uuidv4 } from 'uuid';
import {useTaskStore} from '../stores/tasks'
const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
const nombre = ref("");
const desc = ref("");
const fecha = ref("");
const taskStore = useTaskStore();
const handleClick = () => {
    if(nombre.value != ""){
        taskStore.createTask({
            id: uuidv4(),
            nombre:nombre.value,
            desc:desc.value,
            deadline:fecha.value,
            completed_at:""
        })
        nombre.value = ""
        desc.value = ""
        fecha.value =""
        Toast.fire({
            icon:"success",
            title:"Tarea agregada"
        })
    }else{
        Toast.fire({
            icon:"warning",
            title:"Ingrese como mínimo el titulo"
        })
    }
    
}

</script>