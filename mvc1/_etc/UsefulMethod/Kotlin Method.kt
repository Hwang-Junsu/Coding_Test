fun Swap(arr : IntArray) {
    var tmp: Int;
    tmp = arr[0];
    arr[0] = arr[1];
    arr[1] = tmp;
}

fun Next_Permutation(arr : IntArray, end : Int) : Boolean {
    var i = end-1;
    var temp = IntArray(2, {0});
    while(i > 0 && arr[i] <= arr[i-1]) --i;
        
    if(i == 0) return false;
        
    var j = end-1;
    while(arr[i-1] >= arr[j]) j -= 1;
    temp[0] = arr[i-1]; temp[1] = arr[j];
    Swap(temp);
    arr[i-1] = temp[0]; arr[j] = temp[1];
    j = end-1;
    while(i < j) {
        temp[0] = arr[i]; temp[1] = arr[j];
        Swap(temp);
        arr[i] = temp[0]; arr[j] = temp[1];
        i += 1; j-= 1;
    }
    return true;
}
