import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFileInput]'
})
export class FileInputDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('change', ['$event.target.files'])
  onChange(files: FileList | null): void {
    if (files && files.length > 0) {
      const fileNames = Array.from(files).map(file => file.name).join(', ');
      this.renderer.setProperty(this.el.nativeElement, 'value', fileNames);
    }
  }

}
