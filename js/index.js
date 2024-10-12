let list = [true, true, true, false,true, true, true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]

/*list = [ false, false, false ]*/

sizeList = list.length;

function countSheeps(list){
    sheeps = 0;
    for (let index = 0; index < sizeList; index++){
        if (list[index]==true){
            sheeps ++;
        }
    }

    if (sheeps != 0 ){
        console.log("There are " + sheeps + " sheep in total")
    }
    else{
        console.log("UPS!!! Wolfs eaten Sheeps")
    }
}

sheepTotal = countSheeps(list)
