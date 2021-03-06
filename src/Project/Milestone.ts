import { Issue } from "./Issue";
import { ProjectError } from "../Project";

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
