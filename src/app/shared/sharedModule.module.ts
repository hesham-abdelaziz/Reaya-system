import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingScreen } from './loading-screen/loading-screen.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Material } from './angular-material.module';

@NgModule({
    declarations: [
        LoadingScreen,
        UserCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        Material,
        ReactiveFormsModule,
        FontAwesomeModule,
     ],
 
    exports: [
        LoadingScreen,
        UserCardComponent

    ]
})
export class SharedModule {}