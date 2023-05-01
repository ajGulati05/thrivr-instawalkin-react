//@flow
import * as React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { FormatMessage, MessageWrap } from "./styled";

const defaultShouldBeVisible = () => true;

const ErrorMessage = ({
  error,
  className,
  padding,
  pLeft,
  pRight,
  mLeft,
  mRight,
  elmMode,
  shouldBeVisible = defaultShouldBeVisible
}) => {
  return (
    <CSSTransition timeout={600} classNames="wrapped" unmountOnExit mountOnEnter in={true}>
      {error && error.message && shouldBeVisible(error) && (
        <FormatMessage
          className={className}
          padding={padding}
          pLeft={pLeft}
          pRight={pRight}
          mLeft={mLeft}
          mRight={mRight}
          elmMode={elmMode}
        >
          <i className="fa fa-exclamation-circle"></i>
          <MessageWrap>
            {error?.message.split("\n").map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </MessageWrap>
        </FormatMessage>
      )}
    </CSSTransition>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.object,
  className: PropTypes.string,
  elmMode: PropTypes.bool,
  shouldBeVisible: PropTypes.func
};

ErrorMessage.defaultProps = {
  elmMode: true
};

export default ErrorMessage;
