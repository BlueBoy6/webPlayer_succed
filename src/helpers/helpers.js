export function getPercentUnit(currentNumber, numberTotal){
	const percentUnit = (100 / numberTotal) * currentNumber;
	// console.log('percent unit : ', percentUnit);
	return percentUnit;
}