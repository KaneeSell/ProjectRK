const getYearsOld = () => {
    if(new Date().getMonth() < 6) {
        return new Date().getFullYear() - 1999 - 1;
    }

    if(new Date().getDate() < 10) {
        return new Date().getFullYear() - 1999 - 1;
    }

    return new Date().getFullYear() - 1999;
}
document.getElementById('idade_kanee').innerHTML = "Idade: " + getYearsOld();