const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="images/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Men</li>
                    <li><a href="#" class="footer-link">T-shirts</a></li>
                    <li><a href="#" class="footer-link">Sweatshirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">Trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Casuals</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Watches</a></li>

                </ul>
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">T-shirts</a></li>
                    <li><a href="#" class="footer-link">Sweatshirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">Trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Casuals</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Watches</a></li>

                </ul>
            </div>
            
        </div>
        <p class="footer-title">About Company</p>
            <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam consectetur quis ipsum dicta repellendus optio corrupti assumenda corporis quod voluptate laboriosam impedit est, et eum nostrum officia vero alias, perspiciatis qui recusandae atque facilis! Eaque laborum nobis tempora error pariatur beatae mollitia libero dicta, molestiae amet ut repellendus dolorum eum officia cum voluptate! Pariatur dolorum officia nulla error officiis, quaerat aut dignissimos dolorem reiciendis possimus ratione consequatur, placeat quas non eum laudantium vero beatae et! Tempore, distinctio sapiente. Distinctio doloremque nulla praesentium, possimus commodi voluptatem eaque, tempora amet provident harum error officiis fugiat sunt, ipsum magni eveniet vel suscipit non.</p>
            <p class="footer-title">Contact us at - </p>
            <p class="info">Support emails - help@clothing.com, customersupport@clothing.com</p>
            <p class="info">Telephone - 180 00 00 001, 180 00 00 002</p>
            <div class="footer-social">
                <div>
                    <a href="#" class="social-link">Terms & services</a>
                    <a href="#" class="social-link">Privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link"><img src="images/insta.png" alt=""></a>
                    <a href="#" class="social-link"><img src="images/face1.png" alt="" class="face"></a>
                    <a href="#" class="social-link"><img src="images/twitter.png" alt=""></a>
                </div>
            </div>
            <p class="footer-credit">
                Clothing, Best apparels online store
            </p>
    `;
}
createFooter();