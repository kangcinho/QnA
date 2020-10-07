<template>
    <v-app>
        <app-header></app-header>
        <v-container>
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
import Header from './components/UI/Header'
import * as authTypes from '../src/store/auth/types'
export default {
   name: 'App',
   components:{
       appHeader: Header
   },
   created(){
       this.$store.dispatch(authTypes.ACTION_TOKEN_FROM_LOCAL_STORAGE)
       .then( (res) => {

        })
        .catch( (err) => {
            
        })
   }
}
</script>