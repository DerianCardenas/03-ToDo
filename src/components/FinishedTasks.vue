<template>
    <div v-for="(tarea, index) in tareas" :key="tarea.id" class="rounded task-item mb-4">
        <div class="d-flex w-50 mx-auto pt-4">
            <label class="form-label fs-5 w-50" for="desc">TAREA:</label>
            <input disabled v-model="tarea.nombre" class="form-input form-control w-50" type="text" name="desc" id="desc">
        </div>
        <br>
        <div class="d-flex justify-content-between mx-auto pb-4" style="width:80%;">
            <div>
                <label class="form-label fs-5" for="desc">Descripción de la actividad</label>
                <input disabled v-model="tarea.desc" class="form-input form-control" type="text" name="desc" id="desc">
            </div>
            <div>    
                <label class="form-label fs-5" for="date">Fecha de Finalización</label>
                <input disabled v-model="tarea.completed_at" class="form-input form-control" type="text" name="date" id="date">
            </div>
            <div>    
                <label class="form-label fs-5" for="date">Fecha de Vencimiento</label>
                <input disabled v-model="tarea.deadline" class="form-input form-control" type="date" name="date" id="date">
            </div>
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
const taskStore = useTaskStore();
const tareas = taskStore.tareasCompletadas;
</script>