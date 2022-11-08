import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import {Aside,Container,Header,Main,Submenu,MenuItem,MenuItemGroup,Menu,Button,DropdownMenu,Dropdown,DropdownItem,Row,Card,Col,TableColumn,Table,Breadcrumb,BreadcrumbItem} from 'element-ui'

import VueRouter from 'vue-router'
import router from './router'
import './assets/less/index.less'
import store from '../store'
import http from 'axios'
import '../api/mock.js'


Vue.use (VueRouter);
Vue.prototype.$http=http;
Vue.config.productionTip = false;
Vue.use(Aside);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Menu);
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Card);
Vue.use(Col);
Vue.use(TableColumn);
Vue.use(Table);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);


new Vue({
    store:store,
  router: router,
   render: h => h(App),

}).$mount('#app');
