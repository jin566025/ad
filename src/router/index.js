import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login',component:() => import('@/views/login/login'),hidden: true},
    {
    	path:'/',
    	component:()=>import('@/views/layout/layout'),
    	redirect: '/index',
    	hidden: true,
	    name: 'Layout',
	    children:[
	    	{
	    		path: 'index',
	        name: 'Index',
	        hidden: true,
	        component: () => import('@/views/index/index'),
	        meta: { title: 'Index'}
	    	},
	    	{
	    		path: 'detail',
	        name: 'Detail',
	        hidden: true,
	        component: () => import('@/views/detail/detail'),
	        meta: { title: 'Detail'}
	    	},
	    	{
	    		path: 'send',
	        name: 'Send',
	        hidden: true,
	        component: () => import('@/views/send/send'),
	        meta: { title: 'send'}
	    	},
	    	{
	    		path: 'pay',
	        name: 'Pay',
	        hidden: true,
	        component: () => import('@/views/pay/pay'),
	        meta: { title: 'pay'}
	    	}
	    	
	    ]
    },
    {path: '/404',component:() => import('@/views/404/404'),hidden: true},
  ]
})
