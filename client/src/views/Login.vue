<template>
    <div class="login">
        <RouterLink to="/register">
            <button class="register__btn">Register</button>
        </RouterLink>
        <form class="login__form" @submit.prevent>
            <h1>Akkauntingizga kiring !</h1>
            <input type="text" placeholder="username" @input="username = $event.target.value">
            <input type="password" placeholder="password" @input="password = $event.target.value">
            <button @click="login">Login</button>
        </form>
    </div>
</template>
<script>
import jsCookie from "js-cookie"
import { RouterLink } from "vue-router"
import axios from "../axios"
import Cookie from 'js-cookie'
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('/auth/login', {
                    username: this.username,
                    password: this.password
                })
                if (response) {
                    Cookie.set('token', response.data.token)
                    setTimeout(() => {
                        window.location.replace("/")
                    }, 1000)
                }
            } catch (error) {
                alert("malumotlaringiz topilmadi !")
            }
        }
    }
}
</script>
<style lang="scss">
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .register__btn {
        position: absolute;
        top: 10px;
        right: 50px;
        padding: 10px;
        border-radius: 10px;
        outline: none;
        border: 1px solid #000;
        background-color: #a2d2ff;
    }

    .login__form {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        -webkit-box-shadow: -2px 5px 30px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: -2px 5px 30px 0px rgba(34, 60, 80, 0.2);
        box-shadow: -2px 5px 30px 0px rgba(34, 60, 80, 0.2);
        padding: 80px;

        input {
            height: 34px;
            width: 300px;
            border-radius: 5px;
            outline: none;
            padding: 5px 10px;
            font-size: 17px;
            border: 1px solid #a2d2ff;
        }

        button {
            width: 300px;
            padding: 10px;
            font-size: 20px;
            border-radius: 10px;
            outline: none;
            background-color: #a2d2ff;
            border: 2px solid #000;
            transition: 0.5s ease-in-out;

            &:hover {
                border: 2px solid #a2d2ff;
                background-color: #fff;
            }
        }
    }
}
</style>