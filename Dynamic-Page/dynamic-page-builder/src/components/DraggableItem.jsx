import { useDraggable } from '@dnd-kit/core';
import PropTypes from 'prop-types';

export function DraggableItem({ id, type }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

  const renderContent = () => {
    switch (type) {
      case 'label':
        return <label>Enter Your Name</label>;
      case 'input':
        return <input type="text" placeholder="Input Box" />;
        case 'age':
        return <label>Age</label>;
        case 'is working':
        return <label>Is Working</label>;
      case 'checkbox':
        return <input type="checkbox" />;
      case 'button':
        return <button>Save Data</button>;
      case 'table':
        return <table><tbody><tr><td>Table Cell</td></tr></tbody></table>;
      default:
        return <div>Unknown Element</div>;
    }
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="draggable-item">
      {renderContent()}
    </div>
  );
}

DraggableItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['label', 'input', 'age', 'is working','checkbox', 'button', 'table']).isRequired
};
