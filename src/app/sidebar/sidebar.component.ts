import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  closeResult=''
  isChannelsVisible:boolean = true;
  isDmVisible:boolean = true;
  channelForm:FormGroup = this.formBuilder.group({
    channel: new FormControl(),
    type: new FormControl()
  });
  directForm:FormGroup = this.formBuilder.group({
    name: new FormControl()
  });
  Channels=[{id:1,name:"Channel 1",type:"private"},
  {id:2,name:"Channel 2",type:"public"},
  {id:3,name:"Channel 3",type:"public"},
  {id:4,name:"Channel 4",type:"public"},
  {id:5,name:"Channel 5",type:"public"},
  {id:6,name:"Channel 6",type:"public"}];

  Direct=[{id:1,name:"Person 1"},{id:2,name:"Person 2"},{id:2,name:"Person 2"},{id:2,name:"Person 2"},{id:2,name:"Person 2"},{id:2,name:"Person 2"}];
  channelsd=[]
  Directd=[]
  value:boolean=false;
  value1:boolean=false;
​
  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { }
​
  ngOnInit(): void {
  }
  ​open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  addTochannel(){
    console.log("adding Channel..!");
  }
​   
  addTodirect(){
    console.log("adding DM..!");
  }
}