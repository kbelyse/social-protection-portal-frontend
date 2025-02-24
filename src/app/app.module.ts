import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Add HttpClientModule here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FeatherModule } from 'angular-feather';
import { 
    ChevronUp,
    ChevronDown,
    Eye,
    EyeOff,
    User,
    Lock,
    AlertTriangle
} from 'angular-feather/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginModule } from './modules/login/login.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthService } from './core/services/auth.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const icons = {
    ChevronUp,
    ChevronDown,
    Eye,
    EyeOff,
    User,
    Lock,
    AlertTriangle
};

@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule, // Add this line
        BrowserAnimationsModule,
        AppRoutingModule,
        LoginModule,
        SharedModule,
        MatSnackBarModule,
        MatDialogModule,
        FeatherModule.pick(icons),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        AuthService,
        {
            provide: MatDialogRef,
            useValue: {},
        }
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}