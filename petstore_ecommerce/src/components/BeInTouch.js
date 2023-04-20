/**
 * Function BeInTouch()
 * @returns Navigation BeInTouch component
 */
 function BeInTouch() {
    return (
        <div className="BeInTouch">
            <div>
                <h2>be in touch</h2>
            </div>
            <div>
                <ul className="socialmediaicons">
                    <li>
                        <img src="./assets/twitterIcon.png"
                            alt="Facebook Logo"
                            id="img_facebook"
                            width={128}
                        />
                    </li>
                    <li>
                        <img src="./assets/facebookIcon.png"
                            alt="Facebook Logo"
                            id="img_facebook"
                            width={128}
                        />
                    </li>
                    <li>
                        <img src="./assets/instagramIcon.png"
                            alt="Instagram Logo"
                            id="img_instagram"
                            width={128}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BeInTouch;