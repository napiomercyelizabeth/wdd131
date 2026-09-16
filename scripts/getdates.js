/* Setting current year in footer */
document.getElementById("currentyear").textContent = new Date().getFullYear();

/* Setting last modified date in footer */
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;