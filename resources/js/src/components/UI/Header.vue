<template>
    <div>
        <v-app-bar color="deep-purple" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>QnA</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon to="/login" v-if="!isAuth">
                <v-icon>
                    mdi-login
                </v-icon>
            </v-btn>
            <v-btn icon v-else @click="logout">
                <v-icon>
                    mdi-logout
                </v-icon>
            </v-btn>
        </v-app-bar>

        
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <template v-slot:prepend>
                <v-list-item two-line v-if="isAuth">
                    <v-list-item-avatar>
                        <!-- <img src="https://randomuser.me/api/portraits/women/81.jpg"> -->
                         <v-icon
                            large
                            rounded
                            color="blue-grey darken-2"
                        >
                            mdi-account
                        </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ userLogin.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ userLogin.username }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-list nav dense>
                <v-list-item-group active-class="deep-purple--text text--accent-4">
                    <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.link">
                        <v-list-item-icon>
                            <v-icon>{{ menu.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ menu.title }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group> 
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import * as authTypes from '../../store/auth/types'
export default {
    data(){
        return {
            drawer: false,
            menus:[
                {
                    icon: 'mdi-home',
                    title: 'Home',
                    link: '/'
                },
                {
                    icon: 'mdi-book',
                    title: 'Category',
                    link: '/category'
                },
                {
                    icon: 'mdi-book',
                    title: 'Question',
                    link: '/question'
                },
            ]
        }
    },
    computed:{
        isAuth(){
            return this.$store.getters[authTypes.GETTER_ISAUTH]
        },
        userLogin(){
            return this.$store.getters[authTypes.GETTER_USER_LOGINED]
        }
    },
    methods:{
        logout(){
            this.$store.dispatch(authTypes.ACTION_LOGOUT)
            .then( (res) => {
                
            })
            .catch( (err) => {

            })
        }
    }
}
</script>