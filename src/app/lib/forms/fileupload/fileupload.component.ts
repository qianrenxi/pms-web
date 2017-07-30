import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cui-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  @Input() name: string;
  @Input() url: string;
  @Input() method: string = 'POST';
  @Input() withCredentials: boolean = true;
  @Input() multiple: boolean;
  @Input() auto: boolean;

  @Output() uploadComplete = new EventEmitter();

  public files: File[] = [];
  public progress: number = 0;

  msgs;

  constructor() { }

  ngOnInit() {
  }

  fileSelected(event) {
    let msgs = [];
    if (!this.multiple) {
      this.files = [];
    }

    console.log(event);

    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let file of files) {
      // validate file

      this.files.push(file);
    }

    if (this.hasFiles() && this.auto) {
      this.upload();
    }
  }

  hasFiles(): boolean {
    return this.files && this.files.length > 0;
  }

  upload() {
    this.uploadFile();
  }

  private uploadFile() {
    let msgs = [];
    let xhr = new XMLHttpRequest();
    let formData = new FormData();

    for (let file of this.files) {
      formData.append(this.name, file, file.name);
    }

    xhr.upload.addEventListener('progress', (e: ProgressEvent) => {
      if (e.lengthComputable) {
        this.progress = Math.round(e.loaded * 100 / e.total);
      }
    }, false);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // this.progress = 0;

        if (xhr.status >= 200 && xhr.status < 300) {
          // upload ok
          try {
            let result = JSON.parse(xhr.response);
            // console.log(result);
            this.msgs = JSON.stringify(result);
            this.uploadComplete.emit(result);
          } catch (e) {

          }
          // console.log('Upload success');
        } else {
          // upload error
          console.error('Upload error');
        }

        // clear
      }
    };

    xhr.open(this.method, this.url, true);
    xhr.withCredentials = this.withCredentials;

    xhr.send(formData);
  }
}
