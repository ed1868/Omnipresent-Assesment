import { NextFunction, Request, Response } from 'express';
import { CreateEmployeeDto } from '@dtos/employee.dto';
import { Employee } from '@interfaces/employees.interface';
import employeeService from '@services/employees.service';
import Employees from '@/seeds/employeList';
import axios from 'axios';
import { Console } from 'console';
import EmployeeService from '@services/employees.service';

class EmployeeController {
  public employeeService = new employeeService();

  public getEmployees = async (req: Request, res: Response, next: NextFunction) => {
    const promises = [];

    Employees.forEach(employee => {
      const promise = new Promise((resolve, reject) => {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${employee.country}`).then(payload => {
          employee.country = payload.data.name;
          employee.countryCurrency = payload.data.currencies;
          employee.countryLanguages = payload.data.countryLanguages;
          employee.countryTimeZones = payload.data.timezones;
          if (payload.data.region == 'Asia' || payload.data.region == 'Europe') {
            const newDob = employee.dateOfBirth.replace(/\//g, '');
            employee.identifier = `${employee.firstName}${employee.lastName}${newDob}`;
          }
          resolve({
            employee: employee,
          });
        });
      }).catch(err => {
        if (err) {
          console.log('ERROR : ', err);
        }
      });
      promises.push(promise);
    });
    Promise.all(promises).then(vals => {
      res.status(200).json({ data: vals, message: 'findAll' });
    });
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateEmployeeDto = req.body;
      const createUserData: Employee = await this.employeeService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
  employee: any;
}

export default EmployeeController;
function then(arg0: (result: any) => void) {
  throw new Error('Function not implemented.');
}
