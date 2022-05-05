import Vue from 'vue'

const Validation = {
  install(Vue, options) {
    Vue.mixin({
      methods: {
        validateNameInput($event) {
          if (
            $event.charCode === 0 ||
            /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(
              String.fromCharCode($event.charCode)
            )
          ) {
            return true
          } else {
            $event.preventDefault()
          }
        },
        validateEmailInput($event) {
          if (
            $event.charCode === 0 ||
            /^[a-z0-9@._-]+$/.test(String.fromCharCode($event.charCode))
          ) {
            return true
          } else {
            $event.preventDefault()
          }
        },
        validatePasswordInput($event) {
          if (
            $event.charCode === 0 ||
            /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9~`!@#$%^&*()-_+=<>,.?/]+$/.test(
              String.fromCharCode($event.charCode)
            )
          ) {
            return true
          } else {
            $event.preventDefault()
          }
        },
        validateNumberInput($event) {
          if (
            $event.charCode === 0 ||
            /^[0-9]+$/.test(String.fromCharCode($event.charCode))
          ) {
            return true
          } else {
            $event.preventDefault()
          }
        },
        validateAddressInput($event) {
          if (
            $event.charCode === 0 ||
            /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9-, ]+$/.test(
              String.fromCharCode($event.charCode)
            )
          ) {
            return true
          } else {
            $event.preventDefault()
          }
        }
      }
    })
  }
}

Vue.use(Validation)
