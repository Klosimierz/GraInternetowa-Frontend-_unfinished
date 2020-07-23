import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GmoduleComponent } from './gmodule/gmodule.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { BuildingsComponent } from './gmodule/buildings/buildings.component';
import { ResearchComponent } from './gmodule/research/research.component';
import { ShowitemComponent } from './gmodule/showitem/showitem.component';
import { Authguard } from './services/authguard.service';
import { ItemCardComponent } from './gmodule/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GmoduleComponent,
    ModalLoginComponent,
    BuildingsComponent,
    ResearchComponent,
    ShowitemComponent,
    ItemCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'player', component: GmoduleComponent,canActivate: [Authguard],
      children: [
        {path:'buildings', component: BuildingsComponent},
        {path:'research',component: ResearchComponent}
      ]},
      {path: 'login', component: ModalLoginComponent}
    ])
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    Authguard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
