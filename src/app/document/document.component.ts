import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  modalRef?: BsModalRef;
  submitted = false;
  documentForm: FormGroup = new FormGroup({
    name : new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    file : new FormControl(null,[Validators.required])
  });


  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  uploadDocument() {
    this.submitted = true;
    if(this.documentForm.invalid) return;

    localStorage.setItem('documentData', JSON.stringify([]));

  }

  onFileChange(event:Event) {
    if(!event.target) return;

    let files = (event.target as HTMLInputElement).files || [];

    if (files?.length > 0) {
      const file = files[0];
      this.documentForm.patchValue({ file });
    }
  }

  get formErrors() {
    return this.documentForm.controls;
  }
}
