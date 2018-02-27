
import MainPage from '../../content/containers/Pages/Main';
import TodoPage from '../../content/containers/Pages/ToDo';

export default [
  {
    path: '/',
    exact: true,
    component: MainPage,
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
