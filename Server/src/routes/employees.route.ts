import { Router } from 'express';
import EmployeeController from '@controllers/employees.controller';
import { CreateEmployeeDto } from '@dtos/employee.dto';
import Route from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class EmployeeRoute implements Route {
  public path = '/api/employee';
  public router = Router();
  public employeeController = new EmployeeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.employeeController.getEmployees);
    // this.router.get(`${this.path}/`, this.usersController.getUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreateEmployeeDto, 'body'), this.employeeController.createUser);
    // this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default EmployeeRoute;
