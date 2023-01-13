const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
const percent = document.querySelector("span");

let count = 0;

inner.addEventListener("click", function(){
    let loading = setInterval(animate, 50);
    function animate(){
        if(count == 100) {
            outer.classList.remove("active-loader");
            outer.classList.add("active-loader");
            clearInterval();
        } 
        else {
            count = count + 1;
            percent.textContent = count + '%';
            outer.classList.add("active-loader");
        }
    }
});