import { User } from "./user";

export class Task {

    constructor(
      public id: number,
      public name: string,
      public collab? : User,
      public startDate? : Date,
      public actualStartDate? : Date,
      public endDate? : Date,
      public actualEndDate? : Date,
      public description? : string,
      public estimatedWorkload? : number,
      public usedWorkload? : number,
      public remainingWorkload? : number,
      public progress? : number,
      public listTaskPredecessor? : Task[],
      public listTaskSuccessor? : Task[],
      public listTaskChild? : Task[],
    ) {}
  }