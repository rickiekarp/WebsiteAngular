import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';

import { GlobalService } from './services/global.service';

import { NotificationComponent } from './components/notification/notification.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ContentTopComponent } from './layouts/content-top/content-top.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: [
        GlobalService
    ],
    declarations: [
        MenuComponent,
        SidebarComponent,
        ContentTopComponent,
        NotificationComponent,
        LoadingComponent
    ],
    exports: [
        SidebarComponent,
        ContentTopComponent,
        NotificationComponent,
        LoadingComponent
    ]
})
export class LayoutModule { }
