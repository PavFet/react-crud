const CarPageUrl = '/car-page/' as const;
const CarUpdtePage = '/car-update-page/' as const;

const routes = {
  HomePage: '/',
  CarListPage: '/cars',
  CarPage: {
    routerPath: `${CarPageUrl}:id`,
    createLink: (id: string | number) => `${CarPageUrl}${id}`,
  },
  CarUpdatePage: {
    routerPath: `${CarUpdtePage}:id`,
    createLink: (id: string | number) => `${CarUpdtePage}${id}`,
  },
  CarCreatePage: '/car-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
