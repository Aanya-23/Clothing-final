const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class='nav'>
    <img src="images/dark-logo.png" alt="" class="brand-logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="sign.html"><img src="images/user.png" alt=""></a>
        <a href="#"><img src="images/cart.png" alt=""></a>
        <a href="#"><img src="images/heart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="index.html" class="link">Home</a></li>
    <li class="link-item"><a href="women.html" class="link">Women</a></li>
    <li class="link-item"><a href="men.html" class="link">Men</a></li>
    <li class="link-item"><a href="kid.html" class="link">Kids</a></li>
</ul>
`;
}
createNav();