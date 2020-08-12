import React from "react"
import "../styles/ResponsiveContainer.css"

/**
 * Responsive Container adapted from SaurabhTotey
 *
 * A component that represents a responsive container
 * Will hold elements horizontally unless screen width is small
 * If screen width is small, components will be held vertically
 * Expects a 'responsiveWidths' prop: is a list with as many entries as children
 * Each element of responsiveWidths must correspond to how large its corresponding child is in a row of 12 columns
 * Consequently, the sum of all elements in responsiveWidths should be 12
 */
export default props => (
  <div className={"responsiveContainer"}>
    {props.children.map((child, index) => (
      <div
        className={"responsiveContainerItem"}
        style={{ "--responsiveWidth": child.props.responsiveWidth }}
        key={index}
      >
        {child}
      </div>
    ))}
  </div>
)
