import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FileInputComponent } from '../../components/file-input/file-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TestService } from '../../core/services/test.service';
import { ToastrService } from "ngx-toastr";
import { Test } from '../../core/models/test';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FileInputComponent, ButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  images: File[] = [];
  _id: string = "";
  result: Test = {
    message: "",
    result: "",
    predicted_class: ""
  }
  status = "";
  @Input() extensions: string[] = [];
  @Input() multiple: boolean = false;

  @Output() filesSelected = new EventEmitter<File[]>();

  inputSelectedFiles: File[] = [];
  urls: string[] = [];
  private toastr = inject(ToastrService);
  private service = inject(TestService);
  ngOnInit(): void {
    this._id = Math.random().toString(36).substring(2);
  }

  onFilesSelected(event: any) {
    // If there is no file selected, exit
    if (!event.target.files) return;
    const files = event.target.files;
    this.toastr.success("Image uploaded successfully");

    // Store the selected files
    this.inputSelectedFiles.push(...files);

    // Create files preview
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.urls.push(e.target.result);
      };
      reader.readAsDataURL(files[i]);
    }

    // Emit the selected files
    this.filesSelected.emit(this.inputSelectedFiles);

  }

  removeFiles(index: number) {
    this.urls.splice(index, 1);
    this.inputSelectedFiles.splice(index, 1);

    // Emit the selected files
    this.filesSelected.emit(this.inputSelectedFiles);
  }

  scan() {
    const file: File = this.inputSelectedFiles[0];
    const formData = new FormData();
    formData.append('image', file);
    this.service.doTest(formData).subscribe((response) => {
      this.result = response;
      console.log(response);
      console.log(this.result);  
      console.log('Image uploaded successfully');
    });
  }
}
