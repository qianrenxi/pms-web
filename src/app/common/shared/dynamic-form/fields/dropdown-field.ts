import { BaseField } from './base-field';
export class DropdownField extends BaseField<string> {
    controlType = 'dropdown';
    options: { label: string, value: string, disabled?: boolean }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
