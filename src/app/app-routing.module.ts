import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DirectivetestComponent } from './components/directivetest/directivetest.component';
import { TemplateformtestComponent } from './components/templateformtest/templateformtest.component';
import { ReactiveformGroupComponent } from './components/reactiveform-group/reactiveform-group.component';
import { ReactivenestedformComponent } from './components/reactivenestedform/reactivenestedform.component';
import { FormBuilderExampleComponent } from './components/form-builder-example/form-builder-example.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "", component:HomeComponent},
  {path: "directivetest", component:DirectivetestComponent},
  {path: "templateform", component:TemplateformtestComponent},
  {path: "reactiveGroupform", component:ReactiveformGroupComponent},
  {path: "reactivenestedform", component:ReactivenestedformComponent},
  {path: "reactivenestedform", component:ReactivenestedformComponent},
  {path: "formBuilderExample", component:FormBuilderExampleComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
