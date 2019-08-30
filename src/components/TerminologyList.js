import React, { Component } from 'react';
import TerminologyItem from './TerminologyItem';

export class TerminologyList extends Component {
  render() {
    return this.props.translations.map((translation) => (
      <TerminologyItem key={translation.id} translation={translation} delTerm={this.props.delTerm} />
    ));
  }
}

export default TerminologyList;
