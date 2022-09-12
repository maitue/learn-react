import { useEffect } from "react";
import { useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'Reactjs la gi? tai sao nen hoc reactjs'
    },
    {
        id: 2,
        name: 'SPA/MPA la gi?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function FakeChatApp() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        
        const hendleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, hendleComment)
        return () => { 
            window.removeEventListener(`lesson-${lessonId}`, hendleComment)
        }
    }, [lessonId])
    return ( 
        <div>
            <ul>
                {lessons.map(lesson => ( 
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' :
                                '#333'
                        }}
                        onClick={ ()=> setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default FakeChatApp;