// n > 0: 1..n; n === 0: 0; n < 0: n..-1 (sum_to_n(-3) === -6).

// O(|n|) time, O(1) space. Constant memory, linear in |n|.
export function sum_to_n_a(n: number): number {
  let sum = 0;
  if (n >= 0) {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  } else {
    for (let i = n; i <= -1; i++) {
      sum += i;
    }
  }
  return sum;
}

// O(1) time, O(1) space. Fastest for large |n|.
export function sum_to_n_b(n: number): number {
  const magnitude = Math.abs(n);
  const triangular = (magnitude * (magnitude + 1)) / 2;
  return n < 0 ? -triangular : triangular;
}

// O(|n|) time, O(|n|) stack. V8 does not tail-call optimize, so large |n| overflows.
export function sum_to_n_c(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n > 0) {
    return n + sum_to_n_c(n - 1);
  }
  return n + sum_to_n_c(n + 1);
}

function assertEqual(label: string, actual: number, expected: number): void {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${expected}, got ${actual}`);
  }
  console.log(`${label} === ${actual}`);
}

if (require.main === module) {
  const cases: Array<[number, number]> = [
    [5, 15],
    [1, 1],
    [0, 0],
    [-1, -1],
    [-3, -6],
  ];
  const implementations = [sum_to_n_a, sum_to_n_b, sum_to_n_c];

  for (const [n, expected] of cases) {
    for (const fn of implementations) {
      assertEqual(`${fn.name}(${n})`, fn(n), expected);
    }
  }
}
