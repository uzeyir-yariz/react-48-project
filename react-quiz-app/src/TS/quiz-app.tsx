import { useState } from "react";

const Quiz = () => {

    const questions = [
        {
          quest_text: 'in which galaxy is the earth located.',
          answer_opt: [
            { answer_text: 'Milky Way', is_correct: true },
            { answer_text: 'Andromeda Galaxy', is_correct: false },
            { answer_text: 'Virgo Supercluster', is_correct: false },
            { answer_text: 'Black Eye Galaxy', is_correct: false }
          ]
        },
        {
          quest_text: 'What is the capital of France?',
          answer_opt: [
            { answer_text: 'Paris', is_correct: true },
            { answer_text: 'London', is_correct: false },
            { answer_text: 'Berlin', is_correct: false },
            { answer_text: 'Madrid', is_correct: false }
          ]
        },
        {
          quest_text: 'Who wrote "Romeo and Juliet"?',
          answer_opt: [
            { answer_text: 'William Shakespeare', is_correct: true },
            { answer_text: 'Jane Austen', is_correct: false },
            { answer_text: 'Charles Dickens', is_correct: false },
            { answer_text: 'Mark Twain', is_correct: false }
          ]
        }
    ];
      
    const [current_quest, setcurrent_quest] = useState(0);
    const [show_score, setshow_score] = useState(false);
    const [score, setscore] = useState(0);

    const handleAnswerOptionClick = (is_correct) => {
        if(is_correct) {
            setscore(score + 1);
        }

        const next_quest = current_quest + 1;
        if(next_quest < questions.length){
            setcurrent_quest(next_quest);
        } else{
            setshow_score(true);
        }
    };

    return (
        <div className='align-items-center gap-4 flex-column text-center justify-content-center'>
            {show_score ? (
                <div className="alert display-1 align-items-center m-auto"> {score} / {questions.length} </div>
            ) : (
                <>
                    <div className="display-6" id="quest-sect">
                        <div>{current_quest + 1} <span> / {questions.length}</span></div> 
                        <div className="alert alert-info"> {questions[current_quest].quest_text} </div>
                    </div>

                    <div id="answer-quest" className="d-flex gap-4 alert">
                        {questions[current_quest].answer_opt.map((answer_opt) => (
                            <button className="btn btn-primary w-50" onClick={() => handleAnswerOptionClick(answer_opt.is_correct)}> {answer_opt.answer_text} </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Quiz
