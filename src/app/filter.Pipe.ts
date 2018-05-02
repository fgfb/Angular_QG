import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(heroes: any): any {
        return heroes.filter((item) => item.categories.name.toLowerCase().startsWith('d'));
    }
}