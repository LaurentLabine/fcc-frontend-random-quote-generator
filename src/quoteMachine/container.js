import { connect } from 'react-redux';
import { refreshQuote } from './actions';
import { QuoteGenerator } from './component';

const mapStateToProps = state => {
    return {
        quote: state.quote,
        author: state.author,
        color: state.color
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleRefreshClick: () => dispatch(refreshQuote()),
    }
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteGenerator);