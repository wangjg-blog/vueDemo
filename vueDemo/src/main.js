import Vue from 'vue'
import footer from './components/footer.vue'
import fundList from './components/fundlist.vue'
import top from './components/top.vue'
import header from './components/header.vue'
import sliderbasic from './components/slider_banner.vue';

new Vue({
  el: '#app',
  data: {
	 
  },
  components: {
  	"my-footer":footer,
  	"my-slider":sliderbasic,
  	"my-fundlist":fundList,
  	"my-top":top,
    "my-header":header
  },
  methods: {
       
  }
})
