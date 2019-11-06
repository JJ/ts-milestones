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

export class ProjectError extends Error {
  constructor(public m?: string) {
    super(m);
    Object.setPrototypeOf(this, ProjectError.prototype);
    this.name = "ProjectError";
  }
}

export class Milestone {
  private project_name: string;
  private id: number;
  private issues: Issue[] = [];

  constructor(project_name: string, id: number) {
    this.project_name = project_name;
    this.id = id;
  }

  new_issue(issue: Issue) {
    if (issue.get_project_name() != this.project_name) {
      throw new ProjectError("when adding a new issue");
    } else {
      this.issues.push(issue);
    }
  }

  get_project_name() {
    return this.project_name;
  }
  get_issues() {
    return this.issues;
  }
}
