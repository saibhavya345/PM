import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




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
  constructor(private http: HttpClient) {}
  ngOnInit() {
    // Replace this with your logic to fetch or set owner data
   
    };
    onSubmit() {
     
  
      this.http.post<any>('http://localhost:8080/api/owners', this.ownerData)
        .subscribe(response => {
          console.log('Data stored successfully:', response);
          // Handle success, e.g., clear form fields, display success message, redirect
        }, error => {
          console.error('Error storing data:', error);
          // Handle error, e.g., display error message
        });
  }
}
