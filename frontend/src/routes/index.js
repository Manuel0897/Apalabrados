import { Home } from '../components/Home';
import { Numbers } from '../components/Numbers';
import { Texts } from '../components/Texts';
import { Characters } from '../components/Characters';
import { NotFoundRedirect } from '../components/NotFoundRedirect';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        exact: true,
    },
    {
        name: 'Numbers',
        path: '/numbers',
        component: Numbers,
        exact: true,
    },
    {
        name: 'Texts',
        path: '/texts',
        component: Texts,
        exact: true,
    },
    {
        name: 'Characters',
        path: '/characters',
        component: Characters,
        exact: true,
    },
    {
        name: '',
        path: '*',
        component: NotFoundRedirect,
    },
  ];
  
  export default routes;