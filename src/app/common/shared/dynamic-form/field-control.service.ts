import { Injectable } from '@angular/core';
import { BaseField } from './fields/base-field';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FieldControlService {

    constructor() { }

    toFormGroup(fields: BaseField<any>[]) {
        let group: any = {};

        fields.forEach(field => {
            let value = field.value || '';
            let validatorRequired = field.required ? Validators.required : undefined;
            group[field.key] = new FormControl(value, validatorRequired);
        });

        return new FormGroup(group);
    }
}
