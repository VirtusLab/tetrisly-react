import { useState } from 'react';

export const useDragOver = () => {
  const [dragOver, setDragOver] = useState(false);

  const onDragEnter = () => setDragOver(true);
  const onDragLeave = () => setDragOver(false);
  const onDrop = () => setDragOver(false);

  return { dragOver, onDragEnter, onDragLeave, onDrop };
};
