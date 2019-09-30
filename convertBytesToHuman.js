/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  // your solution goes here
  if (bytes >= 0 && typeof(bytes) == 'number') {
    let returned_string;
    let prefix_byte = ' KMGTPE';
    let i;
    for (i = 0; i < 6 && bytes >= 1024; i++) {
      let rest = bytes % 1024 / 1024;
      bytes = Math.floor(bytes / 1024) + rest;
    }
    let our_prefix;
    if (i > 0) {
      our_prefix = prefix_byte[i];
    }
    else {
      our_prefix = '';
    }
    returned_string = `${bytes.toFixed(3)}`+` ${our_prefix}B`;
    return returned_string;
  }
  return false
}
