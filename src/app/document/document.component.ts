import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  modalRef?: BsModalRef;
  submitted = false;
  uploadedSuccess = false;
  documentsArr : any = [];
  documentForm: FormGroup = new FormGroup({
    name : new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    file : new FormControl(null,[Validators.required]),
  });


  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {}
    
  ngOnInit() {
    let documents = localStorage.getItem('documentData');
    if(documents) this.documentsArr = JSON.parse(documents);


    console.log(this.documentsArr);
    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  uploadDocument() {
    this.submitted = true;
    if(this.documentForm.invalid) return;
    const {name, description, file} = this.documentForm.value;
    const storeFile = { name, description, file, identifier : Date.now().toString()}
    console.log(storeFile);
    this.documentsArr.push(storeFile)
    localStorage.setItem('documentData', JSON.stringify(this.documentsArr));
    this.uploadedSuccess = true;
    this.submitted = false;
    this.documentForm.reset();
    setTimeout(() => {
      this.modalRef?.hide();
      this.uploadedSuccess = false;
    }, 2000);
  }

  onFileChange(event:Event) {
    if(!event.target) return;
    let files = (event.target as HTMLInputElement).files || [];
    if (files?.length > 0) {
      const file = files[0];
      this.getFileAsBase64String(file);
    }
  }

  get formErrors() {
    return this.documentForm.controls;
  }
  

  private getFileAsBase64String(file: File) {
    const reader = new FileReader();
    let base64String : string;
    reader.readAsDataURL(file);
    reader.onload = () => {
      base64String = reader.result as string;
      this.documentForm.patchValue({ file:base64String, name : file.name });
    };
  }

}
