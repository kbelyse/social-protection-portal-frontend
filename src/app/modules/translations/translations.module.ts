import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslationsRoutingModule } from './translations-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslationsComponent } from './translations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TranslationUpdateComponent } from './translation-update/translation-update.component';
import { FeatherModule } from 'angular-feather';
import { 
   Edit,
   Search,
   AlertTriangle,
   ChevronDown,
   ChevronUp
} from 'angular-feather/icons';

const icons = {
   Edit,
   Search,
   AlertTriangle,
   ChevronDown,
   ChevronUp
};

@NgModule({
 declarations: [
   TranslationsComponent,
   TranslationUpdateComponent
 ],
 imports: [
   TranslateModule,
   CommonModule,
   TranslationsRoutingModule,
   ReactiveFormsModule,
   SharedModule,
   MatDialogModule,
   MatPaginatorModule,
   FeatherModule.pick(icons)
 ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TranslationsModule { }