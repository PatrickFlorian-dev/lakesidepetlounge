import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-client',
  styleUrls: ['./add-client.component.scss'],
  templateUrl: './add-client.component.html',
})

export class AddClientComponent {

    addClientForm = new FormGroup({
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
    });

    onSubmit() {
        console.warn(this.addClientForm.value);
    }

}
