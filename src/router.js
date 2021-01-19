import Vue from 'vue'
import VueRouter from 'vue-router'

import Series from './views/series/listarSeries/Series'
import Serie from './views/series/serie/Serie.vue'
import Elenco from './views/series/serie/elenco/Elenco'
import Temporada from './views/series/serie/temporada/Temporada'
//import ElencoFormEditar from './views/series/serie/elenco/ElencoFormEditar'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        { path: '/series', name: 'series', component: Series },
        {
            path: '/series/serie-:id',
            name: 'serieDetalhe',
            component: Serie,
            children: [
                { path: 'elenco', name: 'elenco', component: Elenco },
                //{ path: 'elenco', name: 'elencoEditar', component: ElencoFormEditar },
                { path: 'temporadas', name: 'temporadas', component: Temporada },
                { path: 'temporada-:tempId/episodios', name: 'episodios' }
            ]
        }
    ]

})