import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomComponent } from './custom/data.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
