import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './nucleus.routing';
import { SharedModule } from '../../shared/shared.module';
import { NucleusComponent } from './nucleus.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        NucleusComponent
    ]
})
export class NucleusModule { }
