const sum = require('../main/sum');
const hello = require('../main/hello');
const Clazz = require('../main/classUsage');

test('1 + 2 は 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('5 + 8 は 13', () => {
    expect(sum(5, 8)).toBe(13);
});

test('-30 + -21 は -51', () => {
    expect(sum(-30, -21)).toBe(-51);
});

test('class コンストラクタ', () => {
    let clazz = new Clazz(1, 2);
    expect(clazz.value).toBe(3);
}) 

test('class getValue', () => {
    let clazz = new Clazz(1, 2);
    expect(clazz.getValue()).toBe(3);
}) 

test('helloノテスト', () => {
    expect(hello('hasegawa')).toBe('hello');
});

test('helloノテスト2', () => {
    expect(hello('boooo')).toBe('boy');
});

test('helloノテスト3', () => {
    expect(hello('shimohama')).toBe('yeah');
});

test('helloノテスト4', () => {
    expect(hello('someya')).toBe('yeah');
});
