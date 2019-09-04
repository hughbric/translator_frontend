import React from "react";
import TerminologyItem from "./TerminologyItem";
import Spinner from "./layout/Spinner";
import PropTypes from "prop-types";

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

TerminologyList.propTypes = {
  translations: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  delTerm: PropTypes.func
};

export default TerminologyList;
