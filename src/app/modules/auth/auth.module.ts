import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FeatherModule } from 'angular-feather';
import { 
  Eye, 
  EyeOff, 
  User, 
  Lock, 
  AlertTriangle,
  ChevronUp,
  ChevronDown,
  AlertCircle,
  Check,
  Search,
  Menu,
  Home,
  Settings,
  LogOut
} from 'angular-feather/icons';

// Define icons object with all needed icons
const icons = {
  Eye,
  EyeOff,
  User,
  Lock,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
  AlertCircle,
  Check,
  Search,
  Menu,
  Home,
  Settings,
  LogOut
};

@NgModule({
    declarations: [
        AuthRoutingModule.components
    ],
    imports: [
        CommonModule, 
        AuthRoutingModule, 
        ReactiveFormsModule, 
        SharedModule,
        FeatherModule.pick(icons), 
        TranslateModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this to handle i-feather elements
})
export class AuthModule {}