import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { MainWirelessConnectionPageComponent } from './wireless-connection/main-wireless-connection-page/main-wireless-connection-page.component';
import { HotspotMikrotikComponent } from '../hostpot/hotspot-mikrotik/hotspot-mikrotik.component';
import { MainHotspotComponent } from '../hostpot/main-hotspot/main-hotspot.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'Wireless-Internet', component: MainWirelessConnectionPageComponent},
  { path: 'Hotspot-Mikrotik', component: MainHotspotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
