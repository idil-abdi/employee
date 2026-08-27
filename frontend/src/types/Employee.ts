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

export interface EmployeeCardProps {
    card: Employee | null;
    open: boolean;
    onClose: () => void;
}