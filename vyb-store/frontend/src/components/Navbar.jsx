import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div
      id="navbar"
      className="bubble-element Group bubble-r-container flex row"
      style={{
        backgroundColor: 'rgba(214, 214, 214, 0.4)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 20px',
      }}
    >
      {/* Logo Section */}
      <div className="clickable-element bubble-element CustomElement bubble-r-container flex column">
        <div className="bubble-element Image">
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717142581576x589293308934299500%2FLOGO.gif?w=96&h=58&auto=compress&dpr=1.25&fit=max"
            alt="Logo"
          />
        </div>
      </div>

      {/* Search Section */}
      <div
        className="bubble-element CustomElement bubble-r-container flex row"
        style={{
          gap: '10px',
          alignItems: 'center',
          flexGrow: 1,
          position: 'relative',
          display: 'flex',
        }}
      >
        {/* Search Input Container */}
        <div style={{ position: 'relative', flexGrow: 1 }}>
          <FaSearch
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              fontSize: '20px',
              color: 'var(--color_text_default)',
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 6px 6px 40px', 
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
            }}
          >
            <input
              type="text"
              placeholder="Search Creator"
              style={{
                flexGrow: 1,
                backgroundColor: 'transparent',
                fontSize: '14px',
                color: 'var(--color_text_default)',
                border: 'none',
                outline: 'none',
              }}
              autoComplete="off"
              spellCheck="false"
            />
            <div
              style={{
                display: 'flex',
                gap: '8px',
                marginLeft: '10px',
              }}
            >
              <div
                className="bubble-element Text bubble-r-vertical-center clickable-element"
                style={{
                  borderBottom: '2px solid var(--color_bTWEb0_default)',
                  cursor: 'pointer',
                }}
              >
                <div>Creator</div>
              </div>
              <div
                className="bubble-element Text bubble-r-vertical-center clickable-element"
                style={{
                  borderBottom: 'none',
                  cursor: 'pointer',
                }}
              >
                <div>Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div
        className="bubble-element RepeatingGroup bubble-rg flex row"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexGrow: 1,
          marginLeft: '500px',
        }}
      >
        <div className="clickable-element bubble-element Group bubble-r-container flex row">
          <div className="bubble-element Text">Contact Us</div>
        </div>
        <div
          className="clickable-element bubble-element Group bubble-r-container flex row"
          style={{ marginLeft: '20px' }}
        >
          <div className="bubble-element Text">About Us</div>
        </div>
        <div
          className="clickable-element bubble-element Group bubble-r-container flex row"
          style={{ marginLeft: '20px' }}
        >
          <div className="bubble-element Text">Policies</div>
        </div>
      </div>

      {/* Login Section */}
      <div
        className="bubble-element CustomElement bubble-r-container flex column"
        style={{ padding: '0 20px' }}
      >
        <div
          className="bubble-element Group bubble-r-container flex column"
          style={{ backgroundColor: 'var(--color_surface_default)', padding: '15px', borderRadius: '10px',
            border: '2px solid #ffffff',}}
        >
          <div className="clickable-element bubble-element Group bubble-r-container flex row">
            <div className="bubble-element Text bubble-r-vertical-center">
              <div>Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
