<template>
    <div>
        Hello {{  name }}
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class Home extends Vue{
        name: string;

        constructor(){
            super();

            this.name = "Thomas";
        }
    }
</script>