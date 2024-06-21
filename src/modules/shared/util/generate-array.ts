export default function generateArray(size: number) {
  return Array(size)
    .fill(0)
    .map((_, i) => i + 1);
}
