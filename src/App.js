import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import './App.css';
        function App() {
            const [todos, setTodos] = useState([]);
            const [nextId, setNextId] = useState(1);
            // Load todos from localStorage on component mount
                useEffect(() => {
                const savedTodos = localStorage.getItem('todos');
                const savedNextId = localStorage.getItem('nextId');
                if (savedTodos) {
                setTodos(JSON.parse(savedTodos));
                } else {
                // Default todos if none saved
                setTodos([
                { id: 1, text: 'Learn React basics', completed: false, priority:'High'},
                { id: 2, text: 'Build a TODO app', completed: false, priority:'eMdium' },
                { id: 3, text: 'Master React hooks', completed: false, priority:'Low' }
                ]);
                setNextId(4);
                }
                if (savedNextId) {
                setNextId(parseInt(savedNextId));
                }
                }, []); // Empty dependency array means this runs once on mount
                // Save todos to localStorage whenever todos change
                useEffect(() => {
                if (todos.length > 0) {
                localStorage.setItem('todos', JSON.stringify(todos));
                }
                }, [todos]); // This runs whenever todos array changes
                // Save nextId to localStorage whenever it changes
                useEffect(() => {
                localStorage.setItem('nextId', nextId.toString());
                }, [nextId]);
                const addTodo = (text) => {
                const newTodo = {
                id: nextId,
                text: text,
                completed: false
                };
                setTodos([...todos, newTodo]);
                setNextId(nextId + 1);
                };
                const toggleTodo = (id) => {
                setTodos(todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
                ));
                };
                const deleteTodo = (id) => {
                setTodos(todos.filter(todo => todo.id !== id));
                };
                    return (
                        <div className="App">
                            <header className="App-header">
                                <h1>My TODO App</h1>
                            </header>
                            <main>
                                <AddTodoForm 
                                onAddTodo={addTodo} 
                                />
                                
                                    {todos.length === 0 ? (
                                        <p className="no-todos">No TODOs yet. Add one above!</p>) : (
                                    <ul className="todo-list">
                                    {todos.map(todo => (
                                        
                                        <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        onToggle={toggleTodo}
                                        onDelete={deleteTodo}
                                        />                                       
                                    ))}
                                    </ul>
                                    
                                      )}
                                    <div className="todo-stats">
                                        <p>Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}</p>
                                    </div>
                            </main>
                        </div>
                    );
        }
export default App;