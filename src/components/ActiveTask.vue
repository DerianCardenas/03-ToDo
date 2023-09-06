<template>
    <div v-if="render">
        <div v-for="(tarea, index) in tareas" :key="tarea.id" class="rounded task-item mb-4">
            <div class="d-flex w-50 mx-auto pt-4">
                <label class="form-label fs-5 w-50" for="desc">TAREA:</label>
                <input v-model="tarea.nombre" class="form-input form-control w-50" type="text" name="desc" id="desc">
            </div>
            <br>
            <div class="d-flex justify-content-between w-50 mx-auto pb-4">
                <div>
                    <label class="form-label fs-5" for="desc">Descripción de la actividad</label>
                    <input v-model="tarea.desc" class="form-input form-control" type="text" name="desc" id="desc">
                </div>
                <div>    
                    <label class="form-label fs-5" for="date">Fecha de Vencimiento</label>
                    <input v-model="tarea.deadline" class="form-input form-control" type="date" name="date" id="date">
                </div>
            </div>
            <div class="d-flex w-50 mx-auto justify-content-evenly pb-3">
                <button class="btn btn-success " @click="handleEdit(index)">
                    GUARDAR
                    <font-awesome-icon icon="edit"/>  </button>
                <button class="btn btn-primary" @click="handleFinish(index)">
                    FINALIZAR
                    <font-awesome-icon icon="check" /></button>
                <button class="btn btn-danger" @click="hanleDelete(index)">
                    ELIMINAR
                    <font-awesome-icon icon="trash"  /></button>
            </div>
        </div>
    </div>
</template>
<script setup>
import Swal from 'sweetalert2/dist/sweetalert2'
import { ref, onMounted, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import {useTaskStore} from '../stores/tasks'
const taskStore = useTaskStore();
const tareas = ref([])
const render = ref(true);
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
onMounted(() => {
  getTasks();  
})
const getTasks = () => {    
    tareas.value = taskStore.tasks;
    render.value = true;
}
const handleEdit = (index) => {
    render.value = false;
    taskStore.editTask(index, tareas.value[index] )
    Toast.fire({
            icon:"success",
            title:"Tarea editada"
        })
    getTasks();  
}
const handleFinish = (index) => {
    taskStore.completeTask(index)
    render.value = false;
    Toast.fire({
            icon:"success",
            title:"Tarea finalizada"
        })
  getTasks();  
}
const hanleDelete = (index) => {
    taskStore.deleteTask(index)
    render.value = false;
    Toast.fire({
            icon:"success",
            title:"Tarea eliminada"
        })
  getTasks();  
}
</script>