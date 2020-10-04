<template>
    <v-app>
        <app-header></app-header>
    </v-app>
</template>

<script>
import Header from './components/UI/Header'
export default {
   name: 'App',
   components:{
       appHeader: Header
   }
}
</script>