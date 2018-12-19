import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reverse'
})
export class ReversePipe implements PipeTransform {
	transform(value: any, args?: any): any {
		console.log(value);
		return value.slice().reverse();
	}
}
