import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RamComponent } from './components/ram/ram.component';
import { HeaderComponent } from './components/header/header.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from './components/toggle/toggle.component';
import { MatUiComponent } from './components/mat-ui/mat-ui.component';
import { MatSliderModule } from '@angular/material/slider';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { TodoComponent } from './components/todo/todo.component';
import { TemplateRefComponent } from './components/template-ref/template-ref.component';
import { TsBasicsComponent } from './components/ts-basics/ts-basics.component';
import { AngPipesComponent } from './components/ang-pipes/ang-pipes.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { TemplateDrivenComponent } from './components/form/template-driven/template-driven.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { DirectiveComponent } from './components/directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    RamComponent,
    HeaderComponent,
    BasicFormComponent,
    ToggleComponent,
    MatUiComponent,
    TodoComponent,
    TemplateRefComponent,
    TsBasicsComponent,
    AngPipesComponent,
    CustomPipeComponent,
    UsdInrPipe,
    TemplateDrivenComponent,
    ChangeColorDirective,
    DirectiveComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,MatSliderModule, BrowserAnimationsModule,MatButtonModule,MatIconModule,MatDividerModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
