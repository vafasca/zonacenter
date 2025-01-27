import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SlidePostComponent } from './slide-post/slide-post.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { UsesComponent } from './uses/uses.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { FormsModule } from '@angular/forms';
import { PricingHotspotComponent } from './pricing-hotspot/pricing-hotspot.component';
import { MainFeaturesCompanyComponent } from './main-features-company/main-features-company.component';
import { WirelessInternetComponent } from './wireless-connection/wireless-internet/wireless-internet.component';
import { WeOfferDetailsComponent } from './wireless-connection/we-offer-details/we-offer-details.component';
import { MainWirelessConnectionPageComponent } from './wireless-connection/main-wireless-connection-page/main-wireless-connection-page.component';
import { InformationInterestComponent } from './information-interest/information-interest.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FaqComponent } from './faq/faq.component';
import { ServiceConditionComponent } from './service-condition/service-condition.component';
import { MainHotspotComponent } from '../hostpot/main-hotspot/main-hotspot.component';
import { HotspotMikrotikComponent } from '../hostpot/hotspot-mikrotik/hotspot-mikrotik.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SlidePostComponent,
    ServicesOfferedComponent,
    UsesComponent,
    PricingPlanComponent,
    PricingHotspotComponent,
    MainFeaturesCompanyComponent,
    WirelessInternetComponent,
    WeOfferDetailsComponent,
    MainWirelessConnectionPageComponent,
    InformationInterestComponent,
    FaqComponent,
    ServiceConditionComponent,
    HotspotMikrotikComponent,
    MainHotspotComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPageModule { }
