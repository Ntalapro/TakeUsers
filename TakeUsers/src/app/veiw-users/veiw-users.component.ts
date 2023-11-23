import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-veiw-users',
  templateUrl: './veiw-users.component.html',
  styleUrls: ['./veiw-users.component.css']
})
export class VeiwUsersComponent {
  
  users: any[] = [];

  constructor(private apiService: ApiServiceService) {
    
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}