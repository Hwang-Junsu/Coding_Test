function solution(picks, minerals) {
    const answer = [];
    const TYPE = {
        "diamond":0,
        "iron":1,
        "stone":2,
    }

    const tired = [[1,1,1],[5,1,1],[25,5,1]];
    
    const dig = (current, index) => {
        let count = 0;
        let sum = 0;
        while(index+count < minerals.length) {
            sum += tired[current][TYPE[minerals[index+count]]];
            count++;
            if(count === 5) break;
        }
        return {digSum:sum, digIndex:index+count};
    }
    const checkPicks = (picks) => {
        return picks.every((el)=>el===0);
    }
    
    const analyze = (current, sum, index, picks) => {
        if(index > minerals.length-1 || checkPicks(picks)) {
            answer.push(sum);
            return;
        }
        
        for(let i = 0 ; i < 3; i++) {
            if(picks[i] > 0) {
                picks[i]--;
                const {digSum, digIndex} = dig(i, index);
                analyze(i, sum + digSum, digIndex, [...picks]);
                picks[i]++;
            }
        }
    }
    
    analyze(null, 0, 0, [...picks]);
    
    return Math.min(...answer);
}