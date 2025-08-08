import React, { useState } from 'react';
import './AddTodoForm.css';

    function AddTodoForm({onAddTodo}) {
        const [inputText, setInputText] = useState('');
        const [priority, setPriority] =useState('medium');
        

            const handleSubmit = (e) => {
            e.preventDefault();
            if (inputText.trim()) {
            onAddTodo(inputText,priority);
            setInputText('');
            setPriority('medium');
             }
            };
                
            
  
           
                return (
                <form onSubmit={handleSubmit} className="add-todo-form">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter a new TODO..."
                    className="todo-input"
                  />
                <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                      >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                        
                       
                        
                     
                        <button type="submit" className="add-btn">
                          Add TODO
                        </button>
                </form>
                );
    
  }
export default AddTodoForm;