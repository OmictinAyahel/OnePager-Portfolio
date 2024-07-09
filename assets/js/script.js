var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
document.addEventListener('DOMContentLoaded', function() {
var modal = document.getElementById('modal');
var closeBtn = document.querySelector('.close');

document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function() {
        var work = button.closest('.work');
        var workId = work.getAttribute('data-id');
        var modalDescription = document.querySelectorAll('.modal-description');

        modalDescription.forEach(function(description) {
            description.style.display = 'none';
        });

        var activeDescription = document.getElementById(workId);
        activeDescription.style.display = 'block';

        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
});

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
sidemenu.style.right = "0";

}
function closemenu(){
sidemenu.style.right = "-200px";

}
