/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-123)).toBe(false);
  expect(convertBytesToHuman('sdf')).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman(false)).toBe(false);
  expect(convertBytesToHuman(true)).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false)
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123)).toBe('123.000 B');
  expect(convertBytesToHuman(0)).toBe('0.000 B');
  expect(convertBytesToHuman(1024)).toBe('1.000 KB');
  expect(convertBytesToHuman(546345)).toBe('533.540 KB');
  expect(convertBytesToHuman(5463450)).toBe('5.210 MB');
  expect(convertBytesToHuman(5463450435)).toBe('5.088 GB');
  expect(convertBytesToHuman(5463450435987)).toBe('4.969 TB');
  expect(convertBytesToHuman(5463450435987123)).toBe('4.853 PB');
  expect(convertBytesToHuman(5463450435987123044)).toBe('4.739 EB');
  // ...
});

// другая группа проверок
