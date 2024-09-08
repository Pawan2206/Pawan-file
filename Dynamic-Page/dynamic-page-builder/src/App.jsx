import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { DraggableItem } from './components/DraggableItem';
import { DynamicPage } from './components/DynamicPage';
import { LayoutControls } from './components/LayoutControls';

function App() {
  const [layout, setLayout] = useState([]);

  const handleDragEnd = (event) => {
    setLayout((prevLayout) => [...prevLayout, event.active.id]);
  };

  const publishLayout = () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(
      `<html><head><title>Published Page</title></head><body>${layout
        .map((item) => (item === 'label' ? 'Enter Your Name' : item))
        .join('<br/>')}</body></html>`
    );
    newWindow.document.close();
  };

  return (
    <div>
      <header className="header">
        <LayoutControls layout={layout} setLayout={setLayout} publishLayout={publishLayout} />
      </header>
      <div className="content">
        <div className="left-panel">
          <DndContext onDragEnd={handleDragEnd}>
            <DraggableItem id="label" type="label" />
            <DraggableItem id="input" type="input" />
            <DraggableItem id="age" type="age" />
            <DraggableItem id="is working" type="is working" />
            <DraggableItem id="checkbox" type="checkbox" />
            <DraggableItem id="button" type="button" />
            <DraggableItem id="table" type="table" />
          </DndContext>
        </div>
        <div className="right-panel">
          <DynamicPage layout={layout} />
        </div>
      </div>
    </div>
  );
}

export default App;

