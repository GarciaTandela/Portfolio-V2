import { updateField } from 'vuex-map-fields'
import getDefaultState from './state'

export default {
  updateField,
  resetState(state) {
    Object.assign(state, getDefaultState())
  }
}
