import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { UserOptionsComponent } from './components/user-options/user-options.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarRowComponent } from './components/sidebar-row/sidebar-row.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { FeedComponent } from './components/feed/feed.component';
import { HeaderComponent } from './components/header/header.component';
import { TuitformComponent } from './components/tuitform/tuitform.component';
import { TuitComponent } from './components/tuit/tuit.component'; 
import { NgIconsModule } from '@ng-icons/core';
import {heroMagnifyingGlass, heroChatBubbleLeft,heroArrowPathRoundedSquare,heroHeart,heroArrowUpTray,heroPhoto,heroGif, heroListBullet,heroFaceSmile,heroCalendar,heroMapPin, heroHome,heroHashtag, heroBell,heroEnvelope, heroBookmark, heroClipboardDocument,heroUser, heroEllipsisHorizontalCircle,heroEllipsisHorizontal } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserOptionsComponent,
    SidebarComponent,
    SidebarRowComponent,
    WidgetsComponent,
    FeedComponent,
    HeaderComponent,
    TuitformComponent,
    TuitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({ heroMagnifyingGlass,heroChatBubbleLeft,heroArrowPathRoundedSquare,heroHeart,heroArrowUpTray, heroPhoto,heroGif, heroListBullet,heroFaceSmile,heroCalendar,heroMapPin,heroHome,heroHashtag, heroBell,heroEnvelope, heroBookmark, heroClipboardDocument,heroUser, heroEllipsisHorizontalCircle,heroEllipsisHorizontal }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
