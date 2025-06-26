
  document.addEventListener('DOMContentLoaded', function () {
    let toggleBtn = document.getElementById('toggleBtn');
    let light = document.getElementById('light');
    let dark = document.getElementById('dark');
    let body = document.body;
    
 light.style.display="none";

    toggleBtn.addEventListener('click', () => {
      console.log("Hello onclick");

      if (body.classList.contains('dark')) {
       
        body.classList.replace('dark', 'light');
        body.classList.replace('text-light', 'text-dark');
        dark.style.display="";
        light.style.display="none";
        
     toggleBtn.classList.replace('btn-primary', 'btn-secondary');
        
      } else {

        
          body.classList.replace('light', 'dark');
        body.classList.replace('text-dark', 'text-light');
        light.style.display="";
         dark.style.display="none";
        toggleBtn.classList.replace('btn-secondary', 'btn-primary');
       
      }
    });
  });




