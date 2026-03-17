const height = 165; // cm

if (height > 100) {
  const lastTwoDigits = height % 100;
  const idealWeight = (lastTwoDigits * 9) / 10;
  const maxWeight = lastTwoDigits;
  const minWeight = (lastTwoDigits * 8) / 10;

  console.log(`Cân nặng lý tưởng: ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`);
}
