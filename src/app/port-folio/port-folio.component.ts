import { Component } from '@angular/core';
import { DetailsService } from '../details.service';
import { details } from './details';

@Component({
  selector: 'app-port-folio',
  templateUrl: './port-folio.component.html',
  styleUrls: ['./port-folio.component.scss'],
})
export class PortFolioComponent {

data ={} as details
Object:any
value:any
  constructor(private details:DetailsService){
    details.getdata().subscribe(data=>{
      console.warn(data);
      this.Object = data;
      this.data.Address=this.Object.Address;
      this.data.Education = this.Object.Education;
      this.data.Language = this.Object.Language;
      this.data.Location = this.Object.Location;
      this.data.Skills = this.Object.Skills;
      this.data.mailId = this.Object.mailId;
      this.data.Professional_Traits = this.Object.Professional_Traits;
      this.data.name = this.Object.name;
      this.data.mobileNumber = this.Object.mobileNumber;
      this.data.profile = this.Object.profile;
      this.data.DateOfBirth= this.Object.DateOfBirth;
      this.data.workExperiance=this.Object.workExperiance;
    });
  }
  
}
