import { Injectable } from '@angular/core';
import { BaseField } from './fields/base-field';
import { TextField } from './fields/text-field';
import { DropdownField } from './fields/dropdown-field';

@Injectable()
export class DynamicFormBuilder {

     /**
     * Construct a new {@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {@link FormGroup} constructor for more details.
     */
    group(fieldsConfig: {
        [key: string]: any;
    }, extra?: {
        [key: string]: any;
    } | null): BaseField<any>[] {
        let fields: BaseField<any>[] = [];
        let keys = Object.keys(fieldsConfig);
        let keyIdxes = keys.map((key, index) => ({key, index}));

        for (let {key, index} of keyIdxes) {
            /* let conf = fieldsConfig[key];

            if (!Array.isArray(conf) || conf.length < 2) {
                return ;
            }

            let type = conf[0];
            let options = conf[1];
            */
            let opt = fieldsConfig[key];
            opt['key'] = key;
            opt['order'] = index;
            let field: BaseField<any> = null;
            switch (opt.controlType) {
                case 'text':
                    field = new TextField(opt);
                    break;
                case 'dropdown':
                    field = new DropdownField(opt);
                    break;
                default:
                    break;
            }
            if (field) {
                fields.push(field);
            }
        }
        return fields;
    }

    /**
     * Construct a new {@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     */
    // control(formState: Object, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormControl;

    /**
     * Construct a {@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     */
    // array(controlsConfig: any[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null): FormArray;
}
