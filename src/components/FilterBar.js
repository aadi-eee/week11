function FilterBar({ options, selected, onSelect }) {
  return (
    <div className="filter-bar">
      {options.map((option) => (
        <button
          key={option}
          className={option === selected ? "active" : ""}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;