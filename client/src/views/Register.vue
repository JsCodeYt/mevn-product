<template>
    <div class="register" @submit.prevent>
        <RouterLink to="/login">
            <button class="login__btn">Login</button>
        </RouterLink>
        <form class="register__form">
            <h1>Ro'yhatdan o'tish</h1>
            <input type="text" placeholder="username" @input="username = $event.target.value">
            <input type="password" placeholder="password" @input="password = $event.target.value">
            <button @click="register" type="button">Register</button>
        </form>
    </div>
</template>
<script>
import { RouterLink } from "vue-router"
import axios from "../axios"
import Cookie from "js-cookie"
export default {
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        async register(event) {
            try {
                const response = await axios.post("/auth/register", {
                    username: this.username,
                    password: this.password
                })
                if (response) {
                    Cookie.set("token", response.data.token)
                    setTimeout(() => {
                        window.location.replace("/")
                    }, 1000)
                }
            } catch (error) {
                alert("iltimos hammasini to'gri bajaring !")
            }
        }
    }
}
</script>
<style lang="scss">
.register {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .login__btn {
        position: absolute;
        top: 10px;
        right: 50px;
        padding: 10px;
        border-radius: 10px;
        outline: none;
        border: 1px solid #000;
        background-color: #a2d2ff;
    }

    .register__form {
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
            padding: 10px 30px;
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