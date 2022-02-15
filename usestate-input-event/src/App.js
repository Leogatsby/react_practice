import React, { useState } from 'react';

function App() {

  const [name,setName] = useState('백광일');
  const [nickname, setNickname] = useState('닉네임');

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  return (
    <div >
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
}

export default App;
