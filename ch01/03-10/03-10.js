const suspect = ['hoya', 'judy', 'Tom', 'Joy'];

const criminal = 'hoya';

const usual_suspect = suspect.filter((value) => {
    return value == criminal;
})

alert(`용의자 ${suspect} 중 범인은 ${usual_suspect}입니다.`);