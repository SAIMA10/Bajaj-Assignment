import { addNumbers } from "../components/hooks/pages/mathUtil";

test('Add Numbers', () => {
    expect(addNumbers(1, 2)).toEqual(3);
    expect(addNumbers(1, 2)).not.toBeDefined(3);
});