import { Routes, RouterModule } from '@angular/router';
import { NucleusComponent } from './nucleus.component';

const childRoutes: Routes = [
    {
        path: '',
        component: NucleusComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
