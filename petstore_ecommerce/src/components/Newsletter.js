/**
 * Function Newsletter()
 * @returns Navigation Newsletter component
 */
 function Newsletter() {
    return (
        <div className="Newsletter">
            <div>
                <h2>newsletter</h2>
            </div>
            <div className="subscribe">
                <div>
                    <input type="email"></input>
                </div>
                <div>
                    <button>subscribe!</button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;