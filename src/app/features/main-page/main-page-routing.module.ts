import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { MainWirelessConnectionPageComponent } from './wireless-connection/main-wireless-connection-page/main-wireless-connection-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'Wireless-Internet', component: MainWirelessConnectionPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
