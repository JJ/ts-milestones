import { Issue, State } from "../Project/Issue";
import { Milestone, ProjectError } from "../Project";

var data: Issue;
var milestone: Milestone;
const project_name: string = "Foo";

beforeAll(() => {
  data = new Issue(project_name, 1);
  milestone = new Milestone(project_name, 1);
});

test("Issue", () => {
  expect(milestone.get_project_name()).toBe("Foo");
  milestone.new_issue(data);
  expect(data.show_state()).toBe(State.Open);
  data.close();
  expect(data.show_state()).toBe(State.Closed);
});

test("Milestone", () => {
  expect(milestone.get_project_name()).toBe("Foo");
  expect(milestone.get_issues()).toHaveLength(1);
  const new_issue = new Issue("Bar", 33);
  expect(() => {
    milestone.new_issue(new_issue);
  }).toThrow(ProjectError);
});
