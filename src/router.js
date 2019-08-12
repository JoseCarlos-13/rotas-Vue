import Vue from 'vue'
import VueRouter from 'vue-router'
import Usuario from '@/components/Usuario/Usuario'
import Inicio from '@/components/Inicio'
import listaUsuarios from '@/components/Usuario/listaUsuarios'
import Detalhes from '@/components/Detalhes/Detalhes'
import Erro from '@/components/Erro/NãoEncontrado'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Inicio
        },

        {
            path: '/usuario',
            component: Inicio,
            children: [
                { path: 'lista', component: listaUsuarios, name: "lista"},
                { path: ':id', component: Usuario},
                { path: 'detalhes', component: Detalhes, name: 'detalhes'},
            ]
        },

        {
            path: '/*', component: Erro
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path !== '/'){
        next('/')
    } else {
        next()
    }
})

export default router