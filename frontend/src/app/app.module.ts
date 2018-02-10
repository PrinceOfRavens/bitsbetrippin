import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './core/containers/app';
import { YoutubeVideoComponent } from './youtube/youtube-video';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        YoutubeVideoComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
