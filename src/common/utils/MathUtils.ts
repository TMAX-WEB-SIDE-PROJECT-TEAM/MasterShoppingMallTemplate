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
