import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'time'
})
export class TimePipe implements PipeTransform {
	transform(value: any, args?: any): string {
		return new Date(value).toLocaleString();
	}

}
