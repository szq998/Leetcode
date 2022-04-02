/*
 * @lc app=leetcode.cn id=401 lang=typescript
 *
 * [401] 二进制手表
 */

// @lc code=start

function getHour(onLEDs: number[]): number {
    let hour = 0;
    for (const ledIdx of onLEDs.filter((v) => v <= 3)) {
        hour += 2 ** ledIdx;
    }
    return hour;
}

function getMin(onLEDs: number[]): number {
    let min = 0;
    for (const ledIdx of onLEDs.filter((v) => v >= 4).map((v) => v - 4)) {
        min += 2 ** ledIdx;
    }
    return min;
}

function getOnLEDs(LEDs: boolean[]): number[] {
    return LEDs.map((isOn, idx) => (!isOn ? -1 : idx)).filter((v) => v !== -1);
}

function getOnLEDCnt(LEDs: boolean[]): number {
    return LEDs.reduce<number>((cnt, isOn) => cnt + Number(isOn), 0);
}

function readBinaryWatch(turnedOn: number): string[] {
    if (turnedOn === 0) {
        return ['0:00'];
    }

    const ans: string[] = [];
    const LEDs: boolean[] = Array(10);
    // [0: 1, 1: 2, 2: 4, 3: 8,
    // 4: 1, 5: 2, 6: 4, 7: 8, 8: 16, 9: 32];
    LEDs.fill(false);

    let idx = 0;
    (function dfs() {
        const cntLEDsLeft = turnedOn - getOnLEDCnt(LEDs);
        if (cntLEDsLeft === 0) {
            const onLEDs = getOnLEDs(LEDs);
            const [hour, min] = [getHour(onLEDs), getMin(onLEDs)];
            ans.push(String(hour) + ':' + String(min).padStart(2, '0'));
            return;
        }

        if (LEDs.length - idx < cntLEDsLeft) {
            return;
        }

        // turn on current led
        LEDs[idx] = true;
        const onLEDs = getOnLEDs(LEDs);
        const [hour, min] = [getHour(onLEDs), getMin(onLEDs)];
        if (hour < 12 && min < 60) {
            ++idx;
            dfs();
            --idx;
        } else if (min >= 60) {
            LEDs[idx] = false;
            return;
        } else if (hour >= 12) {
            idx = 3;
        }
        LEDs[idx] = false;

        // not turn on current led
        ++idx;
        dfs();
        --idx;
    })();

    return ans;
}
// @lc code=end
