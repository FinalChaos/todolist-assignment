import React, { useState } from "react";

interface AddTodoFormProps {
    addTodo: (title: string, desc: string) => void;
}

/*
 * AddTodoForm: Create two input fields for title, and description string fields
 * As well as a submit button which creates the new To Do via addTodo 
 */
function AddTodoForm({ addTodo }: AddTodoFormProps) {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // #4 Block the default form submit by html 
        addTodo(title, desc);
        setTitle('');
        setDesc('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    value={title}  // # 5 The title field has to be associated with the title state. Otherwise the value does not clear when you add a ToDo
                    type="text"
                    placeholder="Provide a title for the new To Do"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={desc}
                    placeholder="Briefly describe the To Do task"
                    onChange={(e) => setDesc(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add To Do</button>
        </form>
    );
}

export default AddTodoForm;