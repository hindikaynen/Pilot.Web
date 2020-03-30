import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './pages/documents/documents.component';
import { DocumentComponent } from './pages/document/document.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'documents/:id',
    component: DocumentsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'document/:id', component: DocumentComponent, canActivate: [AuthGuard] }
    ]

  },
  //{ path: 'document/:id', component: DocumentComponent, outlet: 'document', canActivate: [AuthGuard] },
  {
    path: 'files/:id',
    component: DocumentsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'file/:id', component: DocumentComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class DocumentsRoutingModule {}
