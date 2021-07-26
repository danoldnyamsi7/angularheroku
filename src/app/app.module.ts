import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideMenuBarComponent } from './components/side-menu-bar/side-menu-bar.component';
import { AtmScreenSectionComponent } from './components/atm-screen-section/atm-screen-section.component';
import { BalanceComponent } from './components/balance/balance.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { StatementComponent } from './components/statement/statement.component';
import { TransfertFundsComponent } from './components/transfert-funds/transfert-funds.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Page404Component } from './components/page404/page404.component';
import { ValidationPageComponent } from './components/validation-page/validation-page.component';
import { DoneComponent } from './components/done/done.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    SideMenuBarComponent,
    AtmScreenSectionComponent,
    BalanceComponent,
    DepositComponent,
    WithdrawalComponent,
    StatementComponent,
    TransfertFundsComponent,
    WelcomeComponent,
    Page404Component,
    ValidationPageComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
