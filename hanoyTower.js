function createHanoyTower(countStage) {
  const basis = { baseOne: [], baseTwo: [], baseThree: [], check: [] };

  while (countStage > 1) {
    basis.baseOne.push((--countStage));
  }
  basis.baseOne.reverse();
  basis.check = [].concat(...basis.baseOne)
  return basis;

}

let count = 0;

const complitTower = (basis) => {
    const {baseOne, baseTwo, baseThree, check} = basis;
    // console.log(check)
    // console.log(baseTwo)
    if (baseTwo.join('') === check.join('')) return basis;

    //  console.log(++count)
// 1 4 7
    if(!baseTwo[0] & !baseThree[0] || !baseTwo[0] & baseOne[0] > baseThree[0] || !baseThree[0] & baseTwo[0] > baseOne[0] || baseOne[0] > baseTwo[0] >  baseThree[0]) {
        baseTwo.unshift(baseOne.shift());
        console.log('1 4 7:', basis)
    }

    if(baseThree[0] === undefined & baseOne[0] > baseTwo[0] || baseThree[0] > baseTwo[0] > baseOne[0]  || !baseThree[0] & baseOne[0] > baseTwo[0]){
        baseThree.unshift(baseOne.shift());
        console.log('2:', basis)
    }

    if(baseOne[0] > baseThree[0] > baseTwo[0] || !baseOne[0] & baseThree[0] > baseTwo[0]) {
        baseThree.unshift(baseTwo.shift())
        console.log('3:', basis)
    }

    if(!baseOne[0] & baseTwo[0] > baseThree[0] || baseOne[0] > baseTwo[0] > baseThree[0] ) {
        baseOne.unshift(baseThree.shift())
        console.log('5:', basis)
    }

    if (baseTwo[0] > baseThree[0] > baseOne[0] ) {
        baseTwo.unshift(baseThree.shift())
        console.log('6:', basis)
    }


    // if(!baseOne[0] & baseTwo[0] > baseThree[0]  ||baseOne[0] > baseTwo[0] > baseThree[0]   ) {
    //     baseOne.unshift(baseThree.shift())
    //     console.log('5:', basis)
    // }
    // // 6
    // if(!baseTwo[0] & baseTwo[0] > baseThree[0] || baseTwo[0] > baseTwo[0] > baseThree[0]){
    //     baseTwo.unshift(baseThree.shift())
    //     console.log('6:', basis)
    // }

    // 7

    // if(!baseTwo[0] & !baseThree[0] || !baseTwo[0] & baseOne[0] > baseThree[0] || !baseThree[0] & baseTwo[0] > baseOne[0] || baseOne[0] > baseTwo[0] ) {
    //     baseTwo.unshift(baseOne.shift());
    //     console.log('1 4 7:', basis)
    // }

       // 2
    //    if(!baseThree[0] & baseOne[0] > baseTwo[0] || baseOne[0] > baseTwo[0] || !baseThree & baseOne[0] > baseTwo[0]){
    //     baseThree.unshift(baseOne.shift());
    //     console.log('2:', basis)
    // }

        // 3
        // if(baseOne[0] > baseThree[0] > baseTwo[0] || !baseOne[0] & baseThree[0] > baseTwo[0]) {
        //     baseThree.unshift(baseTwo.shift())
        //     console.log('3:', basis)
        // }

        // if(!baseOne[0] & baseTwo[0] > baseThree[0] || baseOne[0] > baseTwo[0] > baseThree[0] ) {
        //     baseOne.unshift(baseThree.shift())
        //     console.log('5:', basis)
        // }


    //            // 2
    //    if(!baseThree[0] & baseOne[0] > baseTwo[0] || baseOne[0] > baseTwo[0] || !baseThree & baseOne[0] > baseTwo[0] || baseTwo[0] > baseThree[0] > baseOne[0]){
    //     baseThree.unshift(baseOne.shift());
    //     console.log('2:', basis)
    // }
    // 
    // if (!baseTwo[0] || baseTwo[0] > baseOne[0]) {
    //     baseTwo.unshift(baseOne.shift());
    //     console.log('one:', basis)
    // }
    // if (!baseThree[0] || baseOne[0] > baseTwo || baseThree[0] > baseOne[0] > baseTwo){
    //     baseThree.unshift(baseOne.shift());
    //     console.log('two:', basis)
    // }
    // if ( baseOne[0] > baseThree[0] > baseTwo[0] ){
    //     baseThree.unshift(baseTwo.shift())
    //     console.log('three:', basis)
    // }
    // if (!baseTwo[0] & baseOne[0] > baseThree[0]){
    //     baseTwo.unshift(baseOne.shift())
    //     console.log('four:', basis)
    // }
    // if (!baseOne[0] & baseTwo[0] > baseThree[0]) {
    //     baseOne.unshift(baseThree.shift())
    //     console.log('five:', basis)
    // }
    // if ( baseTwo[0] > baseThree[0] > baseOne[0]) {
    //     baseTwo.unshift(baseThree.shift())
    //     console.log('six:', basis)
    // }
    // if ( !baseThree[0] & baseTwo[0] > baseOne[0]) {
    //     baseTwo.unshift(baseOne.shift())
    //     console.log('seven:', basis)
    // }

    // complitTower(basis);

  }

//   console.log(createHanoyTower(5))
complitTower(createHanoyTower(5))
