function toggleMenu()
{
    let x = document.querySelector(".header__hamburger");
    x.classList.toggle("click");

    x = document.querySelector(".links");
    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "block";
    }
}