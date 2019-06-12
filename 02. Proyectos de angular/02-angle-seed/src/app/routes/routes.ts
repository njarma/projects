import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule' }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
