import { Component,OnInit } from '@angular/core';


interface OwnerData {
  ownerName: string;
  ownerId: string;
  propertyLocation: string;
  createdBy: string;
  createdDate: Date;
  assignedTo: string;
  description: string;
  status: string;
}



@Component({
  selector: 'app-create',
  templateUrl:'./create.component.html',
  styleUrl: './create.component.css'
  
})
export class CreateComponent implements OnInit{
  ownerData: OwnerData = {
    ownerName: '',
    ownerId: '',
    propertyLocation: '',
    createdBy: '',
    createdDate: new Date(),
    assignedTo: '',
    description: '',
    status:''
  };

  ngOnInit() {
    // Replace this with your logic to fetch or set owner data
    this.ownerData = {
      ownerName: 'John Doe',
      ownerId: 'ABC123',
      propertyLocation: '123 Main Street',
      createdBy: 'Jane Doe',
      createdDate: new Date(),
      assignedTo: 'Bob Smith',
      description:" ",
      status:''
    };
  }
}