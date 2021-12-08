import {Input, Component} from '@angular/core';
     
@Component({
    selector: 'child2-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
			  <p>Возраст пользователя: {{userAge}}</p>`,
})
export class Child2Component{ 
	@Input() userName: string = "";
	@Input() userAge: number = 0;
}