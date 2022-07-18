function add_text(){
    p = document.getElementById('tekst');
    p.textContent = 'Ala ma kota';
}
function remove_text(){
    p=document.getElementById('tekst');
    p.textContent = '';
}


b = document.getElementById('dodaj');
b.addEventListener('click', add_text);

b1 = document.getElementById('usun');
b1.addEventListener('click', remove_text);