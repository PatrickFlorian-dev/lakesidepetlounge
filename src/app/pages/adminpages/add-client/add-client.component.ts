import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NgSignaturePadOptions, SignaturePadComponent } from '@almothafar/angular-signature-pad';

@Component({
  selector: 'ngx-add-client',
  styleUrls: ['./add-client.component.scss'],
  templateUrl: './add-client.component.html',
})

export class AddClientComponent {

    addClientForm: FormGroup;

    @ViewChild('signature')

    public signaturePad: SignaturePadComponent;

    public signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
        minWidth: 5,
        canvasWidth: 500,
        canvasHeight: 300
    };
   
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
        agreementSignature: new FormControl(''),
        pets: this.fb.array([]) ,
      })

    }

    ngAfterViewInit() {
        // this.signaturePad is now available
        this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    }

    pets(): FormArray {
      return this.addClientForm.get("pets") as FormArray
    }
   
    newPet(): FormGroup {
      return this.fb.group({
        petName: '',
        petNickname: '',
        petDob: '',
        petWeight: '',
        petSex: '',
        petNueteredOrSprayed: '',
        petBreed: '',
        petAllergiesOrMedicalCondition: '',
        petAggresive: '',
        petAllergiesMedicationComments: '',
        petGeneralComments: '',
        petFeedingInstructions: '',
        petOwnsToysOrBlankets: '',
      })
    }
   
    addPet() {
      this.pets().push(this.newPet());
    }
   
    removePet(petIndex:number) {
      this.pets().removeAt(petIndex);
    }

    drawComplete(event: MouseEvent | Touch) {
        // will be notified of szimek/signature_pad's onEnd event
        // console.log('Completed drawing', event);
        // console.log(this.signaturePad.toDataURL());
        this.addClientForm.get("agreementSignature").setValue(this.signaturePad.toDataURL());
    }

    drawStart(event: MouseEvent | Touch) {
        // will be notified of szimek/signature_pad's onBegin event
        // console.log('Start drawing', event);
    }

    clearSignature() {
        this.signaturePad.clear();
    }

    addClient() {
        console.log(this.addClientForm.value);
    }

    onSubmit() {
      console.log(this.addClientForm.value);
    }

}