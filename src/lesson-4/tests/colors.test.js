import colorize, { colors, changeElColorOnClick } from '../scripts/colors';

describe('colors array', () => {
  test('should contain the expected color values', () => {
    const expectedColors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
    expect(colors).toEqual(expectedColors);
  });
});

describe('function name', () => {
  test('function name must not be changed', () => {
    expect(changeElColorOnClick.name).toBe('changeElColorOnClick');
  });
});

describe('changeElColorOnClick', () => {
  test('should change the color of the element on click', () => {
    // Mock the element for testing
    const mockElement = document.createElement('p');
    const mockEvent = { target: mockElement };

    // Set the initial color of the element
    mockElement.style.color = 'magenta';

    // Call the function to attach the click event listener
    changeElColorOnClick(mockElement);

    // Simulate a click event on the element
    mockElement.dispatchEvent(new Event('click', mockEvent));

    // Expect the color of the element to be the next color in the array
    expect(mockElement.style.color).toBe('cyan');

    mockElement.dispatchEvent(new Event('click', mockEvent));
    expect(mockElement.style.color).toBe('firebrick');

    mockElement.dispatchEvent(new Event('click', mockEvent));
    expect(mockElement.style.color).toBe('springgreen');

    mockElement.dispatchEvent(new Event('click', mockEvent));
    expect(mockElement.style.color).toBe('skyblue');

    // Comes back to the first color in array:
    mockElement.dispatchEvent(new Event('click', mockEvent));
    expect(mockElement.style.color).toBe('magenta');
  });
});

describe('colorize', () => {
  test('check if colorize function gets called appropriately', () => {
    // Mock the element for testing
    const mockElement = document.createElement('p');
    const mockEvent = { target: mockElement };

    colorize([mockElement]);

    mockElement.dispatchEvent(new Event('click', mockEvent));
    expect(mockElement.style.color).toBe('magenta');

    mockElement.dispatchEvent(new Event('click', mockEvent));
    expect(mockElement.style.color).toBe('cyan');
  });
});
