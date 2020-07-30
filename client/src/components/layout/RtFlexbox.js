import styled from "styled-components";
import PropTypes from "prop-types";

const RtFlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  flex-basis: ${(props) => props.flexBasis};
  flex-wrap: ${(props) => props.flexWrap};
`;

RtFlexBox.propTypes = {
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.string,
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  alignItems: PropTypes.oneOf([
    "normal",
    "stretch",
    /* Positional alignment */
    /* align-items does not take left and right values */
    "center",
    "start",
    "end",
    "flex-start",
    "flex-end",
    "self-start",
    "self-end",
    /* Baseline alignment */
    "baseline",
    "first baseline",
    "last baseline",
    /* Overflow alignment (for positional alignment only) */
    "safe center",
    "unsafe center",
  ]),
  justifyContent: PropTypes.oneOf([
    /* Positional alignment */
    "center",
    "start",
    "end",
    "flex-start",
    "flex-end",
    "left",
    "right",
    /* Distributed alignment */
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    /* Overflow alignment */
    "safe center",
    "unsafe center",
  ]),
};

export default RtFlexBox;
