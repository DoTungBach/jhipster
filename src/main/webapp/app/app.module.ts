import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsDemoSharedModule } from 'app/shared/shared.module';
import { JhipsDemoCoreModule } from 'app/core/core.module';
import { JhipsDemoAppRoutingModule } from './app-routing.module';
import { JhipsDemoHomeModule } from './home/home.module';
import { JhipsDemoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsDemoSharedModule,
    JhipsDemoCoreModule,
    JhipsDemoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsDemoEntityModule,
    JhipsDemoAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsDemoAppModule {}
