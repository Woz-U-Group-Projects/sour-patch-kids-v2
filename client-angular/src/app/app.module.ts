import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { appRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskDisplayComponent } from "./task-display/task-display.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent, 
    TaskDisplayComponent, 
    HomeComponent, 
    LoginComponent, 
    RegisterComponent, 
    ContactComponent],
  imports: [
    BrowserModule, 
    appRoutingModule, 
    FormsModule, 
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
