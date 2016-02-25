import {Page, Nav, Platform, NavParams} from 'ionic-framework/ionic';
import {DataService} from '../../services/dataService';
import {EmployeeDetailPage} from '../employee-detail/employee-detail';
@Page({
  templateUrl: 'build/pages/employeeindex/employeeindex.html'  
})

export class EmployeeIndexPage{
    employees = [];
    filteredEmployees = [];
    title = 'Employees';
    constructor(private dataService: DataService, private _nav:Nav, private navparams:NavParams){
        let mgrId = navparams.get('id');
        if (mgrId){
            this.title = 'Direct Reports';
            this.employees = dataService.findByManager(mgrId);
            this.filteredEmployees = this.employees;
        }
        else{
            this.employees = dataService.findAll();
            this.filteredEmployees = this.employees;
        }
    }
    
    itemTapped(emp){
        this._nav.push(EmployeeDetailPage,{id:emp.id});
    }
}