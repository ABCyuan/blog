import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
import home from '../commend/Home.vue';
import news from '../commend/New.vue';
import essay from '../commend/Essay.vue';
import control from '../commend/Control.vue';
import message from '../commend/Message.vue';
var router=new VueRouter;
router.map({
  'Home':{
    component:home
  },
  'News':{
    component:news
  },
  'Message':{
    component:message
  },
  'Essay':{
    component:essay
  },
  'Control':{
    component:control
  }
});
router.start(App,'#app');
