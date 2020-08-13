import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamComponent } from './components/team/team.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { Testimonials2Component } from './components/testimonials2/testimonials2.component';
import { Testimonials3Component } from './components/testimonials3/testimonials3.component';
import { TestComponent } from './components/test/test.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    ChooseUsComponent,
    PortfolioComponent,
    TestimonialsComponent,
    TeamComponent,
    ClientsComponent,
    ContactUsComponent,
    FooterComponent,
    Testimonials2Component,
    Testimonials3Component,
    TestComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  // AOT compilation support
  export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http,'./assets/i18n/','.json');
  }