<template>
<div class="home">
    <p v-if="visible">Maintenant vous me voyez {{ message }}</p>
    <button v-on:click="foo()">ok</button>

    <todos></todos>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from "vue-property-decorator";
//import Background from '../directives/background.directive.js'
import Todos from "@/components/Todos.vue";
// @ is an alias to /src

@Component({
    components: {
        Todos,
    },
    directives: {
        // Background
    },
})
export default class Home extends Vue {
    message = "test";
    visible = true;
    foo() {
        this.visible = !this.visible;
    }
}
</script>
