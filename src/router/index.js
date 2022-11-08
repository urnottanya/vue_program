// import Vue from'vue'
import VueRouter from "vue-router";
import Home from "../pages/Home";
import User from "../pages/User";
import Main from "../components/Main";
import Mall from "../pages/Mall";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
// Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
          path:'/Main',
          component: Main,

            redirect:'/home',

          // component:()=> import('../components/Main'),
          children:[
              {
                  path:'home',
                  name:'home',
                  component:Home
                  // component:()=> import('../pages/Home')
              },
              {
                  path:'user',
                  name:'user',
                  component:User
                  // component:()=> import('../pages/User')
              },
              {
                  path:'mall',
                  name:'mall',
                  component:Mall
              },
              {
                  path:'other/page1',
                  name:'page1',
                  component:Page1,
              },
              {
                  path:'other/page2',
                  name:'page2',
                  component:Page2,
              },
          ]
        },

    ]
})