import {execute} from '../../src/services/dummy-service.js';
import {helper} from '../../src/services/helper-service.js';
jest.mock('../../src/services/helper-service.js');

test('result is true and return learning js', () => {
    helper.mockReturnValue(true); 
    const result = execute();
    expect(result).toBe('Learning JS'); 
});

test('result is false and return learning ReactJS', () => {
    helper.mockReturnValue(false); 
    const result = execute();
    expect(result).toBe('Learning ReactJS'); 
});
 