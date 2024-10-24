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


@NgModule({
  declarations: [
    MainPageComponent,
    SlidePostComponent,
    ServicesOfferedComponent,
    UsesComponent,
    PricingPlanComponent,
    PricingHotspotComponent,
    MainFeaturesCompanyComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPageModule { }
