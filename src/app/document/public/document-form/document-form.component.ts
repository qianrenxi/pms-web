import { FormGroup, FormBuilder } from '@angular/forms';
import { Document } from 'app/common/entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pms-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent implements OnInit {

  @Input() document: Document;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  _form: FormGroup;

  target: string;
  isPreview;

  _formats = [
    { value: 'AsciiDoc', label: "AsciiDoc",  disabled: false},
    { value: 'MarkDown', label: "MarkDown",  disabled: true},
    { value: 'RDoc', label: "RDoc",  disabled: true},
    { value: 'RichText', label: "RichText",  disabled: true},
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let m = this.document || new Document();

    this._form = this.fb.group({
      folderId: [],
      name: [m.name],
      keyword: [m.keyword],
      format: [m.format || 'AsciiDoc'],
      originalContent: [m.originalContent],
    });

    if (m.originalContent) {
      this.parseContent(m.originalContent);
    }
  }

  getFromControl(name) {
    return this._form.controls[name];
  }

  markAsDirty() {
    for (let key of Object.keys(this._form.controls)) {
      this._form.controls[key].markAsDirty();
    }
  }

  _save(event) {
    this.markAsDirty();

    if (this._form.invalid) {
      return;
    }

    let value = this._form.value;
    value['content'] = this.parseContent(value['originalContent']);
    this.save.emit({ originalEvent: event, value: value });
  }

  _cancel(event) {
    this.cancel.emit({ originalEvent: event });
  }

  parseContent(source) {
    let asciidoctorOptions: any = {};
    asciidoctorOptions.safe = 'secure';     // unsafe, safe, server or secure
    asciidoctorOptions.doctype = 'article'; // book,inline,article
    asciidoctorOptions.attributes = ['showtitle'];
    asciidoctorOptions.header_footer = false;

    let asciidoctor = window['Asciidoctor']();
    this.target = asciidoctor.convert(source, asciidoctorOptions);
    // console.log(this.target);
    return this.target;
  }
}
