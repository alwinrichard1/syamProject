import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { materialImports } from './app.materials.module';
import { templateDeclaration, templateEntry } from './app.templates.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    templateDeclaration
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    materialImports
  ],
  entryComponents: [
    templateEntry
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
