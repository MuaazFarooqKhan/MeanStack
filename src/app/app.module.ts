import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductlistComponent } from './components/shopping-cart/productlist/productlist.component';
import { ShopingcartComponent } from './components/shopping-cart/shopingcart/shopingcart.component';
import { CartitemComponent } from './components/shopping-cart/cart/cartitem/cartitem.component';
import { ProductitemComponent } from './components/shopping-cart/productlist/productitem/productitem.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderComponent } from './components/order/order.component';
import { PostCreateComponent } from './components/Posts/post-create/post-create.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostListComponent } from './components/Posts/post-list/post-list.component';
import { MatExpansionModule } from '@angular/material/expansion'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CartComponent,
    ProductlistComponent,
    ShopingcartComponent,
    CartitemComponent,
    ProductitemComponent,
    PagenotfoundComponent,
    SignupComponent,
    LoginComponent,
    OrderComponent,
    PostCreateComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
