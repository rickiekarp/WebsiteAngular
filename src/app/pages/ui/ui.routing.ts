import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';

/* children components */
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GridComponent } from './components/grid/grid.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UiComponent,
        children: [
            { path: '', redirectTo: 'buttons', pathMatch: 'full' },
            { path: 'buttons', component: ButtonsComponent },
            { path: 'grid', component: GridComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'file-tree', component: FileTreeComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
