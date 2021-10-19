/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { List, ListStyle } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';

import './style.css';

class Editor extends ClassicEditor {}

Editor.builtinPlugins = [
  Alignment,
  AutoLink,
  BlockQuote,
  Bold,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontSize,
  Heading,
  Highlight,
  HorizontalLine,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListStyle,
  MediaEmbed,
  Paragraph,
  RemoveFormat,
  Strikethrough,
  Underline,
  WordCount,
  SelectAll,
];

Editor.defaultConfig = {
  toolbar: {
    items: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      'alignment',
      '|',
      'heading',
      'blockQuote',
      '|',
      'link',
      'mediaEmbed',
      '|',
      'horizontalLine',
      'highlight',
      '|',
      'fontColor',
      'fontBackgroundColor',
      'fontSize',
      '|',
      'undo',
      'redo',
      'removeFormat',
      'selectAll',
    ],
    shouldGroupWhenFull: false,
    isFloating: false,
  },
};

export default Editor;
