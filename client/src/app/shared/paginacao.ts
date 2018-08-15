import { BaseModel } from "./basemodel";

export class Paginacao<T extends BaseModel> {
    content: Array<T>;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    sort: string;
    totalElements: number;
    totalPages: number;
}
