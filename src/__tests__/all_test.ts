import { Issue, State } from '../Project';

var data: Issue;

beforeAll(() => {
    data = new Issue("Foo",1);
});



test("all", () => {
    console.log( data.show_state() );
    expect(  data.show_state() ).toBe( State.Open );
    data.close();
    console.log( data.show_state() );
    expect(  data.show_state() ).toBe( State.Closed );
});
