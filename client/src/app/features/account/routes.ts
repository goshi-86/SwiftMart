import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { Component } from "@angular/core";
import { AccountRegistrationComponent } from "./account-registration/account-registration.component";
import { UserLoginComponent } from "./user-login/user-login.component";

export const accountRoutes: Route[] = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'accountRegister', component:AccountRegistrationComponent},
    {path: 'userLogin', component:UserLoginComponent}
]