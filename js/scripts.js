document.addEventListener('DOMContentLoaded', function() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    
    editableElements.forEach(element => {
        element.addEventListener('blur', function() {
            localStorage.setItem(element.id, element.innerHTML);
        });
        
        const savedContent = localStorage.getItem(element.id);
        if (savedContent) {
            element.innerHTML = savedContent;
        }
    });

    const profilePic = document.getElementById('profilePic');
    profilePic.addEventListener('click', function() {
        const newSrc = prompt("Ingresa la URL de tu foto de perfil:");
        if (newSrc) {
            profilePic.src = newSrc;
            localStorage.setItem('profilePicSrc', newSrc);
        }
    });

    const savedProfilePicSrc = localStorage.getItem('profilePicSrc');
    if (savedProfilePicSrc) {
        profilePic.src = savedProfilePicSrc;
    }
});