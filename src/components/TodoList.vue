<template>
    <input type="text" v-model="task">
    <button @click="addTask" class="addBtn">Add</button>
    <div v-if="todo.length">
        <ul>
            <li v-for="stuff in todo" :key="stuff">
                <input type="checkbox" :value="stuff" v-model="checkedTask">
                {{ stuff }}
            </li>
        </ul>
        <button @click="deleteTask" class="delBtn">Delete</button>
    </div>
    <div v-else>
        <h3>You don't have tasks to do yet...</h3>
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
    ul {
        text-align: left;
    }

    li {
        list-style-type: none;
        background: black;
        font-size: 20px;
        color: white;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }

    li:hover{
        background: lightgray;
        color: black;
    }

    li.checkedTask {
        background: greenyellow;
    }

    button {
        cursor: pointer;
    }

    button.addBtn {
        border-radius: 10px;
        margin: 10px;
        background: green;
        color: white;
        font-size: 16px;
    }

    button.delBtn {
        border-radius: 10px;
        font-size: 20px;
        background: crimson;
        color: white;
    }

    input[type=checkbox] {
        align-items:flex-start;
    }
</style>