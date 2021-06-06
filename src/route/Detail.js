import React from 'react';
import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';
function Detail({ toDos }) {
  //   const id = useParams();
  console.log(toDos);
  return (
    <>
      <h1>text : {toDos?.text}</h1>
      <h1>Created At: {toDos?.id}</h1>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  //   console.log('ownProps:', ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  //   console.log('id', id);
  return { toDos: state.find((todo) => todo.id === parseInt(id)) };
}
export default connect(mapStateToProps)(Detail);
