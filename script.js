console.log("Are you there god, its me Corrin")

document.getElementById('ham-menu').addEventListener('click', function(){
    document.getElementById('mini-dropdown').classList.add('toggle-open');
} )

document.getElementById('mini-close').addEventListener('click', function(){
    document.getElementById('mini-dropdown').classList.remove('toggle-open');
} )
