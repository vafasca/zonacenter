import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; // Útil para botones en el diálogo
import { MatIconModule } from '@angular/material/icon'; 



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
