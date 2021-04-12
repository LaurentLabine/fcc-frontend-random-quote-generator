import quotes from "./quotes"
import randomColor from "randomcolor"

function refreshIndex() {
    return Math.floor(Math.random() * quotes.length);
}

var index = refreshIndex();
var Quote;

export const quotesReducer = function(state = index, action) {

    index = refreshIndex();

    switch (action.type) {
        case "REFRESH_QUOTE":
            console.log("firstpass")
            Quote = quotes[index]
            Quote.color = randomColor();
            return Quote;
        default:
            Quote = quotes[state]
            Quote.color = randomColor();
            return Quote;
    }
};