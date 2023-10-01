import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {ClipboardModule} from '@angular/cdk/clipboard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    MatIconModule,
    ClipboardModule
  ]
})
export class PortFolioModule {}
