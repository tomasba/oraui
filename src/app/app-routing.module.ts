import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent} from "./payment/payment-list/payment-list.component";
import { AgeComponent} from "./age/age/age.component";
import { PiComponent } from "./pi/pi/pi.component";

const routes: Routes = [
  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  { path: 'payments', component: PaymentListComponent },
  { path: 'age', component: AgeComponent },
  { path: 'pi', component: PiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
