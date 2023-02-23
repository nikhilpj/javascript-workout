arr = [1, 2, 3, 4, 5]
function remove(brr, index) {
    for (let i = index; i < brr.length; i++) {
        if (i == index) {
            for (let j = i; j < brr.length ; j++) {
                
                    brr[j] = brr[j + 1]

                

            }
        }

        }
        brr.length = brr.length - 1
        console.log(brr);
    }
    remove(arr, 0)
