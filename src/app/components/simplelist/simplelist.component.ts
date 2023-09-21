import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-simplelist',
  templateUrl: './simplelist.component.html',
  styleUrls: ['./simplelist.component.css']
})
export class SimplelistComponent {
  
    users: any[] = [];
  
    constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.getUsers().subscribe((data:any)=>{  
        console.log(data);  
        this.users = data;  
      })  
    }
}
