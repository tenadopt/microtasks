import React from 'react';
import {DataType} from "./App";

type  TasksType = {
    data: DataType
}

export const Tasks = (props: TasksType) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map(el=>
                    <div>
                    <span>{el.taskId}</span>
                    <span>{el.title}</span>
                    <span>{el.isDone}</span>
                    </div>
                )}
            </ul>
            <ul>
                {props.data.students.map(el=>
                <li>{el}</li>
            )}
            </ul>
        </div>
    );
};