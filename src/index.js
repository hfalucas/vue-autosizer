import AutosizeInput from './AutosizeInput.vue'
import AutosizeTextarea from './AutosizeTextarea.vue'

const install = Vue => {
    Vue.component(AutosizeInput.name, AutosizeInput)
    Vue.component(AutosizeTextarea.name, AutosizeTextarea)
}

export { AutosizeInput, AutosizeTextarea }
export default install

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}
