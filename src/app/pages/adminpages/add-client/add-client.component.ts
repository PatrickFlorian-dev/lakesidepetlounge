import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'ngx-add-client',
  styleUrls: ['./add-client.component.scss'],
  templateUrl: './add-client.component.html',
})

export class AddClientComponent {

    addClientForm: FormGroup;
   
    constructor(private fb:FormBuilder) {
   
      this.addClientForm=this.fb.group({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        address2: new FormControl(''),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required),
        bestContactNumber: new FormControl(''),
        textUpdates: new FormControl(''),
        pets: this.fb.array([]) ,
      })
    }
   
    pets(): FormArray {
      return this.addClientForm.get("pets") as FormArray
    }
   
    newPet(): FormGroup {
      return this.fb.group({
        petName: '',
      })
    }
   
    addPet() {
      this.pets().push(this.newPet());
    }
   
    removePet(petIndex:number) {
      this.pets().removeAt(petIndex);
    }
   
    onSubmit() {
      console.log(this.addClientForm.value);
    }

}

export class country {
    id: string;
    name: string;
   
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  }