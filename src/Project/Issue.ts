export enum State {
  Open,
  Closed
}

export class Issue {
  private state: State = State.Open;
  private project_name: string;
  private id: number;

  constructor(project_name: string, id: number) {
    this.project_name = project_name;
    this.id = id;
  }

  show_state() {
    return this.state;
  }

  close() {
    this.state = State.Closed;
  }

  get_project_name() {
    return this.project_name;
  }
}
