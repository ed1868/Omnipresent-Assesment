import { IsString, IsArray, isString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  public socialInsuranceNumber: string;
  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public dateOfBirth: string;
  @IsString()
  public holidayAllowance: string;
  @IsString()
  public maritalStatus: string;
  @IsString()
  public country: string;
  @IsString()
  public countryOfWork: string;
  @IsString()
  public numberOfChildren: string;
  @IsString()
  public workingHours: string;
}
