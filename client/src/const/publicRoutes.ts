import type { PublicRoutesInterface } from '../interfaces/publicRoutesInterface.ts';
import FormPage from '../pages/FormPage.tsx';
import WelcomePage from '../pages/WelcomePage.tsx';
import { FORM_PAGE, WELCOME_PAGE } from './const.ts';

export const publicRoutes: PublicRoutesInterface[] = [
    {
        path: FORM_PAGE,
        Component: FormPage,
    },
    {
        path: WELCOME_PAGE,
        Component: WelcomePage,
    },
];
