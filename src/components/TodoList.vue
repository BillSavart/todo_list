<template>
    <div class>
        <h1 class="font-google text-3xl p-4 text-white"><img src="https://img.icons8.com/dusk/64/000000/tasklist.png" class="inline-block pr-2"/>待辦事項</h1>
        <input type="text" v-model="task" class="border-2 border-black">
        <button @click="addTask" class="addBtn bg-gray-100 rounded-md px-3 py-0.5 mx-2 shadow-lg hover:shadow-inner hover:bg-white"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" class="inline-block pr-1 " viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"/></svg>新增</button>
        <div v-if="todo.length">
            <ul class="mx-auto bg-blue-100 my-4 w-1/5">
                <li v-for="stuff in todo" :key="stuff" class="hover:bg-white text-left p-1 pl-3">
                    <input type="checkbox" :value="stuff" v-model="checkedTask">
                    <p class="inline-block pl-2 text-red-500">{{ stuff }}</p>
                </li>
            </ul>
            <button @click="deleteTask" class="delBtn bg-gray-100 rounded-md p-2 shadow-lg hover:bg-white hover:shadow-inner">刪除勾選事項</button>
        </div>
        <div v-else>
            <h3 class="p-2 text-white font-google">目前沒有事情要做...</h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: [],
            task: '',
            checkedTask: []
        }
    },
    methods: {
        addTask() {
            if(this.task.length != 0){
                this.todo.push(this.task);
                this.task = '';
            }
        },
        deleteTask() {
            for(let task of this.checkedTask){
                console.log(task);
                for(let i = 0; i < this.todo.length; i++){
                    if(this.todo[i] == task){
                        this.todo.splice(i, 1);
                    }
                }
            }
            this.checkedTask = [];
        }
    }
}
</script>

<style>
    input[type=checkbox]:checked + p {
        text-decoration: line-through;
        color: green;
    }
</style>