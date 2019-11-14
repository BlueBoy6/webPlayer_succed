export function smoothVideo( seeker, videoRate ){
	let smoothDuration;
	let smoothVideoRate;

	if(seeker === 'seeker'){
		smoothDuration = Math.ceil(Number(videoRate)) / 10;
		// console.log('calc seeker ',smoothDuration)
		return smoothDuration;
	}
	if(seeker === 'player'){
		smoothVideoRate = Math.floor(Number(videoRate)) * 10;
		// console.log('calc player',smoothVideoRate)
		return smoothVideoRate;
	}
	return 'error in seeker label'
}

export function getPercentUnit(currentNumber, numberTotal){
	const percentUnit = (100 / numberTotal) * currentNumber;
	// console.log('percent unit : ', percentUnit);
	return percentUnit;
}