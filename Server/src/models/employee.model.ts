import { model, Schema, Document } from 'mongoose';
import { Employee } from '@interfaces/employees.interface';

const employeeSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  workingHours: String,
  holidayAllowance: String,
  countryOfWork: String,
  country: String,
  socialInsuranceNumber: String,
  numberOfChildren: String,
  maritalStatus: String,
});

const employeeModel = model<Employee & Document>('Employee', employeeSchema);

export default employeeModel;
