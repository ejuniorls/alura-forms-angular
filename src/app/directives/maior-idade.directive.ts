import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
    selector: '[appMaiorIdadeValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: MaiorIdadeDirective,
        multi: true
    }]
})
export class MaiorIdadeDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): ValidationErrors | null {
        let dataNascimento = control.value;
        let anoNascimento = new Date(dataNascimento).getFullYear();
        let anoNascimentoMais18 = anoNascimento + 18;
        let anoAtual = new Date().getFullYear();

        let maioridade = anoNascimentoMais18 <= anoAtual;

        return maioridade ? null : {'appMaiorIdadeValidator': true};
    }

}
