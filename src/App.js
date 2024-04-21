import logo from './logo.svg';
import './App.css';
import Modal from './components/modal-popup/modal';
import { useState } from 'react';

function App() {
  let [showModal, setShowModal] = useState(false); // true면 모달 띄우고, false면 안띄움

  function modalClose() {
    setShowModal(false);
  }

  return (
    <div className="App">
      <button onClick={()=>{setShowModal(true);}}>모달창 열기</button>

      {/* // showModal이 true일때만 <Modal /> 실행 */}
      {/* && : 둘다 맞으면 true,, 앞에꺼가 틀리면 뒤에껀 검사 안함 */}
      {showModal && <Modal id={'modal-1'} 
        onClose={modalClose} 
        _body={<div>모달창 바디</div>}
        _header={<div><p>Title</p></div>}
        _footer={<h2>Footer</h2>}
      />}

    </div>
  );
}

export default App;
