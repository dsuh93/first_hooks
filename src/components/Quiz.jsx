import React from 'react';
import { formatQuestions } from '../utils/format_util';
import Question from './Question';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trivia: [],
      currentQuestion: 0
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=15&category=27&type=multiple')
      .then(response => response.json())
      .then(data => {
        let questions = formatQuestions(data);
        this.setState({ trivia: questions });
      });
  }
  
}