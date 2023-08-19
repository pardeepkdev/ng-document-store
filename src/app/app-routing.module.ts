import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DocumentComponent } from './document/document.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentDetailResolver } from './utils/resolvers/document-detail.resolver';
import { AuthGuard } from './utils/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'documents',
    component: DocumentComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'documents/:docuId',
    component: DocumentDetailComponent,
    canActivate : [AuthGuard],
    resolve : {
      document : DocumentDetailResolver
    }
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
