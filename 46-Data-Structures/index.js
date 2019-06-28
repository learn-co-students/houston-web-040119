function test(callback){
  let start = (new Date).getTime()
  for(var i = 0; i < 100000; i++){
    callback()
  }
  let end = (new Date).getTime()
  return end - start
}


function Queue(){
	var storage = {},
		head = 0,
		tail= 0;
    
	return {
		enQueue: function(item){
			storage[tail] = item;
		  	tail++;
		},
		deQueue: function(){
			var size = tail - head;

			if (size <= 0) return undefined;

			var item = storage[head];
			
			delete storage[head];

			head++;

			//Reset the counter
			if (head === tail){
				head = 0;
				tail = 0;
			}
			
			return item;
		}
	}
}



function Stack(){
    var stack = {};
    var stackSize = 0;
    
    return {
      push: function(item){
        stack[stackSize] = item;
        stackSize++;
      },
      pop: function(){
          if (this.isEmpty()){ return undefined;}
        
        stackSize--;
        
          var item = stack[stackSize];
        delete stack[stackSize];
        
        return item;      
      }
    }	
  }


function Node(value) {
    this.value = value;
  }
  
  function SLinkedList() {
    var head ;
    var length = 0;
    return {
      insert: function(item) {
        if (!item) return;
  
        var node = new Node(item);

  
        if (head) {
          node.next = head;
        }
  
        head = node;
        length++;

      },
      delete: function(value) {
        var curr = head;
  
        if (head.value === value) {
          head = head.next;
          return;
        }
  
        while (curr) {
          if (curr.next) {
            var next = curr.next;
  
            if (next.value === value) {
              curr.next = next.next;
              length--;
              break;
            }
          }
  
          curr = curr.next;
        }
      }
    }
  }

let array = []
let time1 = test(() => {
	array.unshift("Hello World")
})

let queue = new Queue
let time2 = test(() => {
	queue.enQueue("Hello World")
})

console.log(time1, time2)