import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { DataService } from '../../core/services/data.service';
import { TranslationService } from '../../core/services/translation.service';
import { initPaginate } from '../../core/utils/reusable-functions';
import { TranslationUpdateComponent } from './translation-update/translation-update.component';

@Component({
    selector: 'app-translations',
    templateUrl: './translations.component.html',
    styleUrls: ['./translations.component.css'],
})
export class TranslationsComponent implements OnInit {
    translations: any[] = [];
    totalTranslations = 0;
    loading = false;
    query = '';
    isSearching = false;
    pagination = initPaginate(1, 20);
    queryFormGroup!: FormGroup;

    constructor(
        private dataService: DataService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        private translationService: TranslationService
    ) {
        this.initTranslatable();
        this.queryFormGroup = this.fb.group({
            query: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.getTranslations(this.query);
        this.onSearch();
    }

    initTranslatable(): void {
        this.translationService.loadLanguage();
    }

    onSearch(): void {
        this.queryFormGroup
            .get('query')
            ?.valueChanges.pipe(debounceTime(1000))
            .subscribe((val) => {
                if (val !== '' || val !== null) {
                    this.isSearching = true;
                    this.query = val;
                    this.pagination = initPaginate(1, 20);
                    this.getTranslations(val);
                    this.isSearching = false;
                }
            });
    }

    onPageChange(event: any) {
        this.pagination.page = event.pageIndex + 1;
        this.getTranslations(this.query);
    }

    getTranslations(queryText: string): void {
        this.loading = true;
        this.dataService.getTranslations(queryText, this.pagination).subscribe((res: any) => {
            this.loading = false;
            this.translations = res.response.content;
            this.totalTranslations = res.response.totalElements;
            this.pagination.page = res.response.number;
        });
    }

    openEditDialog(translation: any): void {
        this.dialog.open(TranslationUpdateComponent, {
            data: translation,
            width: '400px',
        });
    }
}