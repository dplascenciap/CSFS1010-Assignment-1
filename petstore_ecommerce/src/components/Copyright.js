/**
 * Function Copyright()
 * @returns Navigation Copyright component
 */
function Copyright() {
    return (
        <div className="copyright">
            <div>
                <span>Copyright &copy; 2022, Pet Store</span>
            </div>
            <div>
                <img src="./assets/payment_cards.png"
                    alt="Logo of different payment cards"
                    id="img_cards"
                    width={128}
                />
            </div>
        </div>
    );
}
export default Copyright;