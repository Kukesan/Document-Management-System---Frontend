import { AdminGuard } from './shared/guards/admin.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './dashboard/documents/documents.component';
import { FoldersComponent } from './dashboard/folders/folders.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SearchComponent } from './dashboard/search/search.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { StarredComponent } from './dashboard/starred/starred.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueComponent } from './dashboard/issue/issue.component';
import { AdminNotificationComponent } from './privacy/admin-notification/admin-notification.component';
import { AdminSearchComponent } from './privacy/admin-search/admin-search.component';
import { AdminInfoComponent } from './privacy/admin-info/admin-info.component';
import { DefineUserComponent } from './privacy/define-user/define-user.component';
import { ManageUserComponent } from './privacy/manage-user/manage-user.component';
import { BugReportComponent } from './privacy/bug-report/bug-report.component';
import { AdminSettingsComponent } from './privacy/admin-settings/admin-settings.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { DownloadComponent } from './dashboard/documents/download/download.component';
import { UploadComponent } from './dashboard/documents/upload/upload.component';
import { ShowUserComponent } from './privacy/manage-user/show-user/show-user.component';
import { EditUserComponent } from './privacy/manage-user/edit-user/edit-user.component';
import { InfoComponent } from './info/info.component';
import { AuthenticationModule } from './authentication/authentication.module';

import { FileuploadComponent } from './dashboard/fileupload/fileupload.component';
import { FileComponent } from './dashboard/fileupload/file/file.component';
import { OcrComponent } from './dashboard/fileupload/ocr/ocr.component';
import { BarcodeComponent } from './dashboard/fileupload/barcode/barcode.component';
import { DeleteOCRComponent } from './dashboard/fileupload/ocr/delete-ocr/delete-ocr.component';
import { DownloadOCRComponent } from './dashboard/fileupload/ocr/download-ocr/download-ocr.component';
import { UploadOCRComponent } from './dashboard/fileupload/ocr/upload-ocr/upload-ocr.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { RecyclebinComponent } from './dashboard/recyclebin/recyclebin.component';

import { DatePipe } from '@angular/common';
import { GroupsComponent } from './privacy/groups/groups.component';
import { GroupmessageComponent } from './dashboard/groupmessage/groupmessage.component';
import { UseractivityComponent } from './privacy/useractivity/useractivity.component';



export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    PrivacyComponent,
    ForbiddenComponent,
    DashboardComponent,
    DocumentsComponent,
    FoldersComponent,
    NotificationComponent,
    SearchComponent,
    SettingsComponent,
    StarredComponent,
    IssueComponent,
    AdminNotificationComponent,
    AdminSearchComponent,
    AdminInfoComponent,
    DefineUserComponent,
    ManageUserComponent,
    BugReportComponent,
    AdminSettingsComponent,
    UserdetailsComponent,
    DownloadComponent,
    UploadComponent,
    ShowUserComponent,
    EditUserComponent,
    InfoComponent,
    FileuploadComponent,
    FileComponent,
    OcrComponent,
    BarcodeComponent,
    DownloadOCRComponent,
    UploadOCRComponent,
    DeleteOCRComponent,
    RecyclebinComponent,
    GroupsComponent,
    GroupmessageComponent,
    UseractivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRippleModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'documents', component: DocumentsComponent },
      { path: 'folders', component: FoldersComponent },
      { path: 'home', component: HomeComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'search', component: SearchComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'starred', component: StarredComponent },
      { path: 'issue', component: IssueComponent },
      { path: 'admin-notification', component: AdminNotificationComponent },
      { path: 'admin-search', component: AdminSearchComponent },
      { path: 'admin-info', component: AdminInfoComponent },
      { path: 'define-user', component: DefineUserComponent },
      { path: 'manage-user', component: ManageUserComponent },
      { path: 'bug-report', component: BugReportComponent },
      { path: 'admin-settings', component: AdminSettingsComponent },
      { path: 'userdetails', component: UserdetailsComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'download', component: DownloadComponent },
      { path: 'show-user', component: ShowUserComponent },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'info', component: InfoComponent },
      { path: 'upload-ocr', component: UploadOCRComponent },
      { path: 'fileupload', component: FileuploadComponent },
      { path: 'ocr', component: OcrComponent },
      { path: 'file', component: FileComponent },
      { path: 'barcode', component: BarcodeComponent },
      { path: 'delete-ocr', component: DeleteOCRComponent },
      { path: 'download-ocr', component: DownloadComponent },
      { path: 'recyclebin', component: RecyclebinComponent },
      { path: 'groups', component: GroupsComponent },
      {path:'groupmessage',component:GroupmessageComponent},
      {path:'useractivity',component:UseractivityComponent},
      //{ path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule), canActivate: [AuthGuard] },
      { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: 'privacy', component: PrivacyComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: '404', component: NotFoundComponent },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full' }
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true,

    }, [DatePipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }