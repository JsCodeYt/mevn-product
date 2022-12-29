<template>
    <header>
        <form @submit.prevent>
            <input type="search" placeholder="search">
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </header>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
form {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    input {
        width: 300px;
        height: 34px;
        border-radius: 5px;
        padding: 0px 10px;
        outline: none;
        font-size: 18px;
        border: 1px solid #000;
    }

    button {
        outline: none;
        padding: 10px;
        background-color: #fff;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }
}
</style>