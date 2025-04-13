import { components } from 'react-select'

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="radio"
          checked={props.isSelected}
          onChange={() => {}}
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            width: 16,
            height: 16,
            border: '2px solid #555',
            borderRadius: 2, // makes it square
            marginRight: 8,
            backgroundColor: props.isSelected ? '#555' : 'transparent',
            cursor: 'pointer',
          }}
        />
        <label style={{ cursor: 'pointer' }}>{props.label}</label>
      </div>
    </components.Option>
  )
}
export default CustomOption
