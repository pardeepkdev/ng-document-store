import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DocumentComponent } from './document/document.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'documents',
    component: DocumentComponent,
  },
  {
    path: 'document/{docuId}',
    component: DocumentDetailComponent,
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
