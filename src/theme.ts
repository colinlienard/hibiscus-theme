import { ui, code } from './colors';

export function getTheme(name: string) {
  return {
    name,
    colors: {
      // focusBorder: code.border,
      // foreground: code.border,
      // descriptionForeground: code.border,
      // errorForeground: code.border,

      // 'textLink.foreground': code.background,
      // 'textLink.activeForeground': code.background,
      // 'textBlockQuote.background': code.background,
      // 'textBlockQuote.border': code.border,
      // 'textCodeBlock.background': code.background,
      // 'textPreformat.foreground': code.background,
      // 'textSeparator.foreground': code.background,

      // 'icon.foreground': color.fg.muted,
      // 'keybindingLabel.foreground': color.fg.default,

      'button.background': ui.primary,
      'button.foreground': ui.foreground,
      'button.hoverBackground': ui.darkPrimary,

      // 'button.secondaryBackground': color.btn.activeBg,
      // 'button.secondaryForeground': color.btn.text,
      // 'button.secondaryHoverBackground': color.btn.hoverBg,

      // 'checkbox.background': color.canvas.subtle,
      // 'checkbox.border': color.border.default,

      // 'dropdown.background': color.canvas.overlay,
      // 'dropdown.border': color.border.default,
      // 'dropdown.foreground': color.fg.default,
      // 'dropdown.listBackground': color.canvas.overlay,

      // 'input.background': color.canvas.default,
      // 'input.border': color.border.default,
      // 'input.foreground': color.fg.default,
      // 'input.placeholderForeground': color.fg.subtle,

      // 'badge.foreground': color.fg.onEmphasis,
      // 'badge.background': color.accent.emphasis,

      // 'progressBar.background': color.accent.emphasis,

      // 'titleBar.activeForeground': color.fg.muted,
      // 'titleBar.activeBackground': color.canvas.default,
      // 'titleBar.inactiveForeground': color.fg.muted,
      // 'titleBar.inactiveBackground': color.canvas.inset,
      // 'titleBar.border': color.border.default,

      'activityBar.foreground': ui.foreground,
      'activityBar.inactiveForeground': ui.inactiveForeground,
      'activityBar.background': ui.background,
      'activityBarBadge.foreground': ui.foreground,
      'activityBarBadge.background': ui.background,
      'activityBar.activeBorder': ui.border,
      'activityBar.border': ui.border,

      'sideBar.foreground': ui.foreground,
      'sideBar.background': ui.background,
      'sideBar.border': ui.border,
      'sideBarTitle.foreground': ui.foreground,
      'sideBarSectionHeader.foreground': ui.foreground,
      'sideBarSectionHeader.background': ui.background,
      'sideBarSectionHeader.border': ui.border,

      // 'list.hoverForeground': color.fg.default,
      // 'list.inactiveSelectionForeground': color.fg.default,
      // 'list.activeSelectionForeground': color.fg.default,
      // 'list.hoverBackground': color.neutral.subtle,
      // 'list.inactiveSelectionBackground': color.neutral.muted,
      // 'list.activeSelectionBackground': color.neutral.muted,
      // 'list.focusForeground': color.fg.default,
      // 'list.focusBackground': color.accent.subtle,
      // 'list.inactiveFocusBackground': color.accent.subtle,
      // 'list.highlightForeground': color.accent.fg,

      // 'tree.indentGuidesStroke': color.border.muted,

      // 'notificationCenterHeader.foreground': color.fg.muted,
      // 'notificationCenterHeader.background': color.canvas.subtle,
      // 'notifications.foreground': color.fg.default,
      // 'notifications.background': color.canvas.overlay,
      // 'notifications.border': color.border.default,
      // 'notificationsErrorIcon.foreground': color.danger.fg,
      // 'notificationsWarningIcon.foreground': color.attention.fg,
      // 'notificationsInfoIcon.foreground': color.accent.fg,

      // 'pickerGroup.border': color.border.default,
      // 'pickerGroup.foreground': color.fg.muted,
      // 'quickInput.background': color.canvas.overlay,
      // 'quickInput.foreground': color.fg.default,

      // 'statusBar.foreground': color.fg.muted,
      // 'statusBar.background': color.canvas.default,
      // 'statusBar.border': color.border.default,
      // 'statusBar.focusBorder': alpha(color.accent.emphasis, 0.5),
      // 'statusBar.noFolderBackground': color.canvas.default,
      // 'statusBar.debuggingForeground': color.fg.onEmphasis,
      // 'statusBar.debuggingBackground': color.danger.emphasis,
      // 'statusBarItem.prominentBackground': color.neutral.muted,
      // 'statusBarItem.remoteForeground': color.fg.default,
      // 'statusBarItem.remoteBackground': lightDark(color.scale.gray[1], color.scale.gray[6]),
      // 'statusBarItem.hoverBackground': alpha(color.fg.default, 0.08),
      // 'statusBarItem.activeBackground': alpha(color.fg.default, 0.12),
      // 'statusBarItem.focusBorder': color.accent.emphasis,

      'editorGroupHeader.tabsBackground': ui.background,
      'editorGroupHeader.tabsBorder': ui.border,
      'editorGroup.border': ui.border,

      'tab.activeForeground': ui.activeForeground,
      'tab.inactiveForeground': ui.inactiveForeground,
      'tab.inactiveBackground': ui.background,
      'tab.activeBackground': ui.activeBackground,
      'tab.hoverBackground': ui.foreground,
      // 'tab.unfocusedHoverBackground': color.neutral.subtle,
      'tab.border': ui.border,
      // 'tab.unfocusedActiveBorderTop': color.border.default,
      'tab.activeBorder': ui.border,
      // 'tab.unfocusedActiveBorder': color.canvas.default,
      'tab.activeBorderTop': ui.primary,

      // 'breadcrumb.foreground': color.fg.muted,
      // 'breadcrumb.focusForeground': color.fg.default,
      // 'breadcrumb.activeSelectionForeground': color.fg.muted,
      // 'breadcrumbPicker.background': color.canvas.overlay,

      'editor.foreground': ui.foreground,
      'editor.background': ui.background,
      'editorWidget.background': ui.background,
      // 'editor.foldBackground': alpha(color.neutral.emphasis, 0.1),
      // 'editor.lineHighlightBackground': color.codemirror.activelineBg,
      // 'editor.lineHighlightBorder': onlyDarkHighContrast(color.accent.fg),
      'editorLineNumber.foreground': ui.inactiveForeground,
      'editorLineNumber.activeForeground': ui.activeForeground,
      // 'editorIndentGuide.background': alpha(color.fg.default, 0.12),
      // 'editorIndentGuide.activeBackground': alpha(color.fg.default, 0.24),
      // 'editorWhitespace.foreground': lightDark(scale.gray[3], scale.gray[5]),
      'editorCursor.foreground': ui.primary,

      // 'editor.findMatchBackground': color.attention.emphasis,
      // 'editor.findMatchHighlightBackground': alpha(scale.yellow[1], 0.5),
      // 'editor.linkedEditingBackground': alpha(color.accent.fg, 0.07),
      // 'editor.inactiveSelectionBackground': alpha(color.accent.fg, 0.07),
      // 'editor.selectionBackground': alpha(color.accent.fg, 0.2),
      // 'editor.selectionHighlightBackground': alpha(scale.green[3], 0.25),
      // 'editor.wordHighlightBackground': alpha(color.neutral.subtle, 0.5),
      // 'editor.wordHighlightBorder': alpha(color.neutral.muted, 0.6),
      // 'editor.wordHighlightStrongBackground': alpha(color.neutral.muted, 0.3),
      // 'editor.wordHighlightStrongBorder': alpha(color.neutral.muted, 0.6),
      // 'editorBracketMatch.background': alpha(scale.green[3], 0.25),
      // 'editorBracketMatch.border': alpha(scale.green[3], 0.6),
      // // text selection for High Contrast themes
      // 'editor.selectionForeground': onlyHighContrast(color.fg.onEmphasis),
      // 'editor.selectionBackground': onlyHighContrast(color.neutral.emphasisPlus),
      // 'editor.inactiveSelectionBackground': onlyHighContrast(color.neutral.emphasis),

      // 'editorInlayHint.background': alpha(scale.gray[3], 0.2),
      // 'editorInlayHint.foreground': color.fg.muted,
      // 'editorInlayHint.typeBackground': alpha(scale.gray[3], 0.2),
      // 'editorInlayHint.typeForeground': color.fg.muted,
      // 'editorInlayHint.paramBackground': alpha(scale.gray[3], 0.2),
      // 'editorInlayHint.paramForeground': color.fg.muted,

      // 'editorGutter.modifiedBackground': color.attention.muted,
      // 'editorGutter.addedBackground': color.success.muted,
      // 'editorGutter.deletedBackground': color.danger.muted,

      // 'diffEditor.insertedLineBackground': lightDark(alpha(scale.green[1], 0.3), alpha(scale.green[5], 0.15)),
      // 'diffEditor.insertedTextBackground': lightDark(alpha(scale.green[2], 0.5), alpha(scale.green[3], 0.3)),
      // 'diffEditor.removedLineBackground': lightDark(alpha(scale.red[1], 0.3), alpha(scale.red[5], 0.15)),
      // 'diffEditor.removedTextBackground': lightDark(alpha(scale.red[3], 0.4), alpha(scale.red[3], 0.3)),

      // 'scrollbar.shadow': alpha(scale.gray[5], 0.2),
      // 'scrollbarSlider.background': lightDark(alpha(scale.gray[4], 0.2), alpha(scale.gray[3], 0.2)),
      // 'scrollbarSlider.hoverBackground': lightDark(alpha(scale.gray[4], 0.24), alpha(scale.gray[3], 0.24)),
      // 'scrollbarSlider.activeBackground': lightDark(alpha(scale.gray[4], 0.28), alpha(scale.gray[3], 0.28)),
      // 'editorOverviewRuler.border': lightDark(scale.white, scale.black),

      // 'minimapSlider.background': lightDark(alpha(scale.gray[4], 0.2), alpha(scale.gray[3], 0.2)),
      // 'minimapSlider.hoverBackground': lightDark(alpha(scale.gray[4], 0.24), alpha(scale.gray[3], 0.24)),
      // 'minimapSlider.activeBackground': lightDark(alpha(scale.gray[4], 0.28), alpha(scale.gray[3], 0.28)),

      // 'panel.background': color.canvas.inset,
      // 'panel.border': color.border.default,
      // 'panelTitle.activeBorder': color.primer.border.active,
      // 'panelTitle.activeForeground': color.fg.default,
      // 'panelTitle.inactiveForeground': color.fg.muted,
      // 'panelInput.border': color.border.default,

      // 'debugIcon.breakpointForeground': color.danger.fg,

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

      // 'editorBracketHighlight.foreground1': lightDark(scale.blue[5], scale.blue[2]),
      // 'editorBracketHighlight.foreground2': lightDark(scale.green[5], scale.green[2]),
      // 'editorBracketHighlight.foreground3': lightDark(scale.yellow[5], scale.yellow[2]),
      // 'editorBracketHighlight.foreground4': lightDark(scale.red[5], scale.red[2]),
      // 'editorBracketHighlight.foreground5': lightDark(scale.pink[5], scale.pink[2]),
      // 'editorBracketHighlight.foreground6': lightDark(scale.purple[5], scale.purple[2]),
      // 'editorBracketHighlight.unexpectedBracket.foreground': color.fg.muted, // gray

      // 'gitDecoration.addedResourceForeground': color.success.fg,
      // 'gitDecoration.modifiedResourceForeground': color.attention.fg,
      // 'gitDecoration.deletedResourceForeground': color.danger.fg,
      // 'gitDecoration.untrackedResourceForeground': color.success.fg,
      // 'gitDecoration.ignoredResourceForeground': color.fg.subtle,
      // 'gitDecoration.conflictingResourceForeground': color.severe.fg,
      // 'gitDecoration.submoduleResourceForeground': color.fg.muted,

      // 'debugToolBar.background': color.canvas.overlay,
      // 'editor.stackFrameHighlightBackground': color.attention.muted,
      // 'editor.focusedStackFrameHighlightBackground': color.success.muted,

      // 'peekViewEditor.matchHighlightBackground': onlyDark(color.attention.muted),
      // 'peekViewResult.matchHighlightBackground': onlyDark(color.attention.muted),
      // 'peekViewEditor.background': onlyDark(color.neutral.subtle),
      // 'peekViewResult.background': onlyDark(scale.gray[9]),

      // 'settings.headerForeground': color.fg.default,
      // 'settings.modifiedItemIndicator': color.attention.muted,
      // 'welcomePage.buttonBackground': color.btn.bg,
      // 'welcomePage.buttonHoverBackground': color.btn.hoverBg,
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
