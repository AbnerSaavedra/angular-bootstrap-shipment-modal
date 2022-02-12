import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-process-shipment-modal',
  templateUrl: './process-shipment-modal.component.html',
  styleUrls: ['./process-shipment-modal.component.css']
})
export class ProcessShipmentModalComponent implements OnInit {

  @Input() my_modal_title: any;
  @Input() my_modal_content: any;
  @Input() total_value: any;
  @Input() pending_value: any;
  @Input() button_text: any;

  formData: any
  paymentType: any
  sumValuePayments: any
  value: any
  idForm: any
  pagos:any[] = []
  pago: any = {}
  id:any
  idPayment: any

  constructor(public activeModal: NgbActiveModal) {

   }

  ngOnInit(): void {
    this.formData = new FormGroup({
      id: new FormControl(),
      paymentType : new FormControl(),
      value : new FormControl()
    });

    this.sumValuePayments = 0
    
    this.id = 1

    this.formData.get("id").setValue(this.id)
  }

  onClickSubmit(data: { id: any; paymentType: any; value: any}) {

    console.log("Data:"+JSON.stringify(data))

    if(this.button_text == "Save"){

      console.log("Save")

      let updateItem = this.pagos.find(this.findIndexToUpdate, data.id);

      let index = this.pagos.indexOf(updateItem);

      this.pagos[index] = data

      this.sumValuePayments += data.value
      console.log("Pending value: "+this.pending_value)
      console.log("Sum value payments: "+this.sumValuePayments)
      this.pending_value = this.total_value - this.sumValuePayments;

      this.button_text = "Add payment"

    }else{

        console.log("Add payment")

        this.idPayment = this.id

        this.paymentType = data.paymentType;
        this.value = data.value
        this.sumValuePayments += data.value
        console.log("Pending value: "+this.pending_value)
        console.log("Sum value payments: "+this.sumValuePayments)
        this.pending_value = this.total_value - this.sumValuePayments;

        this.pago = {
          id: this.idPayment,
          paymentType: this.paymentType,
          value: this.value
        }
        this.pagos.push(this.pago)

        this.pago = {}

        this.id++
    }

    this.formData.get("paymentType").setValue("0")
    this.formData.get("value").setValue(0)
    this.formData.get("id").setValue(0)

    console.log("Pagos: "+JSON.stringify(this.pagos))

  }

  findIndexToUpdate(newItem: any) { 

    return newItem.id === this;
  }

  deleteRow(pago: any){

    console.log("Pago: "+ JSON.stringify(pago))

    const index = this.pagos.indexOf(pago);
    this.pagos.splice(index, 1);

    this.pending_value = this.pending_value + pago.value
}

editRow(pago: any){

  console.log("Edit row: "+JSON.stringify(pago))

  this.sumValuePayments -= pago.value

  this.formData.get("paymentType").setValue(pago.paymentType)
  this.formData.get("value").setValue(pago.value)
  this.formData.get("id").setValue(pago.id)

  this.button_text = "Save"
  
}

saveAllData(){
  console.log("Save all data")
}

}
