// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueResource) 
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.directive("scroll",{
	bind : function(el,binding){
		window.onscroll = function(){
			var windowH = window.innerHeight;
	    	var scrollTop = document.body.scrollTop;
	    	if( el.offsetHeight-(windowH+scrollTop) == 0 ){
	    		console.log(binding.value())
	    	}
		}
	}
})

const store = new Vuex.Store({
	state : {
		loadingShow : false,
		registerMsgArr : []
	},
	mutations : {
		showLoading(state,n){
			state.loadingShow = n;
		},
		setUserMsg(state,data){
			state.registerMsgArr = data;
		},
		addUserMsg(state,n){
			state.registerMsgArr.push(n);
			window.localStorage['registerMsg'] = JSON.stringify(state.registerMsgArr);
		}
	},
	actions : {
		info (context) {
	      var data = JSON.parse(  window.localStorage["registerMsg"] );
	      if( data ){
	        context.commit('setUserMsg',data)
	      }
	    }
	}
})

Vue.http.interceptors.push(
	(request,next) => {
		store.commit("showLoading",true)
		next((response) => {
			store.commit("showLoading",false)
			return response;
		})
	}
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created (){
  	this.$store.dispatch("info");
  }
})
