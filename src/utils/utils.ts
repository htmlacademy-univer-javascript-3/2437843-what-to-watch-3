import {Action} from '@reduxjs/toolkit';

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);
