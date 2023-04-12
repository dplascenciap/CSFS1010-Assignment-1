/**
 * Function Copyright()
 * @returns Navigation Copyright component
 */
 function Copyright() {
    return (
        <div className="copyright">
            <p>Copyright &copy; 2022, Pet Store</p>
            <img src="./assets/payment_cards.png"
                alt="Logo of different payment cards"
                id="img_cards"
                width={128}
            />
        </div>
    );
}

export default Copyright;