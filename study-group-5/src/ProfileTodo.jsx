import React from 'react';
import './assets/css/todolist.css';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/todolist';

const ProfileTodo = () => {
  return (
    <section className="app-container">
      <ProfileCard />
      <TodoList />
    </section>
  );
};

export default ProfileTodo;
