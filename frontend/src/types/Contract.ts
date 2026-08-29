export interface Contract {
    contractType: string, // part time, fullt ime or contract
    title: string,
    salary:number
    startDate: string | Date,
    endDate?: string | Date,
    weeklyHours: number,
    employeeId: string,
}