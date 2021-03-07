import { Issue } from "./Project/Issue";

export class ProjectError extends Error {
  constructor(public m?: string) {
    super(m);
    Object.setPrototypeOf(this, ProjectError.prototype);
    this.name = "ProjectError";
  }
}
