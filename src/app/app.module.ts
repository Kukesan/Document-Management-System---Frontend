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
import { AddComponent } from './dashboard/add/add.component';
import { DocumentsComponent } from './dashboard/documents/documents.component';
import { FoldersComponent } from './dashboard/folders/folders.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SearchComponent } from './dashboard/search/search.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { StarredComponent } from './dashboard/starred/starred.component';
import { TrashComponent } from './dashboard/trash/trash.component';
import { FormsModule } from '@angular/forms';
import { IssueComponent } from './dashboard/issue/issue.component';
import { AdminNotificationComponent } from './privacy/admin-notification/admin-notification.component';
import { AdminSearchComponent } from './privacy/admin-search/admin-search.component';
import { AdminInfoComponent } from './privacy/admin-info/admin-info.component';
import { DefineUserComponent } from './privacy/define-user/define-user.component';
import { ManageUserComponent } from './privacy/manage-user/manage-user.component';
import { BugReportComponent } from './privacy/bug-report/bug-report.component';
import { AdminSettingsComponent } from './privacy/admin-settings/admin-settings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { DownloadComponent } from './dashboard/documents/download/download.component';
import { UploadComponent } from './dashboard/documents/upload/upload.component';
 
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
    AddComponent,
    DocumentsComponent,
    FoldersComponent,
    NotificationComponent,
    SearchComponent,
    SettingsComponent,
    StarredComponent,
    TrashComponent,
    IssueComponent,
    AdminNotificationComponent,
    AdminSearchComponent,
    AdminInfoComponent,
    DefineUserComponent,
    ManageUserComponent,
    BugReportComponent,
    AdminSettingsComponent,
    WelcomeComponent,
    UserdetailsComponent,
    DownloadComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      {path:'dashboard',component:DashboardComponent},
      {path:'add',component:AddComponent},
      {path:'documents',component:DocumentsComponent},
      {path:'folders',component:FoldersComponent},
      {path:'home',component:HomeComponent},
      {path:'notification',component:NotificationComponent},
      {path:'search',component:SearchComponent},
      {path:'settings',component:SettingsComponent},
      {path:'starred',component:StarredComponent},
      {path:'trash',component:TrashComponent},
      {path:'issue',component:IssueComponent},
      {path:'admin-notification',component:AdminNotificationComponent},
      {path:'admin-search',component:AdminSearchComponent},
      {path:'admin-info',component:AdminInfoComponent},
      {path:'define-user',component:DefineUserComponent},
      {path:'manage-user',component:ManageUserComponent},
      {path:'bug-report',component:BugReportComponent},
      {path:'admin-settings',component:AdminSettingsComponent},
      {path:'userdetails',component:UserdetailsComponent},
      {path:'upload',component:UploadComponent},
      {path:'download',component:DownloadComponent},
      //{ path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule), canActivate: [AuthGuard] },
      { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: 'privacy', component: PrivacyComponent, canActivate: [AuthGuard, AdminGuard]},
      { path: '404', component : NotFoundComponent},
      { path: 'forbidden', component: ForbiddenComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full'}
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
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }