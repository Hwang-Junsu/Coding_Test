class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    pop() {
        if(!this.head) return undefined;
        const poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;

    }

    shift() {
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        if(index <= this.length/2) {
            let count = 0;
            let current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
            return current;
        } else {
        
            let count = this.length - 1;
            let current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(index, val) {
        const foundNode = this.get(index);
        if(foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        const prevNode = this.get(index-1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;

    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        const removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}

/*push
값을 가지는 새로운 노드를 만듭니다
헤드가 null인지 확인하고 그렇다면 헤드와 테일 모두 새로 만든 노드로 설정되어야 합니다.
그렇지 않다면 현재 테일을 찾아서 테일의 next를 새로운 노드로 설정해줍니다.
새로만든 노드의 prev를 예전 테일로 설정해줍니다.
테일을 가장 끝에 있게된 새로운 노드로 바꿔줍니다.
*/

/* pop
테일이 없다면 (비어있는 상황) undefined를 출력해줍니다.
그렇지 않다면 현재 테일을 나중에 출력할 수 있도록 변수에 저장해줍니다.
테일이 그 전에 있는 노드가 되도록 설정해줍니다.
새로운 테일의 next를 null로 변경합니다.
*/

/*shift
리스트가 비어있다면 undefined를 리턴합니다.
그렇지 않다면 head를 변수에 저장해 줍니다.
길이가 1인 상태에서 제거하게 된다면 헤드와 테일을 null로 바꾸어줍니다.
헤드가 이전 헤드의 next가 되도록 설정합니다.
헤드의 prev를 null로 설정하고, 이전 headd의 next로 설정합니다.
*/

/* unshift 
입력된 값을 가지는 새로운 값을 만듭니다.
비어있는 리스트라면  헤드와 테일이 새로운 노드가 되도록합니다.
그렇지 않다면 헤드의 prev가 새로운 노드가 되도록 하고
새로운 노드의 next가 현재 헤드가 되도록 합니다.
새로은 노드가 헤드가 되도록합니다.
*/

/* get
인덱스가 유효한지 확인합니다. 0보다 작거나 길이보다 크다면 null을 반환합니다.
그렇지 않다면 리스트의 길이가 절반보다 작거나 같은지 확인합니다.
참이라면 오른쪽으로 가면서 next를 추적합니다.
거짓이라면 왼쪽으로 가면서 prev를 추적합니다.
노드를 찾고 출력합니다.
*/

/* set 
입력받은 값을 넣은 노드를 생성하고
get메소드의 결과값에 넣습니다.
*/

/* insert
인덱스가 유효한지 확인합니다. 유효하지 않다면 false를 출력합니다.
인덱스가 0이라면 unshift, length와 같다면 push
그렇지 않다면 get 메서드를 사용하여 index-1에 접근합니다.
next와 prev에 만든 노드를 넣고 length를 증가시킵니다. 
*/

/* remove
인덱스가 유효한지 확인합니다. 유효하지 않다면 false를 출력합니다.
인덱스가 0이라면 shift, length-1와 같다면 pop
그렇지 않다면 get 메서드를 사용하여 index -1 에 접근합니다.
node를 찾아내고 리스트에서 제거합니다.
찾아낸 node에서 next와 prev 값을 null로 바꾸고 노드를 리턴합니다.

/*
삽입, 제거는 O(1)
Search, 접근은 O(N)
*/


const list = new DoublyLinkedList();

console.log(list);

list.push(3);
list.push(4);
list.push(4);

list.unshift(1);

list.set(2, '123');
console.log(list.get(2));

console.log(list);