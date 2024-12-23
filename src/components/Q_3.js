import React,{useState} from 'react';

function Q_3(props) {

  const [ans, setAns] = useState();
  const [submit, setSubmit] = useState(true);

  function checkanswer(e){
    e.preventDefault();

  }

  function getAnswer(val){
    setAns(val.target.value);
  }

  const handleSubmit = () => {
    if (ans === 'A) H2O') {
      props.onCorrectAnswer(); // Notify parent component of the correct answer
      alert('Correct Answer!');
      setSubmit(false);
    } else {
      alert('Incorrect Answer.');
      setSubmit(false);
    }
  };

  return (
    <div>
      <h1>3. What is the chemical symbol for water?</h1>
      <section>
      <form style={{fontSize:"26px", padding:'50px'}} onSubmit={checkanswer}>
          <label style={{padding:'50px'}}><input onChange={getAnswer} name='radio' type='radio' value={props.option1}></input>{props.option1}</label>
          <label style={{padding:'50px'}}><input onChange={getAnswer} name='radio' type='radio' value={props.option2}></input>{props.option2}</label>
          <label style={{padding:'50px'}}><input onChange={getAnswer} name='radio' type='radio' value={props.option3}></input>{props.option3}</label>
          <label style={{padding:'50px'}}><input onChange={getAnswer} name='radio' type='radio' value={props.option4}></input>{props.option4}</label>
          <br/>
          {submit?<button type='submit' onClick={handleSubmit}>Submit</button>:null}
      </form>
      </section>
    </div>
  );
}

export default Q_3;