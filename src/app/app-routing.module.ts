import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './components/balance/balance.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { Page404Component } from './components/page404/page404.component';
import { StatementComponent } from './components/statement/statement.component';
import { TransfertFundsComponent } from './components/transfert-funds/transfert-funds.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"home", component:WelcomeComponent},
  {path:"balance", component: BalanceComponent},
  {path:"deposite", component: DepositComponent},
  {path:"withdrawal", component: WithdrawalComponent},
  {path:"statements", component: StatementComponent},
  {path:"transfert-funds", component: TransfertFundsComponent},
  {path:"**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
