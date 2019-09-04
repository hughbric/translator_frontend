import React from "react";
import TerminologyItem from "./TerminologyItem";
import Spinner from "./layout/Spinner";

const TerminologyList = ({ translations, loading, delTerm }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return translations.map(translation => (
      <TerminologyItem
        key={translation.id}
        translation={translation}
        delTerm={delTerm}
      />
    ));
  }
};

export default TerminologyList;
