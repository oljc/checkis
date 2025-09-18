function getCharByteCount(char: string) {
  const charCode = char.charCodeAt(0);
  if (charCode > 255) {
    return 3;
  }

  return 1;
}

export function substrByBytes(str: string, start: number, len: number): string {
  let resultStr = '';
  let bytesCount = 0;
  const strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    bytesCount += getCharByteCount(str.charAt(i));
    if (bytesCount > start + len) {
      break;
    }
    if (bytesCount > start) {
      resultStr += str.charAt(i);
    }
  }
  return resultStr;
}

export function getSlicedStrByByteLength(str: string, start: number, length: number): string {
  const slicedStr = str.slice(start);
  return substrByBytes(slicedStr, 0, length);
}
