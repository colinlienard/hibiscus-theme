import { ui, code } from './colors';

export function getTheme(name: string) {
  return {
    name,
    colors: {
      focusBorder: ui.transparent,
      foreground: ui.foreground,
      descriptionForeground: ui.foreground,
      // errorForeground: ui.debug,

      'textLink.foreground': ui.primaryLight,
      'textLink.activeForeground': ui.primaryLighter,
      // 'textBlockQuote.background': ui.debug,
      // 'textBlockQuote.border': ui.debug,
      'textCodeBlock.background': ui.backgroundLighter,
      // 'textPreformat.foreground': ui.debug,
      // 'textSeparator.foreground': ui.debug,

      'icon.foreground': ui.foregroundDark,
      // 'keybindingLabel.foreground': ui.debug,

      'button.background': ui.primary,
      'button.foreground': ui.foregroundLight,
      'button.hoverBackground': ui.primaryDark,

      // 'button.secondaryBackground': ui.debug,
      // 'button.secondaryForeground': ui.debug,
      // 'button.secondaryHoverBackground': ui.debug,

      // 'checkbox.background': ui.debug,
      // 'checkbox.border': ui.debug,

      // 'dropdown.background': ui.debug,
      // 'dropdown.border': ui.debug,
      // 'dropdown.foreground': ui.debug,
      // 'dropdown.listBackground': ui.debug,

      'input.background': ui.backgroundLight,
      'input.border': ui.borderLight,
      'input.foreground': ui.foreground,
      'input.placeholderForeground': ui.foregroundDark,

      'badge.foreground': ui.background,
      'badge.background': ui.secondary,

      // 'progressBar.background': ui.debug,

      'titleBar.activeForeground': ui.foreground,
      'titleBar.activeBackground': ui.background,
      'titleBar.inactiveForeground': ui.foregroundDark,
      'titleBar.inactiveBackground': ui.background,
      'titleBar.border': ui.border,

      'activityBar.foreground': ui.foreground,
      'activityBar.inactiveForeground': ui.foregroundDark,
      'activityBar.background': ui.background,
      'activityBarBadge.foreground': ui.foregroundLight,
      'activityBarBadge.background': ui.primary,
      'activityBar.activeBorder': ui.primary,
      'activityBar.border': ui.border,

      'sideBar.foreground': ui.foreground,
      'sideBar.background': ui.background,
      'sideBar.border': ui.border,
      'sideBarTitle.foreground': ui.foreground,
      'sideBarSectionHeader.foreground': ui.foreground,
      'sideBarSectionHeader.background': ui.background,
      'sideBarSectionHeader.border': ui.border,

      'list.hoverForeground': ui.foregroundLight,
      'list.inactiveSelectionForeground': ui.foreground,
      'list.activeSelectionForeground': ui.foregroundLight,
      'list.hoverBackground': ui.backgroundLight,
      'list.inactiveSelectionBackground': ui.backgroundLight,
      'list.activeSelectionBackground': ui.backgroundLighter,
      // 'list.focusForeground': ui.debug,
      // 'list.focusBackground': ui.debug,
      // 'list.inactiveFocusBackground': ui.debug,
      // 'list.highlightForeground': ui.debug,

      'tree.indentGuidesStroke': ui.borderLight,

      'notificationCenterHeader.foreground': ui.foreground,
      'notificationCenterHeader.background': ui.background,
      'notifications.foreground': ui.foreground,
      'notifications.background': ui.background,
      'notifications.border': ui.border,
      'notificationsErrorIcon.foreground': ui.red,
      'notificationsWarningIcon.foreground': ui.yellow,
      'notificationsInfoIcon.foreground': ui.blue,

      'pickerGroup.border': ui.border,
      'pickerGroup.foreground': ui.foregroundLight,
      'quickInput.background': ui.background,
      'quickInput.foreground': ui.foreground,

      'statusBar.foreground': ui.foreground,
      'statusBar.background': ui.background,
      'statusBar.border': ui.border,
      'statusBar.focusBorder': ui.transparent,
      // 'statusBar.noFolderBackground': ui.debug,
      // 'statusBar.debuggingForeground': ui.debug,
      // 'statusBar.debuggingBackground': ui.debug,
      // 'statusBarItem.prominentBackground': ui.debug,
      'statusBarItem.remoteForeground': ui.foreground,
      'statusBarItem.remoteBackground': ui.background,
      'statusBarItem.hoverBackground': ui.backgroundLight,
      'statusBarItem.activeBackground': ui.backgroundLighter,
      'statusBarItem.focusBorder': ui.borderLight,

      'editorGroupHeader.tabsBackground': ui.background,
      'editorGroupHeader.tabsBorder': ui.border,
      'editorGroup.border': ui.border,

      'tab.activeForeground': ui.foregroundLight,
      'tab.inactiveForeground': ui.foreground,
      'tab.inactiveBackground': ui.background,
      'tab.activeBackground': ui.background,
      'tab.hoverBackground': ui.backgroundLight,
      // 'tab.unfocusedHoverBackground': ui.debug,
      'tab.border': ui.border,
      // 'tab.unfocusedActiveBorderTop': ui.debug,
      'tab.activeBorder': ui.border,
      // 'tab.unfocusedActiveBorder': ui.debug,
      'tab.activeBorderTop': ui.primary,

      'breadcrumb.foreground': ui.foregroundDark,
      'breadcrumb.focusForeground': ui.foreground,
      'breadcrumb.activeSelectionForeground': ui.foregroundLight,
      'breadcrumbPicker.background': ui.background,

      'editor.foreground': ui.foreground,
      'editor.background': ui.background,
      'editorWidget.background': ui.background,
      // 'editor.foldBackground': ui.debug,
      'editor.lineHighlightBackground': ui.backgroundLight,
      'editor.lineHighlightBorder': ui.transparent,
      'editorLineNumber.foreground': ui.foregroundDark,
      'editorLineNumber.activeForeground': ui.foreground,
      'editorIndentGuide.background': ui.borderLight,
      'editorIndentGuide.activeBackground': ui.borderLighter,
      'editorWhitespace.foreground': ui.foregroundDark,
      'editorCursor.foreground': ui.foreground,

      'editor.findMatchBackground': ui.backgroundBrighter,
      'editor.findMatchHighlightBackground': ui.backgroundBright,
      // 'editor.linkedEditingBackground': ui.debug,
      // 'editor.inactiveSelectionBackground': ui.debug,
      'editor.selectionBackground': ui.backgroundLighter,
      'editor.selectionHighlightBackground': ui.backgroundLighter,
      'editor.wordHighlightBackground': ui.backgroundBrighter,
      'editor.wordHighlightBorder': ui.transparent,
      'editor.wordHighlightStrongBackground': ui.backgroundLighter,
      'editor.wordHighlightStrongBorder': ui.borderLighter,
      'editorBracketMatch.background': ui.backgroundLighter,
      'editorBracketMatch.border': ui.borderLighter,

      // 'editorInlayHint.background': ui.debug,
      // 'editorInlayHint.foreground': ui.debug,
      // 'editorInlayHint.typeBackground': ui.debug,
      // 'editorInlayHint.typeForeground': ui.debug,
      // 'editorInlayHint.paramBackground': ui.debug,
      // 'editorInlayHint.paramForeground': ui.debug,

      // 'editorGutter.modifiedBackground': ui.debug,
      // 'editorGutter.addedBackground': ui.debug,
      // 'editorGutter.deletedBackground': ui.debug,

      'diffEditor.insertedTextBackground': alpha(ui.green, 30),
      'diffEditor.removedTextBackground': alpha(ui.red, 30),

      'scrollbar.shadow': ui.transparent,
      'scrollbarSlider.background': alpha(ui.backgroundBrighter, 50),
      'scrollbarSlider.hoverBackground': alpha(ui.backgroundBrighter, 70),
      'scrollbarSlider.activeBackground': alpha(ui.backgroundBrighter, 90),
      'editorOverviewRuler.border': ui.border,

      // 'minimapSlider.background': lightDark(alpha(scale.gray[4], 0.2), alpha(scale.gray[3], 0.2)),
      // 'minimapSlider.hoverBackground': lightDark(alpha(scale.gray[4], 0.24), alpha(scale.gray[3], 0.24)),
      // 'minimapSlider.activeBackground': lightDark(alpha(scale.gray[4], 0.28), alpha(scale.gray[3], 0.28)),

      'panel.background': ui.background,
      'panel.border': ui.border,
      'panelTitle.activeBorder': ui.primary,
      'panelTitle.activeForeground': ui.foregroundLight,
      'panelTitle.inactiveForeground': ui.foreground,
      'panelInput.border': ui.borderLight,

      // 'debugIcon.breakpointForeground': ui.debug,

      // 'debugConsole.infoForeground': lightDark(scale.gray[6], scale.gray[3]),
      // 'debugConsole.warningForeground': lightDark(scale.yellow[6], scale.yellow[3]),
      // 'debugConsole.errorForeground': lightDark(scale.red[5], scale.red[2]),
      // 'debugConsole.sourceForeground': lightDark(scale.yellow[5], scale.yellow[2]),
      // 'debugConsoleInputIcon.foreground': lightDark(scale.purple[6], scale.purple[3]),

      // 'debugTokenExpression.name': lightDark(scale.blue[6], scale.blue[2]),
      // 'debugTokenExpression.value': lightDark(scale.blue[8], scale.blue[1]),
      // 'debugTokenExpression.string': lightDark(scale.blue[8], scale.blue[1]),
      // 'debugTokenExpression.boolean': lightDark(scale.green[6], scale.green[2]),
      // 'debugTokenExpression.number': lightDark(scale.green[6], scale.green[2]),
      // 'debugTokenExpression.error': lightDark(scale.red[6], scale.red[2]),

      // 'symbolIcon.arrayForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.booleanForeground': lightDark(scale.blue[6], scale.blue[3]),
      // 'symbolIcon.classForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.colorForeground': lightDark(scale.blue[8], scale.blue[2]),
      // 'symbolIcon.constructorForeground': lightDark(scale.purple[8], scale.purple[2]),
      // 'symbolIcon.enumeratorForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.enumeratorMemberForeground': lightDark(scale.blue[6], scale.blue[3]),
      // 'symbolIcon.eventForeground': lightDark(scale.gray[6], scale.gray[4]),
      // 'symbolIcon.fieldForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.fileForeground': lightDark(scale.yellow[6], scale.yellow[3]),
      // 'symbolIcon.folderForeground': lightDark(scale.yellow[6], scale.yellow[3]),
      // 'symbolIcon.functionForeground': lightDark(scale.purple[6], scale.purple[3]),
      // 'symbolIcon.interfaceForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.keyForeground': lightDark(scale.blue[6], scale.blue[3]),
      // 'symbolIcon.keywordForeground': lightDark(scale.red[6], scale.red[3]),
      // 'symbolIcon.methodForeground': lightDark(scale.purple[6], scale.purple[3]),
      // 'symbolIcon.moduleForeground': lightDark(scale.red[6], scale.red[3]),
      // 'symbolIcon.namespaceForeground': lightDark(scale.red[6], scale.red[3]),
      // 'symbolIcon.nullForeground': lightDark(scale.blue[6], scale.blue[3]),
      // 'symbolIcon.numberForeground': lightDark(scale.green[6], scale.green[3]),
      // 'symbolIcon.objectForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.operatorForeground': lightDark(scale.blue[8], scale.blue[2]),
      // 'symbolIcon.packageForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.propertyForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.referenceForeground': lightDark(scale.blue[6], scale.blue[3]),
      // 'symbolIcon.snippetForeground': lightDark(scale.blue[6], scale.blue[3]),
      // 'symbolIcon.stringForeground': lightDark(scale.blue[8], scale.blue[2]),
      // 'symbolIcon.structForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.textForeground': lightDark(scale.blue[8], scale.blue[2]),
      // 'symbolIcon.typeParameterForeground': lightDark(scale.blue[8], scale.blue[2]),
      // 'symbolIcon.unitForeground': lightDark(scale.blue[6], scale.blue[3]),
      // 'symbolIcon.variableForeground': lightDark(scale.orange[6], scale.orange[3]),
      // 'symbolIcon.constantForeground': lightDark(scale.green[6], scale.green),

      // 'terminal.foreground': color.fg.default,
      // 'terminal.ansiBlack': color.ansi.black,
      // 'terminal.ansiRed': color.ansi.red,
      // 'terminal.ansiGreen': color.ansi.green,
      // 'terminal.ansiYellow': color.ansi.yellow,
      // 'terminal.ansiBlue': color.ansi.blue,
      // 'terminal.ansiMagenta': color.ansi.magenta,
      // 'terminal.ansiCyan': color.ansi.cyan,
      // 'terminal.ansiWhite': color.ansi.white,
      // 'terminal.ansiBrightBlack': color.ansi.blackBright,
      // 'terminal.ansiBrightRed': color.ansi.redBright,
      // 'terminal.ansiBrightGreen': color.ansi.greenBright,
      // 'terminal.ansiBrightYellow': color.ansi.yellowBright,
      // 'terminal.ansiBrightBlue': color.ansi.blueBright,
      // 'terminal.ansiBrightMagenta': color.ansi.magentaBright,
      // 'terminal.ansiBrightCyan': color.ansi.cyanBright,
      // 'terminal.ansiBrightWhite': color.ansi.whiteBright,

      'editorBracketHighlight.foreground1': ui.blue,
      'editorBracketHighlight.foreground2': ui.yellow,
      'editorBracketHighlight.foreground3': ui.green,
      'editorBracketHighlight.unexpectedBracket.foreground': ui.foregroundDark,

      'gitDecoration.addedResourceForeground': ui.green,
      'gitDecoration.modifiedResourceForeground': ui.blue,
      'gitDecoration.deletedResourceForeground': ui.red,
      'gitDecoration.untrackedResourceForeground': ui.green2,
      'gitDecoration.ignoredResourceForeground': ui.foregroundDark,
      // 'gitDecoration.conflictingResourceForeground': ui.debug,
      // 'gitDecoration.submoduleResourceForeground': ui.debug,

      // 'debugToolBar.background': color.canvas.overlay,
      // 'editor.stackFrameHighlightBackground': color.attention.muted,
      // 'editor.focusedStackFrameHighlightBackground': color.success.muted,

      // 'peekViewEditor.matchHighlightBackground': onlyDark(color.attention.muted),
      // 'peekViewResult.matchHighlightBackground': onlyDark(color.attention.muted),
      // 'peekViewEditor.background': onlyDark(color.neutral.subtle),
      // 'peekViewResult.background': onlyDark(scale.gray[9]),

      // 'settings.headerForeground': color.fg.default,
      // 'settings.modifiedItemIndicator': color.attention.muted,
      'welcomePage.buttonBackground': ui.primary,
      'welcomePage.buttonHoverBackground': ui.primaryDark,
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
          foreground: code.comment,
        },
      },
      {
        scope: [
          'delimiter.bracket',
          'delimiter',
          'invalid.illegal.character-not-allowed-here.html',
          'keyword.operator.rest',
          'keyword.operator.spread',
          'keyword.operator.type.annotation',
          'keyword.operator.relational',
          'keyword.operator.assignment',
          'meta.brace',
          'meta.tag.block.any.html',
          'meta.tag.inline.any.html',
          'meta.tag.structure.input.void.html',
          'meta.type.annotation',
          'meta.embedded.block.github-actions-expression',
          'storage.type.function.arrow',
          'keyword.operator.type',
          'meta.objectliteral.ts',
          'punctuation',
        ],
        settings: {
          foreground: code.punctuation,
        },
      },
      {
        scope: ['constant', 'entity.name.constant', 'variable.language', 'meta.definition.variable'],
        settings: {
          foreground: code.constant,
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: code.function,
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground: code.foreground,
        },
      },
      {
        scope: ['entity.name.tag', 'tag.html'],
        settings: {
          foreground: code.keyword,
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: code.function,
        },
      },
      {
        scope: ['keyword', 'storage.type.class.jsdoc'],
        settings: {
          foreground: code.keyword,
        },
      },
      {
        scope: ['storage', 'storage.type', 'support.type.builtin', 'constant.language.undefined', 'constant.language.null'],
        settings: {
          foreground: code.builtin,
        },
      },
      {
        scope: ['text.html.derivative', 'storage.modifier.package', 'storage.modifier.import', 'storage.type.java'],
        settings: {
          foreground: code.foreground,
        },
      },
      {
        scope: ['string', 'string punctuation.section.embedded source', 'attribute.value'],
        settings: {
          foreground: code.string,
        },
      },
      {
        scope: ['punctuation.definition.string', 'punctuation.support.type.property-name'],
        settings: {
          foreground: code.string,
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: code.property,
        },
      },
      {
        scope: ['property', 'meta.property-name', 'meta.object-literal.key', 'entity.name.tag.yaml', 'attribute.name'],
        settings: {
          foreground: code.property,
        },
      },
      {
        scope: ['entity.other.attribute-name', 'invalid.deprecated.entity.other.attribute-name.html'],
        settings: {
          foreground: code.variable,
        },
      },
      {
        scope: ['variable', 'identifier'],
        settings: {
          foreground: code.variable,
        },
      },
      {
        scope: ['support.type.primitive', 'entity.name.type'],
        settings: {
          foreground: code.type,
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: code.namespace,
        },
      },
      {
        scope: ['keyword.operator', 'keyword.operator.assignment.compound', 'meta.var.expr.ts'],
        settings: {
          foreground: code.operator,
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          // foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          // foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          // foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          // foreground: primer.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          // background: pick({ light: primer.red[5], dark: primer.red[6] }),
          // foreground: primer.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          // foreground: primer.red[7],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: code.string,
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: code.regex,
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: code.string,
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          // foreground: code.yellow,
          foreground: code.boolean,
        },
      },
      {
        scope: ['support.constant'],
        settings: {
          foreground: code.constant,
        },
      },
      {
        scope: ['constant.numeric', 'number'],
        settings: {
          foreground: code.number,
        },
      },
      {
        scope: ['keyword.other.unit'],
        settings: {
          foreground: code.builtin,
        },
      },
      {
        scope: ['constant.language.boolean', 'constant.language'],
        settings: {
          foreground: code.boolean,
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: ui.primary,
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: code.punctuation,
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: ui.primary,
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: code.interface,
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: code.foreground,
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: code.foreground,
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: ui.primary,
        },
      },
      {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: {
          // background: primer.red[0],
          // foreground: primer.red[7],
        },
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: {
          // background: primer.green[0],
          // foreground: primer.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          // background: primer.orange[1],
          // foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          // foreground: primer.gray[1],
          // background: primer.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          // foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          // foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          // foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          // foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          // foreground: primer.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          // foreground: primer.red[7],
        },
      },
      {
        scope: [
          'constant.other.reference.link',
          'string.other.link',
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
        ],
        settings: {
          foreground: code.string,
        },
      },
      {
        scope: ['markup.underline.link.markdown'],
        settings: {
          foreground: code.foreground,
          fontStyle: 'underline',
        },
      },
      {
        scope: ['type.identifier'],
        settings: {
          foreground: code.class,
        },
      },
      {
        scope: ['entity.other.attribute-name.html.vue'],
        settings: {
          foreground: code.function,
        },
      },
      {
        scope: ['invalid.illegal.unrecognized-tag.html'],
        settings: {
          fontStyle: 'normal',
        },
      },
    ],
  };
}

function alpha(color: string, alpha: number) {
  return `${color}${alpha}`;
}
