/**
 * Function HomePage()
 * @returns Home page component
 */

function HomePage() {
    return (
        <div className="main_page">
            <img src="./assets/main_picture.png"
                            alt="Dog sitting next to a person"
                            id="img_main"
                        />
            <button class="shop_now">shop now</button>
        </div>
    )
}

export default HomePage;