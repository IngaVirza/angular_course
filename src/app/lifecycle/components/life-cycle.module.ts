import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LifeCycleRouting } from './life-cycle-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent
    ],
    imports: [
        CommonModule,
        LifeCycleRouting
    ],
    exports: []
})
export class LifeCycleModule { }