function clamp(x, lo, hi) {
  return Math.min(hi, Math.max(lo, x));
}
module.exports = { clamp };
