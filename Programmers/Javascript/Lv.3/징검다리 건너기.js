function solution(stones, k) {
    let left = 1;
 	let right = 200000000;

    function search(arr,mid,k) {
        let count = 0;
        for(let i = 0 ; i < arr.length; i++) {
            arr[i]-mid <= 0 ? count++ : count = 0;
            if(count === k) return true;
        }
        return false;
    }

    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(search(stones, mid, k)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}