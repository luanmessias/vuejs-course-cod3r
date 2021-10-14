import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from "./components/template/Menu.vue";
import MenuAlt from "./components/template/MenuAlt.vue";
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "Lista de Usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "Detalhe do Usuario" */'./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "Editar Usuario" */'./components/usuario/UsuarioEditar')

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else if(to.hash) {
      return { selector: to.hash }
    }
    return { x:0, y:0 }
  },
  routes: [
    {
      path: '/',
      component: Inicio,
      //name: 'inicio'
      components: {
        default: Inicio,
        menu: Menu,
        menuInferior: MenuAlt
      }
    },
    {
      path: '/usuario',
      // component: Usuario,
      components: {
        default: Usuario,
        menu: MenuAlt,
      },
      props: true,
      children: [
        {
          path: '',
          component: UsuarioLista
        },
        {
          path: ':id',
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            console.log('antes da rota -> usuario detalhe')
            next()
          }
        },
        {
          path: ':id/editar',
          component: UsuarioEditar,
          props: true,
          name: 'editarUsuario'
        }
      ]
    },
    {
      path: '/redirecionar',
      redirect: '/usuario'
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ],
})

router.beforeEach((to, from, next) => {
  console.log('antes das rotas -> global')
  next()
})

export default router