const CtoF = (value) => value * 1.8 + 32;

const FtoC = (value) => (value - 32) / 1.8;

module.exports = { CtoF, FtoC };