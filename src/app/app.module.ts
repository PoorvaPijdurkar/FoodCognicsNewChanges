import { NgModule, CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioModule } from './portfolio/portfolio.module';
import { FoodComponent } from './Sector/food/food.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { TeamsModule } from './teams/teamsModule';
import { ServiceModule } from './services/ServicesModule';
import { FoodstartupModule } from './food-startup/foodStartupModule';
import { AboutusModule } from './about-knowmore/aboutUsModule';
import { GallaryModule } from './gallary/gallaryModule';
import { ContactModule } from './contact-us/contactModule';
import { HomeModule } from './home/HomeModule';
import { CareerModule } from './career/CareerModule'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FoodComponent,
    TestimonialCardComponent,
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ButtonsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PortfolioModule,
    ServiceModule,
    TeamsModule,
    FoodstartupModule,
    FoodstartupModule,
    AboutusModule,
    GallaryModule,
    ContactModule,
    HomeModule,
    CareerModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
