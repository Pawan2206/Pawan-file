import PropTypes from 'prop-types';
import { useState } from 'react';

export function LayoutControls({ layout, setLayout, publishLayout }) {
  const [layoutName, setLayoutName] = useState('');

  const saveLayout = async () => {
    const response = await fetch('http://localhost:5000/layouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ layout, name: layoutName }),
    });
    if (response.ok) {
      alert('Layout saved successfully!');
    } else {
      alert('Error saving layout!');
    }
  };

  const loadLayout = async () => {
    const response = await fetch('http://localhost:5000/layouts');
    const data = await response.json();
    const savedLayout = data[0]?.layout || [];
    setLayout(savedLayout);
  };

  return (
    <div className="controls-container">
      <input
        type="text"
        value={layoutName}
        onChange={(e) => setLayoutName(e.target.value)}
        placeholder="Enter layout name"
      />
      <button onClick={saveLayout}>Save Layout</button>
      <button onClick={loadLayout}>Load Layout</button>
      <button onClick={publishLayout}>Publish</button>
    </div>
  );
}

LayoutControls.propTypes = {
  layout: PropTypes.array.isRequired,
  setLayout: PropTypes.func.isRequired,
  publishLayout: PropTypes.func.isRequired,
};
