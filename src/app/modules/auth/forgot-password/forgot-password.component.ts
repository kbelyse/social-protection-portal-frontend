import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOKEN_NAME, USER } from '../../../constants';
import { AuthService } from '../../../core/services/auth.service';
import { GlobalService } from '../../../core/services/global.service';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
    forgotForm: FormGroup;
    loading = false;

    snackBarMessages: string[] = ['resetPasswordEmailSent']; // snackbar messages to be translated --> PLEASE do NOT modify the array values

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private globalService: GlobalService,
        private translationService: TranslationService
    ) {
        this.forgotForm = this.fb.group({
            username: ['', [Validators.required, Validators.email]],
        });
    }

    get formControls() {
        return this.forgotForm.controls;
    }

    ngOnInit(): void {
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem(USER);
    }

    forgotPassword(): void {
        this.loading = true;

        const username = this.formControls['username'].value;
        this.authService.forgotPassword(username).subscribe((res: any) => {
            this.loading = false;
            if (res.status) {
                this.router.navigate(['/auth/forgot-password-email-sent']);
                setTimeout(() => {
                    this.translationService.getInstantTranslations(this.snackBarMessages[0]).subscribe((res) => {
                        this.globalService.openSuccessSnackBar(res);
                    });
                    // this.globalService.openSuccessSnackBar('We have sent you an email to reset your credentials');
                }, 2000);
            } else {
                this.globalService.openFailureSnackBar(res?.message);
            }
        });
    }
}
