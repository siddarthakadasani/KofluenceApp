import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SkeletonComponent } from './skeleton/skeleton.component';



@NgModule({
  declarations: [SkeletonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[SkeletonComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }