import PropTypes from "prop-types";
export const withMargin = (Component) => {
  const EnhancedComponent = ({
    mb,
    mt,
    m,
    mr,
    ml,
    pl,
    pr,
    pt,
    pb,
    p,
    mx,
    my,
    px,
    py,
    ...rest
  }) => {
    const additionalClasses = Object.entries({
      mb,
      mt,
      m,
      mr,
      ml,
      pl,
      pr,
      pt,
      pb,
      p,
      mx,
      my,
      px,
      py,
    })
      .filter(([key, value]) => typeof value === "number")
      .map(([key, value]) => `${key}-${value}`)
      .join(" ");

    return <Component additionalClasses={additionalClasses} {...rest} />;
  };

  EnhancedComponent.propTypes = {
    mb: PropTypes.number,
    mt: PropTypes.number,
    ml: PropTypes.number,
    mr: PropTypes.number,
    mx: PropTypes.number,
    my: PropTypes.number,
    m: PropTypes.number,
    pt: PropTypes.number,
    pb: PropTypes.number,
    px: PropTypes.number,
    py: PropTypes.number,
    pr: PropTypes.number,
    pl: PropTypes.number,
    p: PropTypes.number,
  };

  return EnhancedComponent;
};
