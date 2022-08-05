import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RamComponent } from './ram/ram.component';
import { HeaderComponent } from './header/header.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { MatUiComponent } from './mat-ui/mat-ui.component';
import { MatSliderModule } from '@angular/material/slider';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    RamComponent,
    HeaderComponent,
    BasicFormComponent,
    ToggleComponent,
    MatUiComponent,
    TodoComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,MatSliderModule, BrowserAnimationsModule,MatButtonModule,MatIconModule,MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
