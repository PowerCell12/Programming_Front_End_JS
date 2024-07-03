function sequence(arr){

    all_arrays = []

    for (let arr1 of arr){
        let arr2 = arr1.split(", ")
        arr2[0] = arr2[0].substring(1)
        arr2[arr2.length -1] = arr2[arr2.length - 1].substring(0, arr2[arr2.length -1].length - 1)
        let final  =  arr2.map(x => Number(x)).sort((a,b) => b - a)

        let same  = all_arrays.filter(x => arraysEqual(x, final));

        if (same.length === 0){
            all_arrays.push(final)
        }


    }


    let print = all_arrays.sort((a, b) => a.length - b.length)

    for (let f of print){
        console.log(`[${f.join(', ')}]`)
    }


    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
      
        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.
        // Please note that calling sort on an array will modify that array.
        // you might want to clone your array first.
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }
}

// sequence(["[-3, -2, -1, 0, 1, 2, 3, 4]",
// "[10, 1, -17, 0, 2, 13]",
// "[4, -3, 3, -2, 2, -1, 1, 0]"])

