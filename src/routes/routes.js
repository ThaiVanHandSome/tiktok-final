import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';

import { routes } from '~/config';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/layouts/HeaderOnly';

const publicRoutes = [
    { path: routes.home, component: Home },
    {
        path: routes.following,
        component: Following,
    },
    {
        path: routes.explore,
        component: Explore,
    },
    {
        path: routes.live,
        component: Live,
    },
    {
        path: routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
