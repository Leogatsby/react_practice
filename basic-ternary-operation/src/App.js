import { useState,useEffect } from 'react';


// 한박자 느리다는 단점이 있다. 이거 고쳐야함
function App() {

  const emotions = ["기모찌", "노말", "빡침"];
  const [ num, setNum ] = useState(0);
  const [ emotion, setEmotion] = useState(emotions[num]);

  
  const ChangeNum = () => {
    num == emotion.length ? setNum(0) : setNum(num+1)
    console.log(num);
  }

  const 기분바꾸기 = () => {
    ChangeNum();
    setEmotion(emotions[num]);
    console.log(emotions[num]);
  }

  useEffect(() => {
  }, [num,emotion])

  return (
    <>
      <div>
        {emotion === "노말" ? "노말 상태입니다.": "" }
        {emotion === "기모찌" ? "기모찌 상태입니다." : ""}
        {emotion === "빡침" ? "빡침 상태입니다.": "" }
      </div>
      <div>{num}</div>
      <button onClick={기분바꾸기}>기분 바꾸기</button>
    </>
  );
}

export default App;
