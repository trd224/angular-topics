import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveInactiveUserComponent } from './_components/active-inactive-user/active-inactive-user.component';
import { ProgressBarComponent } from './_components/progress-bar/progress-bar.component';
import { DependentDropdownComponent } from './_components/dependent-dropdown/dependent-dropdown.component';
import { NamePrefixComponent } from './_components/name-prefix/name-prefix.component';
import { NamePrefixPipe } from './_pipes/name-prefix.pipe';
import { SearchFilterComponent } from './_components/search-filter/search-filter.component';
import { SearchFilterPipe } from './_pipes/search-filter.pipe';
import { DynamicComponentContainerComponent } from './_components/dynamicComponentDataPassWithInject/dynamic-component-container/dynamic-component-container.component';
import { DynamicComponentComponent } from './_components/dynamicComponentDataPassWithInject/dynamic-component/dynamic-component.component';

import { DynamicComponentContainer2Component } from './_components/dynamicComponentDataPassWithInput/dynamic-component-container2/dynamic-component-container2.component';
import { DynamicComponent2Component } from './_components/dynamicComponentDataPassWithInput/dynamic-component2/dynamic-component2.component';




@NgModule({
  declarations: [
    AppComponent,
    ActiveInactiveUserComponent,
    ProgressBarComponent,
    DependentDropdownComponent,
    NamePrefixComponent,
    NamePrefixPipe,
    SearchFilterComponent,
    SearchFilterPipe,
    DynamicComponentContainerComponent,
    DynamicComponentComponent,
    DynamicComponentContainer2Component,
    DynamicComponent2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
