import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsComponent } from '../tweets/tweets.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './material.module';
import { SettingComponent } from '../setting/setting.component';
import { reducer } from './reducers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FilterArrayPipe } from './filter-array-pipe';

export function localStorageSyncReducer(actionReducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['state'],
    rehydrate: true
  })(actionReducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    SettingComponent,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ state: reducer },
                        {metaReducers}),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
