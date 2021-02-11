import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IChannels, IDirectDM } from 'src/interfaces/data.interfaces';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  closeResult = ''
  isChannelsVisible: boolean = true;
  isDmVisible: boolean = true;
  channelForm: FormGroup = this.formBuilder.group({
    channel: new FormControl(),
    type: new FormControl()
  });
  directForm: FormGroup = this.formBuilder.group({
    name: new FormControl()
  });
  @Input() channels = Array<IChannels>();
  @Input() directDM = Array<IDirectDM>();
  value: boolean = false;
  value1: boolean = false;
  updateChannel = new EventEmitter<IChannels[]>();
  updateDM = new EventEmitter<IDirectDM[]>();




  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addTochannel() {
    let toLoadChannel:IChannels = {
      id: this.channels.length+1,
      isRead: true,
      membersID :[],
      messagesID:[],
      name: this.channelForm.value.channel,
      type: this.channelForm.value.type
    };
    this.channels.push(toLoadChannel);
    this.modalService.dismissAll();
    //this.channelForm.controls.channel = new FormControl();
    this.channelForm.controls.type = new FormControl();
    this.updateChannel.emit(this.channels);
  }

  addTodirect() {
    let toLoadDM:IDirectDM = {
      id: this.directDM.length+1,
      isRead: true,
      messagesID: [],
      name: this.directForm.value.name
    };
    this.directDM.push(toLoadDM);
    this.modalService.dismissAll();
    //this.directForm.controls.name = new FormControl();
    this.updateDM.emit(this.directDM);
  }
}
