import { Component } from '@angular/core';

import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

 nameprojects = ['IOT', 'Mobile applicaton',
            'Web Tech', 'Game'];

  model = new Hero(null, '', '','', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, '','', '','');
  }
  showFormControls(form: any) {
    return form && form.controls['pathimg'] &&
    form.controls['pathimg'].value; 
  }

}
