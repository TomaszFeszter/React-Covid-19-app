import React, { useState } from "react";
import { withMargin } from "../../hoc/withMargin";

export const Tab = withMargin(({ title, active, children }) => {
  return active && children;
});

export const Tabs = withMargin(({ children }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs">
      <div>
        {React.Children.map(children, (child, index) => {
          return (
            <div className="tab" onClick={() => setActive(index)}>
              {child.props.title}
            </div>
          );
        })}
      </div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { active: index === active });
        }
        return child;
      })}
    </div>
  );
});
