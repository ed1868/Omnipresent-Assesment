import { CreateEmployeeDto } from '@dtos/employee.dto';
import HttpException from '@exceptions/HttpException';
import { Employee } from '@interfaces/employees.interface';
import employeeModel from '@models/employee.model';
import { isEmpty } from '@utils/util';

class EmployeeService {
  public employees = employeeModel;

  public async findAllEmployees(): Promise<Employee[]> {
    const employees: Employee[] = await this.employees.find();
    return employees;
  }

  public async createUser(userData: CreateEmployeeDto): Promise<Employee> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: Employee = await this.employees.findOne({ firstName: userData.firstName });
    if (findUser) throw new HttpException(409, `You're name ${userData.firstName} already exists`);

    console.log('THE USER DATA: ', userData);

    const createUserData: Employee = await this.employees.create({ ...userData });

    return createUserData;
  }
}

export default EmployeeService;
