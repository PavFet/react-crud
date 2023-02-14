const CarPageUrl = '/car-page/' as const;

const routes = {
  HomePage: '/',
  CarListPage: '/cars',
  CarPage: {
    routerPath: `${CarPageUrl}:id`,
    createLink: (id: string | number) => `${CarPageUrl}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
