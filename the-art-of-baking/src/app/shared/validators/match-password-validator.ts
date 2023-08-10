import { FormGroup, ValidatorFn } from "@angular/forms";



export function machPasswordValidator(passCtrlOne: string, passCtrlTwo: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const passCtrl1 = group.get(passCtrlOne);
        const passCtrl2 = group.get(passCtrlTwo);

        return passCtrl1?.value === passCtrl2?.value
            ? null
            : { machPasswordValidator: true };
    };
}