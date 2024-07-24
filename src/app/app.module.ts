import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectivetestComponent } from './components/directivetest/directivetest.component';
import { CapitalPipe } from './pipes/capital.pipe';
import { TemplateformtestComponent } from './components/templateformtest/templateformtest.component';
import { ReactiveformtestComponent } from './components/reactiveformtest/reactiveformtest.component';
import { ReactiveformGroupComponent } from './components/reactiveform-group/reactiveform-group.component';
import { ReactivenestedformComponent } from './components/reactivenestedform/reactivenestedform.component';
import { FormBuilderExampleComponent } from './components/form-builder-example/form-builder-example.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    HighlightDirective,
    DirectivetestComponent,
    CapitalPipe,
    TemplateformtestComponent,
    ReactiveformtestComponent,
    ReactiveformGroupComponent,
    ReactivenestedformComponent,
    FormBuilderExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
