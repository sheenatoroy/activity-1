<template>

    <form>
        <input type="text" v-model="username" placeholder="Username: ">
        <input type="password" v-model="password" placeholder="Password: ">
        <input type="submit" @click="verifyUser()" value="LogIn">

    </form>

</template>

<script>

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        verifyUser() {

            // eslint-disable-next-line no-empty
            if (this.username == "username" && this.password == "password") {
                alert("successful login") 
                this.$store.state.verified=true
                return
            }
        }
    }
}

</script>

