import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

    static noSpacesAllowed(ctrl: AbstractControl) : ValidationErrors {
        if((ctrl.value as String).indexOf(' ')!==-1)
        {
            return {
            noSpacesAllowed: true    
            }
        }
        else return null;
    }

}