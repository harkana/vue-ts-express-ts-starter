<template>
    <div>
        Hello {{  name }}
        <div>
            <Grocery />
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import Grocery from "./Grocery.vue";

    @Component({
        components: {
            Grocery
        }
    })
    export default class Home extends Vue{
        name: string;

        constructor(){
            super();

            this.name = "Thomas";
        }
    }
</script>