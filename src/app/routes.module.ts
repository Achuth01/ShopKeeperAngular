import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { EnterComponent } from './enter/enter.component';
import { SellComponent } from './sell/sell.component';
import { InvoiceComponent } from './invoice/invoice.component';

export const routes: Route[] = [
   { path: '', redirectTo: '/login', pathMatch:'full'},
   { path: 'home', component: SearchComponent,canActivate:[AuthGuard]},
   { path: 'enter', component: EnterComponent,canActivate:[AuthGuard]},
   { path: 'search', component: SearchComponent,canActivate:[AuthGuard]},
   { path: 'sell', component: SellComponent,canActivate:[AuthGuard]},
   { path: 'invoice', component:InvoiceComponent,canActivate:[AuthGuard]},
   {
     path:'signup',component:UserComponent,
     children:[{path:'',component:SignUpComponent}]
   },
   {
    path:'login',component:UserComponent,
    children:[{path:'',component:SignInComponent}]
  }
];

@NgModule({
  imports:[
    RouterModule
  ],
  exports:[],
  declarations:[]
})

export class AppRoutersModule { }


