function typeWriter(text, delay) {
    return new Promise(resolve => {
        let index = 0;
        const intervalId = setInterval(() => {
            process.stdout.write(text.charAt(index));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
                setTimeout(() => {
                    process.stdout.write("\n"); 
                    resolve();
                }, delay);
            }
        }, delay);
    });
}

const lyricsWithTiming = [
    ["And I don't know what I'm cryin' for", 130],
    ["I don't think I could love you more", 120],
    ["It might not be long, but baby, I", 150],
    ["I'll love you 'til the day that I die", 150],
    ["'Til the day that I die", 150],
    ["'Til the light leaves my eyes", 160],
    ["'Til the day that I die", 150]
];

async function printLyricsWithTyping() {
    for (let i = 0; i < lyricsWithTiming.length; i++) {
        const [line, delay] = lyricsWithTiming[i];
        await typeWriter(line, delay);
    }
}

printLyricsWithTyping();