import { Injectable } from '@angular/core';
import { HttpBaseService } from '../shared/httpbase.service';

@Injectable()
export class PatientService {
    url = "public/books";
    constructor( public httpbaseservice: HttpBaseService) { }
}