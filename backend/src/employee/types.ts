export type CreateEmployeePayload = {
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