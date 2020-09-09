import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizePhone'
})
export class SanitizePhonePipe implements PipeTransform {
  // Created with command: ng generate pipe sanitizePhone
  transform(value: string): string {
    return value.replace(/[^+0-9]/g, '');
  }

}
