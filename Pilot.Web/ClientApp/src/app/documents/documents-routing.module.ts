import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './pages/documents/documents.component';
import { DocumentComponent } from './pages/document/document.component';
import { AuthGuard } from '../auth/auth.guard';
import { VersionsComponent } from './pages/versions/versions.component';
import { CanDeactivateVersionsGuard } from './components/document-versions/deactivate-versions.guard';

const routes: Routes = [
  { path: '', component: DocumentsComponent, canActivate: [AuthGuard], data: { reuse: false }},
  { path: ':id', component: DocumentsComponent, canActivate: [AuthGuard], data: { reuse: false }},
  { path: ':id/files', component: DocumentsComponent, canActivate: [AuthGuard], data: { reuse: false }},

  { path: ':fid/doc/:id', component: DocumentComponent, canActivate: [AuthGuard] },
  { path: ':fid/doc/:id/versions', component: VersionsComponent, canActivate: [AuthGuard] },
  { path: ':fid/doc/:id/:v', component: DocumentComponent, canActivate: [AuthGuard] },

  { path: ':fid/files/doc/:id', component: DocumentComponent, canActivate: [AuthGuard] },
  { path: ':fid/files/doc/:id/:v', component: DocumentComponent, canActivate: [AuthGuard] },
  { path: ':fid/files/doc/versions', component: VersionsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [CanDeactivateVersionsGuard]
})
export class DocumentsRoutingModule {}
