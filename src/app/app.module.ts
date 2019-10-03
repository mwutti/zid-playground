import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './footer/footer.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingCardItemComponent } from './landing-card-item/landing-card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingHeaderComponent,
    LandingCardItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
