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
        let message ="There are " + sheeps + " sheep in total"
        document.getElementById('countSheep').innerHTML = `<h1 class="message">${message}</h1>`
        console.log(message)
    }
    else{
        let message ="UPS!!! Wolfs eaten Sheeps"
        document.getElementById('countSheep').innerHTML = `<h1 class="messaje">${message}</h1>`
        console.log(message)
    }
}


sheepTotal = countSheeps(list)

