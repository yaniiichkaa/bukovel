document.getElementById("changeLanguage").addEventListener('click', function(){
    const lang = this.textContent.includes("UA") ? "uk" : "en";
    const newLang = lang === "en" ? "uk" : "en";

    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => el.style.display = 'none');
    document.querySelectorAll(`[data-lang="${newLang}"]`).forEach(el => el.style.display = 'flex');
    
    this.textContent = `${newLang === 'en' ? 'EN' : 'UA'}`;
});



