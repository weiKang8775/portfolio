
export class Project {
  private static id = 1;
  public id: number;
  constructor(public name: string, public description: string, public tags: string[], public imgURL: string, public gitHubURL: string, public url?: string ) {
    this.id = Project.id++;
  }
}