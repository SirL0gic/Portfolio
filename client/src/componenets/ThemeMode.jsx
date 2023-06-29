// Dark Mode toggle
let DarkModeToggle = ({ darkModeStatus, handleToggle }) => {
    return (
      <label
        className={`toggle-switch ${
          darkModeStatus ? "dark-theme" : "light-theme"
        }`}
      >
        <input type="checkbox" checked={darkModeStatus} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    );
  };

export default DarkModeToggle;