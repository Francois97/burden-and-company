import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCheckoutComponent } from './products/product-checkout/product-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    ProductCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'home', component: HomeComponent},
      {path: 'cart', component: CartComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);