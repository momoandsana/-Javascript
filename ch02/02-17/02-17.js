let star = '';

for (let i=0; i<5; i++) {
    for (let j=0; j<5; j++) {
        if (j == i) {
            star += '*';
        }
        else {
            star += ' ';
        }
    }
    star += '\n';
}

console.log(star);