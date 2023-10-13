"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = index_component;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function index_component() {
  var handleSecondary = function handleSecondary() {
    alert("You are click Secondary Button");
  };
  var handleSuccess = function handleSuccess() {
    alert("You are click Success Button");
  };
  var handleError = function handleError() {
    alert("You are click Error Button");
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "This is a NPM REACT COMPONENT"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "secondary",
    onClick: handleSecondary
  }, "Secondary"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "success",
    onClick: handleSuccess
  }, "Success"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "outlined",
    color: "error",
    onClick: handleError
  }, "Error"));
}