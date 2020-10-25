<template>
<section class="todoapp">
    <header class="header">
        <h1>Todos</h1>
        <input id="new-todo" type="text" class="new-todo" placeholder="Ajouter un élément à la todo Liste" v-model="newTodo" />
        <button id="newtodo" v-on:click="addTodo()">Add task</button>
    </header>
    <div class="main">
        <input type="checkbox" class="toggleall" v-model="allDone" />

        <ul class="todo-list">
            <li class="todo" v-for="todo in todos" v-bind:key="todo" :class="{ completed: todo.completed }">
                <div class="view">
                    <input type="checkbox" v-model="todo.completed" class="toggle" />
                    <label>{{ todo.name }}</label>
                    <button class="destroy" v-on:click="deleteTask(todo)"></button>
                </div>
            </li>
        </ul>
    </div>
    <footer class="footer">
        <span class="todo-count"><strong>{{ remaining }}</strong> tâche à faire</span>
        <ul class="filters">
            <li>
                <a href="#" :class="{ selected: filter === 'all' }" v-on:click="filter = 'all'">Toutes</a>
            </li>
            <li>
                <a href="#" :class="{ selected: filter === 'todo' }" v-on:click="filter = 'todo'">A faire</a>
            </li>
            <li>
                <a href="#" :class="{ selected: filter === 'done' }" v-on:click="filter = 'done'">Terminée</a>
            </li>
        </ul>
    </footer>
</section>
</template>

<script lang="js">
export default {
    //Ici on definit les states
    //methode data qui va contenir les taches
    data() {
        return {

            todos: [{
                name: "Task example",
                completed: false
            }],
            newTodo: "",
            filter: "all",
        }
    },
    methods: {

        addTodo() {
            this.todos.push({
                completed: false,
                name: this.newTodo,
            })
            this.newTodo = ""

        },
        deleteTask(todo) { //suprimer une tâche
            //on change la valeur de todo en utilisant le systeme de filtre
            this.todos = this.todos.filter(t => t !== todo)
        }
    },

    computed: {

        remaining() {
            return this.todos.filter(todo => !todo.completed).length
        },

        filteredTodos() {
            let fil = this.todos
            if (this.filter === 'todo') {
                fil = this.todos.filter(todo => !todo.completed)

            } else if (this.filter === 'done') {
                fil = this.todos.filter(todo => todo.completed)
            } else if (this.filter === 'all') {

                fil = this.todos
            }
            return fil
        },

        allDone: {
            get() {
                return this.remaining === 0
            },

            set(value) {

                this.todos.forEach(todo => {
                    todo.completed = value

                })

            }
        },
    }
}
</script>

<style src="./todos.css"></style>
