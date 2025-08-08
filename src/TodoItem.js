import React, { useState } from 'react';
import './TodoItem.css';
import './AddTodoForm.js';

        function TodoItem({todo, onToggle, onDelete, onEdit}) {
                 const { id, text, completed } = todo;
                const [isEditing, setIsEditing] = useState(false);
                const [editText, setEditText] = useState(text);

                const handleEditSubmit = (e) => {
                    e.preventDefault();
                    if (editText.trim() === '') return;
                    onEdit(id, editText.trim());
                    setIsEditing(false);
                };
                
               const getPriorityColor = (priority) => {
                  switch (priority) {
                    case 'High':
                      return 'red';
                    case 'Medium':
                      return 'orange';
                    case 'Low':
                      return 'green';
                    default:
                      return 'gray';
                  }
                };

        

 
            return (
                <li className="todo-item">
                    <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    />
                        <span
                            className={todo.completed ? 'completed' : ''}
                        >
                        {todo.text}
                        </span>
                        <span 
                        className="priority-label" 
                        style={{ backgroundColor: getPriorityColor(todo.priority)}}
                        >
                        {todo.priority}
                         </span>
                         
                        {isEditing ? (
                            <form onSubmit={handleEditSubmit} style={{ display: 'inline' }}>
                            <button type="submit" className='save-btn'>Save</button>
                            <button type="button" className='cancel-btn' onClick={() => setIsEditing(false)}>Cancel</button>
                            </form>
                        ) : (  <>
                            <span className={completed ? 'completed' : ''}>
                                
                            </span>
                            <button onClick={() => setIsEditing(true)}className='edit-btn'>Edit</button>
                            <button onClick={() => onDelete(id)} className="delete-btn">
                                Delete
                            </button>       
                            </>
                        )}

                </li>
            );
        }
        
export default TodoItem;
