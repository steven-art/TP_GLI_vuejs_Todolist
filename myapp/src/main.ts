import Vue from 'vue'
import App from './App.vue'
import router from './router'

const defaultBackgroundColor = 'lightBlue'
const defaultText = 'blue'
const newvalue = ''
Vue.config.productionTip = false
Vue.directive('purple', function(el){
  el.style.color = 'purple'
})


export const Background = {
  bind(el: any, binding: any, vnode: any) {
    // el might not be present for server-side rendering.
    if (el ) {
      // Set the element's background color.
      el.style.backgroundColor = binding.expression || defaultBackgroundColor
      el.innerHTML =  'My background text is :  ' + binding.expression || defaultBackgroundColor
    }
  }, 
};
Vue.directive('background', Background);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
