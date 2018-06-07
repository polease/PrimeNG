export class StaffType{


    constructor(private description:string,
                private code:string,
                private role:string,
                private active:string,
                private lastModifiedBy:string,
                private lastModifiedDateTime:Date,
            private enableCall:string,
        private enableRestrictCall:string){}

}