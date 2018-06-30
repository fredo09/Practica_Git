import { Component, OnInit } from '@angular/core';

import { RolesService } from '../../servicios/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles:any;
  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.roles=this.rolesService.getRoles();
  }

}
