let time = process.argv.splice(2);
let delay = 500;

const timer = function(time) {

    if (time.length === 0) {
        console.log("You have not entered any value, please input a number.")
        return undefined;
    } else {
        for(let time1 of time) {
            if (!isNaN(time1) && time1 > 0) {
                setTimeout(() => {
                    process.stdout.write('\x07');
                    console.log(`${time1} seconds`);
                    delay += 600;
                })
            }
        }
    }
};

timer(time);

