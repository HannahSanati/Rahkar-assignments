import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceData } from '../user.service';
import { TaskItemComponent } from "../task-item/task-item.component";
import { RouterModule } from '@angular/router';
import { Itaskdata } from '../typings/taskesgetdata.model';
import { Enums } from '../../enum/enum';

@Component({
    selector: 'app-task-form',
    standalone: true,
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.scss',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, TaskItemComponent,RouterModule]
})
export class TaskFormComponent {
fb=inject(FormBuilder)
serviceData=inject(ServiceData)

form:FormGroup=this.fb.group({
  title:['',Validators.required]
})
defult=Enums.submit
ngOnInit(): void {
  this.getdata()
}
items:Itaskdata[]=[]
submitId!:number
getdata(){
  this.serviceData.getdata().subscribe((data)=>{
    this.items=data
    
  })
}
  onsubmit(){
    if (this.defult==Enums.submit) {
      console.log(this.form.value);
    this.serviceData.postdata(this.form.value).subscribe({next:(data)=>{
      console.log(data);
      this.getdata()
    }})
   
  }
  else if (this.defult==Enums.update) {
    this.serviceData.updatedata(this.form.value,this.submitId).subscribe({next:(data)=>{
      console.log(data);
      this.getdata()
      this.defult=Enums.submit
    }})
    
  }
  this.form.reset()
    }
    
  ondone(itemsId:number){
    this.serviceData.donedata(itemsId).subscribe((data)=>{
      console.log(data);
      this.getdata()
      })
   
    console.log(itemsId); 
  }

  ondeleted(itemsId:number){
    this.serviceData.deletdata(itemsId).subscribe((data)=>{
      console.log(data);
      this.getdata()
    })
  }
  onedited(itemsId:number){
    this.serviceData.editedata(itemsId).subscribe((data)=>{
      console.log("edit",data[0].title);
      this.form.get('title')?.setValue(data[0].title)
      this.defult=Enums.update
      this.submitId=itemsId
    })
    
  }
}