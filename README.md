# 99Tech Code Challenge — Problem 4

Three implementations of `sum_to_n(n)`: the sum of integers up to `n`.

## Convention

- `n > 0`: `1 + 2 + ... + n` — `sum_to_n(5) === 15`
- `n = 0`: `0`
- `n < 0`: `n + (n + 1) + ... + (-1)` — `sum_to_n(-3) === -6`

All three functions follow this convention.

| Function | Approach | Time | Space |
| --- | --- | --- | --- |
| `sum_to_n_a` | loop | O(\|n\|) | O(1) |
| `sum_to_n_b` | closed form `sign(n) * \|n\| * (\|n\| + 1) / 2` | O(1) | O(1) |
| `sum_to_n_c` | recursion | O(\|n\|) | O(\|n\|) stack |

`sum_to_n_c` will stack-overflow for a large `|n|` because V8 does not tail-call optimize.

## Run

```bash
npm install
npx ts-node src/sum_to_n.ts
```

No separate compile step. The script prints a sanity check and throws if any case disagrees.

## Example output

```
sum_to_n_a(5) === 15
sum_to_n_b(5) === 15
sum_to_n_c(5) === 15
sum_to_n_a(1) === 1
sum_to_n_b(1) === 1
sum_to_n_c(1) === 1
sum_to_n_a(0) === 0
sum_to_n_b(0) === 0
sum_to_n_c(0) === 0
sum_to_n_a(-1) === -1
sum_to_n_b(-1) === -1
sum_to_n_c(-1) === -1
sum_to_n_a(-3) === -6
sum_to_n_b(-3) === -6
sum_to_n_c(-3) === -6
```
