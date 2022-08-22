
# Swap

static void Swap(ref int x, ref int y) {
     int temp = 0;
     temp = x;
     x = y;
     y = temp;
}
    

# Next_Permutation

static bool Next_Permutation(int[] arr, int end) {
    int i = end-1;
    while(i > 0 && arr[i] <= arr[i-1]) --i;
        
    if(i == 0) return false;
        
    int j = end-1;
    while(arr[i-1] >= arr[j]) j -= 1;
    Swap(ref arr[i-1], ref arr[j]);
    j = end-1;
    while(i < j) {
        Swap(ref arr[i], ref arr[j]);
        i += 1; j-= 1;
    }
    return true;
}
