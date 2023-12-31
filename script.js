const scrollbarContent = document.querySelector('.scrollbar-content');
const slider = document.querySelector('.slider');
const viewport = document.getElementById('viewport');
const yearsContainer = document.querySelector('.years');
const sliderPositionDisplay = document.getElementById('slider-position');
const year2004Image = document.getElementById('year-2004-image');
const year2005Image = document.getElementById('year-2005-image');
const year2006Image = document.getElementById('year-2006-image');
const year2007Image = document.getElementById('year-2007-image');
const year2008Image = document.getElementById('year-2008-image');
const year2009Image = document.getElementById('year-2009-image');
const year2010Image = document.getElementById('year-2010-image');
const year2011Image = document.getElementById('year-2011-image');
const year2012Image = document.getElementById('year-2012-image');
const year2013Image = document.getElementById('year-2013-image');
const ctb = document.getElementById('custom-text-box1a');
const ctb1 = document.getElementById('custom-text-box1b');
const ctb2 = document.getElementById('custom-text-box1c');

const topdisplay = document.getElementById('top-display');

let t=0
slider.addEventListener('mousedown', (e) => {
  const initialX = e.clientX - slider.getBoundingClientRect().left;
  
  document.onmousemove = (e) => {
    const newX = e.clientX - scrollbarContent.getBoundingClientRect().left;
    let offset = newX - initialX;

    if (offset < 0) {
      offset = 0;
    }

    if (offset + slider.clientWidth > scrollbarContent.clientWidth) {
      offset = scrollbarContent.clientWidth - slider.clientWidth;
    }

    slider.style.left = offset + 'px';

    // Calculate the percentage scrolled
    const scrollPercentage = (offset / (scrollbarContent.clientWidth - slider.clientWidth)) * 100;

    // Scroll the years container accordingly
    const maxScroll = yearsContainer.clientWidth - scrollbarContent.clientWidth;
    yearsContainer.style.transform = `translateX(${-scrollPercentage * (maxScroll / 100)}px)`;

    const sliderPosition = e.clientX - slider.getBoundingClientRect().left;
    const containerWidth = slider.parentElement.offsetWidth;
    
   
    const sliderPosition1 = (offset / (containerWidth - slider.clientWidth)) * 100;
    
     // Define the position at which you want to display the image

     var path = document.getElementById("curve");
     var currentD = path.getAttribute("d");
     var path1 = document.getElementById("curve1");
     var currentD1 = path.getAttribute("e");
     
     // Split the current "d" attribute into parts
     var parts = currentD.split(" ");
    a=sliderPosition1-t
   
    if(a<0){
        a=-a
    }
    l=a*100
     if(sliderPosition1>=t){
        parts[2] = (parseInt(parts[2]) + l).toString();
     }
     else{
        parts[2] = (parseInt(parts[2]) - l).toString();
     }
     t=sliderPosition1
     // Update the second set of coordinates by adding n to it
     
     
     // Reconstruct the "d" attribute with the updated value
     var updatedD = parts.join(" ")+ ",800";
    
     // Update the path's "d" attribute
     path.setAttribute("d", updatedD);
    //  if(sliderPosition1>6&&sliderPosition1<8){
    //   updatedD = updatedD+"M 1100,800 1100,500";
      // path.setAttribute("d", updatedD);
      // var updatedD = "M 1100,500 900,500";
      // path.setAttribute("d", updatedD);
      // var updatedD = "M 900,500 900,800";
      // path.setAttribute("d", updatedD);
      // var updatedD = "M 900,800 1100,800";
      // path.setAttribute("d", updatedD);
     //}
     let shiftX = 0;
     function shiftViewport(dx) {
      shiftX += dx;
      viewport.scrollLeft = shiftX;
      sliderPosition.textContent = `Slider Position: ${shiftX}px`;
    }
    
    // Example: Shift the viewport right by 100 pixels
    shiftViewport(sliderPosition1*5);
     
    m=0
    
    // Example: Shift the viewport right by 100 pixels
    shiftViewport(sliderPosition1*10);
    if (sliderPosition1 >18 ) {
      year2004Image.style.display = 'block';
      ctb.style.display = 'block';
      topdisplay.innerHTML='1991'
      
  } 
  else{
    year2004Image.style.display = 'none';
    ctb.style.display = 'none';

  }
    if (sliderPosition1 >24 ) {
      year2005Image.style.display = 'block';
      topdisplay.innerHTML='1994'
      ctb1.style.display = 'block';
      
  } 
  else{
    year2005Image.style.display = 'none';
    ctb1.style.display = 'none';

  }
    if (sliderPosition1 >35 ) {
      year2006Image.style.display = 'block';
      topdisplay.innerHTML='1995'
      ctb2.style.display = 'block';
      
  } 
  else{
    year2006Image.style.display = 'none';
    ctb1.style.display = 'none';

  }
    if (sliderPosition1 >43 ) {
      year2007Image.style.display = 'block';
      topdisplay.innerHTML='1995'
      
  } 
  else{
    year2007Image.style.display = 'none';

  }
    if (sliderPosition1 >51 ) {
      year2008Image.style.display = 'block';
      topdisplay.innerHTML='1996'
      
  } 
  else{
    year2008Image.style.display = 'none';

  }
    if (sliderPosition1 >60 ) {
      year2009Image.style.display = 'block';
      topdisplay.innerHTML='1996'
      
  } 
  else{
    year2009Image.style.display = 'none';

  }
    if (sliderPosition1 >67 ) {
      year2010Image.style.display = 'block';
      topdisplay.innerHTML='2009'
      
  } 
  else{
    year2010Image.style.display = 'none';

  }
    if (sliderPosition1 >76 ) {
      year2011Image.style.display = 'block';
      topdisplay.innerHTML='2011'
      
  } 
  else{
    year2011Image.style.display = 'none';

  }
    if (sliderPosition1 >85 ) {
      year2012Image.style.display = 'block';
      topdisplay.innerHTML='2012'
      
  } 
  else{
    year2012Image.style.display = 'none';

  }
    if (sliderPosition1 >92 ) {
      year2013Image.style.display = 'block';
      topdisplay.innerHTML='2013'
      
  } 
  else{
    year2013Image.style.display = 'none';

  }


 
     
    
     
  
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
});
