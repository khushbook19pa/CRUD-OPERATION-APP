import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';
import { CardsComponent } from './pages/cards/cards.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'data', component: CardsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
