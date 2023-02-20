// @flow
import * as React from 'react';

type Props = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
};
function Todo({ todo }: Props) {
  const { id, title, completed } = todo;
  return <div data-testid="todo-1">{title}</div>;
}

export default Todo;
