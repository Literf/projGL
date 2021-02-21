export class User {

    constructor(
        public id: number,
        public firstName: string,
        public lastName : string,
        public email : string,
        public position : string, //fonction de l'employé
        public listStatus : string[],
        public startDate : Date,
        public birthdate? : Date,
        public birthplace? : string,
        public gender? : string,
        public department? : string, //service de l'entreprise
        public adress? : string,
        public phone? : string,
        public endDate? : Date,
    ) {}
  }