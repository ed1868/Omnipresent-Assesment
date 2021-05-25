import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import request from 'supertest';
import App from '@/app';
import { CreateEmployeeDto } from '@dtos/employee.dto';
import EmployeeRoute from '@routes/employees.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Employees', () => {
  describe('[GET] /api/employees', () => {
    it('Get a modified list of users according to country API response', async () => {
      const employeeRoute = new EmployeeRoute();
      const employees = employeeRoute.employeeController.employeeService.employees;

      employees.find = jest.fn().mockReturnValue([
        {
          firstName: 'Roy',
          lastName: 'Testerton',
          dateOfBirth: '19/02/1990',
          jobTitle: 'Software developer',
          company: 'Test co',
          country: 'US',
          countryCurrency: [],
          countryLanguages: [],
          countryTimeZones: [],
          identifier: ' ',
        },
        {
          firstName: 'Lisa',
          lastName: 'Testora',
          dateOfBirth: '11/07/1984',
          jobTitle: 'CTO',
          company: 'Test co',
          country: 'GBR',
          countryCurrency: [],
          countryLanguages: [],
          countryTimeZones: [],
          identifier: ' ',
        },
        {
          firstName: 'Simon',
          lastName: 'McTester',
          dateOfBirth: '01/11/1987',
          jobTitle: 'Product manager',
          company: 'Mock industries',
          country: 'IND',
          countryCurrency: [],
          countryLanguages: [],
          countryTimeZones: [],
          identifier: ' ',
        },
        {
          firstName: 'Selina',
          lastName: 'Testo',
          dateOfBirth: '23/11/1972',
          jobTitle: 'Software developer',
          company: 'Mock industries',
          country: 'IND',
          countryCurrency: [],
          countryLanguages: [],
          countryTimeZones: [],
          identifier: ' ',
        },
        {
          firstName: 'Tim',
          lastName: 'Mockman',
          dateOfBirth: '12/11/1972',
          jobTitle: 'Software developer',
          company: 'Mock industries',
          country: 'IND',
          countryCurrency: [],
          countryLanguages: [],
          countryTimeZones: [],
          identifier: ' ',
        },
        {
          firstName: 'Melissa',
          lastName: 'Mocker',
          dateOfBirth: '10/01/1982',
          jobTitle: 'Software developer',
          company: 'Mock industries',
          country: 'US',
          countryCurrency: [],
          countryLanguages: [],
          countryTimeZones: [],
          identifier: ' ',
        },
      ]);

      (mongoose as any).connect = jest.fn();
      const app = new App([employeeRoute]);
      return request(app.getServer()).get(`${employeeRoute.path}`).expect(200);
    });
  });

  describe('[POST] /api/employees', () => {
    it('response Create an Employee through the FrontEnd', async () => {
      const userData: CreateEmployeeDto = {
        firstName: 'Eddie',
        lastName: 'Ruiz',
        dateOfBirth: '05/20/1993',
        workingHours: '40h',
        holidayAllowance: '35',
        countryOfWork: 'USA',
        country: 'USA',
        socialInsuranceNumber: '8923794793',
        numberOfChildren: '0',
        maritalStatus: 'Single',
      };

      const employeeRoute = new EmployeeRoute();
      const employees = employeeRoute.employeeController.employeeService.employees;

      employees.findOne = jest.fn().mockReturnValue(null);
      employees.create = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        firstName: userData.firstName,
        lastName: userData.lastName,
        dateOfBirth: userData.dateOfBirth,
        workingHours: userData.workingHours,
        holidayAllowance: userData.holidayAllowance,
        countryOfWork: userData.countryOfWork,
        country: userData.country,
        socialInsuranceNumber: userData.socialInsuranceNumber,
        numberOfChildren: userData.numberOfChildren,
        maritalStatus: userData.maritalStatus,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([employeeRoute]);
      return request(app.getServer()).post(`${employeeRoute.path}`).send(userData).expect(201);
    });
  });
});
