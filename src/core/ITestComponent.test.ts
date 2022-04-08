import TestComponent from './TestComponent';

test('when test() is called with "Hello, the return value should be "Hello World"', () => {
    const testComponent: TestComponent = new TestComponent();
    document.body.appendChild(testComponent);
    expect(testComponent.test('Hello')).toBe('Hello World');
    testComponent.remove();
});

test('when testComponent.twenty = 20, testComponent.twenty should be 20', () => {
    const testComponent: TestComponent = new TestComponent();
    document.body.appendChild(testComponent);
    testComponent.twenty = 20;
    expect(testComponent.twenty).toBe(20);
    testComponent.remove();
});

test('when testComponent.nums = "two", testComponent.nums should be "two"', () => {
    const testComponent: TestComponent = new TestComponent();
    document.body.appendChild(testComponent);
    console.log(window.innerWidth, window.innerHeight, testComponent.getBoundingClientRect(), testComponent.width, testComponent.height);
    testComponent.nums = 'two';
    expect(testComponent.nums).toBe('two');
    testComponent.remove();
});