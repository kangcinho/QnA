<template>
  <div>
      <h1>Login</h1>
      <v-text-field color="purple darken-2" label="Username" required v-model="auth.username">
        <v-icon
            slot="prepend"
            color="green"
        >
            mdi-account-circle
        </v-icon>
      </v-text-field>
      <v-text-field 
        color="purple darken-2" 
        label="Password"
        @click:append="isPasswordShow = !isPasswordShow"
        :append-icon="isPasswordShow? 'mdi-eye': 'mdi-eye-off'"
        :type="isPasswordShow ? 'text': 'password'" 
        required
        v-model="auth.password"
        >
        <v-icon
            slot="prepend"
            color="green"
        >
            mdi-form-textbox-password
        </v-icon>
      </v-text-field>
      <v-btn
        color="green"
        class="ma-2 white--text"
        @click="login">
        Login

        <v-icon
            right
            dark
        >
            mdi-login
        </v-icon>
    </v-btn>
  </div>
</template>

<script>
import * as authTypes from '../../store/auth/types'
export default {
    data(){
        return {
            isPasswordShow: false,
            auth:{
                username:'',
                password:'',
            }
        }
    },
    methods:{
        login(){
            this.$store.dispatch(authTypes.ACTION_LOGIN, this.auth)
            .then( (res) => {

            })
            .catch( (err) => {
                
            })
        }
    }
}
</script>

<style>

</style>