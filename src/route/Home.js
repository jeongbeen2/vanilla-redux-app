import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}
// getState와 같은 의미
function mapStateToProps(state, ownProps) {
  return { toDos: state };
  // ? state -> store에서부터 온 state다.
  // ? ownProps -> React-router에 의해서 Home에게 준 props들이다.
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
  // ? addToDo라는 새로운 function을 만들어서 props로 전달해준다.
  // ? addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  // * 기존에 없던것                    store에서부터 온 actionCreators.addToDo
  // ?            actionCreators.addToDo(text)라는 action을 dispatch로 전달해 주는 것이다.
  // *            reducer에게 dispatch해주는 과정이다.
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// ? --> store에서 Home으로 state를 가져오는 중. connect를 이용
// ? mapStateToProps!
// * https://react-redux.js.org/using-react-redux/connect-mapstate
// ? mapStateToProps는 store -> component로 값을 가져오고, 이것을 props로 받는 것.
