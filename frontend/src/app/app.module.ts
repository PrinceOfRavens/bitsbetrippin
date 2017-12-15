import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from '';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        //RouterModule.forRoot(routes, { useHash: true }),

        //StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule,
        EffectsModule.forRoot([]),
        DBModule.provideDB(schema),
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
