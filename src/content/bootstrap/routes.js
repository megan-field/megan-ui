
import MainPage from '../../content/containers/Pages/Main';
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
