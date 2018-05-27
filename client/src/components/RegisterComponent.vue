<template>
  <div>
    <h1>{{msg}}</h1>
    <div>
      <at-input v-model="regForm.username" type="email" placeholder="Логин"></at-input>
      <at-input v-model="regForm.password" type="password" placeholder="Пароль"></at-input>
      <hr/>
      <at-button
        type="primary"
        @click="register"
        :loading="regButton.loading"
        :disabled="regButton.disabled"
      >
        Регистрация
      </at-button>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      msg: 'Регистрация',
      regForm: {
        username: null,
        password: null
      },
      regButton: {
        loading: false,
        disabled: false
      }
    }
  },
  mounted () {

  },
  methods: {
    async register () {
      try {
        this.disableRegButton()
        await AuthService.register(this.regForm)
          .then((response) => {
            this.enableRegButton()
            const self = this
            this.$Message.info({
              message: `
              Вы успешно зарегистрировались, сейчас вы будете перенаправлены на страницу входа
              `,
              onClose () {
                self.$router.push({ name: 'base' })
              }
            })
          })
      } catch (err) {
        this.enableRegButton()
        this.$Message.error({
          message: err.response.data.error
        })
        // console.log(err.response.data)
      }
    },

    disableRegButton () {
      this.regButton.loading = true
      this.regButton.disabled = true
    },

    enableRegButton () {
      this.regButton.loading = false
      this.regButton.disabled = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
