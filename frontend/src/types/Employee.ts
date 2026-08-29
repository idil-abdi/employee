export interface Employee {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    address: string,
    dateOfBirth:string | Date,
    hireDate:string | Date,
    department: string,
    description: string
}

export interface CreateEmployeeDto {
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    address: string,
    dateOfBirth:string | Date,
    hireDate:string | Date,
    department: string,
    description: string
}

export interface EmployeeCardProps {
    card: Employee | null;
    open: boolean;
    onClose: () => void;
}

export interface UpdateEmployeeDto {
    firstName?: string,
    lastName?: string,
    email?: string,
    mobileNumber?: string,
    address?: string,
    dateOfBirth?:string | Date,
    hireDate?:string | Date,
    department?: string,
    description?: string
}
export interface UpdateEmployeeVariable {
    id: string,
    data: UpdateEmployeeDto,
    
}

export interface EmployeeFormProps {
  employeeId?: string;
  onSuccess?: () => void;
}

export interface DeleteResponse {
  success: boolean;
  message: string;
}

export interface DeleteWarningDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  isLoading?: boolean;
}