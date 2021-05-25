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
    const newinfo = [];
    let counter = 0;

    Employees.forEach(async employee => {
      console.log(`CURRENT EMPLOYEE : ${employee.firstName}  COUNTRY CODE IS :  ${employee.country} `);

      const response = await axios
        .get(`https://restcountries.eu/rest/v2/alpha/${employee.country}`)
        .then(payload => {
          // console.log(payload.data);
          if (payload.data) {
            counter += 1;
            employee.country = payload.data.name;
            employee.countryCurrency = payload.data.currencies;
            employee.countryLanguages = payload.data.countryLanguages;
            employee.countryTimeZones = payload.data.timezones;
            if (payload.data.region == 'Asia' || payload.data.region == 'Europe') {
              const newDob = employee.dateOfBirth.replace(/\//g, '');
              employee.identifier = `${employee.firstName}${employee.lastName}${newDob}`;
            }
            newinfo.push(employee);
            return newinfo;
          }
        })
        .catch(err => {
          if (err) {
            console.log('ERROR : ', err);
          }
        });

      if (counter == Employees.length) {
        res.status(200).json({ data: newinfo, message: 'findAll' });
      }

      return employee;
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

  // public updateUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const userData: CreateUserDto = req.body;
  //     const updateUserData: User = await this.userService.updateUser(userId, userData);

  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default EmployeeController;
function then(arg0: (result: any) => void) {
  throw new Error('Function not implemented.');
}
