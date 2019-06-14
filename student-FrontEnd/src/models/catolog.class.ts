export class catalog {
    public id : string;
    public startYear : number;
    public endYear : number;
    public note : string;
    public status : number;

    constructor(id : string, startYear : number, endYear : number , note : string, status : number ){
        
        this.id = id;
        this.startYear = startYear;
        this.endYear = endYear;
        this.note = note;
        this.status = status;
    }
}