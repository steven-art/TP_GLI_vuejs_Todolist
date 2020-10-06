<template>
<section class="todoapp">
    <header class="header">

        <h1>Todos </h1>
        <input type="text" class="new-todo" placeholder="Ajouter un élément à la todo Liste" v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <div class="main">
        <input type="checkbox" class="toggle-all" v-model="allDone">
        <ul class="todo-list">
            <li class="todo" v-for="todo in filteredTodos" v-bind:key="todo" v-bind:todo="todo" :class="{completed: todo.completed}">

                <div class="view">
                    <input type="checkbox" v-model="todo.completed" class="toggle" />
                    <label>{{todo.name}}</label>
                </div>
            </li>
        </ul>
    </div>
    <footer class="footer">
        <span class="todo-count"><strong>{{remaining}}</strong> Tache à faire</span>
        <ul class="filters">
            <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
            <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
            <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Terminée</a></li>
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
            allDone: false,
            todos: [{
                name: 'Tache test',
                completed: false
            }],
            newTodo: '',
            filter: 'all'
        }
    },
    methods: {

        addTodo() {
            this.todos.push({
                completed: false,
                name: this.newtodo
            })
            this.newtodo = ''

        },
        remaining() {
            this.todo.filter(function (todo) {
                return !todo.completed
            })
        }
    },
    filteredTodos() {
        if (this.filter === 'todo') {
            return this.todos(todo => !todo.completed)

        } else if (this.filter === 'done') {
            this.todos(todo => todo.completed)
        } else {
            return this.todos
        }
    }

}
</script>

<style src="./todos.css"></style>
