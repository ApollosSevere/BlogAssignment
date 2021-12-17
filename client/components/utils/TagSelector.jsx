import React from "react";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

export const tagOptions = [
  { value: "Technology", label: "Technology" },
  { value: "Art", label: "Art" },
  { value: "Engineering", label: "Engineering" },
  { value: "Math", label: "Math" },
  { value: "Entertainment", label: "Entertainment" },
];

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function TagSelector({ optionSelected, setSelected }) {
  const handleChange = (selected) => {
    setSelected(selected);
  };

  return (
    <div className="selector" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <span
        className="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please select account(s)"
      >
        <ReactSelect
          options={tagOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option,
          }}
          onChange={handleChange}
          allowSelectAll={true}
          value={optionSelected}
        />
      </span>
    </div>
  );
}

export default TagSelector;
