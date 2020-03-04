<template>
    <div>
        <div>
            <ul>
                <li v-for="(item, $index) in list" v-bind:key="$index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Grocery extends Vue {
    list: string[] = [];

    constructor(){
        super();
        this.list = [
            "orange",
            "strawberry",
            "pineapple",
            "banana"
        ];
    }
}
</script>