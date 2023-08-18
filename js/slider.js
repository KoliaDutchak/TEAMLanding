let screenWidth = window.screen.width;
let offset = 0;
alert(screenWidth);

const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider-next').addEventListener('click', function(){



    if(screenWidth>321){
       offset = offset + 400;
        if (screenWidth>=1440 && screenWidth>745 && offset > 1000){ 
            offset = 0;  
        }

        else if (screenWidth<745 && offset > 1600){ 
            offset = 0;  
        }





        sliderLine.style.left = -offset + 'px';  

    }

    if(screenWidth<321){
        offset = offset + 310;
        if (offset > 1000){ 
            offset = 0;  

        }
        sliderLine.style.left = -offset + 'px';


    }   
});




document.querySelector('.slider-prev').addEventListener('click', function(){


    if(screenWidth>321){

        offset = offset - 400;
        if (screenWidth>=1440 && screenWidth>745 && offset < 0){
            offset = 800;
        }
        if(screenWidth<745 && offset < 0){
            offset = 1600;
        }

        sliderLine.style.left = -offset + 'px';
    }


    if(screenWidth<321){
        offset = offset - 310;
        if (offset < 0){
            offset = 930;
        }
    }

    sliderLine.style.left = -offset + 'px';
});


