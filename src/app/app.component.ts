import { Component } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ProcessShipmentModalComponent } from './process-shipment-modal/process-shipment-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootstrap-modal';

  closeResult: string | undefined;
  modalOptions:NgbModalOptions;

    constructor(
      private modalService: NgbModal
    ){
      this.modalOptions = {
        backdrop:'static',
        backdropClass:'customBackdrop',
        centered: true
      }
    }
  

    open() {
      const modalRef = this.modalService.open(ProcessShipmentModalComponent, { size: 'xl', centered: true });
      modalRef.componentInstance.my_modal_title = 'Process Shipment';
      modalRef.componentInstance.total_value = 500;
      modalRef.componentInstance.pending_value = 500;
      modalRef.componentInstance.button_text = "Add payment"
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
  
}
