'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJsButtons = require('draft-js-buttons');

var _BlockTypeSelect = require('../BlockTypeSelect');

var _BlockTypeSelect2 = _interopRequireDefault(_BlockTypeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultBlockTypeSelect = function DefaultBlockTypeSelect(_ref) {
  var getEditorState = _ref.getEditorState,
      setEditorState = _ref.setEditorState,
      theme = _ref.theme;
  return _react2.default.createElement(_BlockTypeSelect2.default, {
    getEditorState: getEditorState,
    setEditorState: setEditorState,
    theme: theme,
    structure: [_draftJsButtons.HeadlineOneButton, _draftJsButtons.HeadlineTwoButton, _draftJsButtons.UnorderedListButton, _draftJsButtons.OrderedListButton, _draftJsButtons.BlockquoteButton, _draftJsButtons.CodeBlockButton]
  });
}; // eslint-disable-line import/no-unresolved

exports.default = DefaultBlockTypeSelect;