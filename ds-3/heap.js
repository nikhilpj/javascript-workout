//left child = 2*i
//right child = 2*i+1
//parent = i/2
    let heap = [null]
    let insert = function(num)
    {
		//push to last position
        heap.push(num)
        if(heap.length>2){
            let idx = heap.length-1
            while(heap[idx]<heap[Math.floor(idx/2)])
            {
				//if we havent reached root node
                if(idx>1){
					//switch node with parent node 
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]]
					//if parent node is not the root node
                    if(Math.floor(idx/2)>1){
                        idx = Math.floor(idx/2)
                    }
                    else{
                        break
                    }
                }
            }
        }
       
    }


    let remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			//if only two elements are present
			if (heap.length == 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			//while root node > than left and right child
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				//at the bottom of the tree
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
			//only one element
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

    let sort = function() {
		let result = new Array();
		while (heap.length > 1) {
			result.push(remove());
		};
		return result;
	};

    insert(4)
    insert(7)
    insert(2)
	
    console.log(sort()); 
    // remove()

    // console.log(heap);
    
