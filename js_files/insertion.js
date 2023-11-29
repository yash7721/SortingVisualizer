async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        if (!continueSorting) {
            // Stop sorting instantly when continueSorting is false
            return;
        }
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            if (!continueSorting) {
                // Stop sorting instantly when continueSorting is false
                return;
            }
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
            while (isPaused) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Pause sorting
            }
          
            await waitforme(delay);

            if (!continueSorting) {
                // Stop sorting instantly when continueSorting is false
                return;
            }
            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        if (!continueSorting) {
            // Stop sorting instantly when continueSorting is false
            return;
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    inSortbtn.style.background = 'cyan';
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    isPaused = false;
    continueSorting = true; 
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    inSortbtn.style = 'btn-dark';
});


