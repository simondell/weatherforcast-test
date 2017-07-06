import add from './generic_module';

test('it should add two numbers', () => {
	expect( add(2,2) ).toEqual(4);
	expect( add(2.1,2) ).toEqual(4.1);
	expect( add(0.1,0.2) ).toBeCloseTo(0.3);
});