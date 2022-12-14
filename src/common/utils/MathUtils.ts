/**
 * start ~ end 정수들 순서대로 반환. (start, end 둘 다 포함)
 * ex. start = 3, limit = 8 -> [3, 4, 5, 6, 7, 8]
 * ex. start = 8, limit = 3 -> [8, 7, 6, 5, 4, 3]
 */
export function range(start: number, end: number) {
  const results = [];

  if (start <= end) {
    for (let i = start; i <= end; i++) {
      results.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      results.push(i);
    }
  }

  return results;
}

/**
 * 주어진 숫자 앞에 길이만큼 `head`를 붙임.
 */
export function formatInt(value: number, length: number, head = "0") {
  return `${value}`.padStart(length, head);
}

/**
 * 주어진 날짜를 포맷팅하기 쉬운 문자열들로 변환.
 */
export function dateToStrings(date: Date) {
  return {
    year: formatInt(date.getFullYear(), 4),
    month: formatInt(date.getMonth() + 1, 2),
    day: formatInt(date.getDate(), 2),
  };
}
