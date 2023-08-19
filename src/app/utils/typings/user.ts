export interface User {
    Id: number,
    Name: string,
    Email: string,
    Token: string
}
export interface AuthApiResponse {
    code?: number,
    message: string,
    data : User | null
}