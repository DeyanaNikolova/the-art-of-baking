
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormGroup } from '@angular/forms';


@Directive({
    selector: '[mustMatch]',
    providers: [{
        provide: NG_VALIDATORS, 
        useExisting: MustMatchDirective,
        multi: true,
}]
})
export class MustMatchDirective implements Validator {



    validate(control: AbstractControl): { [key: string]: any } | null {
        const v = control.value;
        // const e = control.root.get()
        // if (e && v !== e.value){
        //  { return { validateEqual: false } }
        // }

        return null;
    }
}

