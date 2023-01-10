import React from "react";

type TodoItemProp = {
  id: number;
  content: string;
  isCompleted: boolean;
  toggleStatus: (id: number) => void;
};

const TodoItem = ({ id, content, isCompleted, toggleStatus }: TodoItemProp) => {
  console.log('TodoItem')
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <div onClick={() => toggleStatus(id)}>
        {content} - {isCompleted ? "Done" : "Not Done"}
      </div>
    </div>
  );
};

// const areEquals = (
//   prevProps: TodoItemProp,
//   currentProps: TodoItemProp
// ): boolean => {
//   if (
//     prevProps.id !== currentProps.id ||
//     prevProps.content !== currentProps.content ||
//     prevProps.isCompleted !== currentProps.isCompleted
//   ) {
//     return false;
//   }

//   return true;
// };

export default React.memo(TodoItem);  // areEquals
