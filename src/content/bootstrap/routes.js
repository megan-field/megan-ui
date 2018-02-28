
import MainPage from '../../content/containers/Pages/Main';
import TodoPage from '../../content/containers/Pages/ToDo';
import InputPage from '../../content/containers/Pages/Main/Input';
import ListPage from '../../content/containers/Pages/Main/List';

// import LoginPage from '../../content/containers/Pages/Main';

export default [
  {
    path: '/',
    exact: true,
    component: MainPage,
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
