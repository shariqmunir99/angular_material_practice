import { Component, Inject, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Console } from 'node:console';
@Component({
  selector: 'app-comp-1',
  standalone: false,
  templateUrl: './comp-1.html',
  styleUrl: './comp-1.scss',
})
export class Comp1 {
  status: 'Active' | 'Inactive' = 'Inactive';
  dialogForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<Comp1>,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('upload', sanitizer.bypassSecurityTrustResourceUrl('/upload-icon.svg'));
    iconRegistry.addSvgIcon('create', sanitizer.bypassSecurityTrustResourceUrl('/create-icon.svg'));
    iconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('/close-icon.svg'));
    this.dialogForm = this.fb.group({
      portalType: ['Standard', [Validators.required]],
      portalName: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      brandColor: ['', [Validators.required]],
      companyLogo: [null, [Validators.required]],
      status: ['Inactive', [Validators.required]],
    });
  }

  onSubmit() {
    this.dialogForm.markAllAsTouched();
    if (this.dialogForm.valid) {
      // console.log(this.dialogForm.value);
      console.log(this.status);
      this.dialogRef.close({ ...this.dialogForm.value, status: this.status });
      alert('Portal Created');
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    console.log('Inside This');
    if (file) {
      this.dialogForm.patchValue({ companyLogo: file });
      this.dialogForm.get('companyLogo')?.updateValueAndValidity();
    } else {
      console.log('Logo Error');
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
