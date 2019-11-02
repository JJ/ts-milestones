import { Issue, State } from '../Project';

var data: Issue;

beforeAll(() => {
    data = new Issue("Foo",1);
});



test("all", () => {
    expect(  data.show_state() ).toBe( State.Open );
    data.close();
    expect(  data.show_state() ).toBe( State.Closed );
});
