    static void Swap(int[] arr) {
         int temp = 0;
         temp = arr[0];
         arr[0] = arr[1];
         arr[1] = temp;
    }

    static boolean Next_Permutation(int[] arr, int end) {
        int i = end-1;
        int[] temp = new int[2];
        while(i > 0 && arr[i] <= arr[i-1]) --i;
            
        if(i == 0) return false;
            
        int j = end-1;
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
