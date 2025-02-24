import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FeatherModule } from 'angular-feather';
import { 
    AlertCircle,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Bell,
    Calendar,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Edit,
    Eye,
    File,
    FileText,
    Filter,
    Grid,
    Home,
    Info,
    List,
    Lock,
    LogOut,
    Menu,
    MessageSquare,
    MoreVertical,
    Plus,
    PlusCircle,
    Search,
    Settings,
    Trash2,
    User,
    Users,
    X
} from 'angular-feather/icons';
import { AccessControlDirective } from '../../core/directives/access-control.directive';
import { EllipsisPipe } from '../../core/pipes/ellipsis.pipe';
import { RowEllipsisPipe } from '../../core/pipes/row-ellipsis.pipe';
import { RemoveUnderscorePipe } from '../../core/pipes/remove-underscore.pipe';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HoverMenuDirective } from '../../core/directives/hover.directive';
import { ObjectLengthPipe } from '../../core/pipes/ObjectLength.pipe';
import { HighlightPipe } from '../../core/pipes/highlight.pipe';
import { HumanReadablePipe } from '../../core/pipes/respondent-type.pipe';
import { SplitByPipe } from '../../core/pipes/splitBy.pipe';
import { ChangePasswordComponent } from './change-password/change-password.component';

const icons = {
    AlertCircle,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Bell,
    Calendar,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Edit,
    Eye,
    File,
    FileText,
    Filter,
    Grid,
    Home,
    Info,
    List,
    Lock,
    LogOut,
    Menu,
    MessageSquare,
    MoreVertical,
    Plus,
    PlusCircle,
    Search,
    Settings,
    Trash2,
    User,
    Users,
    X
};

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const components = [
    SpinnerComponent,
    ErrorMessageComponent,
    NotFoundComponent,
    ChangePasswordComponent
];

const directives = [
    AccessControlDirective, 
    HoverMenuDirective
];

const pipes = [
    RemoveUnderscorePipe, 
    EllipsisPipe, 
    RowEllipsisPipe,  
    HumanReadablePipe, 
    SplitByPipe, 
    ObjectLengthPipe, 
    HighlightPipe
];

const modules = [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    FeatherModule.pick(icons),
    MatTooltipModule,
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
        },
        isolate: false,
    }),
];

@NgModule({
    declarations: [
        ...components, 
        ...pipes, 
        ...directives
    ],
    imports: [
        ...modules
    ],
    exports: [
        ...components, 
        ...pipes, 
        ...directives
    ],
})
export class SharedModule {}