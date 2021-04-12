import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: ${props => props.color};
    color: white;
  }
`;

const BackgroundDiv = styled.div`
  margin:0;
  padding:0;
  background-color:  ${props => props.color};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuoteContainer = styled.div`
  margin:0;
  padding:20px;
  background-color: white;
  text-align: center;
  width: 50%;
  border-radius: 20px;
  font-family: 'Dancing Script', cursive;
`;

const Quote = styled.h1`
font-size:56px;
`;

const Author = styled.h2`
font-size:44px;
font-family: 'Indie Flower', cursive;
`;

const LeftFontIconStyle = {
  position: 'relative',
  bottom: '1rem',
  right: '1rem'
}

const RightFontIconStyle = {
  position: 'relative',
  left: '1rem',
  top: '1rem'
}

const TwitterIconStyle = {
  position: 'relative',
  left: '1rem'
}

const ToKnowMoreStyle = {
}

var searchLink;

export class QuoteGenerator extends React.Component{
    render() {   
      searchLink = 'http://google.com/search?q='+ this.props.quote;
      var tweetUrl = "https://twitter.com/intent/tweet?text="+this.props.quote
      return (
        <BackgroundDiv color = {this.props.color}>
        <QuoteContainer>
        <Quote id="text"><FontAwesomeIcon style={LeftFontIconStyle} icon={["fas", "quote-left"]} size="xs" />{this.props.quote}<FontAwesomeIcon style={RightFontIconStyle} icon={["fas", "quote-right"]} size="xs" /></Quote>
          <Author id="author">{this.props.author}</Author>
          <Button id="new-quote" onClick={() => this.props.handleRefreshClick()} color={this.props.color}>New Quote</Button>
          <a id="search-quote" href={searchLink} target="_blank" style={ToKnowMoreStyle}>To Know more</a>
          <a id="tweet-quote" href={tweetUrl} target="_blank"><FontAwesomeIcon style={TwitterIconStyle} icon={["fab", "twitter"]} size="lg" /></a>

        </QuoteContainer>
        </BackgroundDiv>
      );
    }
  }

  //https://stackoverflow.com/questions/44537810/pass-dispatch-to-onclick-event-redux