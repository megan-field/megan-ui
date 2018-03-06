
import MainPage from '../../content/containers/Pages/Main/page1';
import page2 from '../../content/containers/Pages/Main/page2';
import AboutPage from '../components/about';
import LegalPage from '../components/legal';
import DataPage from '../components/dqPage';
import BenefitsPage from '../components/benefits';
import TodoPage from '../../content/containers/Pages/ToDo';
import LoginPage from '../../content/containers/Pages/form';
import InputPage from '../../content/containers/Pages/form/Input';
import ListPage from '../../content/containers/Pages/form/List';


export default [
  {
    path: '/',
    exact: true,
    component: MainPage,
  },
  {
    path: '/2',
    exact: true,
    component: page2,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/benefits',
    exact: true,
    component: BenefitsPage,
  },
  {
    path: '/data',
    exact: true,
    component: DataPage,
  },
  {
    path: '/legal',
    exact: true,
    component: LegalPage,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/input',
    exact: true,
    component: InputPage,
  },
  {
    path: '/list',
    exact: true,
    component: ListPage,
  },
  {
    path: '/todo',
    exact: true,
    component: TodoPage,
  },
  /* {
    path: '*',
    component: NotFoundPage,
    loadData: defaultLoadFunction,
  }, */
];
