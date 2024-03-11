import { Component } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent {
  processForm!: FormGroup;

  constructor(private fb: FormBuilder, private processService: ProcessService, private router: Router) {}

  ngOnInit(): void {
    this.processForm = this.fb.group({
      name: ['', Validators.required],
      size: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSave(): void {
    if (this.processForm.valid) {
      const { name, size } = this.processForm.value;
      this.processService.createProcess(name, size);
      this.processForm.reset();
      this.router.navigateByUrl('/process')
    }
  }


}
