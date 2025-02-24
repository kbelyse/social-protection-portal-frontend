import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoginRoutingModule } from './login-routing.module';
import { FeatherModule } from 'angular-feather';
import { 
    Eye, 
    EyeOff, 
    User, 
    Lock, 
    AlertTriangle,
    ChevronUp,
    ChevronDown
} from 'angular-feather/icons';

// Define icons needed for login
const icons = {
    Eye,
    EyeOff,
    User,
    Lock,
    AlertTriangle,
    ChevronUp,
    ChevronDown
};

@NgModule({
    declarations: [LoginRoutingModule.components],
    imports: [
        CommonModule, 
        LoginRoutingModule, 
        ReactiveFormsModule, 
        SharedModule, 
        TranslateModule,
        FeatherModule.pick(icons)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add schema for i-feather elements
})
export class LoginModule {}