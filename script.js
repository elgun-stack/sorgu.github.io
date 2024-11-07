// Keçid düyməsini və overlay elementini əldə edirik
const transitionButton = document.getElementById('transitionButton');
const overlay = document.getElementById('overlay');

// Keçid düyməsinə klik edildikdə funksiyanı işə salırıq
transitionButton.addEventListener('click', function(event) {
    event.preventDefault(); // Varsayılan keçidi ləğv edir
    
    // Overlay görünür və ekran qaralır
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';

    // 10 saniyədən sonra yeni səhifəyə keçid
    setTimeout(function() {
        overlay.style.opacity = '0'; // Overlay-ı geri şəffaf hala gətirir
        window.location.href = 'default.html'; // Burada keçid ediləcək səhifəni göstər
    }, 30000); // 10 saniyəlik gecikmə
});
