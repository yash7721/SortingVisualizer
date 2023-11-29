async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            if (!continueSorting) {
                // Stop sorting instantly when continueSorting is false
                return;
            }
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            while (isPaused) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Pause sorting
            }
          
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        if (!continueSorting) {
            // Stop sorting instantly when continueSorting is false
            return;
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    if (!continueSorting) {
        // Stop sorting instantly when continueSorting is false
        return;
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    document.querySelector(".bubbleSort").style.background = 'cyan';
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    isPaused = false;
    continueSorting = true; 
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    bubSortbtn.style = 'btn-dark';
});

