import PropTypes from 'prop-types';

export function DynamicPage({ layout }) {
  return (
    <div className="dynamic-page">
      {layout.map((item, index) => (
        <div key={index} className="page-item">
          {item === 'label' ? <label>Enter Your Name</label> :
           item === 'input' ? <input type="text" placeholder="Input Box" /> :
           item === 'age' ? <label>Age</label>:
           item === 'is working' ? <label>Is working</label>:
           item === 'checkbox' ? <input type="checkbox" /> :
           item === 'button' ? <button>Save</button> :
           item === 'table' ? <table><tbody><tr><td>Table Cell</td></tr></tbody></table> :
           <div>Unknown Element</div>}
        </div>
      ))}
    </div>
  );
}

DynamicPage.propTypes = {
  layout: PropTypes.arrayOf(PropTypes.string).isRequired
};
