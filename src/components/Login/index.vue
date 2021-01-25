<template>
  <SignIn v-if="page === 'SignIn'" :signUp="pageSignUp" />
  <SignUp v-if="page === 'SignUp'" :signIn="pageSignIn"/>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'

export default defineComponent({
  name: 'Login',
  components: {
    SignIn,
    SignUp
  },
  setup: () => {
    const page = ref('SignIn')
    const pageSignUp = () => {
      page.value = 'SignUp'
    }
    const pageSignIn = () => {
      page.value = 'SignIn'
    }
    return { page, pageSignUp, pageSignIn }
  }
})
</script>

<style scoped>
</style>