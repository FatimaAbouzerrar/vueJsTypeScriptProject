<template>
    <div class="login-box">
        <h2>FatyDev Online Store</h2>
        <div class="login-data">
            <form v-on:submit.prevent="login" action="post">
                <input class="email" type="email" placeholder="Email" v-model="email" required>
                <input class="password" type="password" placeholder="Password" v-model="password" required>
                <button type="submit">LogIn</button>
            </form>
        </div>
        <div class="error-alert" v-if="error">{{ error_msg }}</div>
    </div>

</template>

<script lang="ts">
import router from '@/router';
// import logIn from '@/router/login';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            error: false,
            error_msg: '',
        }
    },
    methods: {
        async login() {
            let data = {
                "email": this.email,
                "password": this.password
            }
            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
                console.log(response)
                localStorage.setItem('accessToken', response.data.access_token)    
                console.log('This is the token:', response.data.access_token )

                router.push({ name: 'products' })
            } catch(err) {
                console.log(err);
                this.error = true;
                this.error_msg = `${err}`
            }
        }
    }

})

</script>

<style scoped>
.login-box {
    margin: auto;
    margin-top: 40px;
    height: 350px;
    width: 500px;
    background-color: darkkhaki;
    padding: 100px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 75px;
    align-items: center;
}

input {
    width: 250px;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}

.login-data form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.error-alert {
    background-color: rgb(249, 158, 158);
    color: white;
    padding: 1rem;
}
</style>