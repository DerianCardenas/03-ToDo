<template>
    <div class="d-flex justify-content-between">
        <main class="main">
            <div v-if="activas == 0" style="width:80%;" class="mx-auto my-5 text-center">
                <h3>BIENVENIDO A TU TABLERO DE ACTIVIDADES</h3>
                <hr>
                <h4>EN TU MENÚ LATERAL, PUEDES CREAR TAREAS NUEVAS, VISUALIZAR TUS ACTIVIDADES ACTIVAS, LAS TAREAS QUE FINALIZASTE O LAS QUE NO PUDISTE COMPLETAR</h4>
            </div>
            <CreateTash v-if="activas == 1" :selfReload="updateComponent" :key="renderKey" style="width:90%;" class="mx-auto my-4 text-center"/>
            <ActiveTask v-if="activas == 2" style="width:90%;" class="mx-auto my-4 text-center"/>
            <FinishedTasks v-if="activas == 3" style="width:90%;" class="mx-auto my-4 text-center"/>
        </main>
        <aside class="aside">
            <div v-for="item in lista" :key="item">
                <div class="aside-item text-center fs-5" @click="changeActivas(item.click)">
                    <span class="me-2">{{ item.nombre }}</span><font-awesome-icon :icon="item.icon" /> 
                </div>
            </div>
        </aside>
    </div>
</template>
<script setup>
import {ref} from "vue"
import {useTaskStore} from '../stores/tasks'
import CreateTash from "../components/CreateTask.vue"
import ActiveTask from "../components/ActiveTask.vue"
import FinishedTasks from "../components/FinishedTasks.vue"
const taskStore = useTaskStore();
const activas = ref(0);
const renderKey = ref(0)
const lista = ref([
    {nombre:"CREAR TAREA", click:1, icon:"plus"},
    {nombre:"TAREAS ACTIVAS", click:2, icon:"clock"},
    {nombre:"TAREAS FINALIZADAS", click:3, icon:"check"},
    {nombre:"TAREAS VENCIDAS", click:4, icon:"xmark"},
])
const changeActivas = (index) => {
    activas.value = index;
}
const updateComponent = () => {
    console.log('====================================');
    console.log("actualizando valores");
    console.log('====================================');
    activas.value = 3;
    renderKey.value++;
}
</script>