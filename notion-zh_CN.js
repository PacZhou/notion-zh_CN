// ==UserScript==
// @name         Notion-zh_CN notion的汉化脚本
// @namespace    http://tampermonkey.net/
// @version      2.4.2
// @description  notion的100%汉化脚本，基于官方中文+机器翻译韩文，支持app版本以及网页油猴，地址：https://github.com/reamd7/notion-zh_CN
// @author       reamd7
// @match        *://www.notion.so/*
// @grant        none
// @run-at       document-start
// @copyright    2021, reamd7
// @license      MIT
// ==/UserScript==
(function () {
  "use strict";
  var lang = "zh-CN";
  var isSafari =
    navigator.userAgent.includes("Safari/") &&
    !navigator.userAgent.includes("Chrome/");
  var isElectron = "undefined" != typeof global || window.__isElectron;

  const scriptList = document.querySelectorAll("script[defer]");
  const scriptSrcList = Array.from(scriptList).map((v) => v.src);
  if (isSafari) {
    scriptList.forEach((v) => v.remove());
    document.getElementById("notion-app").remove();
  }

  const script = document.createElement("script");
  script.id = "messages";
  script.type = "application/json";
  script.setAttribute("data-locale", lang);
  script.text = JSON.stringify({
    "AuditLogSettings.copyAuditLogEvent": "复制行",
    "FrontPricingPage.individualSection.header": "个人使用",
    "FrontPricingPage.teamsAndBusinesses.header": "团队或企业",
    None: "无",
    "SidebarTimelineWarning.description":
      "你已达到团队版中的时间轴使用限制。升级以解除限制。",
    "SidebarTimelineWarning.header": "无限使用时间轴",
    "SidebarTimelineWarning.upgradeButton": "现在升级",
    "SpecificTeamMemberPermissionRow.permissionItem.rolePill.admin": "管理员",
    "TeamMemberOwnerSelect.guestLabel": "访客",
    "TeamMemberOwnerSelect.memberCaption":
      "对团队页面拥有访问权限但不能编辑团队设置",
    "TeamMemberOwnerSelect.memberLabel": "成员",
    "TeamMemberOwnerSelect.ownerCaption":
      "对团队页面拥有完整访问权限且可以编辑团队设置",
    "TeamMemberOwnerSelect.ownerLabel": "团队所有者",
    "TeamMemberOwnerSelect.remove": "移除",
    "TeamMemberOwnerSelect.roleName.comment_only": "可以评论",
    "TeamMemberOwnerSelect.roleName.content_only_editor": "可以编辑内容",
    "TeamMemberOwnerSelect.roleName.editor": "完整访问权限",
    "TeamMemberOwnerSelect.roleName.none": "无访问权限",
    "TeamMemberOwnerSelect.roleName.read_and_write": "可以编辑",
    "TeamMemberOwnerSelect.roleName.reader": "可以查看",
    "TeamMembersListSection.generalSection.members": "成员",
    "TeamMembersTopSection.header.openTeamSubtitle":
      "工作区中的每个人都可以访问此团队的页面",
    "TeamMembersTopSection.header.openTeamTitle": "打开团队",
    "TeamMembersTopSection.header.privateTeamSubtitle":
      "仅受邀请的团队成员对此团队有访问权限",
    "TeamMembersTopSection.header.privateTeamTitle": "私人团队",
    "TeamMembersTopSection.permissionItem.defaultAccessSpaceName":
      "{spaceName} 中的其他所有人",
    "TeamMembersTopSection.permissionItem.defaultAccessTeamName":
      "{teamName} 的团队成员",
    "TeamMembersTopSection.permissionItem.defaultAccessWithoutSpaceName":
      "工作区中的其他所有人",
    "TeamMembersTopSection.permissionItem.defaultAccessWithoutTeamName":
      "团队成员",
    "TeamOwnersPermissionRow.permissionItem.teamOwnersAccessToggleName":
      "{teamName} 的团队所有者",
    "TeamOwnersPermissionRow.permissionItem.teamOwnersAccessToggleNameWithoutTeamName":
      "团队所有者",
    "TeamOwnersPermissionRow.teamOwnersRowTooltip":
      "默认情况下，团队所有者对团队页面拥有完整访问权限",
    "TeamPermissionsListHeader.nameColumn": "名称",
    "TeamPermissionsListHeader.roleColumn": "角色",
    "TemporarySignUpEmail.signUpLink.continuedBody":
      "附言：此链接对你是唯一的，当你使用上面的按钮或链接时，该链接将失效。因此，请不要与任何人分享！",
    "TemporarySignUpEmail.signUpLink.linkAlternative":
      "按钮不起作用？你也可以通过将此 URL 粘贴到浏览器中来完成注册：",
    "TemporarySignUpEmail.signUpLink.subjectLine": "完成注册 Notion",
    "TemporarySignUpEmail.signUpLink.titleOfEmail": "即将完成！",
    "TemporarySignUpEmail.signUpLink.titleOfEmail.actionLink":
      "继续前往 Notion",
    "TemporarySignUpEmail.signUpLink.titleOfEmail.text":
      "你的新 Notion 帐户创建很快就要完成了。点击下面的按钮继续：",
    "UpdateSidebarFollowControl.follow.caption": "接收所有更新和评论通知",
    "UpdateSidebarFollowControl.follow.label": "关注",
    "UpdateSidebarFollowControl.following.caption": "接收所有更新和评论的通知",
    "UpdateSidebarFollowControl.following.label": "关注中",
    "UpdateSidebarFollowControl.notFollowing.caption": "永远不接收通知",
    "UpdateSidebarFollowControl.notFollowing.label": "未关注",
    "UpdateSidebarFollowControl.unfollow.caption": "不接收更新和评论通知",
    "UpdateSidebarFollowControl.unfollow.label": "取消关注",
    "abstractBlock.embeds.button.label": "嵌入 Abstract",
    "abstractBlock.embeds.caption": "适用于启用了公共访问的 Abstract 链接",
    "abstractBlock.placeholder": "嵌入 Abstract",
    "accountActions.deletingAccount.loadingMessage": "正在删除你的帐户⋯",
    "accountActions.deletingAccount.noUserToDeleteMessage":
      "没有要删除的帐户。",
    "action.activate.name": "启用",
    "action.addtoFavorites.name": "添加到最爱",
    "action.backgroundColor.blue.fuzzySearchKeyword": "蓝色背景 Bluebackground",
    "action.backgroundColor.blue.name": "蓝色背景",
    "action.backgroundColor.brown.fuzzySearchKeyword":
      "棕色背景 Brownbackground",
    "action.backgroundColor.brown.name": "棕色背景",
    "action.backgroundColor.default.fuzzySearchKeyword":
      "Default Black White 默认 moren mo'ren 黑 hei 白 bai",
    "action.backgroundColor.default.name": "默认背景",
    "action.backgroundColor.gray.fuzzySearchKeyword":
      "Grey Gray background 灰色 huise hui'se 背景 beijing bei'jing",
    "action.backgroundColor.gray.name": "灰色背景",
    "action.backgroundColor.green.name": "绿色背景",
    "action.backgroundColor.orange.fuzzySearchKeyword":
      "橙色背景 Orangebackground",
    "action.backgroundColor.orange.name": "橙色背景",
    "action.backgroundColor.pink.fuzzySearchKeyword": "粉色背景 Pinkbackground",
    "action.backgroundColor.pink.name": "粉色背景",
    "action.backgroundColor.purple.fuzzySearchKeyword":
      "紫色背景 Purplebackground",
    "action.backgroundColor.purple.name": "紫色背景",
    "action.backgroundColor.red.fuzzySearchKeyword": "红色背景 Redbackground",
    "action.backgroundColor.red.name": "红色背景",
    "action.backgroundColor.teal.fuzzySearchKeyword":
      "蓝绿色背景 Tealbackground Greenbackground",
    "action.backgroundColor.yellow.fuzzySearchKeyword":
      "黄色背景 Yellowbackground",
    "action.backgroundColor.yellow.name": "黄色背景",
    "action.backtoNotion.name": "回到 Notion",
    "action.boardColumns.name": "看板列",
    "action.bold.name": "加粗",
    "action.calendarBy.name": "日历显示",
    "action.caption.name": "标题",
    "action.clearContents.title": "清除内容",
    "action.clearDate.name": "清除日期",
    "action.clearSelection.name": "清除选择",
    "action.codePreviewSection.name": "在块中显示",
    "action.color.name": "颜色",
    "action.columnHeader.title": "标题行",
    "action.comment.name": "评论",
    "action.commentPage.name": "评论",
    "action.configure.name": "块设置",
    "action.connectSlack.title": "绑定 Slack",
    "action.contextMenu.name": "功能菜单",
    "action.copiedCodeToClipboard.snackBarMessage": "已将代码复制到剪贴板",
    "action.copiedLinkToClipboard.snackBarMessage": "已将链接复制到剪贴板",
    "action.copiedLinksToClipboard.snackBarMessage": "已将链接复制到剪贴板",
    "action.copiedPropertyToClipboard.snackBarMessage": "已将属性复制到剪贴板",
    "action.copiedToClipboard.snackBarMessage": "已复制到剪贴板",
    "action.copy.name": "复制",
    "action.copyDirectLink.name": "复制原始链接",
    "action.copyLink.name": "复制块链接",
    "action.copyLinkNavigableType.name": "复制链接",
    "action.copyLinkToCurrentPage.snackBarMessage":
      "指向当前页面的链接已复制到剪贴板。",
    "action.copyLinks.name": "复制链接到全部",
    "action.copyLinktoView.name": "复制视图链接",
    "action.createEquation.name": "创建公式",
    "action.createLink.name": "创建链接",
    "action.customizePage.label": "自定义页面",
    "action.cut.name": "剪切",
    "action.darkMode.name": "深色模式",
    "action.databaseLock.fuzzySearchKeywords":
      "数据库 shujuku shu'ju'ku 锁定 suoding suo'ding",
    "action.databaseLock.label": "锁定数据库",
    "action.databaseLock.tooltip":
      "锁定数据库属性和视图以防止意外编辑。你仍然可以在内部创建和编辑页面。",
    "action.dateOrReminder.description": "在文本中插入日期或提醒。",
    "action.dateOrReminder.title": "日期或提醒",
    "action.delete.name": "删除",
    "action.download.name": "下载",
    "action.duplicate.name": "创建副本",
    "action.duplicatePage.name": "创建副本页面",
    "action.duplicateTo.name": "保存副本到",
    "action.edit.name": "编辑",
    "action.editPage.name": "编辑",
    "action.editProperty.name": "编辑属性",
    "action.enter.name": "输入",
    "action.exitApp.name": "退出应用",
    "action.export.caption": "PDF、HTML、Markdown",
    "action.export.name": "导出",
    "action.filter.name": "筛选",
    "action.followPage.title": "关注页面",
    "action.fontSmallText.fuzzySearchKeywords":
      "Font Small Text 字体 ziti zi'ti 字号 zihao zi'hao 小字 xiaozi xiao'zi",
    "action.fontSmallText.label": "小字号",
    "action.foregroundColor.blue.fuzzySearchKeyword": "蓝色",
    "action.foregroundColor.blue.name": "蓝色",
    "action.foregroundColor.brown.fuzzySearchKeyword": "棕色",
    "action.foregroundColor.brown.name": "棕色",
    "action.foregroundColor.default.name": "默认",
    "action.foregroundColor.gray.fuzzySearchKeyword":
      "Grey Gray 灰色 huise hui'se",
    "action.foregroundColor.gray.name": "灰色",
    "action.foregroundColor.green.name": "绿色",
    "action.foregroundColor.orange.fuzzySearchKeyword": "橙色",
    "action.foregroundColor.orange.name": "橙色",
    "action.foregroundColor.pink.fuzzySearchKeyword": "粉色",
    "action.foregroundColor.pink.name": "粉色",
    "action.foregroundColor.purple.fuzzySearchKeyword": "紫色",
    "action.foregroundColor.purple.name": "紫色",
    "action.foregroundColor.red.fuzzySearchKeyword": "红色",
    "action.foregroundColor.red.name": "红色",
    "action.foregroundColor.teal.fuzzySearchKeyword": "蓝绿色",
    "action.foregroundColor.yellow.fuzzySearchKeyword": "黄色",
    "action.foregroundColor.yellow.name": "黄色",
    "action.fullScreen.name": "全屏",
    "action.fullWidth.fuzzySearchKeywords": "全 quan 宽 kuan",
    "action.fullWidth.label": "全宽",
    "action.goBack.name": "后退",
    "action.goForward.name": "前进",
    "action.goUp.name": "向上",
    "action.group.name": "分组",
    "action.groupBy.name": "分组",
    "action.highlight.name": "高亮",
    "action.import.name": "导入",
    "action.indent.name": "缩进",
    "action.insertBelow.name": "在下面插入",
    "action.insertColumnLeft.title": "在左侧插入",
    "action.insertColumnRight.title": "在右侧插入",
    "action.insertEmoji.description": "搜索要放在文本中的表情符号。",
    "action.insertEmoji.title": "表情符号",
    "action.insertInlineEquation.description": "在文本中插入数学符号。",
    "action.insertInlineEquation.fuzzySearchKeyword":
      "LaTeX Math Inline Equation $ TeX LaTex 方程式 fangchengshi fang'cheng'shi 数学 shuxue shu'xue 行内 hangnei hang'nei 公式 gongshi gong'shi",
    "action.insertInlineEquation.title": "行内公式",
    "action.insertRowAbove.title": "在上方插入",
    "action.insertRowBelow.title": "在下方插入",
    "action.italic.name": "斜体",
    "action.languageMode.abap": "ABAP",
    "action.languageMode.arduino": "Arduino",
    "action.languageMode.bash": "Bash",
    "action.languageMode.basic": "Basic",
    "action.languageMode.c": "C",
    "action.languageMode.clojure": "Clojure",
    "action.languageMode.coffeescript": "CoffeeScript",
    "action.languageMode.cplusplus": "C++",
    "action.languageMode.csharp": "C#",
    "action.languageMode.css": "CSS",
    "action.languageMode.cstyle": "Java/C/C++/C#",
    "action.languageMode.dart": "Dart",
    "action.languageMode.diff": "Diff",
    "action.languageMode.docker": "Docker",
    "action.languageMode.elixir": "Elixir",
    "action.languageMode.elm": "Elm",
    "action.languageMode.erlang": "Erlang",
    "action.languageMode.flow": "Flow",
    "action.languageMode.fortran": "Fortran",
    "action.languageMode.fsharp": "F#",
    "action.languageMode.gherkin": "Gherkin",
    "action.languageMode.glsl": "GLSL",
    "action.languageMode.go": "Go",
    "action.languageMode.graphql": "Graphql",
    "action.languageMode.groovy": "Groovy",
    "action.languageMode.haskell": "Haskell",
    "action.languageMode.html": "HTML",
    "action.languageMode.java": "Java",
    "action.languageMode.javascript": "JavaScript",
    "action.languageMode.json": "JSON",
    "action.languageMode.julia": "Julia",
    "action.languageMode.kotlin": "Kotlin",
    "action.languageMode.latex": "LaTeX",
    "action.languageMode.less": "LESS",
    "action.languageMode.lisp": "Lisp",
    "action.languageMode.livescript": "LiveScript",
    "action.languageMode.lua": "Lua",
    "action.languageMode.makefile": "Makefile",
    "action.languageMode.markdown": "Markdown",
    "action.languageMode.markup": "Markup",
    "action.languageMode.matlab": "MATLAB",
    "action.languageMode.mermaid": "Mermaid",
    "action.languageMode.name": "语言设置",
    "action.languageMode.nix": "Nix",
    "action.languageMode.objectiveC": "Objective-C",
    "action.languageMode.ocaml": "OCaml",
    "action.languageMode.pascal": "Pascal",
    "action.languageMode.perl": "Perl",
    "action.languageMode.php": "PHP",
    "action.languageMode.plaintext": "Plain Text",
    "action.languageMode.powershell": "Powershell",
    "action.languageMode.prolog": "Prolog",
    "action.languageMode.protobuf": "Protobuf",
    "action.languageMode.python": "Python",
    "action.languageMode.r": "R",
    "action.languageMode.reason": "Reason",
    "action.languageMode.ruby": "Ruby",
    "action.languageMode.rust": "Rust",
    "action.languageMode.sass": "Sass",
    "action.languageMode.scala": "Scala",
    "action.languageMode.scheme": "Scheme",
    "action.languageMode.scss": "SCSS",
    "action.languageMode.shell": "Shell",
    "action.languageMode.solidity": "坚固",
    "action.languageMode.sql": "SQL",
    "action.languageMode.swift": "Swift",
    "action.languageMode.typescript": "TypeScript",
    "action.languageMode.vbdotnet": "VB.net",
    "action.languageMode.verilog": "Verilog",
    "action.languageMode.vhdl": "VHDL",
    "action.languageMode.visualbasic": "Visual Basic",
    "action.languageMode.webassembly": "WebAssembly",
    "action.languageMode.xml": "XML",
    "action.languageMode.yaml": "YAML",
    "action.lastUsedHighlight.fuzzySearchKeywords":
      "Color last used 上次使用的颜色 shangcishiyongdeyanse shang'ci'shi'yong'de'yan'se 上次 shangci shang'ci 使用 shiyong shi'yong 颜色 yanse yan'se",
    "action.lastUsedHighlight.title": "上次使用",
    "action.leave.name": "离开",
    "action.linkedDatabaseLock.tooltip":
      "锁定被链接的数据库的属性和视图以防止意外编辑。你仍然可以在内部创建和编辑页面。",
    "action.listFormat.circle.name": "圆形",
    "action.listFormat.disc.name": "盘型",
    "action.listFormat.letters.default": "默认值",
    "action.listFormat.letters.name": "字母",
    "action.listFormat.letters.roman": "罗马数字",
    "action.listFormat.name": "列表格式",
    "action.listFormat.numbers.name": "数字",
    "action.listFormat.sectionName": "列表格式",
    "action.listFormat.square.name": "方形",
    "action.lockDatabaseName.name": "锁定数据库",
    "action.lockDatabaseViewsName.name": "锁定视图",
    "action.lockPage.name": "锁定页面",
    "action.logIn.name": "登录",
    "action.mentionPage.description": "提及页面并链接在文本中。",
    "action.mentionPage.title": "提及页面",
    "action.mentionPerson.description": "提及某人并向他们发送通知。",
    "action.mentionPerson.title": "提及人员",
    "action.mergewithCSV.name": "与 CSV 合并",
    "action.moveDown.name": "向下移动",
    "action.moveTo.name": "移动到",
    "action.moveUp.name": "向上移动",
    "action.navigateTo.name": "导航到",
    "action.newPage.name": "新页面",
    "action.newPageIn.name": "转换成页面到",
    "action.noDate.name": "无日期",
    "action.openAllToggles.name": "展开所有折叠列表",
    "action.openAsPage.name": "以全页面打开",
    "action.openInNewTab.name": "在新选项卡中打开",
    "action.openInNewWindow.name": "在新窗口中打开",
    "action.openPageInNewTab.name": "在新选项卡中打开页面",
    "action.openSettings.name": "打开设置",
    "action.openasPage.name": "以全页面打开",
    "action.openinAndroidApp.name": "在安卓应用中打开",
    "action.openinMacApp.name": "在 Mac 应用中打开",
    "action.openinWindowsApp.name": "在 Windows 应用中打开",
    "action.openiniOSApp.name": "在 iOS 应用中打开",
    "action.pageHistory.name": "页面历史记录",
    "action.pageLock.fuzzySearchKeywords":
      "锁定 suoding suo'ding 页面 yemian ye'mian",
    "action.pageLock.label": "锁定页面",
    "action.pageLock.tooltip": "锁定页面内容以防止意外编辑",
    "action.pageUpdates.title": "更新页面",
    "action.paste.name": "粘贴",
    "action.properties.name": "属性",
    "action.propertyVisibility.label": "切换属性可见性",
    "action.quickFind.name": "快速查找",
    "action.quoteSize.default": "默认",
    "action.quoteSize.large": "大",
    "action.quoteSize.name": "引用大小",
    "action.redo.name": "重做",
    "action.removefromFavorites.name": "从最爱中移除",
    "action.rename.name": "重命名",
    "action.replace.name": "替换",
    "action.reportPage.name": "报告页面",
    "action.resetZoom.name": "重置缩放",
    "action.resyncPage.name": "刷新离线数据",
    "action.rowHeader.title": "标题列",
    "action.ruleCount.label": "{ruleCount, plural, other {{ruleCount} 条规则}}",
    "action.ruleCountForSorts.label":
      "{ruleCount, plural, other {{ruleCount} 条规则}}",
    "action.search.name": "搜索",
    "action.search.noResults": "无结果",
    "action.section.actions": "动作",
    "action.section.advancedBlocks": "高级块",
    "action.section.background": "背景",
    "action.section.background.fuzzySearchKeywords":
      "Color Background 颜色 yanse yan'se 背景 beijing bei'jing",
    "action.section.basicBlocks": "基本块",
    "action.section.color": "颜色",
    "action.section.database": "数据库",
    "action.section.embeds": "嵌入块",
    "action.section.fontStyle": "风格",
    "action.section.inline": "行内",
    "action.section.media": "媒体",
    "action.section.quoteSize": "引用大小",
    "action.section.simpleTableColumn": "列",
    "action.section.turnInto": "转换成",
    "action.selectAbove.name": "选择以上",
    "action.selectAll.name": "全选",
    "action.selectBelow.name": "选择以下",
    "action.selectLeft.name": "选择左侧",
    "action.selectRight.name": "选择右侧",
    "action.setPageFont.default.caption": "默认",
    "action.setPageFont.default.fuzzySearchKeywords":
      "Font Default 字体 ziti zi'ti 默认 moren mo'ren",
    "action.setPageFont.default.tooltip": "适合任何场景的无衬线字体",
    "action.setPageFont.mono.caption": "等宽体",
    "action.setPageFont.mono.fuzzySearchKeywords":
      "Font Mono 字体 ziti zi'ti 等宽体 dengkuanti deng'kuan'ti",
    "action.setPageFont.mono.tooltip": "适合草稿和笔记",
    "action.setPageFont.serif.caption": "衬线体",
    "action.setPageFont.serif.fuzzySearchKeywords":
      "Font Serif 字体 ziti zi'ti 衬线体 chenxianti chen'xian'ti",
    "action.setPageFont.serif.tooltip": "适合发表长文章",
    "action.shareLink.name": "分享链接",
    "action.showCodePreviewFormat.name": "预览",
    "action.showDeletedPages.name": "显示已删除的页面",
    "action.showOnlyCodeFormat.name": "代码",
    "action.showSplitViewFormat.name": "拆分",
    "action.signUpOrlogIn.name": "注册或登录",
    "action.sort.name": "排序",
    "action.startPublicEditDialog.continueLabel": "继续",
    "action.startPublicEditDialog.message":
      "当你开始编辑时，页面所有者将可以看到你的姓名，邮箱地址和头像。",
    "action.strikeThrough.name": "删除线",
    "action.subGroupBy.name": "子组",
    "action.switchSpaces.name": "切换工作区",
    "action.syncPage.name": "保存到离线",
    "action.tableHeaderCell.addFilter": "添加筛选器",
    "action.tableHeaderCell.configureOptions": "配置选项",
    "action.tableHeaderCell.configureRollup": "配置汇总",
    "action.tableHeaderCell.delete": "删除",
    "action.tableHeaderCell.duplicate": "创建副本",
    "action.tableHeaderCell.editFormula": "编辑函数",
    "action.tableHeaderCell.formatDate": "调整日期格式",
    "action.tableHeaderCell.formatNumber": "调整数字格式",
    "action.tableHeaderCell.hide": "隐藏",
    "action.tableHeaderCell.insertLeft": "向左插入",
    "action.tableHeaderCell.insertRight": "向右插入",
    "action.tableHeaderCell.sortAscending": "升序排列",
    "action.tableHeaderCell.sortDescending": "降序排列",
    "action.templates.name": "模板",
    "action.timelineBy.name": "时间轴显示",
    "action.toggleSidebar.name": "折叠侧边栏",
    "action.turnInto.name": "转换成",
    "action.turnIntoCollection.title": "转换成数据库",
    "action.turnintoInline.name": "转换成内嵌",
    "action.turnintoPage.name": "转换成页面",
    "action.turnintoSimpleTable.name": "转换成简单的表格",
    "action.underline.name": "下划线",
    "action.undo.name": "撤消",
    "action.unindent.name": "去除缩进",
    "action.unlockDatabaseName.name": "解锁视图",
    "action.unlockPageName.name": "解锁页面",
    "action.unpin.name": "从侧边栏移除",
    "action.unsyncPage.name": "从离线中移除",
    "action.unsyncTransclusionContainerName.name": "禁用所有同步",
    "action.unsyncTransclusionReference.name": "取消同步",
    "action.viewOriginal.name": "查看原始内容",
    "action.whatIsNotion.name": "Notion 是什么？",
    "action.workAtNotion.name": "在 Notion 中工作",
    "action.wrapCells.name": "单元格换行",
    "action.wrapCode.fuzzySearchKeywords":
      "Wrap Code 代码 daima dai'ma 换行 huanhang huan'hang",
    "action.wrapCode.label": "代码换行",
    "action.zoomIn.name": "放大",
    "action.zoomOut.name": "缩小",
    "actionSearch.tableHeaderCell.addFilter": "添加筛选器",
    "actionSearch.tableHeaderCell.configureOptions": "配置选项",
    "actionSearch.tableHeaderCell.configureRollup": "配置汇总",
    "actionSearch.tableHeaderCell.delete": "删除",
    "actionSearch.tableHeaderCell.duplicate": "创建副本",
    "actionSearch.tableHeaderCell.editFormula": "编辑 函数",
    "actionSearch.tableHeaderCell.formatDate": "日期 格式",
    "actionSearch.tableHeaderCell.formatNumber": "数字 格式",
    "actionSearch.tableHeaderCell.hide": "隐藏",
    "actionSearch.tableHeaderCell.insertLeft": "左 插入",
    "actionSearch.tableHeaderCell.insertRight": "右 插入",
    "actionSearch.tableHeaderCell.sortAscending": "升序排列",
    "actionSearch.tableHeaderCell.sortDescending": "降序排列",
    "activateReferral.dialogError.cannotInviteSelf.errorMessage":
      "你不能邀请自己",
    "activateReferral.dialogError.emailNotEligible.errorMessage":
      "此邮箱地址不符合引荐计划的使用条例。如果你认为这是个错误，请与支持人员联系。",
    "activateReferral.dialogError.invitationCreditAlreadyApplied.errorMessage":
      "你已经应用了邀请积分。",
    "activateReferral.dialogError.noValidReferral.errorMessage":
      "找不到有效的引荐。",
    "activateReferral.dialogError.referralAlreadyActivated.errorMessage":
      "引荐已被激活。",
    "activateReferral.dialogError.referringUserNotFound.errorMessage":
      "找不到引荐用户。",
    "activateReferral.dialogError.userAlreadySignedUp.errorMessage":
      "用户已注册。",
    "activity.accessRequested.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}请求访问{pageName}}}",
    "activity.accessRequested.messageLabel": "来自{author}的消息",
    "activity.actions.unarchiveButton.label": "取消归档",
    "activity.blockEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}编辑了{pageTitle}}}",
    "activity.collectionCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}创建了{collectionTitle}}}",
    "activity.collectionEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}编辑了{collectionTitle}}}",
    "activity.collectionPropertyCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中添加了属性{collectionPropertyTitle}}}",
    "activity.collectionPropertyDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中删除了属性{collectionPropertyTitle}}}",
    "activity.collectionPropertyEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中编辑了属性{collectionPropertyTitle}}}",
    "activity.collectionRowCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}创建了{pageTitle}}}",
    "activity.collectionRowDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}删除了{pageTitle}}}",
    "activity.collectionViewCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中创建了视图{collectionViewTitle}}}",
    "activity.collectionViewDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中删除了视图{collectionViewTitle}}}",
    "activity.collectionViewEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中编辑了视图{collectionViewTitle}}}",
    "activity.commentActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}评论了{blockName}}}",
    "activity.deletedGroup.placeholder": "已删除的群组",
    "activity.emailEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}将邮箱地址从 {oldEmail} 更改为 {newEmail}}}",
    "activity.mentionActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{pageName}中提及了你}}",
    "activity.pageLocked.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}锁定了{blockTitle}}}",
    "activity.pageUnlocked.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}解锁了{blockTitle}}}",
    "activity.permissionGroupTitles.deletedGroup": "已删除的群组",
    "activity.permissionGroupTitles.untitledGroup": "无标题群组",
    "activity.permissionsActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}加入了{pageOrSpaceName}}}",
    "activity.refollowPageButton.label": "重新关注此页面",
    "activity.reminderInActivity.header": "{pageTitle}中的提醒",
    "activity.replyButton.label": "回复",
    "activity.restorePermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}恢复了{pageOrSpaceName}其继承的访问权限}}",
    "activity.restrictPermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}限制了{pageOrSpaceName}的访问权限}}",
    "activity.topLevelBlockPrivateCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}创建了私人页面{pageTitle}}}",
    "activity.topLevelBlockPrivateDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}删除了私人页面{pageTitle}}}",
    "activity.topLevelBlockWorkspaceCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}创建了工作区页面{pageTitle}}}",
    "activity.topLevelBlockWorkspaceDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}删除了工作区页面{pageTitle}}}",
    "activity.unarchiveButton.label": "取消归档",
    "activity.unfollowPageButton.label": "取消关注此页面",
    "activity.untitledGroup.placeholder": "无标题的群组",
    "activity.untitledPlaceholder": "无标题",
    "activity.updatedPermissionGroupCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}创建了{groupName}群组}}",
    "activity.updatedPermissionGroupDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}删除了{groupName}群组}}",
    "activity.updatedPermissionGroupEdit.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}编辑了{groupName}群组}}",
    "activity.updatedPermissionGroupEditedDefault.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}编辑了{groupName}群组}}",
    "activity.updatedPermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}更新了{pageOrSpaceName}的权限}}",
    "activity.userInvitedActivityGroupId.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}将你加入了{groupName}群组}}",
    "activity.userInvitedActivityGroupIdByBot.header":
      "你已被添加到{groupName}群组}}",
    "activity.userInvitedActivityNavigableBlock.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}邀请你加入{blockName}}}",
    "activity.userInvitedActivityNavigableBlockByBot.header":
      "你已被邀请加入{blockName}",
    "activity.userInvitedActivityOtherInvite.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}邀请你加入{spaceName}}}",
    "activity.userInvitedActivityOtherInviteByBot.header":
      "你已被邀请加入{spaceName}",
    "activity.viewMoreButton.label": "查看其余 {moreCount} 项",
    "activitySection.archiveAction.tooltip": "归档此通知",
    "activitySection.authorPhrase.forMoreThanTwoAuthors.label":
      "{numberOfOtherAuthors, plural, other {<b>{firstAuthor}</b>、<b>{secondAuthor}</b>及其他 {numberOfOtherAuthors} 位}}",
    "activitySection.authorPhrase.forNoAuthors.label": "某人",
    "activitySection.authorPhrase.forOneAuthor.label": "<b>{author}</b>",
    "activitySection.authorPhrase.forTwoAuthors.label":
      "<b>{firstAuthor}</b>和<b>{secondAuthor}</b>",
    "activitySection.viewVersionForUpdate.tooltip": "查看本次更新后的版本",
    "activityUpdate.unknownErrorLoadingActivities.message": "出了些问题。",
    "activityUpdates.clearFilters": "清除",
    "activityUpdates.filterMenu.byDate": "日期范围",
    "activityUpdates.filterMenu.byType.addItemLabel": "添加活动类型",
    "activityUpdates.filterMenu.byType.resultSectionTitle": "活动类型",
    "activityUpdates.filterMenu.byType.title": "搜索类型",
    "activityUpdates.offlineMessage": "请连接网络后查看动态。",
    "actorHelpers.anonymousPlaceholder": "匿名",
    "actorHelpers.userFullName": "{lastName} {firstName}",
    "adminAPIRequest.loadingMessage": "载入中⋯",
    "adminIntegrationSettings.autoApproveBuiltByNotion.builtbyNotion.link":
      "生产：Notion",
    "adminIntegrationSettings.autoApproveBuiltByNotion.caption":
      "启动此选项，批准所有工作区成员安装由 Notion 构建的集成 {linkText}。",
    "adminIntegrationSettings.autoApproveBuiltByNotion.title":
      "自动批准<builtbynotion>由 Notion 构建</builtbynotion>的集成",
    "adminIntegrationSettings.integrationRestrictions.allowList.caption":
      "工作区成员只能安装由管理员预先批准的集成。",
    "adminIntegrationSettings.integrationRestrictions.allowList.title":
      "从批准列表中",
    "adminIntegrationSettings.integrationRestrictions.info.title":
      "管理员可以随时安装和批准新的集成。",
    "adminIntegrationSettings.integrationRestrictions.none.caption":
      "任何成员都可以安装新的集成。",
    "adminIntegrationSettings.integrationRestrictions.none.title": "无",
    "adminIntegrationSettings.integrationRestrictions.off.caption":
      "工作区成员可以安装任何新集成。",
    "adminIntegrationSettings.integrationRestrictions.off.title": "关闭",
    "adminIntegrationSettings.requireApprovalSetting.allowList.caption":
      "工作区成员只能安装由管理员预先批准的集成。",
    "adminIntegrationSettings.requireApprovalSetting.caption":
      "启用后，成员只能安装已由工作区管理员预先批准的第三方集成。",
    "adminIntegrationSettings.requireApprovalSetting.off.caption":
      "工作区成员可以安装任何新集成。",
    "adminIntegrationSettings.requireApprovalSetting.title": "禁止成员安装集成",
    "adminIntegrationSettings.search.button.label": "{plusIcon} 添加批准的集成",
    "adminIntegrationSettings.search.input.placeholder": "按名称或集成 ID 添加",
    "adminIntegrationSettings.search.label.noResults": "无结果",
    "adminIntegrationSettings.search.subtitle.notionBuilt": "由 Notion 开发",
    "adminIntegrationSettings.search.title.popularIntegrations": "热门集成",
    "adminIntegrationSettings.table.allowIntegrations.title":
      "批准的集成{numberOfIntegrations}",
    "adminIntegrationSettings.table.default.title": "所有集成",
    "adminLoginAsUser.loggingInAs.loadingMessage": "以 {userEmail} 登录",
    "allTimeZones.Africa/Abidjan": "非洲/阿比让",
    "allTimeZones.Africa/Accra": "非洲/阿克拉",
    "allTimeZones.Africa/Addis_Ababa": "非洲/亚的斯亚贝巴",
    "allTimeZones.Africa/Algiers": "非洲/阿尔及尔",
    "allTimeZones.Africa/Asmara": "非洲/阿斯马拉",
    "allTimeZones.Africa/Asmera": "非洲/阿斯梅拉",
    "allTimeZones.Africa/Bamako": "非洲/巴马科",
    "allTimeZones.Africa/Bangui": "非洲/班吉",
    "allTimeZones.Africa/Banjul": "非洲/班珠尔",
    "allTimeZones.Africa/Bissau": "非洲/比绍",
    "allTimeZones.Africa/Blantyre": "非洲/布兰太尔",
    "allTimeZones.Africa/Brazzaville": "非洲/布拉柴维尔",
    "allTimeZones.Africa/Bujumbura": "非洲/布琼布拉",
    "allTimeZones.Africa/Cairo": "非洲/开罗",
    "allTimeZones.Africa/Casablanca": "非洲/卡萨布兰卡",
    "allTimeZones.Africa/Ceuta": "非洲/休达",
    "allTimeZones.Africa/Conakry": "非洲/科纳克里",
    "allTimeZones.Africa/Dakar": "非洲/达喀尔",
    "allTimeZones.Africa/Dar_es_Salaam": "非洲/达累斯萨拉姆",
    "allTimeZones.Africa/Djibouti": "非洲/吉布提",
    "allTimeZones.Africa/Douala": "非洲/杜阿拉",
    "allTimeZones.Africa/El_Aaiun": "非洲/阿尤恩",
    "allTimeZones.Africa/Freetown": "非洲/弗里敦",
    "allTimeZones.Africa/Gaborone": "非洲/哈博罗内",
    "allTimeZones.Africa/Harare": "非洲/哈拉雷",
    "allTimeZones.Africa/Johannesburg": "非洲/约翰内斯堡",
    "allTimeZones.Africa/Juba": "非洲/朱巴",
    "allTimeZones.Africa/Kampala": "非洲/坎帕拉",
    "allTimeZones.Africa/Khartoum": "非洲/喀土穆",
    "allTimeZones.Africa/Kigali": "非洲/基加利",
    "allTimeZones.Africa/Kinshasa": "非洲/金沙萨",
    "allTimeZones.Africa/Lagos": "非洲/拉各斯",
    "allTimeZones.Africa/Libreville": "非洲/利伯维尔",
    "allTimeZones.Africa/Lome": "非洲/洛美",
    "allTimeZones.Africa/Luanda": "非洲/罗安达",
    "allTimeZones.Africa/Lubumbashi": "非洲/卢本巴希",
    "allTimeZones.Africa/Lusaka": "非洲/卢萨卡",
    "allTimeZones.Africa/Malabo": "非洲/马拉博",
    "allTimeZones.Africa/Maputo": "非洲/马普托",
    "allTimeZones.Africa/Maseru": "非洲/马塞卢",
    "allTimeZones.Africa/Mbabane": "非洲/姆巴巴纳",
    "allTimeZones.Africa/Mogadishu": "非洲/摩加迪沙",
    "allTimeZones.Africa/Monrovia": "非洲/蒙罗维亚",
    "allTimeZones.Africa/Nairobi": "非洲/内罗毕",
    "allTimeZones.Africa/Ndjamena": "非洲/恩贾梅纳",
    "allTimeZones.Africa/Niamey": "非洲/尼亚美",
    "allTimeZones.Africa/Nouakchott": "非洲/努瓦克肖特",
    "allTimeZones.Africa/Ouagadougou": "非洲/瓦加杜古",
    "allTimeZones.Africa/Porto-Novo": "非洲/波多诺伏",
    "allTimeZones.Africa/Sao_Tome": "非洲/圣多美",
    "allTimeZones.Africa/Timbuktu": "非洲/廷巴克图",
    "allTimeZones.Africa/Tripoli": "非洲/的黎波里",
    "allTimeZones.Africa/Tunis": "非洲/突尼斯",
    "allTimeZones.Africa/Windhoek": "非洲/温得和克",
    "allTimeZones.America/Adak": "美洲/阿达克",
    "allTimeZones.America/Anchorage": "美洲/安克雷奇",
    "allTimeZones.America/Anguilla": "美洲/安圭拉",
    "allTimeZones.America/Antigua": "美洲/安提瓜",
    "allTimeZones.America/Araguaina": "美洲/阿拉瓜伊纳",
    "allTimeZones.America/Argentina/Buenos_Aires": "美洲/阿根廷/布宜诺斯艾利斯",
    "allTimeZones.America/Argentina/Catamarca": "美洲/阿根廷/卡塔马卡",
    "allTimeZones.America/Argentina/ComodRivadavia":
      "美洲/阿根廷/ComodRivadavia",
    "allTimeZones.America/Argentina/Cordoba": "美洲/阿根廷/科尔多瓦",
    "allTimeZones.America/Argentina/Jujuy": "美洲/阿根廷/胡胡伊",
    "allTimeZones.America/Argentina/La_Rioja": "美洲/阿根廷/拉里奥哈",
    "allTimeZones.America/Argentina/Mendoza": "美洲/阿根廷/门多萨",
    "allTimeZones.America/Argentina/Rio_Gallegos": "美洲/阿根廷/里奥加耶戈斯",
    "allTimeZones.America/Argentina/Salta": "美洲/阿根廷/萨尔塔",
    "allTimeZones.America/Argentina/San_Juan": "美洲/阿根廷/圣胡安",
    "allTimeZones.America/Argentina/San_Luis": "美洲/阿根廷/圣路易斯",
    "allTimeZones.America/Argentina/Tucuman": "美洲/阿根廷/图库曼",
    "allTimeZones.America/Argentina/Ushuaia": "美洲/阿根廷/乌斯怀亚",
    "allTimeZones.America/Aruba": "美洲/阿鲁巴",
    "allTimeZones.America/Asuncion": "美洲/亚松森",
    "allTimeZones.America/Atikokan": "美洲/阿蒂科肯",
    "allTimeZones.America/Atka": "美洲/阿特卡",
    "allTimeZones.America/Bahia": "美洲/巴伊亚",
    "allTimeZones.America/Bahia_Banderas": "美洲/班德拉斯海湾",
    "allTimeZones.America/Barbados": "美洲/巴巴多斯",
    "allTimeZones.America/Belem": "美洲/贝伦",
    "allTimeZones.America/Belize": "美洲/伯利兹",
    "allTimeZones.America/Blanc-Sablon": "美洲/勃朗峰-萨伯隆",
    "allTimeZones.America/Boa_Vista": "美洲/博阿维斯塔",
    "allTimeZones.America/Bogota": "美洲/波哥大",
    "allTimeZones.America/Boise": "美洲/博伊西",
    "allTimeZones.America/Buenos_Aires": "美洲/布宜诺斯艾利斯",
    "allTimeZones.America/Cambridge_Bay": "美洲/剑桥湾",
    "allTimeZones.America/Campo_Grande": "美洲/大坎普",
    "allTimeZones.America/Cancun": "美洲/坎昆",
    "allTimeZones.America/Caracas": "美洲/加拉加斯",
    "allTimeZones.America/Catamarca": "美洲/卡塔马卡",
    "allTimeZones.America/Cayenne": "美洲/卡宴",
    "allTimeZones.America/Cayman": "美洲/开曼",
    "allTimeZones.America/Chicago": "美洲/芝加哥",
    "allTimeZones.America/Chihuahua": "美洲/奇瓦瓦",
    "allTimeZones.America/Coral_Harbour": "美洲/科勒尔港",
    "allTimeZones.America/Cordoba": "美洲/科尔多瓦",
    "allTimeZones.America/Costa_Rica": "美洲/哥斯达黎加",
    "allTimeZones.America/Creston": "美洲/克雷斯顿",
    "allTimeZones.America/Cuiaba": "美洲/库亚巴",
    "allTimeZones.America/Curacao": "美洲/库拉索",
    "allTimeZones.America/Danmarkshavn": "美洲/丹麦港",
    "allTimeZones.America/Dawson": "美洲/道森",
    "allTimeZones.America/Dawson_Creek": "美洲/道森克里克",
    "allTimeZones.America/Denver": "美洲/丹佛",
    "allTimeZones.America/Detroit": "美洲/底特律",
    "allTimeZones.America/Dominica": "美洲/多米尼克",
    "allTimeZones.America/Edmonton": "美洲/埃德蒙顿",
    "allTimeZones.America/Eirunepe": "美洲/埃鲁内佩",
    "allTimeZones.America/El_Salvador": "美洲/萨尔瓦多",
    "allTimeZones.America/Ensenada": "美洲/恩塞纳达",
    "allTimeZones.America/Fort_Nelson": "美洲/纳尔逊堡",
    "allTimeZones.America/Fort_Wayne": "美国/韦恩堡",
    "allTimeZones.America/Fortaleza": "美洲/福塔雷萨",
    "allTimeZones.America/Glace_Bay": "美洲/格莱斯湾",
    "allTimeZones.America/Godthab": "美洲/戈特霍布",
    "allTimeZones.America/Goose_Bay": "美洲/古斯湾",
    "allTimeZones.America/Grand_Turk": "美洲/大特克斯岛",
    "allTimeZones.America/Grenada": "美洲/格林纳达",
    "allTimeZones.America/Guadeloupe": "美洲/瓜德罗普岛",
    "allTimeZones.America/Guatemala": "美洲/危地马拉",
    "allTimeZones.America/Guayaquil": "美洲/瓜亚基尔",
    "allTimeZones.America/Guyana": "美洲/圭亚那",
    "allTimeZones.America/Halifax": "美洲/哈利法克斯",
    "allTimeZones.America/Havana": "美洲/哈瓦那",
    "allTimeZones.America/Hermosillo": "美洲/埃莫西约",
    "allTimeZones.America/Indiana/Indianapolis":
      "美洲/印第安纳州/印第安纳波利斯",
    "allTimeZones.America/Indiana/Knox": "美洲/印第安纳州/诺克斯",
    "allTimeZones.America/Indiana/Marengo": "美洲/印第安纳州/马伦戈",
    "allTimeZones.America/Indiana/Petersburg": "美洲/印第安纳州/彼得斯堡",
    "allTimeZones.America/Indiana/Tell_City": "美洲/印第安纳州/特尔城",
    "allTimeZones.America/Indiana/Vevay": "美洲/印第安纳州/韦韦",
    "allTimeZones.America/Indiana/Vincennes": "美洲/印第安纳州/文森斯",
    "allTimeZones.America/Indiana/Winamac": "美洲/印第安纳州/维纳马克",
    "allTimeZones.America/Indianapolis": "美洲/印第安纳波利斯",
    "allTimeZones.America/Inuvik": "美洲/伊努维克",
    "allTimeZones.America/Iqaluit": "美洲/伊卡卢伊特",
    "allTimeZones.America/Jamaica": "美洲/牙买加",
    "allTimeZones.America/Jujuy": "美洲/胡胡伊",
    "allTimeZones.America/Juneau": "美洲/朱诺",
    "allTimeZones.America/Kentucky/Louisville": "美洲/肯塔基州/路易斯维尔",
    "allTimeZones.America/Kentucky/Monticello": "美洲/肯塔基州/蒙蒂塞洛",
    "allTimeZones.America/Knox_IN": "美洲/Knox_IN",
    "allTimeZones.America/Kralendijk": "美洲/克拉伦代克",
    "allTimeZones.America/La_Paz": "美洲/拉巴斯",
    "allTimeZones.America/Lima": "美洲/利马",
    "allTimeZones.America/Los_Angeles": "美洲/洛杉矶",
    "allTimeZones.America/Louisville": "美洲/路易斯维尔",
    "allTimeZones.America/Lower_Princes": "美洲/Lower_Princes",
    "allTimeZones.America/Maceio": "美洲/马塞约",
    "allTimeZones.America/Managua": "美洲/马那瓜",
    "allTimeZones.America/Manaus": "美洲/马瑙斯",
    "allTimeZones.America/Marigot": "美洲/马里戈特",
    "allTimeZones.America/Martinique": "美洲/马提尼克",
    "allTimeZones.America/Matamoros": "美洲/马塔莫罗斯",
    "allTimeZones.America/Mazatlan": "美洲/马萨特兰",
    "allTimeZones.America/Mendoza": "美洲/门多萨",
    "allTimeZones.America/Menominee": "美洲/梅诺米尼",
    "allTimeZones.America/Merida": "美洲/梅里达",
    "allTimeZones.America/Metlakatla": "美洲/梅特拉卡特拉",
    "allTimeZones.America/Mexico_City": "美洲/墨西哥城",
    "allTimeZones.America/Miquelon": "美洲/密克隆",
    "allTimeZones.America/Moncton": "美洲/蒙克顿",
    "allTimeZones.America/Monterrey": "美洲/蒙特雷",
    "allTimeZones.America/Montevideo": "美洲/蒙得维的亚",
    "allTimeZones.America/Montreal": "美洲/蒙特利尔",
    "allTimeZones.America/Montserrat": "美洲/蒙特塞拉特",
    "allTimeZones.America/Nassau": "美洲/拿骚",
    "allTimeZones.America/New_York": "美洲/纽约",
    "allTimeZones.America/Nipigon": "美洲/尼皮贡",
    "allTimeZones.America/Nome": "美洲/诺姆",
    "allTimeZones.America/Noronha": "美洲/诺罗尼亚",
    "allTimeZones.America/North_Dakota/Beulah": "美洲/北达科他州/比乌拉",
    "allTimeZones.America/North_Dakota/Center": "美洲/北达科他州/中部",
    "allTimeZones.America/North_Dakota/New_Salem": "美洲/北达科他州/新塞勒姆",
    "allTimeZones.America/Ojinaga": "美洲/奥希纳加",
    "allTimeZones.America/Panama": "美洲/巴拿马",
    "allTimeZones.America/Pangnirtung": "美洲/旁纳唐",
    "allTimeZones.America/Paramaribo": "美洲/帕拉马里博",
    "allTimeZones.America/Phoenix": "美洲/菲尼克斯",
    "allTimeZones.America/Port-au-Prince": "美洲/太子港",
    "allTimeZones.America/Port_of_Spain": "美洲/西班牙港",
    "allTimeZones.America/Porto_Acre": "美洲/阿克雷港",
    "allTimeZones.America/Porto_Velho": "美洲/波多韦柳",
    "allTimeZones.America/Puerto_Rico": "美洲/波多黎各",
    "allTimeZones.America/Punta_Arenas": "美洲/蓬塔阿雷纳斯",
    "allTimeZones.America/Rainy_River": "美洲/雷尼河",
    "allTimeZones.America/Rankin_Inlet": "美洲/兰京海口",
    "allTimeZones.America/Recife": "美洲/累西腓",
    "allTimeZones.America/Regina": "美洲/里贾纳",
    "allTimeZones.America/Resolute": "美洲/雷索卢特",
    "allTimeZones.America/Rio_Branco": "美洲/里奥布朗库",
    "allTimeZones.America/Rosario": "美洲/罗萨里奥",
    "allTimeZones.America/Santa_Isabel": "美洲/圣伊萨贝尔",
    "allTimeZones.America/Santarem": "美洲/圣塔伦",
    "allTimeZones.America/Santiago": "美洲/圣地亚哥",
    "allTimeZones.America/Santo_Domingo": "美洲/圣多明各",
    "allTimeZones.America/Sao_Paulo": "美洲/圣保罗",
    "allTimeZones.America/Scoresbysund": "美洲/斯科斯比松",
    "allTimeZones.America/Shiprock": "美洲/希普罗克",
    "allTimeZones.America/Sitka": "美洲/锡特卡",
    "allTimeZones.America/St_Barthelemy": "美洲/圣巴夫林米",
    "allTimeZones.America/St_Johns": "美洲/圣约翰斯",
    "allTimeZones.America/St_Kitts": "美洲/圣基茨",
    "allTimeZones.America/St_Lucia": "美洲/圣卢西亚",
    "allTimeZones.America/St_Thomas": "美洲/圣托马斯",
    "allTimeZones.America/St_Vincent": "美洲/圣文森特",
    "allTimeZones.America/Swift_Current": "美洲/斯威夫特卡伦特",
    "allTimeZones.America/Tegucigalpa": "美洲/特古西加尔巴",
    "allTimeZones.America/Thule": "美洲/图勒",
    "allTimeZones.America/Thunder_Bay": "美洲/桑德贝",
    "allTimeZones.America/Tijuana": "美洲/蒂华纳",
    "allTimeZones.America/Toronto": "美洲/多伦多",
    "allTimeZones.America/Tortola": "美洲/托托拉岛",
    "allTimeZones.America/Vancouver": "美洲/温哥华",
    "allTimeZones.America/Virgin": "美洲/维尔京",
    "allTimeZones.America/Whitehorse": "美洲/怀特霍斯",
    "allTimeZones.America/Winnipeg": "美洲/温尼伯",
    "allTimeZones.America/Yakutat": "美洲/雅库塔特",
    "allTimeZones.America/Yellowknife": "美洲/耶洛奈夫",
    "allTimeZones.Antarctica/Casey": "南极洲/凯西",
    "allTimeZones.Antarctica/Davis": "南极洲/戴维斯",
    "allTimeZones.Antarctica/DumontDUrville": "南极洲/杜蒙杜维尔",
    "allTimeZones.Antarctica/Macquarie": "南极洲/麦格理",
    "allTimeZones.Antarctica/Mawson": "南极洲/莫森",
    "allTimeZones.Antarctica/McMurdo": "南极洲/麦克默多",
    "allTimeZones.Antarctica/Palmer": "南极洲/帕尔默",
    "allTimeZones.Antarctica/Rothera": "南极洲/罗瑟拉",
    "allTimeZones.Antarctica/South_Pole": "南极洲/南极",
    "allTimeZones.Antarctica/Syowa": "南极洲/昭和",
    "allTimeZones.Antarctica/Troll": "南极洲/特罗尔",
    "allTimeZones.Antarctica/Vostok": "南极洲/沃斯托克",
    "allTimeZones.Arctic/Longyearbyen": "北极/朗伊尔城",
    "allTimeZones.Asia/Aden": "亚洲/亚丁",
    "allTimeZones.Asia/Almaty": "亚洲/阿拉木图",
    "allTimeZones.Asia/Amman": "亚洲/安曼",
    "allTimeZones.Asia/Anadyr": "亚洲/阿纳德尔",
    "allTimeZones.Asia/Aqtau": "亚洲/阿克图",
    "allTimeZones.Asia/Aqtobe": "亚洲/阿克托比",
    "allTimeZones.Asia/Ashgabat": "亚洲/阿什哈巴德",
    "allTimeZones.Asia/Ashkhabad": "亚洲/阿什哈巴德",
    "allTimeZones.Asia/Atyrau": "亚洲/阿特劳",
    "allTimeZones.Asia/Baghdad": "亚洲/巴格达",
    "allTimeZones.Asia/Bahrain": "亚洲/巴林",
    "allTimeZones.Asia/Baku": "亚洲/巴库",
    "allTimeZones.Asia/Bangkok": "亚洲/曼谷",
    "allTimeZones.Asia/Barnaul": "亚洲/巴尔瑙尔",
    "allTimeZones.Asia/Beirut": "亚洲/贝鲁特",
    "allTimeZones.Asia/Bishkek": "亚洲/比什凯克",
    "allTimeZones.Asia/Brunei": "亚洲/文莱",
    "allTimeZones.Asia/Calcutta": "亚洲/加尔各答",
    "allTimeZones.Asia/Chita": "亚洲/赤塔",
    "allTimeZones.Asia/Choibalsan": "亚洲/乔巴山",
    "allTimeZones.Asia/Chongqing": "亚洲/重庆",
    "allTimeZones.Asia/Chungking": "亚洲/重庆",
    "allTimeZones.Asia/Colombo": "亚洲/科伦坡",
    "allTimeZones.Asia/Dacca": "亚洲/达卡",
    "allTimeZones.Asia/Damascus": "亚洲/大马士革",
    "allTimeZones.Asia/Dhaka": "亚洲/达卡",
    "allTimeZones.Asia/Dili": "亚洲/帝力",
    "allTimeZones.Asia/Dubai": "亚洲/迪拜",
    "allTimeZones.Asia/Dushanbe": "亚洲/杜尚别",
    "allTimeZones.Asia/Famagusta": "亚洲/法马古斯塔",
    "allTimeZones.Asia/Gaza": "亚洲/加沙",
    "allTimeZones.Asia/Harbin": "亚洲/哈尔滨",
    "allTimeZones.Asia/Hebron": "亚洲/希伯伦",
    "allTimeZones.Asia/Ho_Chi_Minh": "亚洲/胡志明市",
    "allTimeZones.Asia/Hong_Kong": "亚洲/香港",
    "allTimeZones.Asia/Hovd": "亚洲/科布多",
    "allTimeZones.Asia/Irkutsk": "亚洲/伊尔库茨克",
    "allTimeZones.Asia/Istanbul": "亚洲/伊斯坦布尔",
    "allTimeZones.Asia/Jakarta": "亚洲/雅加达",
    "allTimeZones.Asia/Jayapura": "亚洲/查亚普拉",
    "allTimeZones.Asia/Jerusalem": "亚洲/耶路撒冷",
    "allTimeZones.Asia/Kabul": "亚洲/喀布尔",
    "allTimeZones.Asia/Kamchatka": "亚洲/堪察加半岛",
    "allTimeZones.Asia/Karachi": "亚洲/卡拉奇",
    "allTimeZones.Asia/Kashgar": "亚洲/喀什",
    "allTimeZones.Asia/Kathmandu": "亚洲/加德满都",
    "allTimeZones.Asia/Katmandu": "亚洲/加德满都",
    "allTimeZones.Asia/Khandyga": "亚洲/坎迪加",
    "allTimeZones.Asia/Kolkata": "亚洲/加尔各答",
    "allTimeZones.Asia/Krasnoyarsk": "亚洲/克拉斯诺亚尔斯克",
    "allTimeZones.Asia/Kuala_Lumpur": "亚洲/吉隆坡",
    "allTimeZones.Asia/Kuching": "亚洲/古晋",
    "allTimeZones.Asia/Kuwait": "亚洲/科威特",
    "allTimeZones.Asia/Macao": "亚洲/澳门",
    "allTimeZones.Asia/Macau": "亚洲/澳门",
    "allTimeZones.Asia/Magadan": "亚洲/马加丹",
    "allTimeZones.Asia/Makassar": "亚洲/望加锡",
    "allTimeZones.Asia/Manila": "亚洲/马尼拉",
    "allTimeZones.Asia/Muscat": "亚洲/马斯喀特",
    "allTimeZones.Asia/Nicosia": "亚洲/尼科西亚",
    "allTimeZones.Asia/Novokuznetsk": "亚洲/新库兹涅茨克",
    "allTimeZones.Asia/Novosibirsk": "亚洲/新西伯利亚",
    "allTimeZones.Asia/Omsk": "亚洲/鄂木斯克",
    "allTimeZones.Asia/Oral": "亚洲/乌拉尔",
    "allTimeZones.Asia/Phnom_Penh": "亚洲/金边",
    "allTimeZones.Asia/Pontianak": "亚洲/坤甸",
    "allTimeZones.Asia/Pyongyang": "亚洲/平壤",
    "allTimeZones.Asia/Qatar": "亚洲/卡塔尔",
    "allTimeZones.Asia/Qostanay": "亚洲/库斯塔奈",
    "allTimeZones.Asia/Qyzylorda": "亚洲/克孜洛尔达",
    "allTimeZones.Asia/Rangoon": "亚洲/仰光",
    "allTimeZones.Asia/Riyadh": "亚洲/利雅得",
    "allTimeZones.Asia/Saigon": "亚洲/西贡",
    "allTimeZones.Asia/Sakhalin": "亚洲/萨哈林岛",
    "allTimeZones.Asia/Samarkand": "亚洲/撒马尔罕",
    "allTimeZones.Asia/Seoul": "亚洲/首尔",
    "allTimeZones.Asia/Shanghai": "亚洲/上海",
    "allTimeZones.Asia/Singapore": "亚洲/新加坡",
    "allTimeZones.Asia/Srednekolymsk": "亚洲/中科雷姆斯克",
    "allTimeZones.Asia/Taipei": "亚洲/台北",
    "allTimeZones.Asia/Tashkent": "亚洲/塔什干",
    "allTimeZones.Asia/Tbilisi": "亚洲/第比利斯",
    "allTimeZones.Asia/Tehran": "亚洲/德黑兰",
    "allTimeZones.Asia/Tel_Aviv": "亚洲/特拉维夫",
    "allTimeZones.Asia/Thimbu": "亚洲/廷布",
    "allTimeZones.Asia/Thimphu": "亚洲/廷布",
    "allTimeZones.Asia/Tokyo": "亚洲/东京",
    "allTimeZones.Asia/Tomsk": "亚洲/托木斯克",
    "allTimeZones.Asia/Ujung_Pandang": "亚洲/乌戎潘当",
    "allTimeZones.Asia/Ulaanbaatar": "亚洲/乌兰巴托",
    "allTimeZones.Asia/Ulan_Bator": "亚洲/乌兰巴托",
    "allTimeZones.Asia/Urumqi": "亚洲/乌鲁木齐",
    "allTimeZones.Asia/Ust-Nera": "亚洲/乌斯季涅拉",
    "allTimeZones.Asia/Vientiane": "亚洲/万象",
    "allTimeZones.Asia/Vladivostok": "亚洲/符拉迪沃斯托克",
    "allTimeZones.Asia/Yakutsk": "亚洲/雅库茨克",
    "allTimeZones.Asia/Yangon": "亚洲/仰光",
    "allTimeZones.Asia/Yekaterinburg": "亚洲/叶卡捷琳堡",
    "allTimeZones.Asia/Yerevan": "亚洲/埃里温",
    "allTimeZones.Atlantic/Azores": "大西洋/亚速尔群岛",
    "allTimeZones.Atlantic/Bermuda": "大西洋/百慕大",
    "allTimeZones.Atlantic/Canary": "大西洋/加那利",
    "allTimeZones.Atlantic/Cape_Verde": "大西洋/佛得角",
    "allTimeZones.Atlantic/Faeroe": "大西洋/法罗",
    "allTimeZones.Atlantic/Faroe": "大西洋/法罗群岛",
    "allTimeZones.Atlantic/Jan_Mayen": "大西洋/扬马延岛",
    "allTimeZones.Atlantic/Madeira": "大西洋/马德拉",
    "allTimeZones.Atlantic/Reykjavik": "大西洋/雷克雅未克",
    "allTimeZones.Atlantic/South_Georgia": "大西洋/南乔治亚",
    "allTimeZones.Atlantic/St_Helena": "大西洋/圣赫勒拿",
    "allTimeZones.Atlantic/Stanley": "大西洋/斯坦利",
    "allTimeZones.Australia/ACT": "澳大利亚/澳大利亚首都直辖区",
    "allTimeZones.Australia/Adelaide": "澳大利亚/阿德莱德",
    "allTimeZones.Australia/Brisbane": "澳大利亚/布里斯班",
    "allTimeZones.Australia/Broken_Hill": "澳大利亚/布罗肯希尔",
    "allTimeZones.Australia/Canberra": "澳大利亚/堪培拉",
    "allTimeZones.Australia/Currie": "澳大利亚/柯里",
    "allTimeZones.Australia/Darwin": "澳大利亚/达尔文",
    "allTimeZones.Australia/Eucla": "澳大利亚/尤克拉",
    "allTimeZones.Australia/Hobart": "澳大利亚/霍巴特",
    "allTimeZones.Australia/LHI": "澳大利亚/豪勋爵岛",
    "allTimeZones.Australia/Lindeman": "澳大利亚/林德曼",
    "allTimeZones.Australia/Lord_Howe": "澳大利亚/豪勋爵",
    "allTimeZones.Australia/Melbourne": "澳大利亚/墨尔本",
    "allTimeZones.Australia/NSW": "澳大利亚/新南威尔士州",
    "allTimeZones.Australia/North": "澳大利亚/北部",
    "allTimeZones.Australia/Perth": "澳大利亚/珀斯",
    "allTimeZones.Australia/Queensland": "澳大利亚/昆士兰州",
    "allTimeZones.Australia/South": "澳大利亚/南部",
    "allTimeZones.Australia/Sydney": "澳大利亚/悉尼",
    "allTimeZones.Australia/Tasmania": "澳大利亚/塔斯马尼亚",
    "allTimeZones.Australia/Victoria": "澳大利亚/维多利亚",
    "allTimeZones.Australia/West": "澳大利亚/西部",
    "allTimeZones.Australia/Yancowinna": "澳大利亚/Yancowinna",
    "allTimeZones.Brazil/Acre": "巴西/阿克里",
    "allTimeZones.Brazil/DeNoronha": "巴西/迪诺罗尼亚",
    "allTimeZones.Brazil/East": "巴西/东部",
    "allTimeZones.Brazil/West": "巴西/西部",
    "allTimeZones.CET": "CET",
    "allTimeZones.CST6CDT": "CST6CDT",
    "allTimeZones.Canada/Atlantic": "加拿大/大西洋",
    "allTimeZones.Canada/Central": "加拿大/中部",
    "allTimeZones.Canada/Eastern": "加拿大/东部",
    "allTimeZones.Canada/Mountain": "加拿大/山区",
    "allTimeZones.Canada/Newfoundland": "加拿大/纽芬兰",
    "allTimeZones.Canada/Pacific": "加拿大/太平洋",
    "allTimeZones.Canada/Saskatchewan": "加拿大/萨斯喀彻温省",
    "allTimeZones.Canada/Yukon": "加拿大/育空",
    "allTimeZones.Chile/Continental": "智利/大陆",
    "allTimeZones.Chile/EasterIsland": "智利/复活节岛",
    "allTimeZones.Cuba": "古巴",
    "allTimeZones.EET": "EET",
    "allTimeZones.EST": "EST",
    "allTimeZones.EST5EDT": "EST5EDT",
    "allTimeZones.Egypt": "埃及",
    "allTimeZones.Eire": "爱尔兰",
    "allTimeZones.Etc/GMT": "Etc/GMT",
    "allTimeZones.Etc/GMT+0": "Etc/GMT+0",
    "allTimeZones.Etc/GMT+1": "Etc/GMT+1",
    "allTimeZones.Etc/GMT+10": "Etc/GMT+10",
    "allTimeZones.Etc/GMT+11": "Etc/GMT+11",
    "allTimeZones.Etc/GMT+12": "Etc/GMT+12",
    "allTimeZones.Etc/GMT+2": "Etc/GMT+2",
    "allTimeZones.Etc/GMT+3": "Etc/GMT+3",
    "allTimeZones.Etc/GMT+4": "Etc/GMT+4",
    "allTimeZones.Etc/GMT+5": "Etc/GMT+5",
    "allTimeZones.Etc/GMT+6": "Etc/GMT+6",
    "allTimeZones.Etc/GMT+7": "Etc/GMT+7",
    "allTimeZones.Etc/GMT+8": "Etc/GMT+8",
    "allTimeZones.Etc/GMT+9": "Etc/GMT+9",
    "allTimeZones.Etc/GMT-0": "Etc/GMT-0",
    "allTimeZones.Etc/GMT-1": "Etc/GMT-1",
    "allTimeZones.Etc/GMT-10": "Etc/GMT-10",
    "allTimeZones.Etc/GMT-11": "Etc/GMT-11",
    "allTimeZones.Etc/GMT-12": "Etc/GMT-12",
    "allTimeZones.Etc/GMT-13": "Etc/GMT-13",
    "allTimeZones.Etc/GMT-14": "Etc/GMT-14",
    "allTimeZones.Etc/GMT-2": "Etc/GMT-2",
    "allTimeZones.Etc/GMT-3": "Etc/GMT-3",
    "allTimeZones.Etc/GMT-4": "Etc/GMT-4",
    "allTimeZones.Etc/GMT-5": "Etc/GMT-5",
    "allTimeZones.Etc/GMT-6": "Etc/GMT-6",
    "allTimeZones.Etc/GMT-7": "Etc/GMT-7",
    "allTimeZones.Etc/GMT-8": "Etc/GMT-8",
    "allTimeZones.Etc/GMT-9": "Etc/GMT-9",
    "allTimeZones.Etc/GMT0": "Etc/GMT0",
    "allTimeZones.Etc/Greenwich": "Etc/格林威治",
    "allTimeZones.Etc/UCT": "Etc/UCT",
    "allTimeZones.Etc/UTC": "Etc/UTC",
    "allTimeZones.Etc/Universal": "Etc/世界时",
    "allTimeZones.Etc/Zulu": "Etc/祖鲁",
    "allTimeZones.Europe/Amsterdam": "欧洲/阿姆斯特丹",
    "allTimeZones.Europe/Andorra": "欧洲/安道尔",
    "allTimeZones.Europe/Astrakhan": "欧洲/阿斯特拉罕",
    "allTimeZones.Europe/Athens": "欧洲/雅典",
    "allTimeZones.Europe/Belfast": "欧洲/贝尔法斯特",
    "allTimeZones.Europe/Belgrade": "欧洲/贝尔格莱德",
    "allTimeZones.Europe/Berlin": "欧洲/柏林",
    "allTimeZones.Europe/Bratislava": "欧洲/布拉迪斯拉发",
    "allTimeZones.Europe/Brussels": "欧洲/布鲁塞尔",
    "allTimeZones.Europe/Bucharest": "欧洲/布加勒斯特",
    "allTimeZones.Europe/Budapest": "欧洲/布达佩斯",
    "allTimeZones.Europe/Busingen": "欧洲/布辛根",
    "allTimeZones.Europe/Chisinau": "欧洲/基希讷乌",
    "allTimeZones.Europe/Copenhagen": "欧洲/哥本哈根",
    "allTimeZones.Europe/Dublin": "欧洲/都柏林",
    "allTimeZones.Europe/Gibraltar": "欧洲/直布罗陀",
    "allTimeZones.Europe/Guernsey": "欧洲/根西岛",
    "allTimeZones.Europe/Helsinki": "欧洲/赫尔辛基",
    "allTimeZones.Europe/Isle_of_Man": "欧洲/马恩岛",
    "allTimeZones.Europe/Istanbul": "欧洲/伊斯坦布尔",
    "allTimeZones.Europe/Jersey": "欧洲/泽西岛",
    "allTimeZones.Europe/Kaliningrad": "欧洲/加里宁格勒",
    "allTimeZones.Europe/Kiev": "欧洲/基辅",
    "allTimeZones.Europe/Kirov": "欧洲/基洛夫",
    "allTimeZones.Europe/Kyiv": "欧洲/基辅",
    "allTimeZones.Europe/Lisbon": "欧洲/里斯本",
    "allTimeZones.Europe/Ljubljana": "欧洲/卢布尔雅那",
    "allTimeZones.Europe/London": "欧洲/伦敦",
    "allTimeZones.Europe/Luxembourg": "欧洲/卢森堡",
    "allTimeZones.Europe/Madrid": "欧洲/马德里",
    "allTimeZones.Europe/Malta": "欧洲/马耳他",
    "allTimeZones.Europe/Mariehamn": "欧洲/玛丽港",
    "allTimeZones.Europe/Minsk": "欧洲/明斯克",
    "allTimeZones.Europe/Monaco": "欧洲/摩纳哥",
    "allTimeZones.Europe/Moscow": "欧洲/莫斯科",
    "allTimeZones.Europe/Nicosia": "欧洲/尼科西亚",
    "allTimeZones.Europe/Oslo": "欧洲/奥斯陆",
    "allTimeZones.Europe/Paris": "欧洲/巴黎",
    "allTimeZones.Europe/Podgorica": "欧洲/波德戈里察",
    "allTimeZones.Europe/Prague": "欧洲/布拉格",
    "allTimeZones.Europe/Riga": "欧洲/里加",
    "allTimeZones.Europe/Rome": "欧洲/罗马",
    "allTimeZones.Europe/Samara": "欧洲/萨马拉",
    "allTimeZones.Europe/San_Marino": "欧洲/圣马力诺",
    "allTimeZones.Europe/Sarajevo": "欧洲/萨拉热窝",
    "allTimeZones.Europe/Saratov": "欧洲/萨拉托夫",
    "allTimeZones.Europe/Simferopol": "欧洲/辛菲罗波尔",
    "allTimeZones.Europe/Skopje": "欧洲/斯科普里",
    "allTimeZones.Europe/Sofia": "欧洲/索非亚",
    "allTimeZones.Europe/Stockholm": "欧洲/斯德哥尔摩",
    "allTimeZones.Europe/Tallinn": "欧洲/塔林",
    "allTimeZones.Europe/Tirane": "欧洲/地拉那",
    "allTimeZones.Europe/Tiraspol": "欧洲/蒂拉斯波尔",
    "allTimeZones.Europe/Ulyanovsk": "欧洲/乌里扬诺夫斯克",
    "allTimeZones.Europe/Uzhgorod": "欧洲/乌日哥罗德",
    "allTimeZones.Europe/Vaduz": "欧洲/瓦杜兹",
    "allTimeZones.Europe/Vatican": "欧洲/梵蒂冈",
    "allTimeZones.Europe/Vienna": "欧洲/维也纳",
    "allTimeZones.Europe/Vilnius": "欧洲/维尔纽斯",
    "allTimeZones.Europe/Volgograd": "欧洲/伏尔加格勒",
    "allTimeZones.Europe/Warsaw": "欧洲/华沙",
    "allTimeZones.Europe/Zagreb": "欧洲/萨格勒布",
    "allTimeZones.Europe/Zaporozhye": "欧洲/扎波罗热",
    "allTimeZones.Europe/Zurich": "欧洲/苏黎世",
    "allTimeZones.GB": "GB",
    "allTimeZones.GB-Eire": "GB-Eire",
    "allTimeZones.GMT": "GMT",
    "allTimeZones.GMT+0": "GMT+0",
    "allTimeZones.GMT-0": "GMT-0",
    "allTimeZones.GMT0": "GMT0",
    "allTimeZones.Greenwich": "格林威治",
    "allTimeZones.HST": "HST",
    "allTimeZones.Hongkong": "中国香港",
    "allTimeZones.Iceland": "冰岛",
    "allTimeZones.Indian/Antananarivo": "印度洋/塔那那利佛",
    "allTimeZones.Indian/Chagos": "印度洋/查戈斯群岛",
    "allTimeZones.Indian/Christmas": "印度洋/圣诞岛",
    "allTimeZones.Indian/Cocos": "印度洋/科科斯",
    "allTimeZones.Indian/Comoro": "印度洋/科摩罗",
    "allTimeZones.Indian/Kerguelen": "印度洋/凯尔盖朗",
    "allTimeZones.Indian/Mahe": "印度洋/马埃岛",
    "allTimeZones.Indian/Maldives": "印度洋/马尔代夫",
    "allTimeZones.Indian/Mauritius": "印度洋/毛里求斯",
    "allTimeZones.Indian/Mayotte": "印度洋/马约特岛",
    "allTimeZones.Indian/Reunion": "印度洋/留尼汪岛",
    "allTimeZones.Iran": "伊朗",
    "allTimeZones.Israel": "以色列",
    "allTimeZones.Jamaica": "牙买加",
    "allTimeZones.Japan": "日本",
    "allTimeZones.Kwajalein": "夸贾林",
    "allTimeZones.Libya": "利比亚",
    "allTimeZones.MET": "MET",
    "allTimeZones.MST": "MST",
    "allTimeZones.MST7MDT": "MST7MDT",
    "allTimeZones.Mexico/BajaNorte": "墨西哥/巴哈诺特",
    "allTimeZones.Mexico/BajaSur": "墨西哥/巴哈苏尔",
    "allTimeZones.Mexico/General": "墨西哥/一般",
    "allTimeZones.NZ": "新西兰",
    "allTimeZones.NZ-CHAT": "NZ-CHAT",
    "allTimeZones.Navajo": "纳瓦霍语",
    "allTimeZones.PRC": "中国",
    "allTimeZones.PST8PDT": "PST8PDT",
    "allTimeZones.Pacific/Apia": "太平洋/阿皮亚",
    "allTimeZones.Pacific/Auckland": "太平洋/奥克兰",
    "allTimeZones.Pacific/Bougainville": "太平洋/布干维尔",
    "allTimeZones.Pacific/Chatham": "太平洋/查塔姆",
    "allTimeZones.Pacific/Chuuk": "太平洋/楚克岛",
    "allTimeZones.Pacific/Easter": "太平洋/复活节岛",
    "allTimeZones.Pacific/Efate": "太平洋/埃法特岛",
    "allTimeZones.Pacific/Enderbury": "太平洋/恩德伯里岛",
    "allTimeZones.Pacific/Fakaofo": "太平洋/法考福",
    "allTimeZones.Pacific/Fiji": "太平洋/斐济",
    "allTimeZones.Pacific/Funafuti": "太平洋/富纳富提",
    "allTimeZones.Pacific/Galapagos": "太平洋/加拉帕戈斯",
    "allTimeZones.Pacific/Gambier": "太平洋/甘比尔",
    "allTimeZones.Pacific/Guadalcanal": "太平洋/瓜达尔卡纳尔岛",
    "allTimeZones.Pacific/Guam": "太平洋/关岛",
    "allTimeZones.Pacific/Honolulu": "太平洋/火奴鲁鲁",
    "allTimeZones.Pacific/Johnston": "太平洋/约翰斯顿",
    "allTimeZones.Pacific/Kiritimati": "太平洋/基里蒂马蒂",
    "allTimeZones.Pacific/Kosrae": "太平洋/科斯雷",
    "allTimeZones.Pacific/Kwajalein": "太平洋/夸贾林岛",
    "allTimeZones.Pacific/Majuro": "太平洋/马朱罗",
    "allTimeZones.Pacific/Marquesas": "太平洋/马克萨斯群岛",
    "allTimeZones.Pacific/Midway": "太平洋/中途岛",
    "allTimeZones.Pacific/Nauru": "太平洋/瑙鲁",
    "allTimeZones.Pacific/Niue": "太平洋/纽埃",
    "allTimeZones.Pacific/Norfolk": "太平洋/诺福克",
    "allTimeZones.Pacific/Noumea": "太平洋/努美阿",
    "allTimeZones.Pacific/Pago_Pago": "太平洋/帕果帕果",
    "allTimeZones.Pacific/Palau": "太平洋/帕劳",
    "allTimeZones.Pacific/Pitcairn": "太平洋/皮特凯恩",
    "allTimeZones.Pacific/Pohnpei": "太平洋/波纳佩岛",
    "allTimeZones.Pacific/Ponape": "太平洋/波纳佩岛",
    "allTimeZones.Pacific/Port_Moresby": "太平洋/莫尔兹比港",
    "allTimeZones.Pacific/Rarotonga": "太平洋/拉罗汤加",
    "allTimeZones.Pacific/Saipan": "太平洋/塞班岛",
    "allTimeZones.Pacific/Samoa": "太平洋/萨摩亚",
    "allTimeZones.Pacific/Tahiti": "太平洋/塔希提岛",
    "allTimeZones.Pacific/Tarawa": "太平洋/塔拉瓦",
    "allTimeZones.Pacific/Tongatapu": "太平洋/汤加塔布岛",
    "allTimeZones.Pacific/Truk": "太平洋/特鲁克",
    "allTimeZones.Pacific/Wake": "太平洋/威克",
    "allTimeZones.Pacific/Wallis": "太平洋/瓦利斯",
    "allTimeZones.Pacific/Yap": "太平洋/雅浦",
    "allTimeZones.Poland": "波兰",
    "allTimeZones.Portugal": "葡萄牙",
    "allTimeZones.ROC": "ROC",
    "allTimeZones.ROK": "韩国",
    "allTimeZones.Singapore": "新加坡",
    "allTimeZones.Turkey": "土耳其",
    "allTimeZones.UCT": "UCT",
    "allTimeZones.US/Alaska": "美国/阿拉斯加",
    "allTimeZones.US/Aleutian": "美国/阿留申",
    "allTimeZones.US/Arizona": "美国/亚利桑那州",
    "allTimeZones.US/Central": "美国/中部",
    "allTimeZones.US/East-Indiana": "美国/东印第安纳州",
    "allTimeZones.US/Eastern": "美国/东部",
    "allTimeZones.US/Hawaii": "美国/夏威夷",
    "allTimeZones.US/Indiana-Starke": "美国/印第安纳-斯塔克",
    "allTimeZones.US/Michigan": "美国/密歇根州",
    "allTimeZones.US/Mountain": "美国/山地",
    "allTimeZones.US/Pacific": "美国/太平洋",
    "allTimeZones.US/Pacific-New": "美国/太平洋-新",
    "allTimeZones.US/Samoa": "美国/萨摩亚",
    "allTimeZones.UTC": "UTC",
    "allTimeZones.Universal": "世界时",
    "allTimeZones.W-SU": "W-SU",
    "allTimeZones.WET": "WET",
    "allTimeZones.Zulu": "祖鲁",
    "apiSettingsPage.bots.addBotbutton": "添加机器人",
    "apiSettingsPage.bots.description":
      "机器人只能访问与当前工作区分享的内容。要访问私人页面，请从“分享”菜单直接与机器人分享页面。<learnmorelink>了解更多</learnmorelink>",
    "apiSettingsPage.bots.title": "机器人",
    "appUpdateListener.downloadAndReinstallDesktopApp.message":
      "<textlink>下载并重新安装</textlink>你的{isMacApp, select, true { Mac 应用} other { Windows 应用}}以离线工作并获取最新功能。",
    "appUpdateListener.downloadingDesktopApp.message":
      "我们正在更新你的{isMacApp, select, true { Mac 应用} other { Windows 应用}}以便你可以离线工作（ {processPercent} ）",
    "appUpdateListener.mobileAppNotSupported.android": "安卓",
    "appUpdateListener.mobileAppNotSupported.ios": "iOS",
    "appUpdateListener.mobileAppNotSupported.message":
      "不再支持此应用程序版本。{br}请<upgradelink>升级你的 {androidOrIOSApp} 应用</upgradelink>。",
    "appUpdateListener.mobilePlatformNotSupported.message":
      "不再支持此操作系统。{br}请<upgradelink>升级到{supportedPlatformVersion}或更高版本。</upgradelink>",
    "appUpdateListener.reinstallDesktopApp.message":
      "<textlink>下载并重新安装</textlink>你的桌面应用以获取最新功能。",
    "appVersionMenuItem.desktopVersion.menuItem":
      "桌面版 {desktopVersionFormatted}",
    "appVersionMenuItem.downloadingUpdate.message":
      "正在下载{version} {percentComplete}",
    "appVersionMenuItem.lastUpdatedReactNativeVersion.menuItem":
      "移动端 {reactNativeVersionFormatted}",
    "appVersionMenuItem.lastUpdatedTime.menuItem": "更新于 {lastUpdatedTime}",
    "appVersionMenuItem.mobile.clearCache.message": "清除缓存",
    "appVersionMenuItem.noUpdatesForApp.message": "无更新 {timeFromNow}",
    "appVersionMenuItem.updateReady.message": "更新就绪 {version}",
    "appVersionMenuItem.updateStateForApp.checking.message": "正在检查更新⋯",
    "appVersionMenuItem.waitingForAppJsUpdate.message": "App.js - 等待中⋯",
    "appVersionMenuitem.updateError.message": "更新错误 {errorMessage}",
    "appearanceSetting.dark.label": "深色",
    "appearanceSetting.light.label": "浅色",
    "appearanceSetting.system.label": "使用系统设置",
    "appearanceSettings.description.message": "自定义 Notion 在设备上的外观。",
    "appearanceSettings.modal.done": "完成",
    "appearanceSettings.modal.title": "外观",
    "appearanceSettings.title": "外观",
    "appleErrors.api.missingAccessTokenError": "Apple 无法授权登录。",
    "appleErrors.api.missingBetaAppReviewSubmission":
      "找不到 betaAppReviewSubmission 条目。",
    "appleErrors.api.missingIdError": "在从 Apple 获取用户信息时出现问题。",
    "appleErrors.api.missingPreReleaseVersion":
      "找不到 preReleaseVersion 条目。",
    "appleErrors.api.statusError": "Apple 服务出现问题。",
    "appleErrors.api.tokenError": "在与 Apple 验证你的身份时出现问题。",
    "applyCreditToggle.applyCredit.amount": "使用 {creditAmount} 积分",
    "archiveTeam.confirmButton.label": "归档团队",
    "asanaActions.authenticatingWithAsana.loadingMessage": "Asana 授权中⋯",
    "asanaActions.loginWithAsanaPopupModal.title": "Asana 登录",
    "asanaImportOption.actionsMenu.connectAnotherAccount": "绑定另一个帐户",
    "asanaImportOption.actionsMenu.import": "导入",
    "asanaImportOption.actionsMenu.removeIntegration": "移除",
    "asanaImportOption.search.noResultsPlaceholder": "沒有项目",
    "asanaImportOption.search.placeholder": "搜索项目⋯",
    "attributionTooltip.createdByTitle": "创建者",
    "attributionTooltip.lastEditedByTitle": "上次编辑者",
    "audioBlock.embed.caption": "适用于 .mp3、.wav 和 .ogg 等格式",
    "audioBlock.embedAudio.button.label": "嵌入音频",
    "audioBlock.placeholder": "添加音频文件",
    "auditLog.actionNames.eventColumn.login": "已登录",
    "auditLog.actionNames.eventColumn.loginWithMetadata":
      "已在 {city} 登录 {platform}",
    "auditLog.actionNames.eventColumn.loginWithPlatformOnly":
      "已登录 {platform}",
    "auditLog.dateTimeRangeMenu.endingDatePlaceholder": "结束",
    "auditLog.dateTimeRangeMenu.startingDatePlaceholder": "开始",
    "auditLog.dateTimeRangeMenu.timePlaceholder": "HH:MM AM",
    "auditLogPaginatedTable.copiedText.noEmail": "不适用",
    "auditLogPaginatedTable.copyButton.dateTimePlaceholder": "日期时间",
    "auditLogPaginatedTable.copyButton.emailPlaceholder": "电子邮件",
    "auditLogPaginatedTable.copyButton.eventPlaceholder": "事件",
    "auditLogPaginatedTable.copyButton.geolocationPlaceholder": "地理位置",
    "auditLogPaginatedTable.copyButton.ipPlaceholder": "IP",
    "auditLogPaginatedTable.copyButton.namePlaceholder": "名称",
    "auditLogPaginatedTable.copyButton.platformPlaceholder": "平台",
    "auditLogSettings.metadata.ipAddress": "IP 地址：{ip}",
    "auditLogSettings.timeTooltip.localTIme": "当地时区：{timezone}",
    "auditLogSettings.timeTooltip.utcTime": "UTC：{time}",
    "auditlog.actionNames.eventColumn.email_changed":
      "已将电子邮件从 {oldEmail} 更改为 {newEmail}",
    "auditlog.actionNames.eventColumn.file_uploaded": "已上传文件",
    "auditlog.actionNames.eventColumn.file_uploaded_private":
      "已将文件上传到私人页面",
    "auditlog.actionNames.eventColumn.guest_removed":
      "已将访客 {guestNameOrEmail} 从工作区中移除",
    "auditlog.actionNames.eventColumn.logged_in_geolocation":
      "在{geolocation}中",
    "auditlog.actionNames.eventColumn.logged_in_platform": "{platform}",
    "auditlog.actionNames.eventColumn.logout": "已登出",
    "auditlog.actionNames.eventColumn.member_invited":
      "已邀请成员作为 {inviteeRole}",
    "auditlog.actionNames.eventColumn.member_joined": "已加入工作区",
    "auditlog.actionNames.eventColumn.member_removed":
      "已将 {memberNameOrEmail} 从工作区中移除",
    "auditlog.actionNames.eventColumn.member_role_updated":
      "已将 {memberNameOrEmail} 从 {oldRole} 更新为 {newRole}",
    "auditlog.actionNames.eventColumn.member_updated":
      "已将成员更新为 {newRole}",
    "auditlog.actionNames.eventColumn.page_created_general": "已创建页面",
    "auditlog.actionNames.eventColumn.page_created_private": "已创建私人页面",
    "auditlog.actionNames.eventColumn.page_created_under":
      '已在 "{parentPageName}" 下面创建页面',
    "auditlog.actionNames.eventColumn.page_created_workspace":
      "已在工作区中创建页面",
    "auditlog.actionNames.eventColumn.page_deleted": "已删除 “{pageName}”",
    "auditlog.actionNames.eventColumn.page_deleted_private": "已删除私人页面",
    "auditlog.actionNames.eventColumn.page_exported": '已导出 "{pageName}"',
    "auditlog.actionNames.eventColumn.page_exported_private": "已导出私人页面",
    "auditlog.actionNames.eventColumn.page_moved":
      "已将 {pageName} 从 {oldParentPageName} 移动到 {newParentPageName}",
    "auditlog.actionNames.eventColumn.page_moved_private": "已移动私人页面",
    "auditlog.actionNames.eventColumn.page_permanently_deleted":
      "永久删除 “{pageName}”",
    "auditlog.actionNames.eventColumn.page_permanently_deleted_private":
      "永久删除私人页面",
    "auditlog.actionNames.eventColumn.page_permissions_private":
      "已更新私人页面的权限",
    "auditlog.actionNames.eventColumn.page_permissions_under":
      '已更新 "{pageName}"的权限',
    "auditlog.actionNames.eventColumn.page_permissions_updated_private_bot":
      "bot {botName} 对私人页面的权限已从 {oldRole} 更新为 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_private_default":
      "{memberNameOrEmail} 对私人页面的权限已从 {oldRole} 更新为 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_private_guest":
      "访客 {guestNameOrEmail} 对私人页面的权限已从 {oldRole} 更新为 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_workspace_bot":
      "bot {botName} 对 {pageName} 的权限已从 {oldRole} 更新为 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_workspace_default":
      "{memberNameOrEmail} 对 {pageName} 的权限已从 {oldRole} 更新为 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_workspace_guest":
      "访客 {guestNameOrEmail} 对 {pageName} 的权限已从 {oldRole} 更新为 {newRole}",
    "auditlog.actionNames.eventColumn.page_restored": '已恢复 "{pageName}"',
    "auditlog.actionNames.eventColumn.page_restored_private": "已恢复私人页面",
    "auditlog.actionNames.eventColumn.page_viewed_private": "已查看私人页面",
    "auditlog.actionNames.eventColumn.page_viewed_under": "已查看 {pageName}",
    "auditlog.actionNames.eventColumn.password_changed": "已更改登录密码",
    "auditlog.actionNames.eventColumn.password_cleared": "已清除登录密码",
    "auditlog.actionNames.eventColumn.password_set": "已创建登录密码",
    "auditlog.actionNames.eventColumn.picture_changed": "已更改个人资料图片",
    "auditlog.actionNames.eventColumn.untitled_page": "无标题页面",
    "auditlog.actionNames.eventColumn.user_deleted": "用户已删除",
    "auditlog.error.loadCurrentAuditLogError": "无法加载审计日志",
    "auditlog.filterMenu.actorFilter.title": "用户",
    "auditlog.filterMenu.dateFilter.title": "日期",
    "auditlog.filterMenu.eventFilter.addItemLabel": "添加事件",
    "auditlog.filterMenu.eventFilter.placeholder": "搜索事件",
    "auditlog.filterMenu.eventFilter.resultSectionTitle": "事件",
    "auditlog.filterMenu.eventFilter.title": "事件",
    "auditlog.logTable.dateColumn.header": "日期",
    "auditlog.logTable.eventColumn.header": "事件",
    "auditlog.logTable.nextPage": "下一个",
    "auditlog.logTable.noResults": "无结果",
    "auditlog.logTable.noResultsHelpText":
      "尝试不同的筛选器。日志可能需要一些时间才能显示出来。",
    "auditlog.logTable.previousPage": "上一个",
    "auditlog.logTable.userColumn.header": "用户",
    "auditlog.title": "审计日志",
    "auditlogActorFilter.searchActor.placeholder": "搜索用户⋯",
    "auditlogActorFilter.searchActor.resultsTitle": "选择用户",
    "auditlogActorFilter.title": "用户",
    "auditlogDateFilter.quickFilters.lastMonth": "过去 30 天",
    "auditlogDateFilter.quickFilters.lastWeek": "过去 7 天",
    "auditlogDateFilter.quickFilters.today": "今天",
    "auditlogDateFilter.quickFilters.yesterday": "昨天",
    "auditlogDateFilter.timeToggle": "使用时间",
    "auditlogDateFilter.title": "日期",
    "auditlogEventFilter.actionName.email_changed": "邮件已更改",
    "auditlogEventFilter.actionName.file_uploaded": "文件已上传",
    "auditlogEventFilter.actionName.guest_removed": "访客已删除",
    "auditlogEventFilter.actionName.login": "登录",
    "auditlogEventFilter.actionName.logout": "登出",
    "auditlogEventFilter.actionName.member_invited": "成员已邀请",
    "auditlogEventFilter.actionName.member_joined": "成员已加入",
    "auditlogEventFilter.actionName.member_removed": "成员已删除",
    "auditlogEventFilter.actionName.member_role_updated": "成员角色已更新",
    "auditlogEventFilter.actionName.member_updated": "成员角色已更新",
    "auditlogEventFilter.actionName.page_created": "页面已创建",
    "auditlogEventFilter.actionName.page_deleted": "页面已删除",
    "auditlogEventFilter.actionName.page_exported": "页面已导出",
    "auditlogEventFilter.actionName.page_moved": "页面已移动",
    "auditlogEventFilter.actionName.page_permission_updated": "页面权限已更新",
    "auditlogEventFilter.actionName.page_restored": "页面已恢复",
    "auditlogEventFilter.actionName.page_viewed": "页面已查看",
    "auditlogEventFilter.actionName.password_changed": "密码已更改",
    "auditlogEventFilter.actionName.password_cleared": "密码已清除",
    "auditlogEventFilter.actionName.password_set": "密码已设置",
    "auditlogEventFilter.actionName.picture_changed": "图片已更改",
    "auditlogEventFilter.actionName.user_deleted": "用户已删除",
    "auditlogEventFilter.actionName.user_page_permission_updated":
      "页面权限已更新",
    "auditlogEventFilter.applyButton": "应用",
    "auditlogEventFilter.categoryName.account": "帐户",
    "auditlogEventFilter.categoryName.page": "页面",
    "auditlogEventFilter.categoryName.workspace": "工作区",
    "auditlogEventFilter.clearButton": "清除",
    "auditlogEventFilter.title": "事件",
    "backlink.currentPageTokenLabel": "此页面",
    "backlink.originalTokenLabel": "原始",
    "backlinks.backlinks": "隐藏反向链接",
    "backlinks.learn": "了解反向链接",
    "block.imageCaption.placeholder": "写一个标题⋯",
    "block.propertyTypeName.caption": "标题",
    "block.propertyTypeName.checked": "已选",
    "block.propertyTypeName.date": "日期",
    "block.propertyTypeName.description": "描述",
    "block.propertyTypeName.language": "语言",
    "block.propertyTypeName.link": "链接",
    "block.propertyTypeName.person": "人员",
    "block.propertyTypeName.size": "大小",
    "block.propertyTypeName.source": "来源",
    "block.propertyTypeName.title": "标题",
    "block.selectableAddMenu.tooltip":
      "点击<mediumcolor>在下面添加一个块</mediumcolor>",
    "blockAuthorInfo.label": "上次由{author}编辑",
    "blockAuthorInfo.restrictedBadge": "已受限",
    "blockAuthorInfo.restrictedBadge.clickText": "点击查看访问权限",
    "blockAuthorInfo.restrictedBadge.infoText": "访问受限于父页面",
    "blockAuthorInfo.tooltip.createdBy": "由<b>{author}</b>创建",
    "blockAuthorInfo.tooltip.lastEdited": "上次由<b>{author}</b>编辑",
    "blockDiscussionMenu.emptyState.noCommentsMessage": "无评论。",
    "blockDiscussionMenu.emptyState.noResolvedCommentsMessage":
      "没有已解决的评论。",
    "blockDiscussionMenu.emptyStatte.noResolvedCommentsMessage":
      "没有已解决的评论。",
    "blockDiscussionMenu.mobileMenu.title": "评论",
    "blockDiscussionMenu.openDiscussionsTab.title":
      "进行中 ({numberOfOpenDiscussions})",
    "blockDiscussionMenu.openDiscussionsTabEmpty.title": "进行中",
    "blockDiscussionMenu.resolvedDiscussionsTab.title":
      "已解决 ({numberOfResolvedDiscussions})",
    "blockDiscussionMenu.resolvedDiscussionsTabEmpty.title": "已解决",
    "blockHelpers.abstractBlockType": "Abstract",
    "blockHelpers.audioBlockType": "音频",
    "blockHelpers.codepenBlockType": "CodePen",
    "blockHelpers.deepnoteBlockType": "Deepnote",
    "blockHelpers.driveBlockType": "谷歌云端硬盘",
    "blockHelpers.embedBlockType": "嵌入",
    "blockHelpers.excalidrawBlockType": "Excalidraw",
    "blockHelpers.figmaBlockType": "Figma",
    "blockHelpers.fileBlockType": "文件",
    "blockHelpers.framerBlockType": "Framer",
    "blockHelpers.gistBlockType": "Gist",
    "blockHelpers.hexBlockType": "Hex",
    "blockHelpers.imageBlockType": "图片",
    "blockHelpers.invisionBlockType": "Invision",
    "blockHelpers.loomBlockType": "Loom",
    "blockHelpers.mapsBlockType": "地图",
    "blockHelpers.miroBlockType": "Miro",
    "blockHelpers.pdfBlockType": "PDF",
    "blockHelpers.replitBlockType": "Replit",
    "blockHelpers.sketchBlockType": "Sketch",
    "blockHelpers.tweetBlockType": "推文",
    "blockHelpers.typeformBlockType": "Typeform",
    "blockHelpers.videoBlockType": "视频",
    "blockHelpers.whimsicalBlockType": "Whimsical",
    "blockMenu.actionButton.label": "动作",
    "blockMenu.filterForActions.placeholder": "筛选动作⋯",
    "blockMenuRestrictedMessage.adminRestoreAction.label": "恢复权限",
    "blockMenuRestrictedMessage.label": "你无权编辑此块，因为它受到限制。",
    "blockPasteMenu.actions.createTransclusion.title": "粘贴并同步",
    "blockPasteMenu.actions.dismiss.title": "解除",
    "blockPasteMenu.actions.linkToPage.title": "指向页面的链接",
    "blockPermissionsSetings.untitledBotPlaceholder": "无标题的机器人",
    "blockPermissionsSettings.addGuests.subtitle": "与他人私下协作",
    "blockPermissionsSettings.addGuests.title": "邀请人员",
    "blockPermissionsSettings.addGuestsAndGroups.title": "邀请人员和群组",
    "blockPermissionsSettings.botPermission.tooltip":
      "这是你工作区中的一个集成服务。",
    "blockPermissionsSettings.confirmationDialog.private.message":
      "确定将当前页面变为私有？<semibold>私有化后只有你可以访问它。</semibold>",
    "blockPermissionsSettings.confirmationDialog.privateButton.label":
      "移动到私人",
    "blockPermissionsSettings.confirmationDialog.workspace.message":
      "确定与工作区分享此页面吗？<semibold>所有 {memberCount} 位成员都将可以访问。</semibold>",
    "blockPermissionsSettings.confirmationDialog.workspaceButton.label":
      "移动到工作区",
    "blockPermissionsSettings.copyLinkButton.label": "复制链接",
    "blockPermissionsSettings.groupPermission.canAdmin":
      "{numberOfGroupMembers, plural, one {{numberOfGroupMembers} 位群组成员} other {{numberOfGroupMembers} 位群组成员}}可以编辑和分享",
    "blockPermissionsSettings.groupPermission.canComment":
      "{numberOfGroupMembers, plural, one {{numberOfGroupMembers} 位群组成员} other {{numberOfGroupMembers} 位群组成员}}可以发表评论",
    "blockPermissionsSettings.groupPermission.canEdit":
      "{numberOfGroupMembers, plural, one {{numberOfGroupMembers} 位群组成员} other {{numberOfGroupMembers} 位群组成员}}可以编辑",
    "blockPermissionsSettings.groupPermission.canRead":
      "{numberOfGroupMembers, plural, one {{numberOfGroupMembers} 位群组成员} other {{numberOfGroupMembers} 位群组成员}}可以查看",
    "blockPermissionsSettings.groupPermission.none":
      "{numberOfGroupMembers, plural, other {{numberOfGroupMembers} 位群组成员}}",
    "blockPermissionsSettings.groupPermission.tooltip":
      "将此页面显示在{groupName}群组成员的<boldtext>共享</boldtext>侧边栏分组中。",
    "blockPermissionsSettings.groupPermissionUsers.tooltip":
      "其他 {countRemainingUsers} 位⋯",
    "blockPermissionsSettings.inheritedPermissions.tooltip":
      "访问权限基于{inlineIconAndName}。请前往此页面更改权限。",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.changingLinks":
      "公共链接正在发生变化。",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.openSettingsCTA":
      "设置",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.setDomainForPublicLinks":
      "为以下位置的公共链接设置域名",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.transition":
      "了解有关转换的更多信息",
    "blockPermissionsSettings.learnAboutSharing.prompt": "了解分享",
    "blockPermissionsSettings.learnMore.prompt": "了解更多",
    "blockPermissionsSettings.mobileShareMenu.title": "分享",
    "blockPermissionsSettings.moveToButton.label": "移动到",
    "blockPermissionsSettings.offline.prompt": "连接网络后便可发布并分享。",
    "blockPermissionsSettings.option.publish": "发布",
    "blockPermissionsSettings.option.share": "分享",
    "blockPermissionsSettings.permissionItem.groupAccess": "与{groupName}分享",
    "blockPermissionsSettings.permissionItem.linkSharing": "分享到网络",
    "blockPermissionsSettings.permissionItem.teamAccess": "{teamName} 团队",
    "blockPermissionsSettings.permissionItem.workspaceAccess":
      "与{workspaceName}分享",
    "blockPermissionsSettings.permissionItem.workspaceAccessNew":
      "{workspaceName}中的所有人",
    "blockPermissionsSettings.permissionsForBot.label": "集成服务",
    "blockPermissionsSettings.permissionsForBot.personalBot.label":
      "仅对你可见",
    "blockPermissionsSettings.permissionsForBot.spaceBot.label":
      "已通过工作区分享",
    "blockPermissionsSettings.permissionsForUserGuest.label": "访客",
    "blockPermissionsSettings.privatePermissions.tooltip":
      "只有你可以访问此页面。",
    "blockPermissionsSettings.publicLinkInfo.tooltip":
      "此页面有公共链接访问权限，拥有链接的任何人都可以查看。",
    "blockPermissionsSettings.publicPermission.canComment":
      "任何有链接的人都可以发表评论",
    "blockPermissionsSettings.publicPermission.canEdit":
      "任何有链接的人都可以编辑和评论",
    "blockPermissionsSettings.publicPermission.canRead":
      "任何有链接的人都可以查看",
    "blockPermissionsSettings.publicPermission.none": "发布并与任何人分享链接",
    "blockPermissionsSettings.publicPermission.tooltip":
      "知道链接的任何人都可以访问此页面。",
    "blockPermissionsSettings.restrictedPermissions.tooltip":
      "访问权限基于{inlineIconAndName}。更改后将不再继承父页面的权限。",
    "blockPermissionsSettings.sentInvitation.message": "已发送邀请",
    "blockPermissionsSettings.spacePermission.canAdmin":
      "{numberOfWorkspaceMembers, plural, one {{numberOfWorkspaceMembers} 位工作区成员} other {{numberOfWorkspaceMembers} 位工作区成员}}可以编辑和分享",
    "blockPermissionsSettings.spacePermission.canComment":
      "{numberOfWorkspaceMembers, plural, one {{numberOfWorkspaceMembers} 位工作区成员} other {{numberOfWorkspaceMembers} 位工作区成员}}可以发表评论",
    "blockPermissionsSettings.spacePermission.canEdit":
      "{numberOfWorkspaceMembers, plural, one {{numberOfWorkspaceMembers} 位工作区成员} other {{numberOfWorkspaceMembers} 位工作区成员}}可以编辑",
    "blockPermissionsSettings.spacePermission.canRead":
      "{numberOfWorkspaceMembers, plural, one {{numberOfWorkspaceMembers} 位工作区成员} other {{numberOfWorkspaceMembers} 位工作区成员}}可以查看",
    "blockPermissionsSettings.spacePermission.none":
      "{numberOfWorkspaceMembers, plural, other {{numberOfWorkspaceMembers} 位工作区成员}}",
    "blockPermissionsSettings.spacePermission.tooltip":
      "将此页面显示在工作区所有成员的<boldtext>工作区</boldtext>侧边栏分组中。",
    "blockPermissionsSettings.teamPermission.subtitle":
      "{nonGuestTeamMembersCount, plural, other {{nonGuestTeamMembersCount} 个团队成员}}",
    "blockPermissionsSettings.teamPermission.tooltip":
      "适用于 {teamName} 的所有非访客团队成员（共 {memberCount} 个）。",
    "blockPermissionsSettings.userPermissions.tooltip":
      "只有你和其他受邀成员或访客才能通过链接查看此页面。",
    "blockPermissionsSettings.workspacePermissions.tooltip":
      "此页面具有工作区访问权限，工作区中的任何人都可以通过链接查看此页面。",
    "blockPropertyValue.filterForNumberFormats.placeholder": "筛选格式...",
    "blockSyncInfo.error.label": "同步错误，请手动刷新",
    "blockSyncInfo.parentOffline.label": "父页面已离线保存",
    "blockSyncInfo.synced.label": "上次同步于 {time}",
    "blockSyncInfo.syncing.label": "同步中⋯",
    "blockTemplates.board.assignPropertyTitle": "指派",
    "blockTemplates.board.card1Title": "卡片 1",
    "blockTemplates.board.card2Title": "卡片 2",
    "blockTemplates.board.card3Title": "卡片 3",
    "blockTemplates.board.namePropertyTitle": "名称",
    "blockTemplates.board.statusPropertyGreenOptionTitle": "已完成",
    "blockTemplates.board.statusPropertyRedOptionTitle": "未开始",
    "blockTemplates.board.statusPropertyTitle": "状态",
    "blockTemplates.board.statusPropertyYellowOptionTitle": "进行中",
    "blockTemplates.board.viewTitle": "看板视图",
    "blockTemplates.calendar.datePropertyTitle": "日期",
    "blockTemplates.calendar.namePropertyTitle": "名称",
    "blockTemplates.calendar.tagsPropertyTitle": "标签",
    "blockTemplates.calendar.viewTitle": "日历视图",
    "blockTemplates.gallery.createdPropertyTitle": "创建时间",
    "blockTemplates.gallery.namePropertyTitle": "名称",
    "blockTemplates.gallery.page1CompletedTodoTitle": "已完成的待办事项",
    "blockTemplates.gallery.page1Title": "页面 1",
    "blockTemplates.gallery.page1TodoTitle": "待办事项",
    "blockTemplates.gallery.page2Title": "页面 2",
    "blockTemplates.gallery.page3Title": "页面 3",
    "blockTemplates.gallery.tagsPropertyTitle": "标签",
    "blockTemplates.gallery.viewTitle": "画廊视图",
    "blockTemplates.list.createdPropertyTitle": "创建时间",
    "blockTemplates.list.namePropertyTitle": "名称",
    "blockTemplates.list.page1Title": "页面 1",
    "blockTemplates.list.page2Title": "页面 2",
    "blockTemplates.list.page3Title": "页面 3",
    "blockTemplates.list.tab1Title": "选项卡 1",
    "blockTemplates.list.tab2Title": "选项卡 2",
    "blockTemplates.list.tab3Title": "选项卡 3",
    "blockTemplates.list.tagsPropertyTitle": "标签",
    "blockTemplates.list.viewTitle": "列表视图",
    "blockTemplates.table.namePropertyTitle": "名称",
    "blockTemplates.table.tagsPropertyTitle": "标签",
    "blockTemplates.table.viewTitle": "默认视图",
    "blockTemplates.templateButton.addNewTodoTitle": "添加待办事项",
    "blockTemplates.timeline.datePropertyTitle": "日期",
    "blockTemplates.timeline.viewTitle": "时间轴视图",
    "blocks.blockMenu.collectionHelpButton": "了解数据库",
    "blocks.hoverBlockMenu.collectionHelpButton": "了解数据库",
    "boardHiddenGroup.searchPlaceholder": "搜索页面⋯",
    "bookmarkBlock.addWebBookmark.placeholder": "添加 Web 书签",
    "bookmarkBlock.bookmark.title": "书签",
    "bookmarkBlock.editBookmark.linkPlaceholder": "以 https://… 格式粘贴",
    "bookmarkBlock.invalidLinkError.message": "请输入有效的链接",
    "bookmarkBlock.loadWhileFetching.message": "获取预览中",
    "bookmarkBlock.visualBookmark.create": "创建书签",
    "bookmarkBlock.visualBookmark.prompt": "从链接创建可视化书签。",
    "bootupHelpers.iosErrorRequiresReinstall.errorMessage":
      "你好。iOS应用程序检测到问题。删除此应用后，请在App Store中重新安装它。",
    "botActions.deleteBotConfirmationDialog.confirmDeleteBotButton.label":
      "是的",
    "botActions.deleteBotConfirmationDialog.confirmationMessage":
      "确定要撤销{integrationName}的访问权限吗？",
    "botHelpers.personalBotCaption":
      "只有你可以编辑此机器人。此机器人具有与你相同的所有权限。",
    "botHelpers.unnamedBot": "未命名的机器人",
    "botHelpers.workspaceBotCaption":
      "机器人只能在当前的工作区中工作。任何管理员都可以编辑此机器人。机器人无权访问私人页面，除非被特定邀请。",
    "botMenuItem.spaceBot.label": "已通过工作区分享",
    "botWithTokenSettings.deleteBot.label": "删除机器人",
    "botWithTokenSettings.revokeTokenModal.acceptButton.label": "撤销 API 令牌",
    "botWithTokenSettings.revokeTokenModal.message":
      "撤销 API 令牌？使用此令牌的所有 API 请求将不再成功。",
    "botWithTokenSettings.revokeTokenModal.tokenRevoked.message":
      "已成功吊销 API 令牌。新令牌现在可用。",
    "breadcrumb.mobileBreadcrumbMenu.title": "导航栏",
    "breakingUpdateDialog.title": "我们刚刚推出了新功能！",
    "breakingUpdateDialog.updateButtonTitle": "更新并查看新功能",
    "breakingViewsUpdate.title": "请更新到最新版本以查看此内容",
    "breakingViewsUpdate.updateButtonTitle": "更新",
    "bulletedListBlock.placeholder.label": "项目",
    "calendarItem.endsTime.message": "{endTime} 结束",
    "calendarSettings.startWeekOnMonday.label": "星期开始于周一",
    "calendarSettings.startWeekOnMonday.message":
      "这将更改你应用中所有日历的外观。",
    "calendarSettings.title": "日历",
    "calloutBlock.inputPlaceholder": "输入内容⋯",
    "capabilitiesTooltip.mixedAccess.readContent.enabled": "可以读取内容。",
    "capabilitiesTooltip.mixedAccess.title": "混合访问权限",
    "capabilitiesTooltip.mixedaccess.insertContent.disabled": "无法插入内容。",
    "capabilitiesTooltip.mixedaccess.insertContent.enabled": "可以插入内容。",
    "capabilitiesTooltip.mixedaccess.readContent.disabled": "无法读取内容。",
    "capabilitiesTooltip.mixedaccess.updateContent.disabled": "无法更新内容。",
    "capabilitiesTooltip.mixedaccess.updateContent.enabled": "可以更新内容。",
    "capabilitiesTooltip.userAccess.readUserEmailAddresses.disabled":
      "无法查看用户电子邮件地址。",
    "capabilitiesTooltip.userAccess.readUserEmailAddresses.enabled":
      "可以查看用户电子邮件地址。",
    "capabilitiesTooltip.userAccess.readUsers.disabled": "无法查看用户。",
    "capabilitiesTooltip.userAccess.readUsers.enabled": "可以查看用户。",
    "chargeReminderEmail.billingLink.text":
      "<b><billinglink>点击此处查看你的账单设置</billinglink></b>",
    "chargeReminderEmail.billingType.ACHOrWire.text": "ACH 或电汇",
    "chargeReminderEmail.billingType.creditCard.text":
      "以<b> {last4Digits} </b>结尾的<b> {brand} </b>卡",
    "chargeReminderEmail.closingText": "谢谢你。{br}—来自 Notion 团队",
    "chargeReminderEmail.greeting": "嗨，你好！",
    "chargeReminderEmail.reminderBody.text":
      "看起来你下个 Notion 计费周期的积分不足。温馨提醒：我们将于 {dateOfNextCharge}通过帐户上已设置的付款方式（{paymentMethod}）向你收取 <b>{amountToBeCharged}</b>。",
    "chargeReminderEmail.subjectLine.text":
      "Notion 提醒：你将于 7 天内被收取费用",
    "churnSurveyMenu.alternatives.airtable": "Airtable",
    "churnSurveyMenu.alternatives.alternativeOtherPlaceholder":
      "请告诉我们更多⋯",
    "churnSurveyMenu.alternatives.asana": "Asana",
    "churnSurveyMenu.alternatives.atlassianConfluence": "Confluence",
    "churnSurveyMenu.alternatives.atlassianJira": "Jira",
    "churnSurveyMenu.alternatives.coda": "Coda",
    "churnSurveyMenu.alternatives.description": "请选择一个或多个",
    "churnSurveyMenu.alternatives.dropboxPaper": "Dropbox Paper",
    "churnSurveyMenu.alternatives.evernote": "印象笔记国际版（Evernote）",
    "churnSurveyMenu.alternatives.googleDriveDocs": "谷歌云端硬盘/文档",
    "churnSurveyMenu.alternatives.microsoftOffice": "微软 / Office 365",
    "churnSurveyMenu.alternatives.other": "其他",
    "churnSurveyMenu.alternatives.quip": "Quip",
    "churnSurveyMenu.alternatives.title": "2. 你将使用什么其他工具？",
    "churnSurveyMenu.alternatives.trello": "Trello",
    "churnSurveyMenu.cancelButton.title": "取消",
    "churnSurveyMenu.continueDowngrade.downgradeMessage.personal":
      "如果你现在取消订阅，你仍可继续使用此付费方案的所有功能直到 {periodEnd}。你可以随时重新订阅或切换到另一个付费方案。{br}在 {periodEnd}后，此工作区将降级为免费的个人版，包含以下限制：<li>单人使用</li><li>工作区的访客限制为 5 个</li><li>上传文件每个最多 5MB</li><li>没有版本历史记录</li><li>没有与团队成员共享的工作区</li>",
    "churnSurveyMenu.continueDowngrade.downgradeMessage.team":
      "如果你现在取消订阅，你仍可继续使用此付费方案的所有功能直到 {periodEnd}。你可以随时重新订阅或切换到另一个付费方案。{br}在 {periodEnd}后，此工作区将降级为团队版的免费试用版，包含以下限制：<li>1,000 个块限制</li><li>上传文件每个最大 5MB</li><li>没有版本历史记录</li><li>没有批量导出</li><li>没有高级权限</li><li>没有权限群组</li>",
    "churnSurveyMenu.continueDowngrade.title": "继续降级？",
    "churnSurveyMenu.downgradeButton.title": "降级",
    "churnSurveyMenu.goBackButton.title": "返回到付费方案",
    "churnSurveyMenu.header.covidMessage":
      "💛 如果你受到 COVID-19 的影响，请<contactuslink>联系我们</contactuslink>以寻求帮助。",
    "churnSurveyMenu.header.description":
      "Notion 正在不断改善的旅途中。在你降级之前，我们希望你能告诉我们为什么，以便我们在今后为每个人提供更好的服务。感谢你的反馈意见。",
    "churnSurveyMenu.header.personal.title": "降级到个人版",
    "churnSurveyMenu.header.team.title": "降级到团队试用版",
    "churnSurveyMenu.other.otherFeedbackPlaceholder":
      "我们的团队将审核你的反馈，以使 Notion 变得更好。",
    "churnSurveyMenu.otherFeedback.title": "3. 对我们的反馈意见",
    "churnSurveyMenu.reasons.companyShuttingDown": "公司正在关闭或削减开支",
    "churnSurveyMenu.reasons.description": "请选择一个或多个",
    "churnSurveyMenu.reasons.missingFeatures": "缺少功能",
    "churnSurveyMenu.reasons.missingFeaturesPlaceholder":
      "让我们知道你还需要哪些功能⋯",
    "churnSurveyMenu.reasons.notUsingEnough": "没有经常使用",
    "churnSurveyMenu.reasons.other": "其他",
    "churnSurveyMenu.reasons.reasonOtherPlaceholder": "请告诉我们更多⋯",
    "churnSurveyMenu.reasons.securityComplianceRequirements":
      "安全性或合规性要求",
    "churnSurveyMenu.reasons.title": "1. 你降级的原因是什么？",
    "churnSurveyMenu.reasons.toDifficult": "太难用了",
    "churnSurveyMenu.reasons.tooExpensive": "太贵了",
    "churnSurveyMenu.reasons.trialOver": "试用期结束",
    "churnSurveyMenu.reasons.upgradedByMistake": "不小心升级",
    "churnSurveyMenu.reasons.usingAlternative": "使用替代方案",
    "clipboardActions.offlineError.message": "请连接网络后复制此块。",
    "clipboardActions.pasteFileIntoCommentError.message":
      "很抱歉，你无法将文件粘贴到评论中。",
    "clipboardInputRenderer.copyLink.message": "右键单击并复制上面的链接",
    "codeBlock.caption.button": "标题",
    "codeBlock.copyToClipboard.button": "复制",
    "codeBlock.databaseEditGroupMenu.addGroupTitle": "添加群组",
    "codeBlock.databaseEditGroupMenu.cancelButton.label": "取消",
    "codeBlock.databaseEditGroupMenu.doneButton.label": "完成",
    "codeBlock.databaseEditGroupMenu.renameGroupTitle": "重命名群组",
    "codeBlock.mobileCodePreviewMenu.doneButton.label": "完成",
    "codeBlock.mobileCodePreviewMenu.title": "代码预览",
    "codeBlock.mobileLanguageMenu.doneButton.label": "完成",
    "codeBlock.mobileLanguageMenu.title": "语言",
    "codeBlock.searchPrompt": "搜索语言⋯",
    "codepenBlock.embed.caption": "适用于启用了公共访问的 CodePen 链接",
    "codepenBlock.placeholder": "嵌入 CodePen",
    "collection.boardView.hiddenColumns.label": "隐藏分栏",
    "collection.boardView.hiddenGroups.label": "隐藏群组",
    "collection.boardView.selectProperty.defaultName": "状态",
    "collection.numberFormat.argentinePeso": "阿根廷比索",
    "collection.numberFormat.baht": "铢",
    "collection.numberFormat.brl": "巴西雷亚尔",
    "collection.numberFormat.canadianDollar": "加元",
    "collection.numberFormat.chileanPeso": "智利比索",
    "collection.numberFormat.colombianPeso": "哥伦比亚比索",
    "collection.numberFormat.danishKrone": "丹麦克朗",
    "collection.numberFormat.dirham": "迪拉姆",
    "collection.numberFormat.dollar": "美元",
    "collection.numberFormat.euro": "欧元",
    "collection.numberFormat.forint": "福林",
    "collection.numberFormat.franc": "法郎",
    "collection.numberFormat.hongKongDollar": "港元",
    "collection.numberFormat.idr": "印尼盾",
    "collection.numberFormat.koruna": "捷克克朗",
    "collection.numberFormat.krona": "瑞典克朗",
    "collection.numberFormat.leu": "列伊",
    "collection.numberFormat.mexicanPeso": "墨西哥比索",
    "collection.numberFormat.newTaiwanDollar": "新台币",
    "collection.numberFormat.newZealandDollar": "新西兰元",
    "collection.numberFormat.norwegianKrone": "挪威克朗",
    "collection.numberFormat.number": "数字",
    "collection.numberFormat.numberWithCommas": "带千位分隔符的数字",
    "collection.numberFormat.percent": "百分比",
    "collection.numberFormat.philippinePeso": "菲律宾比索",
    "collection.numberFormat.pound": "英磅",
    "collection.numberFormat.rand": "兰特",
    "collection.numberFormat.ringgit": "林吉特",
    "collection.numberFormat.riyal": "里亚尔",
    "collection.numberFormat.ruble": "卢布",
    "collection.numberFormat.rupee": "卢比",
    "collection.numberFormat.shekel": "谢克尔",
    "collection.numberFormat.try": "里拉",
    "collection.numberFormat.uruguayanPeso": "乌拉圭比索",
    "collection.numberFormat.won": "韩元",
    "collection.numberFormat.yen": "日元",
    "collection.numberFormat.yuan": "人民币",
    "collection.numberFormat.zloty": "兹罗提",
    "collectionBoardItem.actions.cancel": "取消",
    "collectionBoardItem.actions.reposition": "更改位置",
    "collectionBoardItem.actions.savePosition": "保存位置",
    "collectionBoardItem.itemName.placeholder": "输入名称⋯",
    "collectionBoardItem.reposition.tooltip": "重命名、删除、移动等⋯",
    "collectionBoardItem.untitledBlock": "无标题",
    "collectionEditViewButtonPopup.delete.buttonText": "删除",
    "collectionEditViewButtonPopup.deleteViewConfirm.text":
      "确定要删除这个视图吗？",
    "collectionEditViewButtonPopup.duplicate.buttonText": "创建副本",
    "collectionEditViewButtonPopup.mobileEditViewModal.doneButtonText": "完成",
    "collectionEditViewButtonPopup.mobileEditViewModal.title": "编辑视图",
    "collectionEditViewButtonPopup.removeButton.text": "删除",
    "collectionEditViewButtonPopup.tooltip": "重命名、删除等⋯",
    "collectionFilterCombinatorGrid.filterOperator.and": "与",
    "collectionFilterCombinatorGrid.filterOperator.and.lowercase": "与",
    "collectionFilterCombinatorGrid.filterOperator.or": "或",
    "collectionFilterCombinatorGrid.filterOperator.or.lowercase": "或",
    "collectionFilterMenuFilter.filterOperators.checkbox.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.date.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.file.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.multi_select.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.number.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.person.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.relation.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.select.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.text.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.property.name": "属性",
    "collectionFilterMenuFilterOperatorValue.date.exact.order":
      "{exact}{dateValue}",
    "collectionFilterMenuFilterOperatorValue.dateRange.exact.order":
      "{exact}{dateValue}",
    "collectionFilterMenuHelpers.checkbox.checked": "已选",
    "collectionFilterMenuHelpers.checkbox.unchecked": "未选",
    "collectionFilterMenuHelpers.combinatorOperators.and": "与",
    "collectionFilterMenuHelpers.combinatorOperators.or": "或",
    "collectionFilterMenuHelpers.operator.any": "的任何值",
    "collectionFilterMenuHelpers.operator.any.lowercase": "任何",
    "collectionFilterMenuHelpers.operator.checkboxIs": "是",
    "collectionFilterMenuHelpers.operator.checkboxIs.lowercase": "是",
    "collectionFilterMenuHelpers.operator.checkboxIsNot": "不是",
    "collectionFilterMenuHelpers.operator.checkboxIsNot.lowercase": "不是",
    "collectionFilterMenuHelpers.operator.dateIs": "是",
    "collectionFilterMenuHelpers.operator.dateIs.lowercase": "是",
    "collectionFilterMenuHelpers.operator.dateIsAfter": "晚于",
    "collectionFilterMenuHelpers.operator.dateIsAfter.lowercase": "晚于",
    "collectionFilterMenuHelpers.operator.dateIsBefore": "早于",
    "collectionFilterMenuHelpers.operator.dateIsBefore.lowercase": "早于",
    "collectionFilterMenuHelpers.operator.dateIsOnOrAfter": "是或晚于",
    "collectionFilterMenuHelpers.operator.dateIsOnOrAfter.lowercase":
      "是或晚于",
    "collectionFilterMenuHelpers.operator.dateIsOnOrBefore": "是或早于",
    "collectionFilterMenuHelpers.operator.dateIsOnOrBefore.lowercase":
      "是或早于",
    "collectionFilterMenuHelpers.operator.dateIsWithin": "在",
    "collectionFilterMenuHelpers.operator.dateIsWithin.lowercase":
      "介于两者之间",
    "collectionFilterMenuHelpers.operator.enumContains": "包含",
    "collectionFilterMenuHelpers.operator.enumContains.lowercase": "包含",
    "collectionFilterMenuHelpers.operator.enumDoesNotContain": "不包含",
    "collectionFilterMenuHelpers.operator.enumDoesNotContain.lowercase":
      "不包含",
    "collectionFilterMenuHelpers.operator.enumIs": "是",
    "collectionFilterMenuHelpers.operator.enumIs.lowercase": "是",
    "collectionFilterMenuHelpers.operator.enumIsNot": "不是",
    "collectionFilterMenuHelpers.operator.enumIsNot.lowercase": "不是",
    "collectionFilterMenuHelpers.operator.every": "的每个值",
    "collectionFilterMenuHelpers.operator.every.lowercase": "每个",
    "collectionFilterMenuHelpers.operator.isEmpty": "为空",
    "collectionFilterMenuHelpers.operator.isEmpty.lowercase": "为空",
    "collectionFilterMenuHelpers.operator.isNotEmpty": "不为空",
    "collectionFilterMenuHelpers.operator.isNotEmpty.lowercase": "不为空",
    "collectionFilterMenuHelpers.operator.none": "没有值",
    "collectionFilterMenuHelpers.operator.none.lowercase": "无",
    "collectionFilterMenuHelpers.operator.numberDoesNotEqual": "≠",
    "collectionFilterMenuHelpers.operator.numberDoesNotEqual.lowercase": "≠",
    "collectionFilterMenuHelpers.operator.numberEquals": "=",
    "collectionFilterMenuHelpers.operator.numberEquals.lowercase": "=",
    "collectionFilterMenuHelpers.operator.numberGreaterThan": ">",
    "collectionFilterMenuHelpers.operator.numberGreaterThan.lowercase": ">",
    "collectionFilterMenuHelpers.operator.numberGreaterThanOrEqualTo": "≥",
    "collectionFilterMenuHelpers.operator.numberGreaterThanOrEqualTo.lowercase":
      "≥",
    "collectionFilterMenuHelpers.operator.numberLessThan": "<",
    "collectionFilterMenuHelpers.operator.numberLessThan.lowercase": "<",
    "collectionFilterMenuHelpers.operator.numberLessThanOrEqualTo": "≤",
    "collectionFilterMenuHelpers.operator.numberLessThanOrEqualTo.lowercase":
      "≤",
    "collectionFilterMenuHelpers.operator.personContains": "包含",
    "collectionFilterMenuHelpers.operator.personContains.lowercase": "包含",
    "collectionFilterMenuHelpers.operator.personDoesNotContain": "不包含",
    "collectionFilterMenuHelpers.operator.personDoesNotContain.lowercase":
      "不包含",
    "collectionFilterMenuHelpers.operator.relationContains": "包含",
    "collectionFilterMenuHelpers.operator.relationContains.lowercase": "包含",
    "collectionFilterMenuHelpers.operator.relationDoesNotContain": "不包含",
    "collectionFilterMenuHelpers.operator.relationDoesNotContain.lowercase":
      "不包含",
    "collectionFilterMenuHelpers.operator.stringContains": "包含",
    "collectionFilterMenuHelpers.operator.stringContains.lowercase": "包含",
    "collectionFilterMenuHelpers.operator.stringDoesNotContain": "不包含",
    "collectionFilterMenuHelpers.operator.stringDoesNotContain.lowercase":
      "不包含",
    "collectionFilterMenuHelpers.operator.stringEndsWith": "结尾是",
    "collectionFilterMenuHelpers.operator.stringEndsWith.lowercase": "结尾是",
    "collectionFilterMenuHelpers.operator.stringHasNoAlphabetPrefix": "(禁用)",
    "collectionFilterMenuHelpers.operator.stringHasNoAlphabetPrefix.lowercase":
      "（未使用）",
    "collectionFilterMenuHelpers.operator.stringIs": "是",
    "collectionFilterMenuHelpers.operator.stringIs.lowercase": "是",
    "collectionFilterMenuHelpers.operator.stringIsNot": "不是",
    "collectionFilterMenuHelpers.operator.stringIsNot.lowercase": "不是",
    "collectionFilterMenuHelpers.operator.stringStartsWith": "开头是",
    "collectionFilterMenuHelpers.operator.stringStartsWith.lowercase": "开头是",
    "collectionFilterMenuHelpers.relativeDates.exactDate": "确切日期",
    "collectionFilterMenuHelpers.relativeDates.exactDateRange": "自定义范围",
    "collectionFilterMenuHelpers.relativeDates.oneMonthAgo": "一个月前",
    "collectionFilterMenuHelpers.relativeDates.oneMonthFromNow": "一个月后",
    "collectionFilterMenuHelpers.relativeDates.oneWeekAgo": "一周前",
    "collectionFilterMenuHelpers.relativeDates.oneWeekFromNow": "一周后",
    "collectionFilterMenuHelpers.relativeDates.theNextMonth": "下月",
    "collectionFilterMenuHelpers.relativeDates.theNextWeek": "下周",
    "collectionFilterMenuHelpers.relativeDates.theNextYear": "明年",
    "collectionFilterMenuHelpers.relativeDates.thePastMonth": "上月",
    "collectionFilterMenuHelpers.relativeDates.thePastWeek": "上周",
    "collectionFilterMenuHelpers.relativeDates.thePastYear": "去年",
    "collectionFilterMenuHelpers.relativeDates.today": "今天",
    "collectionFilterMenuHelpers.relativeDates.tomorrow": "明天",
    "collectionFilterMenuHelpers.relativeDates.yesterday": "昨天",
    "collectionGalleryViewItem.action.cancel": "取消",
    "collectionGalleryViewItem.action.reposition": "更改位置",
    "collectionGalleryViewItem.action.savePosition": "保存位置",
    "collectionGalleryViewItem.itemName.placeholder": "输入名称⋯",
    "collectionGalleryViewItem.repositionAction.tooltip":
      "重命名、删除、移动等⋯",
    "collectionGalleryViewItem.untitledBlock": "无标题",
    "collectionHelpers.board.caption": "看板视图，适合项目规划以及错误跟踪",
    "collectionHelpers.board.displayName": "看板",
    "collectionHelpers.calendar.caption": "月视图，可用于事件计划和安排",
    "collectionHelpers.calendar.displayName": "日历",
    "collectionHelpers.gallery.caption": "卡片网格，可用于情绪板、索引卡和食谱",
    "collectionHelpers.gallery.displayName": "画廊",
    "collectionHelpers.list.caption": "简化的页面列表视图，适合书签和笔记",
    "collectionHelpers.list.displayName": "列表",
    "collectionHelpers.table.caption":
      "表格视图，存储和查看任何类型的结构化数据",
    "collectionHelpers.table.displayName": "表格",
    "collectionHelpers.timeline.caption": "时间轴视图，适合项目排期和计划",
    "collectionHelpers.timline.displayName": "时间轴",
    "collectionHiddenGroupsButton.hiddenGroupsButton.text":
      "{numberOfHiddenGroups, plural, other {{numberOfHiddenGroups} 个隐藏群组}}",
    "collectionNoDateMenu.addResultToCalendar.prompt": "点击添加到日历",
    "collectionNoDateMenu.addResultToTimeline.prompt": "点击添加到时间轴",
    "collectionNoDateMenu.loading.message": "载入中⋯",
    "collectionNoDateMenu.mobileMenuTitle": "没有日期的页面",
    "collectionNoDateMenu.noResults.title": "无结果",
    "collectionNoDateMenu.pagesWithNoDateInPrefix":
      "{noDateTotal, plural, other {{noDateTotal} 个页面没有日期・用于}}",
    "collectionNoDateMenu.resultsMenu.errorMessage": "出了些问题。",
    "collectionNoDateMenu.searchPlaceholder": "搜索页面⋯",
    "collectionNoDateMenu.view.button.label": "视图",
    "collectionSortMenu.mobile.sort": "排序 {sortNumber}",
    "collectionSortMenuRow.sortDirectionSelectMenu.ascending": "升序",
    "collectionSortMenuRow.sortDirectionSelectMenu.descending": "降序",
    "collectionSortMenuRow.sortDirectionSelectMenu.placeholder": "空",
    "collectionSortMenuRow.sortDirectionSelectMenu.title": "排序",
    "collectionTabBar.addView.title": "添加视图",
    "collectionTabBar.newViewPlaceholder.title": "新建视图",
    "collectionTabBar.showMoreViews.title": "其他 {moreViewsCount} 个",
    "collectionViewBlock.action.filter.title": "筛选器",
    "collectionViewBlock.action.navigateToOriginal.tooltip":
      "点击以回到原始数据库。",
    "collectionViewBlock.action.newItem.title": "新",
    "collectionViewBlock.action.noDateButton.noProperty.label":
      "无日期 ({noDateTotal})",
    "collectionViewBlock.action.sort.title": "排序",
    "collectionViewBlock.action.viewSettings.title": "视图",
    "collectionViewBlock.actionBar.offlineTemplatePicker.message":
      "请连接网络以使用模板。",
    "collectionViewBlock.noSourcePlaceholder.title": "无数据源",
    "collectionViewBlock.placeholder.title": "无数据源",
    "collectionViewBlock.setSourceButton.title": "设置来源",
    "collectionViewGroupMenu.groupByDropdown.defaultChoice": "无",
    "collectionViewSelect.ViewSearch.label": "输入以搜索",
    "collectionViewSelect.viewSearch.label": "搜索视图...",
    "collections.operatorValueSelect.placeholder": "选择选项",
    "colors.select.blue": "蓝色",
    "colors.select.brown": "棕色",
    "colors.select.default": "默认",
    "colors.select.gray": "灰色",
    "colors.select.green": "绿色",
    "colors.select.lightGray": "浅灰色",
    "colors.select.orange": "橙色",
    "colors.select.pink": "粉色",
    "colors.select.purple": "紫色",
    "colors.select.red": "红色",
    "colors.select.yellow": "黄色",
    "comment.actions.reopenButton.label": "重新开启",
    "comment.actions.resolveButton.label": "解决",
    "comment.confirmDialog.deleteComment.deleteButton.label": "删除",
    "comment.confirmDialog.deleteComment.prompt": "你要删除这条评论吗？",
    "comment.confirmDialog.discardEdit.discardButton.label": "放弃",
    "comment.confirmDialog.discardEdit.prompt": "你要放弃这次编辑吗？",
    "comment.copyLink.button": "复制评论链接",
    "comment.deleteComment.button": "删除评论",
    "comment.editComment.button": "编辑评论",
    "comment.editedAtTime.label": "{lastEditedTime}（已编辑）",
    "comment.embeddedFile.placeholder": "正在上传文件...",
    "comment.embeddedFile.uploadInProgressMessage": "正在上传文件...",
    "comment.hide": "隐藏页面评论",
    "comment.newIndicator.label": "新评论",
    "comment.reopenDiscussion.button": "重新开启讨论",
    "comment.resolveDiscussion.button": "解决评论",
    "comments.actions.button.marginCommentsFeedback": "反馈",
    "comments.actions.commentsInMargins":
      "点击此处提交问题或反馈，以便在页边空白处进行评论！",
    "comments.learn": "了解评论",
    "configureRelationModal.relationProperty.createModal.cancelButton": "取消",
    "configureRelationModal.relationProperty.createModal.confirmButton":
      "创建关联关系",
    "configureRelationModal.relationProperty.createModal.databaseSelect.label":
      "选择数据库",
    "configureRelationModal.relationProperty.createModal.databaseSelect.mobile.caption":
      "你希望链接到的数据库。",
    "configureRelationModal.relationProperty.createModal.databaseSelect.mobile.title":
      "数据库源",
    "configureRelationModal.relationProperty.createModal.databaseSelect.placeholder":
      "搜索数据库…",
    "configureRelationModal.relationProperty.createModal.description":
      "关联关系可以让你从其他数据库中链接页面。",
    "configureRelationModal.relationProperty.createModal.header":
      "创建与另一个数据库的关联关系",
    "configureRelationModal.relationProperty.createModal.helpCenterLink":
      "了解关联关系",
    "configureRelationModal.relationProperty.createModal.helpCenterLinkMobile":
      "了解关联关系",
    "configureRelationModal.relationProperty.createModal.noResults": "无结果",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt":
      "你选择了同一个数据库。被链接的页面应显示在哪个属性中？",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.createNewPropertyOption.caption":
      "<b>不同步</b>：在“任务”数据库中搭建“相关任务”属性时，请使用此选项。",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.createNewPropertyOption.title":
      "创建新属性",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.mobileTitle":
      "自我关联型",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.samePropertyOption.caption":
      "<b>双向同步</b>：在“任务”数据库中搭建“父任务”和“子任务”属性时，请使用此选项。",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.samePropertyOption.title":
      "使用相同属性",
    "configureRelationModal.relationProperty.render.error": "出了些问题。",
    "configureRelationModal.relationProperty.render.loading": "正在加载⋯",
    "confirmDialogInput.incorrectInputError.message":
      "请输入“{requiredInputValue}”以继续",
    "confirmationInputDialog.cancelButton.label": "取消",
    "confluenceImportErrors.attachmentNotFound.message":
      "无法在 ZIP 归档中找到附件。",
    "confluenceImportErrors.attachmentUploadFailed.message":
      "无法从文件中上传附件。",
    "confluenceImportErrors.bufferUploadFailed.message":
      "无法从缓冲区上传附件。",
    "confluenceImportErrors.failedToBuildPage.message": "无法导入页面。",
    "confluenceImportErrors.failedToExtractZip.message": "无法提取ZIP文件。",
    "confluenceImportErrors.failedToFindElement.message": "无法解析上传。",
    "confluenceImportErrors.foundElementIsIncorrectType.message":
      "无法解析上传。",
    "confluenceImportErrors.indexHtmlMissingAvailablePages.message":
      "无效的索引文件：找不到可用页面。",
    "confluenceImportErrors.noConfluenceIdInPageLink.message":
      "无法从文件名中提取页面 ID。",
    "confluenceImportErrors.noIndexHtmlFile.message":
      "在 ZIP 中找不到索引文件。",
    "confluenceImportErrors.uploadFileSizeExceeded.message":
      "文件不能超过 {maxSize}。",
    "confluenceImportHelpers.subpageHeader": "子页面",
    "confluenceImportHelpers.untitledTableColumn.name": "列",
    "confluenceImportStatus.creatingIndex": "创建索引中⋯",
    "confluenceImportStatus.downloadingFile": "验证文件中⋯",
    "confluenceImportStatus.finishingUp": "完成中⋯",
    "confluenceImportStatus.importingPage":
      "页面导入中⋯（第{current}个，总共{total}个）",
    "confluenceImportStatus.indexingContent": "正在更新搜寻⋯",
    "confluenceImportStatus.savingTransactions": "正在保存更改⋯",
    "confluenceImportStatus.uploadingAttachments": "附件上传中⋯",
    "connectedAppSettings.deleteExternalAuthorization.confirmDelete.label":
      "是",
    "connectedAppSettings.deleteExternalAuthorization.withAccountName.confirmationMessage":
      "确定要撤销 {accountName} 的访问权限吗？",
    "connectedAppSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage":
      "确定要撤销此帐户的访问权限吗？",
    "connectedAppSettingsDiscoverItem.connectButton.label": "绑定",
    "connectedAppsSettings.asana.caption": "从看板和列表中导入任务。",
    "connectedAppsSettings.connectedAppsSection.subtitle":
      "管理你与应用的绑定，这些应用可将其他工具的内容引入 Notion。 <helpcenterlink>了解更多。 </helpcenterlink>",
    "connectedAppsSettings.connectedAppsSection.title": "已绑定的应用",
    "connectedAppsSettings.disconnectGoogleDriveModal.disconnectButton.label":
      "解除绑定",
    "connectedAppsSettings.disconnectGoogleDriveModal.message":
      "解除绑定会禁用所有工作区中嵌入的谷歌云端硬盘文件预览。这不会从 Notion 中删除你的嵌入块，因此你可以随时重新绑定。",
    "connectedAppsSettings.discoverNewAppSection.showAll.label": "全部显示",
    "connectedAppsSettings.discoverNewAppsSection.title": "发现新应用",
    "connectedAppsSettings.evernote.caption": "导入笔记本。",
    "connectedAppsSettings.googleDrive.caption": "查找并嵌入文件。",
    "connectedAppsSettings.helpButton.caption":
      "了解有关在 Notion 中嵌入内容的更多信息。",
    "connectedAppsSettings.offline.message": "请连接网络后管理绑定应用。",
    "connectedAppsSettings.trello.caption": "导入你的看板。",
    "connectedAppsSettingsItem.connectAccountLink": "绑定",
    "connectedAppsSettingsItem.connectAnotherAccountLink": "绑定另一个帐户",
    "connectedAppsSettingsItem.disconnectLink": "解除绑定",
    "connectionState.errorIndicator.cannotMakeEdits.detailedMessage":
      "你无法继续进行编辑：{errorMessage}。如果不能解决问题，请与支持人员联系。{usageInfoMessage}",
    "connectionState.errorIndicator.cannotSaveChanges.message": "无法保存更改⋯",
    "connectionState.errorIndicator.lowStorageOnDesktopApp.message":
      "磁盘空间不足",
    "connectionState.errorIndicator.lowStorageOnMobileApp.message":
      "应用存储空间不足",
    "connectionState.errorIndicator.lowStorageOnWebApp.message":
      "浏览器存储空间不足",
    "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart1":
      "Notion 正在使用设备上可用存储空间的 {percentageOfStorageBytesUsed}（{totalNumberOfBytes}中的{usedNumberOfBytes}）。",
    "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart2":
      "你可能会丢失离线时所做的更改。尝试关闭并重新打开应用，如果无法解决问题，请与支持人员联系。",
    "connectionState.offlineBadge.label": "离线中",
    "connectionState.offlineBadge.tooltip":
      "{numberOfEdits, plural, other {下一次连接网络时，会自动同步 {numberOfEdits} 个更改。}}",
    "connectionState.savePercentangeIndicator.tooltip": "{percent}完成。",
    "connectionState.saving.message": "保存中⋯",
    "cookieConsent.acceptAllButton.label": "全部接受",
    "cookieConsent.bannerDisclaimer.message":
      "Notion 使用 cookie 来改善你的体验。有关详细信息，请参阅 <cookielink>Cookie 声明</cookielink>。",
    "cookieConsent.customizeCookies.header": "自定义 cookie",
    "cookieConsent.disclaimer.message":
      "Notion 使用 cookie 为你提供更好的体验。有关详细信息，请参阅<cookielink>Cookie 声明</cookielink>和<privacylink>隐私政策</privacylink> 。",
    "cookieConsent.disclaimerFromSettings.message":
      "自定义 cookie。有关详细信息，请参阅 <cookielink>Cookie 声明</cookielink>与<privacylink>隐私政策</privacylink>。",
    "cookieConsent.dismissButton.label": "完成",
    "cookieConsent.moreOptionsButton.label": "更多选项",
    "cookieConsent.reloadAfterSave.message":
      "重新加载以使您的 cookie 偏好生效。",
    "cookieConsent.saveError": "不能记录 cookie 内容，稍后请重试。",
    "cookieConsent.settings.label": "Cookie 设置",
    "cookieConsent.settingsDisclaimer.message":
      "自定义 cookie。有关详细信息，请参阅 <cookielink>Cookie 声明</cookielink>。",
    "cookieConsent.snackbarDisclaimer.message":
      "Notion 使用 cookie。有关详细信息，请参阅 <cookielink>Cookie 声明</cookielink>。",
    "cookieConsent.trackingTypeNecessary.caption":
      "对网站的运作至关重要。始终启用。",
    "cookieConsent.trackingTypeNecessary.title": "绝对必要",
    "cookieConsent.trackingTypePerformance.caption":
      "用于衡量使用情况并改善你的体验。",
    "cookieConsent.trackingTypePerformance.title": "分析",
    "cookieConsent.trackingTypePreference.caption":
      "用于记住偏好选项并提供增强功能。",
    "cookieConsent.trackingTypePreference.title": "功能性",
    "cookieConsent.trackingTypeTargeting.caption": "用于定向广告。",
    "cookieConsent.trackingTypeTargeting.subtitleiOS":
      "未在 iOS 应用程序中收集或使用",
    "cookieConsent.trackingTypeTargeting.title": "市场营销",
    "cookieConsentSnackbar.description": "Notion 使用 cookie 来改善你的体验。",
    "cookieSelector.captions.necessary": "网站正常运行所必需的。",
    "cookieSelector.captions.performance": "用于改善你的体验。",
    "cookieSelector.captions.preference": "用于记住你所做的偏好选择。",
    "cookieSelector.captions.targeting": "用于衡量广告效果。",
    "cookieSelector.done.label": "完成",
    "cookieSelector.label.acceptAll": "全都接受",
    "cookieSelector.label.custom": "自定义",
    "cookieSelector.label.customize": "自定义",
    "cookieSelector.select": "自定义 cookie",
    "couponEntryInput.button.apply": "使用",
    "couponEntryInput.error.noPromo": "无效的优惠券代码",
    "couponEntryInput.placeholder": "优惠券代码",
    "createPageMenuItem.title.withPageName": "添加“{filterText}”页面到⋯",
    "createPageMenuItem.title.withoutPageName": "添加页面到⋯",
    "createSubpageMenuItem.title.withPageName": "添加“{filterText}”子页面",
    "createSubpageMenuItem.title.withoutPageName": "添加子页面",
    "csatPopup.additionalFeedback.placeholder": "请告诉我们更多⋯",
    "csatPopup.feedbackPrompt.defaultlabel": "你对使用 Notion 的满意度如何？",
    "csatPopup.feedbackPrompt.docNotesLabel":
      "你对使用 Notion 处理笔记和文档的满意度如何？",
    "csatPopup.feedbackPrompt.enterpriseDefaultLabel":
      "你向朋友推荐 Notion 的可能性有多大？",
    "csatPopup.feedbackPrompt.projManagementLabel":
      "你对在 Notion 中管理项目和任务的满意度如何？",
    "csatPopup.feedbackPrompt.wikiLabel":
      "你对在 Notion 中创建团队知识库的满意度如何？",
    "csatPopup.sendButton.label": "发送",
    "csatPopup.stars.1StarLabel": "非常不满意",
    "csatPopup.stars.1StarLabelNps": "非常不可能",
    "csatPopup.stars.2StarLabel": "有些不满意",
    "csatPopup.stars.2StarLabelNps": "有点不可能",
    "csatPopup.stars.3StarLabel": "不满意也不满足",
    "csatPopup.stars.3StarLabelNps": "不太可能也不太可能",
    "csatPopup.stars.4StarLabel": "还算满意",
    "csatPopup.stars.4StarLabelNps": "有点可能",
    "csatPopup.stars.5StarLabel": "非常满意",
    "csatPopup.stars.5StarLabelNps": "非常可能",
    "csatPopup.stars.notSpecifiedLabel": "选择一项",
    "csatPopup.thanks.description": "你的反馈将帮助我们改善 Notion。",
    "csatPopup.thanks.header": "感谢你的反馈！",
    "customizePageMenu.header.label": "页面视图・用于",
    "customizePageMenu.lock.label": "重新锁定",
    "customizePageMenu.locked.header": "在父级数据库上已锁定设置。",
    "customizePageMenu.mobileHeader.label": "自定义页面",
    "customizePageMenu.pageSections.backlinksTitle": "反向链接",
    "customizePageMenu.pageSections.commentsTitle": "页面评论",
    "customizePageMenu.pageSections.pageCommentsTitle": "页面评论",
    "customizePageMenu.pageSections.topLevelPageDiscussionsTitle":
      "顶层页面讨论",
    "customizePageMenu.propertiesSection.header": "属性",
    "customizePageMenu.sectionsSection.header": "栏目",
    "customizePageMenu.unlock.label": "解锁",
    "customizePageMenu.unlocked.header": "在父级数据库上已解锁设置。",
    "customizePageMenuVisibilitySelect.collapsed.label": "在弹出窗口中显示",
    "customizePageMenuVisibilitySelect.default.label": "默认",
    "customizePageMenuVisibilitySelect.expanded.label": "展开",
    "customizePageMenuVisibilitySelect.hide.label": "始终隐藏",
    "customizePageMenuVisibilitySelect.hideIfEmpty.label": "空时隐藏",
    "customizePageMenuVisibilitySelect.inline.label": "行内",
    "customizePageMenuVisibilitySelect.minimal.label": "最小",
    "customizePageMenuVisibilitySelect.mobile.doneButton.label": "完成",
    "customizePageMenuVisibilitySelect.mobile.title": "选择可见性",
    "customizePageMenuVisibilitySelect.off.label": "关闭",
    "customizePageMenuVisibilitySelect.show.label": "始终显示",
    "darkModeMobileButton.darkMode.label": "深色模式",
    "darkModeMobileButton.lightMode.label": "浅色模式",
    "database.FirstLoadLimitSelectOption.limitPagesTitle": "{limit} 页",
    "database.FirstLoadLimitSelectOption.showAllTitle": "全部",
    "database.actionBar.addViewButton.tooltip":
      "视图可让你以多种方式查看同一个数据库",
    "database.actionBar.addViewButtonTitle": "添加视图",
    "database.actionBar.boardColumnsButton.label": "群组",
    "database.actionBar.calendarByPropertyMenu.button.label": "显示",
    "database.actionBar.filterButtonTitle": "筛选器",
    "database.actionBar.groupButton.label": "群组",
    "database.actionBar.groupByButton.label": "分组方式",
    "database.actionBar.groupingNewTooltipDescription":
      "按优先级、状态、日期等将数据拆分为多个组。",
    "database.actionBar.mobileCalendarByPropertyMenu.title": "日历显示",
    "database.actionBar.mobiletimelineByPropertyMenu.title": "时间轴显示",
    "database.actionBar.newButton": "新建",
    "database.actionBar.noDate.tooltip": "显示没有日期的页面",
    "database.actionBar.noDateButton.noProperty.label":
      "无日期 ({noDateTotal})",
    "database.actionBar.noDateButton.withProperty.label":
      "{propertyString}为空 ({noDateTotal})",
    "database.actionBar.offlineTemplatePicker.message":
      "请连接网络以使用模板。",
    "database.actionBar.openFullscreenPageButton.tooltip": "以全页面打开",
    "database.actionBar.propertiesButtonTitle": "属性",
    "database.actionBar.searchButtonTitle": "搜索",
    "database.actionBar.searchButtonTooltip": "请连接网络后搜索。",
    "database.actionBar.searchInputPlaceholder": "输入以搜索⋯",
    "database.actionBar.sortButtonTitle": "排序",
    "database.actionBar.subGroupButton.label": "子组",
    "database.actionBar.timelineByPropertyMenu.button.label": "按",
    "database.actionBar.titlePlaceholder": "无标题",
    "database.actionMenu.fileProperty.delete.title": "删除",
    "database.actionMenu.fileProperty.download.title": "下载",
    "database.actionMenu.fileProperty.fullscreen.title": "全屏",
    "database.actionMenu.fileProperty.rename.title": "重命名",
    "database.actionMenu.fileProperty.viewOriginal.title": "查看原始内容",
    "database.addNewProperty.pageProperty.defaultNamePrefix": "属性",
    "database.addNewProperty.property.defaultNamePrefix": "属性",
    "database.addNewProperty.tableHeaderCell.namePrefix": "属性",
    "database.addNewProperty.tableProperty.namePrefix": "列",
    "database.aggregationDescription.average": "计算数值属性的平均值。",
    "database.aggregationDescription.checked": "对此属性选中的页面进行计数。",
    "database.aggregationDescription.count":
      "对全部页面进行计数，包括空白页面。",
    "database.aggregationDescription.count_values":
      "计算此属性的非空值的数量。对于可以包含多个值的类型（例如多选或人员），这将计算每个页面的选定值数。",
    "database.aggregationDescription.date_range":
      "计算日期属性的日期范围（最晚日期减最早日期）。",
    "database.aggregationDescription.earliest_date": "寻找日期属性的最早日期。",
    "database.aggregationDescription.empty": "对此属性为空值的页面进行计数。",
    "database.aggregationDescription.latest_date": "寻找日期属性的最晚日期。",
    "database.aggregationDescription.max": "寻找数字属性的最大值。",
    "database.aggregationDescription.median": "寻找数字属性的中位数。",
    "database.aggregationDescription.min": "寻找数值属性的最小值。",
    "database.aggregationDescription.not_empty":
      "对此属性为非空值的页面进行计数。",
    "database.aggregationDescription.percent_checked":
      "显示此属性已选页面的百分比。",
    "database.aggregationDescription.percent_empty":
      "显示此属性为空值的页面的百分比。",
    "database.aggregationDescription.percent_not_empty":
      "显示此属性为非空值的页面的百分比。",
    "database.aggregationDescription.percent_unchecked":
      "显示此属性未选页面的百分比。",
    "database.aggregationDescription.range":
      "计算数字属性的范围（最大值减最小值）。",
    "database.aggregationDescription.show_unique":
      "显示此属性的唯一值。对于可以包含多个值（例如多选或人员）的属性类型，将计算所有页面中的唯一值。",
    "database.aggregationDescription.sum": "计算数字属性的总和。",
    "database.aggregationDescription.unchecked": "对此属性未选的页面进行计数。",
    "database.aggregationDescription.unique":
      "计算此属性的唯一值的数量。对于可以包含多个值（例如多选或个人）的类型，这将计算所有页面上的唯一值。",
    "database.aggregationFullName.average": "平均数",
    "database.aggregationFullName.checked": "选中",
    "database.aggregationFullName.count": "总数",
    "database.aggregationFullName.count_values": "值的总数",
    "database.aggregationFullName.date_range": "日期范围",
    "database.aggregationFullName.earliest_date": "最早日期",
    "database.aggregationFullName.empty": "空单元格总数",
    "database.aggregationFullName.latest_date": "最晚日期",
    "database.aggregationFullName.max": "最大值",
    "database.aggregationFullName.median": "中位数",
    "database.aggregationFullName.min": "最小值",
    "database.aggregationFullName.not_empty": "非空单元格总数",
    "database.aggregationFullName.percent_checked": "选中百分比",
    "database.aggregationFullName.percent_empty": "空单元格百分比",
    "database.aggregationFullName.percent_not_empty": "非空单元格百分比",
    "database.aggregationFullName.percent_unchecked": "未选百分比",
    "database.aggregationFullName.range": "范围",
    "database.aggregationFullName.sum": "总和",
    "database.aggregationFullName.unchecked": "未选",
    "database.aggregationFullName.unique": "唯一值的总数",
    "database.aggregationFullName.unique_values": "显示唯一值",
    "database.aggregationShortName.average": "平均",
    "database.aggregationShortName.checked": "选中",
    "database.aggregationShortName.count": "计数",
    "database.aggregationShortName.count_values": "值",
    "database.aggregationShortName.date_range": "范围",
    "database.aggregationShortName.earliest_date": "最早",
    "database.aggregationShortName.empty": "空",
    "database.aggregationShortName.latest_date": "最晚",
    "database.aggregationShortName.max": "最大",
    "database.aggregationShortName.median": "中位",
    "database.aggregationShortName.min": "最小",
    "database.aggregationShortName.not_empty": "非空",
    "database.aggregationShortName.percent_checked": "选中",
    "database.aggregationShortName.percent_empty": "空",
    "database.aggregationShortName.percent_not_empty": "非空",
    "database.aggregationShortName.percent_unchecked": "未选",
    "database.aggregationShortName.range": "范围",
    "database.aggregationShortName.showUnique": "显示唯一",
    "database.aggregationShortName.sum": "总和",
    "database.aggregationShortName.unchecked": "未选",
    "database.aggregationShortName.unique": "唯一",
    "database.boardAggregation.tooltip": "汇总",
    "database.boardView.actions.addNewPage.tooltip": "创建新页面",
    "database.boardView.addGroupButton.columnAlreadyExistsError.message":
      "此列已存在。",
    "database.boardView.addGroupButton.groupAlreadyExistsError.message":
      "该群组已存在。",
    "database.boardView.addGroupButtonTitle": "添加分组",
    "database.boardView.addItemButtonTitle": "新建",
    "database.boardView.columnActionMenu.colorSectionTitle": "颜色",
    "database.boardView.columnActionMenu.deleteButtonTitle": "删除",
    "database.boardView.columnActionMenu.deleteDialogMessage":
      "是否确定？此列内的所有块都将被删除。",
    "database.boardView.columnActionMenu.hideButtonTitle": "隐藏",
    "database.boardView.columnActionMenu.showButtonTitle": "显示",
    "database.boardView.columnActionMenu.title": "动作",
    "database.boardView.missingSelectProperty":
      "无法呈现此视图，因为数据库缺少选择属性。",
    "database.boardView.multiSelectLabel.placeholder": "新多选",
    "database.boardView.searchResults.noResults.label": "无结果",
    "database.boardView.selectLabel.placeholder": "新选择",
    "database.boardView.uncategorizedColumnTitle": "无{name}",
    "database.boardView.uncategorizedColumnTooltip":
      "任何<b>{name}</b>属性为空的项目都将移到此处。此分组无法删除。",
    "database.calendarView.addItemButtonTooltip": "添加项目",
    "database.calendarView.dateProperty.defaultName": "日期",
    "database.calendarView.missingDateProperty":
      "无法呈现此视图，因为数据库缺少日期属性。",
    "database.calendarView.todayButton.label": "今天",
    "database.collectionEditGroupMenu.newGroupLabel.placeholder": "新建群组",
    "database.collectionEditGroupMenu.renameGroupLabel.placeholder":
      "重命名群组",
    "database.collectionEditGroupMenu.submitButton.label": "完成",
    "database.collectionEditViewButtonPopup.dateNameProperty": "日期",
    "database.collectionEditViewButtonPopup.inputPlaceholder": "视图名称",
    "database.collectionEditViewButtonPopup.renameButtonTitle": "重命名",
    "database.collectionEditViewButtonPopup.statusNameProperty": "状态",
    "database.collectionGroupActionMenu.colorSectionTitle": "颜色",
    "database.collectionGroupActionMenu.deleteButtonTitle": "删除",
    "database.collectionGroupActionMenu.deleteDialogMessage":
      "是否确定？该群组内的所有块都将被删除。",
    "database.collectionGroupActionMenu.hideButtonTitle": "隐藏",
    "database.collectionGroupActionMenu.showButtonTitle": "显示",
    "database.collectionGroupActionMenu.title": "动作",
    "database.collectionGroupAggregation.title": "表汇总",
    "database.collectionGroupHeader.actions.addNewPage.tooltip": "创建新页面",
    "database.collectionGroupValue.dateGroup.last7Days": "过去 7 天",
    "database.collectionGroupValue.dateGroup.last_30Days": "过去 30 天",
    "database.collectionGroupValue.dateGroup.next30Days": "未来 30 天",
    "database.collectionGroupValue.dateGroup.next7Days": "未来 7 天",
    "database.collectionGroupValue.dateGroup.today": "今天",
    "database.collectionGroupValue.dateGroup.tomorrow": "明天",
    "database.collectionGroupValue.dateGroup.week":
      "{month} {startDay}-{endDay} {year} 的周",
    "database.collectionGroupValue.dateGroup.week.differingStartAndEndMonth":
      "{startYear}{startMonth} {startDay} - {endMonth} {endDay} 当周",
    "database.collectionGroupValue.dateGroup.week.differingStartAndEndYear":
      "{startYear}{startMonth} {startDay}  -{endYear}  {endMonth} {endDay} 当周",
    "database.collectionGroupValue.dateGroup.week.sameStartAndEndMonth":
      "{startYear}{startMonth} {startDay}-{endDay} 当周",
    "database.collectionGroupValue.dateGroup.yesterday": "昨天",
    "database.collectionGroupValue.numberGroup.outOfRange": "超出范围",
    "database.collectionGroupValue.numberGroup.range": "{start} 到 {end}",
    "database.collectionGroupValue.textGroup.other": "其他",
    "database.collectionView.untitledName.board": "看板",
    "database.collectionView.untitledName.calendar": "日历",
    "database.collectionView.untitledName.gallery": "画廊",
    "database.collectionView.untitledName.list": "列表",
    "database.collectionView.untitledName.table": "表格",
    "database.collectionView.untitledName.timeline": "时间轴",
    "database.collectionViewBlock.openFullscreenPageButton.tooltip":
      "以整页形式打开",
    "database.collectionViewBlock.openViewSettingsButton.tooltip":
      "编辑视图布局、分组等…",
    "database.collectionViewSelect.addViewButtonTitle": "添加视图",
    "database.collectionViewSelect.noResultsTitle": "无结果",
    "database.collectionViewSelect.viewsFor": "视图・用于",
    "database.columnAlreadyExistsOnRenameError.message": "列已存在。",
    "database.columnExistsAlreadyError.message": "列已存在。",
    "database.configureProperty.deleteAction": "删除属性",
    "database.configureProperty.duplicateAction": "创建属性副本",
    "database.configureProperty.hideAction": "隐藏属性",
    "database.configurePropertySearch.deleteAction": "删除属性",
    "database.configurePropertySearch.duplicateAction": "创建属性副本",
    "database.configurePropertySearch.hideAction": "隐藏属性",
    "database.configurePropertyType.date": "编排日期格式",
    "database.configurePropertyType.formula": "编辑函数",
    "database.configurePropertyType.number": "调整数字格式",
    "database.configurePropertyType.rollup": "配置汇总",
    "database.configurePropertyType.select": "配置选项",
    "database.confirmDialog.templatePickerItem.deleteButton.label": "删除",
    "database.confirmDialog.templatePickerItem.deleteMessage":
      "确定要删除此模板吗？",
    "database.copyButton.copyToClipboard": "复制到剪贴板",
    "database.createNewView.createButton": "创建",
    "database.createNewView.learnMorePrompt": "了解如何使用数据库视图",
    "database.createNewView.mobileMenuTitle": "创建视图",
    "database.createNewViewMobileView.menuItem": "创建",
    "database.deleteProperty.modal.confirmButton": "删除",
    "database.deleteProperty.modal.prompt": "确定要删除此属性吗？",
    "database.editButton.configureRollupTooltip": "配置汇总",
    "database.editButton.editEmailTooltip": "编辑邮箱地址",
    "database.editButton.editLinkTooltip": "编辑URL",
    "database.editButton.editPhoneTooltip": "编辑电话号码",
    "database.editProperty.databaseLocked.tooltipPart1": "页面属性已锁定",
    "database.editProperty.databaseLocked.tooltipPart2":
      "请前往{recordIconAndTitle}解锁",
    "database.editProperty.errorDialog.duplicateSelectValue.message":
      "此选择项已经存在。",
    "database.editProperty.errorDialog.missingSelectValue.message":
      "请输入一个值。",
    "database.editProperty.mobile.title": "编辑属性",
    "database.editProperty.name.tooltip":
      "名称列作为数据库中每个页面的标题，无法更改。",
    "database.editProperty.rename.buttonLabel": "重命名",
    "database.editProperty.rename.placeholder": "属性名称",
    "database.editProperty.select.mobileLabel": "重命名",
    "database.editPropertyButtonPopup.extensionMenuSectionTitleAdvanced":
      "高级",
    "database.editPropertyButtonPopup.extensionMenuSectionTitleBasic": "基本",
    "database.editPropertyButtonPopup.propertyTypeSectionTitle": "属性类型",
    "database.emptyTemplatesList.info": "使用模板来复用此数据库中的页面格式。",
    "database.fileProperty.focusedLabel": "添加文件或图片",
    "database.fileProperty.mobileMenu.title": "文件属性",
    "database.filterAndSort.datePropertyValue.placeholder": "选择日期",
    "database.filterAndSort.dateRangePropertyValue.placeholder": "选择范围",
    "database.filterAndSort.firstPersonPropertyValue.title": "我自己",
    "database.filterAndSort.mobileEditButton.label": "编辑",
    "database.filterAndSort.mobileModal.personPropertyValue.title": "人员",
    "database.filterAndSort.propertyValueInput.placeholder": "值",
    "database.filterAndSort.searchPersonPropertyMenuItem.errorMessage":
      "出了些问题。",
    "database.filterAndSort.selectPropertyValue.noResults.message": "无结果",
    "database.filterAndSort.selectPropertyValue.prompt": "选择选项",
    "database.filterAndSort.selectPropertyValue.searchPlaceholder": "搜索选项⋯",
    "database.filterAndSortMenu.propertyButton.label": "属性",
    "database.filterBar.addButton.title": "添加筛选器",
    "database.filterBar.advancedFilter.title": "高级筛选器",
    "database.filterBar.advancedFilterRulesCount.title":
      "{ruleCount, plural, other {{ruleCount} 条规则}}",
    "database.filterBar.changesControl.mergeIntoAdvancedFilter.title":
      "合并到高级筛选器中",
    "database.filterBar.changesControl.reset.title": "重置",
    "database.filterBar.changesControl.saveAs.title": "另存为",
    "database.filterBar.changesControl.saveAsNewView.title": "另存为新视图",
    "database.filterBar.changesControl.saveFilters.title": "保存筛选器",
    "database.filterBar.changesControl.saveForEveryone.title": "为所有人保存",
    "database.filterBar.changesCount.title":
      "{changeCount, plural, other {{changeCount} 个筛选器更改}}",
    "database.filterBar.doubleClickToEdit.title": "双击进行编辑",
    "database.filterBar.filter.title": "筛选器",
    "database.filterBar.hide.title": "隐藏",
    "database.filterBar.mobileSearch.placeholder": "输入以搜索⋯",
    "database.filterBar.reset.title": "重置",
    "database.filterBar.saveChangesPopup.resetChanges.title": "重置",
    "database.filterBar.saveChangesPopup.saveAsNewView.title": "另存为新建视图",
    "database.filterBar.saveChangesPopup.saveForEveryone.title": "为所有人保存",
    "database.filterBar.saved.title": "为所有人保存的更改。",
    "database.filterBar.search.title": "搜索",
    "database.filterBar.sorts.label": "{sortCount} 排序",
    "database.filterBar.tooltipPreview.empty.title": "清空筛选器",
    "database.filterBar.tooltipPreview.moreAdditionalRules.title":
      "{ruleCount, plural, other {{ruleCount} 条筛选器规则}}",
    "database.filterBar.turnOffFilter.title": "点击可自行关闭此筛选器",
    "database.filterBar.turnOnFilter.title": "点击可自行启用此筛选器",
    "database.filterBar.undo.title": "撤销",
    "database.filterBar.updateFilter.title": "点击可自行更新此筛选器",
    "database.filterBarFilterValue.notOperator": "不是",
    "database.filterBarFilterValue.title":
      "{propertyName}{colonSeparator} {filterOperator} {propertyValue}",
    "database.filterMenu.addFilterButtonTitle": "添加筛选器",
    "database.filterMenu.addFilterGroup2ButtonTitle": "添加筛选器组",
    "database.filterMenu.addFilterGroupButtonCaption": "一个组可包含多个筛选器",
    "database.filterMenu.addFilterGroupButtonTitle": "添加筛选器组",
    "database.filterMenu.addFilterRuleButtonTitle": "添加筛选器规则",
    "database.filterMenu.comparatorMenuDropdownButton.label": "比较器",
    "database.filterMenu.dateSelectMenu.emptyPlaceholder": "空",
    "database.filterMenu.duplicateFilterGroupMenuTitle": "创建副本",
    "database.filterMenu.duplicateFilterMenuTitle": "创建副本",
    "database.filterMenu.emptyState1.v2": "可以用筛选器来：",
    "database.filterMenu.emptyState2.v2": "显示分配给我的任务。",
    "database.filterMenu.emptyState3.v2": "只显示带有特定标签的笔记。",
    "database.filterMenu.emptyState4.v2": "隐藏已完成的任务。",
    "database.filterMenu.filterGroupIndex": "筛选器组 {index}",
    "database.filterMenu.filterIndex": "筛选 {index}",
    "database.filterMenu.filterOperatorMenu.title": "运算符",
    "database.filterMenu.filtersFor": "筛选・用于",
    "database.filterMenu.mobileComparatorValueMenu.title": "比较器",
    "database.filterMenu.mobileDateSelectMenu.title": "日期",
    "database.filterMenu.mobileMenuTitle": "筛选器",
    "database.filterMenu.operatorPlaceholder": "运算符",
    "database.filterMenu.removeFilterGroupMenuTitle": "移除",
    "database.filterMenu.removeFilterMenuTitle": "移除",
    "database.filterMenu.rollupPropertyValue.mobileMenu.title": "设置筛选器",
    "database.filterMenu.turnIntoFilterMenuTitle": "转换成筛选器",
    "database.filterMenu.turnIntoGroupMenuTitle": "转换成组",
    "database.filterMenu.unwrapGroupMenuTitle": "展开组",
    "database.filterMenu.where": "当",
    "database.filterMenu.wrapInGroupMenuCaption": "围绕此项创建筛选器组",
    "database.filterMenu.wrapInGroupMenuTitle": "包装成组",
    "database.filterOperatorValue.askForInput": "请求输入",
    "database.filterOperatorValue.checkboxPlaceholder.title": "选择一个值",
    "database.filterOperators.and": "与",
    "database.filterOperators.andCaption": "必须满足所有筛选规则",
    "database.filterOperators.any": "的任何值",
    "database.filterOperators.every": "的每个值",
    "database.filterOperators.none": "没有值",
    "database.filterOperators.or": "或",
    "database.filterOperators.orCaption": "必须满足至少一个筛选规则",
    "database.filterValue.checkboxType.checked.title": "选中",
    "database.filterValue.checkboxType.title": "复选框",
    "database.filterValue.checkboxType.unchecked.title": "未选中",
    "database.filterValue.clear.message": "清除",
    "database.filterValue.commaSeparator": ",",
    "database.filterValue.dateType.dateIsAfter.title": "之后",
    "database.filterValue.dateType.dateIsBefore.title": "之前",
    "database.filterValue.dateType.dateIsOnOrAfter.title": "于或之后",
    "database.filterValue.dateType.dateIsOnOrBefore.title": "于或之前",
    "database.filterValue.dateType.ending.title": "结束",
    "database.filterValue.dateType.starting.title": "开始",
    "database.filterValue.dateType.title": "日期",
    "database.filterValue.deleteFilter.message": "删除筛选器",
    "database.filterValue.deleteFilter.title": "删除筛选器",
    "database.filterValue.mergeIntoAdvancedFilter.title": "合并到高级筛选器中",
    "database.filterValue.numberType.searchPlaceholder": "输入一个值…",
    "database.filterValue.numberType.title": "数字",
    "database.filterValue.personType.firstPersonPropertyValue.title": "我",
    "database.filterValue.personType.noResults.message": "无结果",
    "database.filterValue.personType.searchPersonPropertyMenuItem.errorMessage":
      "出了些问题。",
    "database.filterValue.personType.searchPlaceholder": "搜索人员⋯",
    "database.filterValue.personType.title": "人员",
    "database.filterValue.relationType.searchPlaceholder": "搜索页面⋯",
    "database.filterValue.relationType.title": "关联关系",
    "database.filterValue.selectType.noResults.message": "无结果",
    "database.filterValue.selectType.prompt": "选择选项",
    "database.filterValue.selectType.searchPlaceholder": "搜索选项⋯",
    "database.filterValue.selectType.title": "选择",
    "database.filterValue.textType.searchPlaceholder": "输入一个值…",
    "database.filterValue.textType.title": "文本",
    "database.filterValue.title": "{propertyName}：{propertyValue}",
    "database.firstLoadLimitSelectMenu.firstLoadLimitSetting":
      "在首次加载时显示",
    "database.formula.acceptFormulaInput.tooltip": "接受",
    "database.formula.category.constants": "常数",
    "database.formula.category.functions": "函数",
    "database.formula.category.operators": "运算符",
    "database.formula.category.properties": "属性",
    "database.formula.constant.e.description": "自然对数的底数。",
    "database.formula.constant.pi.description": "圆周长与其直径之比。",
    "database.formula.doneButton.label": "完成",
    "database.formula.examplesSection.title": "例子",
    "database.formula.function.abs.description": "返回数字的绝对值。",
    "database.formula.function.cbrt.description": "返回数字的立方根。",
    "database.formula.function.ceil.description":
      "返回大于或等于数字的最小整数。",
    "database.formula.function.concat.description": "将参数拼接并返回结果。",
    "database.formula.function.contains.description":
      "如果在第一个参数中找到第二个参数，则返回 true。",
    "database.formula.function.date.description":
      "返回一个介于 1 到 31 之间的整数，对应于给定月份中的日期数。",
    "database.formula.function.dateAdd.description":
      '添加时间到日期。最后一个参数“单位”可以是以下选项（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或 "milliseconds"。',
    "database.formula.function.dateBetween.description":
      '返回两个日期之间的时间。最后一个参数“单位”可以是以下选项（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或 "milliseconds"。',
    "database.formula.function.dateSubtract.description":
      '从日期减去时间。最后一个参数“单位”可以是以下选项（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或 "milliseconds"。',
    "database.formula.function.day.description":
      "返回与给定日期的星期几相对应的整数：0 代表星期日，1 代表星期一，2 代表星期二，依此类推。",
    "database.formula.function.empty.description": "测试值是否为空。",
    "database.formula.function.end.description": "返回日期范围的结束。",
    "database.formula.function.exp.description":
      "返回 E^x，其中 x 是参数，E 是欧拉常数（2.718⋯），即自然对数的底数。",
    "database.formula.function.floor.description":
      "返回小于或等于数字的最大整数。",
    "database.formula.function.format.description": "将其参数格式化为字符串。",
    "database.formula.function.formatDate.description":
      "使用 Moment.js 的时间格式字符串来格式化日期。",
    "database.formula.function.fromTimestamp.description":
      "返回从 Unix 毫秒时间戳构建的日期，对应于自1970年1月1日起的毫秒数。",
    "database.formula.function.hour.description":
      "返回一个介于 0 和 23 之间的整數，对应于给定日期中的小时数。",
    "database.formula.function.id.description": "返回每个条目的唯一字符串ID。",
    "database.formula.function.join.description":
      "以第一个参数为连接符，将数组中所有元素拼接为一个字符串。",
    "database.formula.function.length.description": "返回字符串的长度。",
    "database.formula.function.ln.description": "返回数字的自然对数。",
    "database.formula.function.log10.description":
      "返回数字的以 10 为底的对数。",
    "database.formula.function.log2.description": "返回数字的以 2 为底的对数。",
    "database.formula.function.max.description":
      "返回零个或多个数字中的最大值。",
    "database.formula.function.min.description":
      "返回零个或多个数字中的最小值。",
    "database.formula.function.minute.description":
      "返回一个介于 0 和 59 之间的整数，对应于给定日期中的分钟数。",
    "database.formula.function.month.description":
      "根据本地时间，返回一个介于 0 和 11 之间的整数，对应于给定日期中的月份。0 对应于一月，1 对应于二月，依此类推。",
    "database.formula.function.now.description": "返回当前日期和时间。",
    "database.formula.function.replace.description":
      "用新值替换正则表达式的第一个匹配项。",
    "database.formula.function.replaceAll.description":
      "用新值替换正则表达式的所有匹配项。",
    "database.formula.function.round.description":
      "返回四舍五入到最接近整数的数字的值。",
    "database.formula.function.sign.description":
      "返回 x 的符号，指示 x 是正数、负数还是零。",
    "database.formula.function.slice.description":
      "从起始索引（包含）到结束索引（可选，不包含）的提取字符串中的子字符串。",
    "database.formula.function.sqrt.description": "返回数字的正平方根。",
    "database.formula.function.start.description": "返回日期范围的开始。",
    "database.formula.function.test.description":
      "测试字符串是否与正则表达式匹配。",
    "database.formula.function.timestamp.description":
      "返回 Unix 毫秒时间戳的整数，对应于自1970年1月1日起的毫秒数。",
    "database.formula.function.toNumber.description": "从文本中解析数字。",
    "database.formula.function.year.description":
      "返回与给定日期的年份相对应的数字。",
    "database.formula.keyboardShortcutHint": "{commandEnter} 以提交。",
    "database.formula.mobileNoErrors.message": "没有错误。",
    "database.formula.operator.add.description":
      "将两个数字相加并返回其总和，或者将两个字符串拼接起来。",
    "database.formula.operator.and.description":
      "返回其两个参数的逻辑与（AND）。",
    "database.formula.operator.divide.description":
      "将两个数字相除并返回其商。",
    "database.formula.operator.equal.description":
      "如果参数相等，则返回 true，否则返回 false。",
    "database.formula.operator.if.description":
      "基于另一个值在两个选项之间切换。",
    "database.formula.operator.larger.description":
      "如果第一个参数大于第二个参数，则返回 true。",
    "database.formula.operator.largerEq.description":
      "如果第一个参数大于或等于第二个参数，则返回 true。",
    "database.formula.operator.mod.description": "将两个数字相除并返回其余数。",
    "database.formula.operator.multiply.description":
      "将两个数字相乘并返回其乘积。",
    "database.formula.operator.not.description": "返回其参数的逻辑非（NOT）。",
    "database.formula.operator.or.description":
      "返回其两个参数的逻辑或（OR）。",
    "database.formula.operator.pow.description":
      "返回底数（base）的指数（exponent）次幂，即 baseexponent。",
    "database.formula.operator.smaller.description":
      "如果第一个参数小于第二个参数，则返回 true。",
    "database.formula.operator.smallerEq.description":
      "如果第一个参数小于或等于第二个参数，则返回 true。",
    "database.formula.operator.subtract.description":
      "将两个数字相减并返回其差值。",
    "database.formula.operator.unaryMinus.description": "数字的负数。",
    "database.formula.operator.unaryPlus.description": "将其参数转换为数字。",
    "database.formula.operator.unequal.description":
      "如果参数相等，则返回 false，否则返回 true。",
    "database.formula.placeholder": "输入一个函数",
    "database.formula.property.description":
      "返回每个条目的{propertyName}属性。",
    "database.formula.syntaxSection.title": "语法",
    "database.formulaPropertyEntryMenuItem.title": "文档",
    "database.galleryView.addItemButtonTitle": "新建",
    "database.genericColumn.name": "列 {columnNumber}",
    "database.groupExistsAlreadyError.message": "群组已存在。",
    "database.groupMenu.clear": "清除",
    "database.groupMenu.colorColumns": "颜色列",
    "database.groupMenu.columnsBy": "列依据",
    "database.groupMenu.dateGroupBy.day": "日",
    "database.groupMenu.dateGroupBy.month": "月",
    "database.groupMenu.dateGroupBy.relative": "相对",
    "database.groupMenu.dateGroupBy.week": "周",
    "database.groupMenu.dateGroupBy.year": "年",
    "database.groupMenu.groupBy": "分组方式",
    "database.groupMenu.groupProperty": "分组方式",
    "database.groupMenu.groupsFor": "以下项的群组",
    "database.groupMenu.hiddenGroups": "隐藏群组",
    "database.groupMenu.hideAllGroups": "全部隐藏",
    "database.groupMenu.hideEmptyGroups": "隐藏空群组",
    "database.groupMenu.loadMoreButton.text":
      "{database.groupMenu.loadMoreButton.text, plural, other {显示另外 {loadMoreAmount, plural, one {{loadMoreAmount} 个群组} other {{loadMoreAmount} 个群组}}}}",
    "database.groupMenu.noGroupingSetMessage": "无",
    "database.groupMenu.noneGroup": "无",
    "database.groupMenu.numberGroupBy.range": "{start} 到 {end}",
    "database.groupMenu.numberGroupRange": "群组范围",
    "database.groupMenu.numberGroupSize": "分组间隔",
    "database.groupMenu.propertyTitle": "属性",
    "database.groupMenu.searchPropertyPlaceholder": "搜索属性⋯",
    "database.groupMenu.showAllGroups": "全部显示",
    "database.groupMenu.sort": "排序",
    "database.groupMenu.sortType.alphabetical": "按字母顺序",
    "database.groupMenu.sortType.ascending": "升序",
    "database.groupMenu.sortType.chronological": "按时间顺序",
    "database.groupMenu.sortType.descending": "降序",
    "database.groupMenu.sortType.manual": "手动",
    "database.groupMenu.sortType.reverseAlphabetical": "按反向字母顺序",
    "database.groupMenu.sortType.reverseChronological": "按时间倒序",
    "database.groupMenu.subGroupBy": "子组分组方式",
    "database.groupMenu.subGroupProperty": "子组分组方式",
    "database.groupMenu.subGroupsFor": "以下项的子组",
    "database.groupMenu.textGroupBy.alphabetical": "按字母顺序",
    "database.groupMenu.textGroupBy.exact": "精确",
    "database.groupMenu.visibleGroups": "可见群体",
    "database.groups.loadMoreButton.text":
      "{database.groups.loadMoreButton.text, plural, other {另外 {loadMoreAmount} 个}}",
    "database.listView.addItemButtonTitle": "新建",
    "database.loadMoreButtonTitle": "加载<regular>其余 {count} 项</regular>",
    "database.mobileBoardAggregationMenu.title": "表汇总",
    "database.mobileFilterAndSort.selectMobileModal.title": "选择",
    "database.mobileFilterAndSortMenu.property.buttonMenuItem.label": "属性",
    "database.mobileFormulaModal.saveButton.label": "保存",
    "database.mobileFormulaModal.title": "函数",
    "database.mobilePropertyAggregationMenu.title": "表汇总",
    "database.mobileSearch.placeholder": "输入以搜索⋯",
    "database.mobileSelectViewMenu.title":
      "{numberOfViews, plural, one {{numberOfViews} 个视图} other {{numberOfViews} 个视图}}",
    "database.mobileTemplatesMenu.title": "数据库模板",
    "database.mobileViewPropertiesMenu.title": "属性",
    "database.navigateButton.callTooltip": "拨打",
    "database.navigateButton.openAsPageTitle": "打开",
    "database.navigateButton.openAsPageTooltip": "以全页面打开",
    "database.navigateButton.openLinkTooltip": "打开链接",
    "database.navigateButton.sendEmailTooltip": "发送电子邮件",
    "database.noPersonSearchResults.message": "无结果",
    "database.noRelationSearchResults.message": "无结果",
    "database.optionExistsAlreadyError.message": "选项已存在。",
    "database.pageProperties.addPropertyButtonTitle": "添加属性",
    "database.pageProperties.hidePropertyTitle":
      "{num, plural, other {隐藏 {num} 个属性}}",
    "database.pageProperties.showMorePropertyTitle":
      "{num, plural, other {其他 {num} 个属性}}",
    "database.pageProperty.emptyTitle": "空",
    "database.personPropertyMenu.noSearchResults.message": "无结果",
    "database.personPropertyMenu.searchErrorMessage": "出了些问题。",
    "database.personPropertyValue.searchPlaceholder": "搜索人员⋯",
    "database.personPropertyValue.selectPerson.searchPlaceholder": "选择人员",
    "database.propertiesMenu.addPropertyButtonTitle": "添加属性",
    "database.propertiesMenu.confirmActionDialog.deleteProperty.message":
      "确定要删除此属性吗？",
    "database.propertiesMenu.confirmActionDialog.deletePropertyButton.label":
      "删除",
    "database.propertiesMenu.hiddenProperties": "隐藏属性",
    "database.propertiesMenu.propertiesFor": "属性・用于",
    "database.propertiesMenu.showInBoardTitle": "在看板中显示",
    "database.propertiesMenu.showInCalendarTitle": "在日历中显示",
    "database.propertiesMenu.showInGalleryTitle": "在画廊中显示",
    "database.propertiesMenu.showInListTitle": "在列表中显示",
    "database.propertiesMenu.showInTableTitle": "在表格中显示",
    "database.propertiesMenu.showInTimelineTitle": "在时间轴中显示",
    "database.propertiesMenu.visibleProperties": "可见属性",
    "database.propertiesMenuActions.deleteMenuItem.label": "删除",
    "database.propertiesMenuActions.deleteSearchText.label": "删除",
    "database.propertiesMenuActions.duplicateMenuItem.label": "创建副本",
    "database.propertiesMenuActions.duplicateSearchText.label":
      "复制 副本 复本",
    "database.propertiesMenuActions.hideMenuItem.label": "隐藏",
    "database.propertiesMenuActions.hideSearchText.label": "隐藏",
    "database.propertiesMenuActions.showMenuItem.label": "显示",
    "database.propertiesMenuActions.showSearchText.label": "显示",
    "database.propertyAggregationMenu.noneText": "无",
    "database.propertyTypeDescription.checkbox": "通过复选框追踪状态。",
    "database.propertyTypeDescription.created_by": "引用创建页面的人员。",
    "database.propertyTypeDescription.created_time":
      "引用页面的创建日期和时间。",
    "database.propertyTypeDescription.date":
      "一个日期，带有格式化选项，可包含时间。",
    "database.propertyTypeDescription.email": "引用邮箱地址。",
    "database.propertyTypeDescription.file": "上传文件和图片。",
    "database.propertyTypeDescription.formula": "使用页面的其他属性计算函数。",
    "database.propertyTypeDescription.last_edited_by":
      "引用上次编辑页面的人员。",
    "database.propertyTypeDescription.last_edited_time":
      "引用页面的上次编辑日期和时间。",
    "database.propertyTypeDescription.multi_select":
      "使用选项列表中的值进行标记。",
    "database.propertyTypeDescription.number":
      "一个数字，可以格式化为货币、百分比等选项。",
    "database.propertyTypeDescription.person": "引用你团队中的人员。",
    "database.propertyTypeDescription.phone_number": "引用电话号码。",
    "database.propertyTypeDescription.relation":
      "允许此数据库中的页面引用另一个数据库中的页面。",
    "database.propertyTypeDescription.rollup": "显示并汇总关联关系中的数据。",
    "database.propertyTypeDescription.select": "从选项列表中选择。",
    "database.propertyTypeDescription.text": "一行文字。",
    "database.propertyTypeDescription.url": "网络上的链接。",
    "database.propertyTypeName.checkbox": "复选框",
    "database.propertyTypeName.created_by": "创建者",
    "database.propertyTypeName.created_time": "创建时间",
    "database.propertyTypeName.date": "日期",
    "database.propertyTypeName.email": "电子邮件",
    "database.propertyTypeName.file": "文件和媒体",
    "database.propertyTypeName.formula": "函数",
    "database.propertyTypeName.last_edited_by": "上次编辑者",
    "database.propertyTypeName.last_edited_time": "上次编辑时间",
    "database.propertyTypeName.multi_select": "多选",
    "database.propertyTypeName.number": "数字",
    "database.propertyTypeName.person": "人员",
    "database.propertyTypeName.phone_number": "电话",
    "database.propertyTypeName.relation": "关联关系",
    "database.propertyTypeName.rollup": "汇总",
    "database.propertyTypeName.select": "单选",
    "database.propertyTypeName.text": "文本",
    "database.propertyTypeName.title": "标题",
    "database.propertyTypeName.url": "网址",
    "database.propertyValues.mobileFormulaMenu.title": "函数",
    "database.relationProperty.createModal.cancelButton": "取消",
    "database.relationProperty.createModal.confirmButton": "创建关联关系",
    "database.relationProperty.createModal.databaseSelect.label": "选择数据库",
    "database.relationProperty.createModal.databaseSelect.mobile.caption":
      "你希望链接到的数据库。",
    "database.relationProperty.createModal.databaseSelect.mobile.title":
      "数据库源",
    "database.relationProperty.createModal.databaseSelect.placeholder":
      "搜索数据库⋯",
    "database.relationProperty.createModal.description":
      "关联关系可以让你从其他数据库中链接页面。",
    "database.relationProperty.createModal.header":
      "创建与另一个数据库的关联关系",
    "database.relationProperty.createModal.helpCenterLink": "了解关联关系",
    "database.relationProperty.createModal.helpCenterLinkMobile": "了解关系",
    "database.relationProperty.createModal.noResults": "无结果",
    "database.relationProperty.createModal.selfRelationPrompt":
      "你选择了同一个数据库。被链接的页面应显示在哪个属性中？",
    "database.relationProperty.createModal.selfRelationPrompt.createNewPropertyOption.caption":
      "<b>不同步</b>：在“任务”数据库中搭建“相关任务”属性时，请使用此选项。",
    "database.relationProperty.createModal.selfRelationPrompt.createNewPropertyOption.title":
      "创建新属性",
    "database.relationProperty.createModal.selfRelationPrompt.mobileTitle":
      "自我关联型",
    "database.relationProperty.createModal.selfRelationPrompt.samePropertyOption.caption":
      "<b>双向同步</b>：在“任务”数据库中搭建“父任务”和“子任务”属性时，请使用此选项。",
    "database.relationProperty.createModal.selfRelationPrompt.samePropertyOption.title":
      "使用同一个属性",
    "database.relationProperty.newRelation.createNewPageLabel":
      "<medium>在</medium>{databaseNameWithIcon}<medium>中创建</medium>{pageName}页面",
    "database.relationProperty.newRelation.helpCaption": "了解关联关系和汇总",
    "database.relationProperty.newRelation.searchInitialState":
      "搜索以查找和链接页面",
    "database.relationProperty.newRelation.targetDatabase":
      "<regular>在</regular> {databaseWithIcon}<regular>中</regular>",
    "database.relationPropertyMenu.tooltip.addPage.message": "添加到关联",
    "database.relationPropertyMenu.tooltip.addPage.prompt": "输入",
    "database.relationPropertyValue.moreItems.message":
      "其他 {relationMoreItemsCount} 项⋯",
    "database.rollupProperty.aggregate.showOriginal": "显示原始值",
    "database.rollupProperty.editAggregate.title": "计算",
    "database.rollupProperty.editAggregate.tooltip":
      "先选择现有的关联关系和属性。",
    "database.rollupProperty.editProperty.buttonTitle": "选择要显示的属性⋯",
    "database.rollupProperty.editProperty.title": "属性",
    "database.rollupProperty.editProperty.tooltip": "请先选择现有的关联关系。",
    "database.rollupProperty.editRelation.buttonTitle": "选择现有关联关系⋯",
    "database.rollupProperty.editRelation.title": "关联关系",
    "database.searchInputPlaceholder": "输入以搜索⋯",
    "database.searchPerson.placeholder": "搜索人员⋯",
    "database.searchPersonPropertyMenuItem.noResults.message": "无结果",
    "database.searchPersonPropertyMenuItem.title": "选择人员",
    "database.searchRelation.createNewPageLabel":
      "<medium>在</medium>{databaseNameWithIcon}<medium>中创建新页面</medium> {pageName}",
    "database.searchRelation.placeholder": "搜索页面...",
    "database.selectPerson.menuItem": "选择人员",
    "database.selectPropertyEditMenu.createLabel": "创建",
    "database.selectPropertyEditMenu.noResults": "未找到任何选项",
    "database.selectPropertyEditMenu.searchPlaceholder": "搜索选项⋯",
    "database.selectPropertyEditMenu.selectOnlyPrompt": "选择选项",
    "database.selectPropertyEditMenu.selectOrCreatePrompt":
      "选择或创建一个选项",
    "database.selectPropertyOptionEditMenu.colorsSection": "颜色",
    "database.selectPropertyOptionEditMenu.deleteLabel": "删除",
    "database.selectPropertyOptionEditMenu.deleteModal.confirmButton": "移除",
    "database.selectPropertyOptionEditMenu.deleteModal.prompt":
      "确定要移除此选项？",
    "database.selectRelation.menuItem": "选择页面",
    "database.sortMenu.addSortButtonTitle": "添加排序",
    "database.sortMenu.deleteButtonTooltip": "删除排序规则",
    "database.sortMenu.emptyState1": "用排序来：",
    "database.sortMenu.emptyState2": "按优先级显示任务。",
    "database.sortMenu.emptyState3": "按创建日期显示笔记。",
    "database.sortMenu.emptyState4": "显示最近联系的客户。",
    "database.sortMenu.mobileDeleteButtonTitle": "删除",
    "database.sortMenu.mobileMenuTitle": "排序",
    "database.sortMenu.sortFor": "排序・用于",
    "database.source.editTitle.title": "编辑数据库标题",
    "database.source.hideTitle.title": "隐藏数据库标题",
    "database.source.titlePlaceholder": "无标题",
    "database.source.viewDatabase.title": "查看数据库",
    "database.syncedCollection.title.original_url": "（原始 url）",
    "database.tableHeaderCell.deleteProperty": "删除属性",
    "database.tableHeaderCell.deleteProperty.modal.confirmButton": "删除",
    "database.tableHeaderCell.deleteProperty.modal.prompt":
      "确定要删除此属性吗？",
    "database.tableHeaderCell.editProperty": "编辑属性",
    "database.tableHeaderCell.editPropertyTooltip":
      "编辑属性名称、类型和其他选项...",
    "database.tableHeaderCell.filter": "筛选器",
    "database.tableHeaderCell.hideFromView": "对视图隐藏",
    "database.tableHeaderCell.hideInView": "在视图中隐藏",
    "database.tableHeaderCell.rename": "重命名",
    "database.tableHeaderCell.sortAscending": "升序排列",
    "database.tableHeaderCell.sortDescending": "降序排列",
    "database.tableView.addRowButton": "新建",
    "database.tableView.aggregationPlaceholder": "计算",
    "database.tableView.emptyTablePlaceholder": "此表内容为空",
    "database.templateList.UntitledDatabaseTitle": "无标题",
    "database.templatePicker.emptyPageTitle": "空白页",
    "database.templatePickerItem.actionMenu.delete": "删除",
    "database.templatePickerItem.actionMenu.duplicate": "创建副本",
    "database.templatePickerItem.actionMenu.edit": "编辑",
    "database.templatePickerItem.actionMenu.view": "视图",
    "database.templatePickerItem.editTemplate.tooltip": "编辑此模板",
    "database.templateView.newTemplateButton": "新模板",
    "database.templatesList.templatesFor": "模板・用于",
    "database.timelineByMenu.dateRange": "日期范围",
    "database.timelineByMenu.endDate": "结束日期",
    "database.timelineByMenu.startDate": "开始日期",
    "database.timelineByMenu.title": "时间轴显示",
    "database.timelineByMenu.useSeparatePropertiesToggle":
      "使用单独的开始和结束日期",
    "database.timelineView.addRowButton": "新建",
    "database.timelineView.controlHeader.showTableButton.title": "显示表格",
    "database.timelineView.controlHeader.todayButton.title": "今天",
    "database.timelineView.dateProperty.defaultName": "日期",
    "database.timelineView.emptyTablePlaceholder": "此表内容为空",
    "database.timelineView.hideTableButton.title": "隐藏表格",
    "database.timelineView.item.addRowButton": "新建",
    "database.timelineView.missingDateProperty":
      "无法呈现此视图，因为数据库缺少日期属性。",
    "database.timelineView.mobileTimelineZoomPicker.title": "选择缩放等级",
    "database.timelineView.pricingBlock.description":
      "你当前的方案可以在时间轴视图中最多显示{tierLimit}行。升级以解除限额。",
    "database.timelineView.pricingBlock.header": "在时间轴中查看更多行",
    "database.timelineView.pricingBlock.learnMoreButton": "了解更多",
    "database.timelineView.pricingBlock.upgradeButton": "升级",
    "database.timelineView.tableGroupResults.hideTableButton.title": "隐藏表格",
    "database.timelineView.zoomLevel.biWeek": "双周",
    "database.timelineView.zoomLevel.day": "天",
    "database.timelineView.zoomLevel.hours": "小时",
    "database.timelineView.zoomLevel.month": "月度",
    "database.timelineView.zoomLevel.quarter": "季度",
    "database.timelineView.zoomLevel.quarters": "季度",
    "database.timelineView.zoomLevel.week": "周",
    "database.timelineView.zoomLevel.year": "年度",
    "database.titleColumn.name": "标题",
    "database.viewHelpers.dateProperty.defaultName": "日期",
    "database.viewHelpers.defaultFilterName": "无标题",
    "database.viewHelpers.firstPersonPropertyValue": "我",
    "database.viewHelpers.selectProperty.defaultName": "状态",
    "database.viewPropertiesMenu.cardPreviewButtonTitle": "卡片预览",
    "database.viewPropertiesMenu.cardSizeButtonTitle": "卡片大小",
    "database.viewPropertiesMenu.coverFormat.none": "无",
    "database.viewPropertiesMenu.coverFormat.pageContent": "页面内容",
    "database.viewPropertiesMenu.coverFormat.pageCover": "页面封面",
    "database.viewPropertiesMenu.coverSize.large": "大",
    "database.viewPropertiesMenu.coverSize.medium": "中",
    "database.viewPropertiesMenu.coverSize.small": "小",
    "database.viewPropertiesMenu.firstLoadLimitSetting": "在首次加载时显示",
    "database.viewPropertiesMenu.fitImageButtonTitle": "自适应图片大小",
    "database.viewPropertiesMenu.showPages": "显示页面",
    "database.viewPropertiesMenu.timelineShowTableTitle": "显示表格",
    "database.viewSettings.calendarByPropertyTab.showCalendarByProperty.title":
      "日历显示方式",
    "database.viewSettings.configureSelfRelationTab.accept.title":
      "创建关联关系",
    "database.viewSettings.configureSelfRelationTab.createNewPropertyOption.caption":
      "<b>不同步</b>：在“任务”数据库中搭建“相关任务”属性时，请使用此选项。",
    "database.viewSettings.configureSelfRelationTab.createNewPropertyOption.title":
      "创建新属性",
    "database.viewSettings.configureSelfRelationTab.samePropertyOption.caption":
      "<b>双向同步</b>：在“任务”数据库中搭建“父任务”和“子任务”属性时，请使用此选项。",
    "database.viewSettings.configureSelfRelationTab.samePropertyOption.title":
      "使用同一个属性",
    "database.viewSettings.configureSelftRelationTab.title": "新建关联关系",
    "database.viewSettings.copyLinkSnackBarItem.title":
      "视图链接已复制到剪贴板",
    "database.viewSettings.createCollectionTab.createCollectionButton.title":
      "创建数据库",
    "database.viewSettings.createCollectionTab.inputPlaceholder": "数据库名称",
    "database.viewSettings.createCollectionTab.title": "新建数据库",
    "database.viewSettings.createCustomFilterTab.doneButton.title": "完成",
    "database.viewSettings.createCustomFilterTab.title": "新建筛选器",
    "database.viewSettings.createFilterTab.addAdvancedFilter.title":
      "添加高级筛选器",
    "database.viewSettings.createFilterTab.advancedFilter.title": "高级筛选器",
    "database.viewSettings.createFilterTab.advancedFilterRulesCount.title":
      "{ruleCount, plural, other {{ruleCount} 条规则}}",
    "database.viewSettings.createFilterTab.doneButton.title": "自定义筛选器",
    "database.viewSettings.createFilterTab.filterBy.title": "筛选方式",
    "database.viewSettings.createFilterTab.inputPlaceholder": "筛选方式…",
    "database.viewSettings.createFilterTab.noResultsTitle": "无结果",
    "database.viewSettings.createFilterTab.showMoreTitle": "{moreCount} 更多",
    "database.viewSettings.createFilterTab.suggestedFilters.title":
      "建议筛选器",
    "database.viewSettings.createFilterTab.title": "新建筛选器",
    "database.viewSettings.createPropertyTab.title": "新建属性",
    "database.viewSettings.createSortTab.inputPlaceholder": "排序方式…",
    "database.viewSettings.createSortTab.title": "新建排序",
    "database.viewSettings.createViewSourceTab.newCollectionButton.title":
      "新建数据库",
    "database.viewSettings.createViewSourceTab.newCollectionWithNameButton.title":
      "新建数据库“{filterText}”",
    "database.viewSettings.createViewSourceTab.title": "新建视图",
    "database.viewSettings.createViewTab.doneButton.title": "完成",
    "database.viewSettings.createViewTab.newCollectionButton.title":
      "新建数据库",
    "database.viewSettings.createViewTab.title": "新建视图",
    "database.viewSettings.dateOptions.dateFormat": "日期格式",
    "database.viewSettings.dateOptions.timeFormat": "时间格式",
    "database.viewSettings.deleteButton.text": "删除视图",
    "database.viewSettings.deletedPropertiesTab.noResults": "无结果",
    "database.viewSettings.deletedPropertiesTab.permanentlyDeleteProperty.modal.prompt":
      "确定要删除此属性吗？",
    "database.viewSettings.duplicateExistingViewTab.inputPlaceholder":
      "搜索视图…",
    "database.viewSettings.duplicateExistingViewTab.newEmptyViewButton.title":
      "新建空视图",
    "database.viewSettings.duplicateExistingViewTab.noResultsTitle": "无结果",
    "database.viewSettings.duplicateExistingViewTab.showMore.title":
      "显示{showMore}更多",
    "database.viewSettings.duplicateExistingViewTab.title": "复制现有视图",
    "database.viewSettings.filterAndSortSaveControl.filter.caption":
      "{count, plural, other {{count} 个筛选器，不同于其他人看到的情况}}",
    "database.viewSettings.filterAndSortSaveControl.more": "更多选项",
    "database.viewSettings.filterAndSortSaveControl.resetFilters": "重置筛选器",
    "database.viewSettings.filterAndSortSaveControl.resetSorts": "重置排序",
    "database.viewSettings.filterAndSortSaveControl.sort.caption":
      "排序已与其他人看到的有所不同",
    "database.viewSettings.filterTab.deleteFilter.modal.confirmButton": "删除",
    "database.viewSettings.filterTab.deleteFilter.modal.prompt":
      "确定要删除该筛选器？",
    "database.viewSettings.filterTab.deleteFilterButton.title": "删除筛选器",
    "database.viewSettings.filterTab.removeButton.title": "移除",
    "database.viewSettings.filterTab.title": "高级筛选器",
    "database.viewSettings.filterTab.turnOnByDefault.title": "默认开启",
    "database.viewSettings.filtersTab.advancedFilterEdit.title": "编辑",
    "database.viewSettings.filtersTab.advancedFilterOn.title": "开",
    "database.viewSettings.filtersTab.changesCount.title":
      "{changeCount, plural, one {{changeCount} 个筛选器} other {{changeCount} 个筛选器}}不同于其他人看到的情况",
    "database.viewSettings.filtersTab.defaultOn.title": "默认启用",
    "database.viewSettings.filtersTab.newFilter.title": "新建筛选器",
    "database.viewSettings.filtersTab.reset.title": "重置",
    "database.viewSettings.filtersTab.saveAsNewView.title": "另存为新视图",
    "database.viewSettings.filtersTab.saveForEveryone.title": "为所有人保存",
    "database.viewSettings.filtersTab.selectFilterValue.title": "选择",
    "database.viewSettings.filtersTab.title": "筛选器",
    "database.viewSettings.formulaOptions.edit": "编辑",
    "database.viewSettings.formulaOptions.title": "函数",
    "database.viewSettings.groupByPropertyTab.inputPlaceholder": "搜索属性⋯",
    "database.viewSettings.groupByPropertyTab.noGroupingSetMessage": "无",
    "database.viewSettings.groupByTypeTab.dateBy": "按日期",
    "database.viewSettings.groupByTypeTab.numberBy": "按数字",
    "database.viewSettings.groupByTypeTab.textBy": "按文本",
    "database.viewSettings.groupTab.colorColumns": "颜色列",
    "database.viewSettings.groupTab.group.title": "群组",
    "database.viewSettings.groupTab.groupProperty": "分组方式",
    "database.viewSettings.groupTab.hideEmptyGroups": "隐藏空群组",
    "database.viewSettings.groupTab.learnMoreButton.title": "了解分组",
    "database.viewSettings.groupTab.noGroupingSetMessage": "无",
    "database.viewSettings.groupTab.removeButton.title": "移除分组",
    "database.viewSettings.groupTab.sort": "排序",
    "database.viewSettings.groupTab.sortType.alphabetical": "按字母顺序",
    "database.viewSettings.groupTab.sortType.ascending": "升序",
    "database.viewSettings.groupTab.sortType.chronological": "按时间顺序",
    "database.viewSettings.groupTab.sortType.descending": "降序",
    "database.viewSettings.groupTab.sortType.manual": "手动",
    "database.viewSettings.groupTab.sortType.reverseAlphabetical":
      "按反向字母顺序",
    "database.viewSettings.groupTab.sortType.reverseChronological":
      "按时间倒序",
    "database.viewSettings.groupTab.subGroup.title": "子组",
    "database.viewSettings.groupTab.subGroupProperty": "子组分组方式",
    "database.viewSettings.layoutTab.boardGroupByButton.title": "分组方式",
    "database.viewSettings.layoutTab.cardPreviewButtonTitle": "卡片预览",
    "database.viewSettings.layoutTab.firstLoadLimitSetting": "加载限制",
    "database.viewSettings.layoutTab.learnMoreButton.title": "了解视图",
    "database.viewSettings.layoutTab.limitPagesTitle": "{limit} 页",
    "database.viewSettings.layoutTab.propertiesButton.propertiesShown.title":
      "{propertiesShown} 已显示",
    "database.viewSettings.layoutTab.showCalendarByProperty.title":
      "日历显示方式",
    "database.viewSettings.layoutTab.showDatabaseTitle.title": "显示数据库标题",
    "database.viewSettings.layoutTab.showTimelineByProperty.title":
      "时间轴显示方式",
    "database.viewSettings.layoutTab.tablePropertiesButton.title": "表格属性",
    "database.viewSettings.layoutTab.timelineEndDate.title": "结束日期",
    "database.viewSettings.layoutTab.timelineStartDate.title": "开始日期",
    "database.viewSettings.layoutTab.timelineUseSeparateDates.title":
      "单独的开始和结束日期",
    "database.viewSettings.layoutTab.title": "布局",
    "database.viewSettings.mainTab.contentOnlyEditorAdminPill.subtitle":
      "阻止人们更改视图和数据库设置，同时保留他们的页面编辑权限。",
    "database.viewSettings.mainTab.contentOnlyEditorAdminPill.title":
      "试用内容编辑器",
    "database.viewSettings.mainTab.contentOnlyEditorPill.subtitle":
      "内容编辑者可以编辑页面，但不能更改视图和数据库设置。",
    "database.viewSettings.mainTab.contentOnlyEditorPill.title":
      "你是内容编辑者",
    "database.viewSettings.mainTab.copyLinkButton.title": "复制视图链接",
    "database.viewSettings.mainTab.copyLinkSnackBarItem.title":
      "视图链接已复制到剪贴板",
    "database.viewSettings.mainTab.deleteButton.title": "删除视图",
    "database.viewSettings.mainTab.deleteViewConfirm.text":
      "确定要删除此视图？",
    "database.viewSettings.mainTab.duplicateButton.title": "创建副本",
    "database.viewSettings.mainTab.filterButton.filters.title":
      "{numberOfFilters, plural, other {{numberOfFilters} 个筛选器}}",
    "database.viewSettings.mainTab.filterButton.noFilters.title": "无筛选器",
    "database.viewSettings.mainTab.filterButton.title": "筛选器",
    "database.viewSettings.mainTab.groupButton.title": "群组",
    "database.viewSettings.mainTab.layoutButton.title": "布局",
    "database.viewSettings.mainTab.lockDatabase.title": "锁定数据库",
    "database.viewSettings.mainTab.lockViews.title": "锁定视图",
    "database.viewSettings.mainTab.propertiesButton.propertiesShown.title":
      "已显示 {propertiesShown}",
    "database.viewSettings.mainTab.propertiesButton.title": "属性",
    "database.viewSettings.mainTab.removeButton.text": "移除",
    "database.viewSettings.mainTab.removeButton.title": "移除",
    "database.viewSettings.mainTab.removeViewConfirm.text":
      "确定要移除该视图？",
    "database.viewSettings.mainTab.sortButton.noSorts.title": "手动",
    "database.viewSettings.mainTab.sortButton.oneOrMoreSorts.title":
      "{numberOfSorts, plural, other {{numberOfSorts} 个排序}}",
    "database.viewSettings.mainTab.sortButton.title": "排序",
    "database.viewSettings.mainTab.sourceButton.title": "来源",
    "database.viewSettings.mainTab.subGroupButton.title": "子组",
    "database.viewSettings.mainTab.title": "查看选项",
    "database.viewSettings.mainTab.unlockDatabase.title": "解锁数据库",
    "database.viewSettings.mainTab.unlockViews.title": "解锁视图",
    "database.viewSettings.mainTab.viewNamePlaceholder.title": "视图名称",
    "database.viewSettings.mainTab.viewNameSection.title": "视图名称",
    "database.viewSettings.numberOptions.numberFormat": "数字格式",
    "database.viewSettings.propertiesTab.deletedProperties": "已删除属性",
    "database.viewSettings.propertiesTab.hiddenInBoardTitle": "在看板中隐藏",
    "database.viewSettings.propertiesTab.hiddenInCalendarTitle": "在日历中隐藏",
    "database.viewSettings.propertiesTab.hiddenInGalleryTitle": "在画廊中隐藏",
    "database.viewSettings.propertiesTab.hiddenInListTitle": "在列表中隐藏",
    "database.viewSettings.propertiesTab.hiddenInTableTitle": "在表格中隐藏",
    "database.viewSettings.propertiesTab.hiddenInTimelineTitle":
      "在时间轴中隐藏",
    "database.viewSettings.propertiesTab.hideAllProperties": "全部隐藏",
    "database.viewSettings.propertiesTab.inputPlaceholder": "搜索属性⋯",
    "database.viewSettings.propertiesTab.learnMoreButton.title": "了解属性",
    "database.viewSettings.propertiesTab.newProperty": "新建属性",
    "database.viewSettings.propertiesTab.newProperty.defaultNamePrefix": "属性",
    "database.viewSettings.propertiesTab.noResults": "无结果",
    "database.viewSettings.propertiesTab.showAllProperties": "全部显示",
    "database.viewSettings.propertiesTab.showTable": "显示表格",
    "database.viewSettings.propertiesTab.shownInBoardTitle": "在看板中显示",
    "database.viewSettings.propertiesTab.shownInCalendarTitle": "在日历中显示",
    "database.viewSettings.propertiesTab.shownInGalleryTitle": "在画廊中显示",
    "database.viewSettings.propertiesTab.shownInListTitle": "在列表中显示",
    "database.viewSettings.propertiesTab.shownInTableTitle": "在表格中显示",
    "database.viewSettings.propertiesTab.shownInTimelineTitle":
      "在时间轴中显示",
    "database.viewSettings.propertiesTab.tableProperties": "表格",
    "database.viewSettings.propertiesTab.timelineProperties": "时间轴",
    "database.viewSettings.propertiesTab.title": "属性",
    "database.viewSettings.propertiesTab.viewDeletedProperties":
      "查看已删除的属性",
    "database.viewSettings.propertySelect.inputPlaceholder": "搜索属性…",
    "database.viewSettings.propertySelect.noResultsTitle": "无结果",
    "database.viewSettings.propertySelect.noneMessage": "无",
    "database.viewSettings.propertySelect.showMoreTitle": "{moreCount} 更多",
    "database.viewSettings.propertyTab.deleteButton.title": "删除属性",
    "database.viewSettings.propertyTab.deleteProperty.modal.confirmButton":
      "删除",
    "database.viewSettings.propertyTab.deleteProperty.modal.prompt":
      "确定要删除该属性吗？",
    "database.viewSettings.propertyTab.duplicateButton.title": "创建副本",
    "database.viewSettings.propertyTab.duplicatePropertyNameError":
      "此数据库中已经存在一个名为 {propertyName} 的属性。",
    "database.viewSettings.propertyTab.formulas.learnMoreButton.title":
      "了解函数",
    "database.viewSettings.propertyTab.hideButton.title": "隐藏",
    "database.viewSettings.propertyTab.hideInViewButton.title": "在视图中隐藏",
    "database.viewSettings.propertyTab.propertyName": "属性名称",
    "database.viewSettings.propertyTab.propertyType": "类型",
    "database.viewSettings.propertyTab.relations.learnMoreButton.title":
      "了解关联关系",
    "database.viewSettings.propertyTab.removeButton.title": "删除",
    "database.viewSettings.propertyTab.rollups.learnMoreButton.title":
      "了解汇总",
    "database.viewSettings.propertyTab.showButton.title": "显示",
    "database.viewSettings.propertyTab.showInViewButton.title": "在视图中显示",
    "database.viewSettings.propertyTab.title": "编辑属性",
    "database.viewSettings.propertyTypeSection.advanced": "高级",
    "database.viewSettings.propertyTypeSection.basic": "基本",
    "database.viewSettings.propertyTypeSelect.inputPlaceholder":
      "搜索属性类型…",
    "database.viewSettings.propertyTypeSelect.noResultsTitle": "无结果",
    "database.viewSettings.removeButton.text": "删除",
    "database.viewSettings.rollupOptions.calculate": "计算",
    "database.viewSettings.rollupOptions.relationProperty": "关联关系",
    "database.viewSettings.rollupOptions.selectRelation": "选择",
    "database.viewSettings.rollupOptions.selectTargetProperty": "选择",
    "database.viewSettings.rollupOptions.targetProperty": "属性",
    "database.viewSettings.searchCollections.inputPlaceholder":
      "链接或创建数据库…",
    "database.viewSettings.searchCollections.noResultsTitle": "无结果",
    "database.viewSettings.searchCollections.showMore.title":
      "显示 {showMore} 更多",
    "database.viewSettings.selectOptions.addOption": "添加选项",
    "database.viewSettings.selectOptions.newSelectOption.inputPlaceholder":
      "输入新选项…",
    "database.viewSettings.selectOptions.noOptions": "添加选项",
    "database.viewSettings.selectOptions.title": "选项",
    "database.viewSettings.selectRelationSourceTab.inputPlaceholder":
      "搜索数据库",
    "database.viewSettings.selectRelationSourceTab.title": "新建关联关系",
    "database.viewSettings.sortTab.deleteAllSorts": "删除排序",
    "database.viewSettings.sortTab.mobile.sort": "排序 {sortNumber}",
    "database.viewSettings.sortTab.mobileDeleteButtonTitle": "删除",
    "database.viewSettings.sortTab.newSort": "新建排序",
    "database.viewSettings.sortTab.title": "排序",
    "database.viewSettings.sourceTab.importFrom.title": "导入自",
    "database.viewSettings.sourceTab.inputPlaceholder": "链接或创建数据库",
    "database.viewSettings.sourceTab.learnAboutViews.title": "了解视图",
    "database.viewSettings.sourceTab.newCollectionMenuItem.title":
      "新建数据库“{filterText}”",
    "database.viewSettings.sourceTab.newDatabaseButton.title": "新建数据库",
    "database.viewSettings.sourceTab.newDatabaseMenuItem.title":
      "新建数据库“{filterText}”",
    "database.viewSettings.sourceTab.noResultsTitle": "无结果",
    "database.viewSettings.sourceTab.showMore.title": "显示其他 {showMore} 个",
    "database.viewSettings.sourceTab.suggestedSources": "建议的来源",
    "database.viewSettings.sourceTab.title": "来源",
    "database.viewSettings.timelineByPropertyTab.showTimelineByProperty.title":
      "时间轴显示方式",
    "database.viewSettings.timelineByPropertyTab.timelineByEndProperty.title":
      "结束日期",
    "database.viewSettings.timelineByPropertyTab.timelineStartDate.title":
      "开始日期",
    "database.viewSettings.viewActionMenu.copyLink": "复制视图链接",
    "database.viewSettings.viewActionMenu.delete": "删除",
    "database.viewSettings.viewActionMenu.duplicate": "创建副本",
    "database.viewSettings.viewActionMenu.editView": "编辑视图",
    "database.viewSettings.viewActionMenu.hideFilters": "隐藏筛选器",
    "database.viewSettings.viewActionMenu.inputPlaceholder": "搜索操作…",
    "database.viewSettings.viewActionMenu.noResultsTitle": "无结果",
    "database.viewSettings.viewActionMenu.rename": "重命名",
    "database.viewSettings.viewActionMenu.showFilters": "显示筛选器",
    "databaseActions.removeSortingConfirmationDialog.prompt": "要移除排序吗？",
    "databaseActions.removeSortingConfirmationDialog.removeSortingButton.label":
      "移除",
    "databaseRelationOperators.errorMessage": "出了些问题",
    "databaseRelationOperators.mobileMenuTitle": "关联式",
    "databaseRelationOperators.noSearchResults": "无结果",
    "databaseRelationOperators.pageSelection.title": "选择页面",
    "databaseRelationOperators.searchPlaceholder": "搜索页面⋯",
    "databaseRelationOperators.selectPlaceholder": "选择页面",
    "databaseTemplatePickerActions.duplicateTemplateFailedError.message":
      "保存模板失败。",
    "databaseViewActions.importFailedError.message": "导入失败。",
    "databaseViewActions.importingCSV.loadingMessage": "导入中",
    "databaseViewActions.uploadingCSV.loadingMessage": "上传中",
    "databdatabase.viewSettings.layoutTab.cardSizeButtonTitle": "卡片大小",
    "databdatabase.viewSettings.layoutTab.firstLoadLimitSetting":
      "在首次加载时显示",
    "databdatabase.viewSettings.layoutTab.fitImageButtonTitle":
      "自适应图片大小",
    "databdatabase.viewSettings.layoutTab.limitPagesTitle": "{limit} 页",
    "databdatabase.viewSettings.layoutTab.tableWrapCells": "单元格换行",
    "dateFormatHelpers.reminderMenuItems.atTimeOfEvent": "在事件发生时",
    "dateFormatHelpers.reminderMenuItems.daysBefore":
      "{numberOfDays, plural, other {在 {formattedTimeText} 之前的 {numberOfDays} 天}}",
    "dateFormatHelpers.reminderMenuItems.hoursBefore":
      "{numberOfHours, plural, other {提前 {numberOfHours} 小时}}",
    "dateFormatHelpers.reminderMenuItems.minutesBefore":
      "{numberOfMinutes, plural, other {提前 {numberOfMinutes} 分钟}}",
    "dateFormatHelpers.reminderMenuItems.monthsBefore":
      "{numberOfMonths, plural, other {在 {formattedTimeText} 之前的 {numberOfMonths} 个月}}",
    "dateFormatHelpers.reminderMenuItems.none": "无",
    "dateFormatHelpers.reminderMenuItems.onTheDayOfEvent":
      "在事件当天的 {formattedTimeText}",
    "dateFormatHelpers.reminderMenuItems.weeksBefore":
      "{numberOfWeeks, plural, other {在 {formattedTimeText} 之前的 {numberOfWeeks} 周}}",
    "dateFormatHelpers.reminderMenuItems.yearsBefore":
      "{numberOfYears, plural, other {在 {formattedTimeText} 之前的 {numberOfYears} 年}}",
    "dateFormatHelpers.text.lastDayOfTheWeek": "上{dayOfTheWeek}",
    "dateFormatHelpers.text.nextDayOfTheWeek": "下{dayOfTheWeek}",
    "dateFormatHelpers.text.today": "今天",
    "dateFormatHelpers.text.tomorrow": "明天",
    "dateFormatHelpers.text.yesterday": "昨天",
    "dateHelpers.12hourTimeFormat": "12 小时",
    "dateHelpers.24hourTimeFormat": "24 小时",
    "dateHelpers.dateFormat.dayMonthYear": "日/月/年",
    "dateHelpers.dateFormat.explicitMonthDayYear": "年月日",
    "dateHelpers.dateFormat.fullDate": "完整日期",
    "dateHelpers.dateFormat.monthDayYear": "月/日/年",
    "dateHelpers.dateFormat.relative": "相对日期",
    "dateHelpers.dateFormat.yearMonthDay": "年/月/日",
    "dateInputError.invalidDateError.tooltip": "无效日期",
    "dateInputError.invalidDateRangeError.tooltip": "无效范围",
    "dateParserHelpers.at": "时间：",
    "dateParserHelpers.day": "工作",
    "dateParserHelpers.last": "过去",
    "dateParserHelpers.me": "我",
    "dateParserHelpers.month": "月",
    "dateParserHelpers.next": "下一个",
    "dateParserHelpers.now": "现在",
    "dateParserHelpers.remind": "提醒符_通知",
    "dateParserHelpers.today": "今天",
    "dateParserHelpers.today.short": "td",
    "dateParserHelpers.tomorrow": "明天",
    "dateParserHelpers.tomorrow.short": "tm",
    "dateParserHelpers.year": "年",
    "dateParserHelpers.yesterday": "昨天",
    "dateParserHelpers.yesterday.short": "yd",
    "datePropertyMenu.clearButton.label": "清除日期",
    "datePropertyMenu.dateFormatDropdownButton.label": "日期格式",
    "datePropertyMenu.formatMenu.emptyButton.label": "未填写",
    "datePropertyMenu.invalidDateError.tooltip": "无效日期",
    "datePropertyMenu.invalidDateOrTimeRangeError.tooltip": "无效范围",
    "datePropertyMenu.invalidTimeError.tooltip": "无效时间",
    "datePropertyMenu.learnMore.helpButton.label": "了解提醒",
    "datePropertyMenu.menuItem.endDate.label": "结束日期",
    "datePropertyMenu.menuItem.format.label": "日期格式",
    "datePropertyMenu.menuItem.formatAndTimezone.label": "日期格式与时区",
    "datePropertyMenu.menuItem.includeTime.label": "包含时间",
    "datePropertyMenu.menuItem.remind.label": "提醒",
    "datePropertyMenu.menuItem.select.title": "选择时区",
    "datePropertyMenu.menuItem.time.label": "时区",
    "datePropertyMenu.menuItem.timeFormat.label": "时间格式",
    "datePropertyMenu.mobileDate.title": "日期",
    "datePropertyMenu.mobileDateFormatModal.title": "日期格式",
    "datePropertyMenu.mobileDoneButton.label": "完成",
    "datePropertyMenu.mobileDoneReminderButton.label": "完成",
    "datePropertyMenu.mobileRemindModal.title": "提醒",
    "datePropertyMenu.mobileTimezoneMenu.title": "时区",
    "datePropertyMenu.timeFormatMenu.emptyButton.label": "未填写",
    "datePropertyMenu.timeFormatMenu.title": "时间格式",
    "datePropertyMenu.timeSearch.placeholder": "搜索时区⋯",
    "datePropertyMenu.timezoneMenu.noResults": "无结果",
    "datePropertyMenu.timezoneMenu.select.placeholder": "选择时区",
    "deepnoteBlock.embeds.button.label": "嵌入 Deepnote",
    "deepnoteBlock.embeds.caption": "适用于具有公开链接的 Deepnote 块",
    "deepnoteBlock.placeholder": "嵌入 Deepnote",
    "desktop.rightClickMenu.copyEmailAddress": "复制邮箱地址地址",
    "desktop.rightClickMenu.copyImage": "复制图片",
    "desktop.rightClickMenu.copyImageAddress": "复制图片地址",
    "desktop.rightClickMenu.copyLink": "复制链接",
    "desktop.rightClickMenu.openLink": "打开链接",
    "desktop.searchMenuItem.searchWithGoogle.title": "用谷歌搜索",
    "desktop.spellcheckMenuItem.disableSpellcheck.title": "禁用拼写检查",
    "desktop.spellcheckMenuItem.enableSpellcheck.title": "启用拼写检查",
    "desktop.textEditingMenuItem.copyAction.title": "复制",
    "desktop.textEditingMenuItem.cutAction.title": "剪切",
    "desktop.textEditingMenuItem.pasteAction.title": "粘贴",
    "desktopAppUpdater.dialog.dismissButton.label": "好的",
    "desktopAppUpdater.moveNotionToApplicationsFolderDialog.dismissButton.label":
      "好的",
    "desktopAppUpdater.moveNotionToApplicationsFolderDialog.prompt":
      "请将 Notion 应用程序移至 /Applications 文件夹，以使自动更新程序正常工作。",
    "desktopAppUpdater.restartDialog.message":
      "请退出并重新启动应用程序以安装更新。",
    "desktopLogin.footer.helpCenterLink": "需要帮助？",
    "desktopLogin.footer.privacyAndTermsLink": "隐私与条款",
    "desktopLogin.loginOrSignupToSyncMessage": "登录以同步内容。",
    "desktopLogin.upgradeWarning.appOutOfDateMessage.mac":
      "你的 Mac 应用已过期。",
    "desktopLogin.upgradeWarning.appOutOfDateMessage.windows":
      "你的 Windows 应用已过期。",
    "desktopLogin.upgradeWarning.upgradeInstructions.mac":
      "请下载并重新安装你的 Mac 应用。",
    "desktopLogin.upgradeWarning.upgradeInstructions.windows":
      "请下载并重新安装你的 Windows 应用。",
    "desktopLogin.welcomeMessage.mac": "欢迎来到 Notion",
    "desktopLogin.welcomeMessage.windows": "欢迎来到 Notion",
    "developerIntegration.confirmationModal.cancelLabel": "取消",
    "developerIntegration.confirmationModal.confirmLabel": "继续",
    "developerIntegration.confirmationModal.deleteLabel": "删除",
    "developerIntegrationCard.botTagline.placeholder": "内部集成。",
    "developerIntegrationCard.dropdown.delete": "删除此集成",
    "developerIntegrationCard.integrationTagline.placeholder": "公共集成。",
    "developerIntegrationCard.placeholderCard.label": "创建新集成",
    "developerIntegrationCardDropdown.delete.confirmationError":
      "输入内容与集成名称不匹配。",
    "developerIntegrationCardDropdown.delete.confirmationMessage":
      "此公共集成将停用，并从其已添加到的所有工作区中删除。要确认，请输入此集成的名称。",
    "developerIntegrationCardDropdown.delete.confirmationTitle":
      "删除 {integrationName}？",
    "developerIntegrationForm.botToken.label": "内部集成令牌",
    "developerIntegrationForm.botToken.secretName": "令牌",
    "developerIntegrationForm.botToken.subtitle":
      "仅适用于 <bold>{spaceName}</bold> 工作区。要更改工作区，<developertermslink>创建另一个集成</developertermslink>。",
    "developerIntegrationForm.capabilities.caption":
      "当用户授权你集成时，将会向他们显示这些请求的功能。有关更多帮助，请参阅<inlinetextlink>开发者文档</inlinetextlink>。",
    "developerIntegrationForm.capabilities.content_capabilities.title":
      "内容功能",
    "developerIntegrationForm.capabilities.insert_content.caption":
      "请求创建新内容。",
    "developerIntegrationForm.capabilities.insert_content.title": "插入内容",
    "developerIntegrationForm.capabilities.label": "功能",
    "developerIntegrationForm.capabilities.no_user_capabilities.caption":
      "不要请求访问任何用户信息。",
    "developerIntegrationForm.capabilities.no_user_capabilities.title":
      "没有用户信息",
    "developerIntegrationForm.capabilities.read_content.caption":
      "请求读取内容。",
    "developerIntegrationForm.capabilities.read_content.title": "读取内容",
    "developerIntegrationForm.capabilities.read_user_with_email.caption":
      "请求访问用户信息，包括电子邮件地址。",
    "developerIntegrationForm.capabilities.read_user_with_email.title":
      "读取用户信息，包括电子邮件地址",
    "developerIntegrationForm.capabilities.read_user_without_email.caption":
      "请求访问用户信息，不包括电子邮件地址。",
    "developerIntegrationForm.capabilities.read_user_without_email.title":
      "读取用户信息，不包括电子邮件地址",
    "developerIntegrationForm.capabilities.update_content.caption":
      "请求更新现有内容。",
    "developerIntegrationForm.capabilities.update_content.title": "更新内容",
    "developerIntegrationForm.capabilities.user_capabilities.title": "用户功能",
    "developerIntegrationForm.clientSecret.confirmationModal.confirm": "继续",
    "developerIntegrationForm.clientSecret.confirmationModal.message":
      "此客户端密钥将仅显示一次，无法再次查看。请确保您安全地存储该密钥。",
    "developerIntegrationForm.clientSecret.confirmationModal.title":
      "显示 OAuth 客户端密钥？",
    "developerIntegrationForm.developerName.caption":
      "公司或组织的名称。如果这不适用，你可以使用自己的姓名。",
    "developerIntegrationForm.developerName.label": "公司名称",
    "developerIntegrationForm.developerSpace.label": "关联的工作区",
    "developerIntegrationForm.developerSpace.subtitle":
      "选择一个工作区来安装集成，用于开发。 批准后，它适用于所有用户。",
    "developerIntegrationForm.domain.caption":
      "使用此集成展开的 URL 的域。将在发布给用户之前验证域。",
    "developerIntegrationForm.domain.label": "展开 Url 域",
    "developerIntegrationForm.email.label": "支持电子邮件",
    "developerIntegrationForm.email.subtitle":
      "用于链接到集成页面和身份验证屏幕中的集成支持电子邮件。",
    "developerIntegrationForm.external_client_id.label": "OAuth 客户端 ID",
    "developerIntegrationForm.external_client_secret.label": "OAuth 客户端密钥",
    "developerIntegrationForm.external_oauth_authorize_url.caption":
      "由 Notion 用于通过集成启动用户授权。",
    "developerIntegrationForm.external_oauth_authorize_url.label":
      "OAuth 授权 URL",
    "developerIntegrationForm.external_oauth_scopes.caption":
      "可选作用域字符串",
    "developerIntegrationForm.external_oauth_scopes.label":
      "OAuth 作用域（可选）",
    "developerIntegrationForm.external_oauth_token_url.caption":
      "由 Notion 调用，检索 unfurl 回调 URL 的访问令牌。",
    "developerIntegrationForm.external_oauth_token_url.label": "OAuth 令牌 URL",
    "developerIntegrationForm.icon.label": "徽标",
    "developerIntegrationForm.icon.subtitle":
      "建议使用 512px x 512px 的 PNG 格式。",
    "developerIntegrationForm.integrationClientId.label": "OAuth 客户端 ID",
    "developerIntegrationForm.integrationSecret.label": "OAuth 客户端密钥",
    "developerIntegrationForm.integrationSecret.secretName": "密钥",
    "developerIntegrationForm.jsonEditor.error": "无效的 JSON。",
    "developerIntegrationForm.name.label": "名称",
    "developerIntegrationForm.name.subtitle": "用于向用户识别你的集成的名称。",
    "developerIntegrationForm.privacy_policy_url.label": "隐私政策",
    "developerIntegrationForm.privacy_policy_url.subtitle":
      "用于链接到集成页面和身份验证屏幕中的集成隐私政策。",
    "developerIntegrationForm.redirect_uri.label": "重定向 URI",
    "developerIntegrationForm.redirect_uri.subtitle":
      "在 Notion 的开放授权流程中，用户在使用 Notion 进行身份验证后将被重定向到此路径。此路径将附加访问授权代码，并且必须具有协议。它不能包含 URL 片段、相对路径或通配符，也不能是公共 IP 地址。它还必须包含在令牌请求中。",
    "developerIntegrationForm.redirect_uris.label": "重定向 URI",
    "developerIntegrationForm.regexAttributes.caption":
      "从正则表达式中提取属性。允许你在 unfurl 完成之前创建占位符内容。",
    "developerIntegrationForm.regexAttributes.label": "展开正则表达式属性",
    "developerIntegrationForm.regexPattern.caption":
      "当用户粘贴与此模式匹配的 URL 时，他们可以选择使用此集成展开。",
    "developerIntegrationForm.regexPattern.label": "展开正则表达式模式",
    "developerIntegrationForm.sectionCaption.unfurling":
      "访问<previewlab>链接预览实验室</previewlab>，规划展开预览和响应。",
    "developerIntegrationForm.sectionHeader.basic": "基本信息",
    "developerIntegrationForm.sectionHeader.external_oauth": "外部授权设置",
    "developerIntegrationForm.sectionHeader.links": "组织信息",
    "developerIntegrationForm.sectionHeader.oauth": "OAuth 域和 URI",
    "developerIntegrationForm.sectionHeader.secrets": "密钥",
    "developerIntegrationForm.sectionHeader.unfurling": "展开域 &amp; 模式",
    "developerIntegrationForm.sectionSubtitle.external_oauth":
      "有关 OAuth 2.0. 的信息，请参阅<textlink>官方 IETF 规范</textlink>。",
    "developerIntegrationForm.space.label": "关联的工作区",
    "developerIntegrationForm.space.subtitle":
      "选择一个工作区来安装集成。 你可以稍后升级集成以使用 OAuth。",
    "developerIntegrationForm.submissionType.label": "集成类型",
    "developerIntegrationForm.tagline.label": "标语",
    "developerIntegrationForm.tagline.subtitle": "集成功能的简短描述。",
    "developerIntegrationForm.terms_of_use_url.label": "使用条款",
    "developerIntegrationForm.terms_of_use_url.subtitle":
      "用于链接到集成页面和身份验证屏幕中的集成使用条款。",
    "developerIntegrationForm.unfurlUrl.caption":
      "当发生 unfurl 操作时，用 POST 请求调用，当删除 unfurl uri preview 或 mention 时，用 DELETE 请求调用。",
    "developerIntegrationForm.unfurlUrl.label": "展开回调 URL",
    "developerIntegrationForm.website_url.label": "网站或主页",
    "developerIntegrationForm.website_url.subtitle":
      "用于链接到集成页面和身份验证屏幕中的集成网站或主页。",
    "developerIntegrationFormHandler.create.developerTerms":
      "提交即表示你同意 Notion 的<developertermslink>开发者条款</developertermslink>。",
    "developerIntegrationFormHandler.createIntegration.confirmationModal.confirm":
      "继续",
    "developerIntegrationFormHandler.createIntegration.confirmationModal.message":
      "你将获得一个 OAuth 密钥，并且需要实施 OAuth 进行授权。有关详细信息，请参阅<oauthdocumentationlink>开发人员文档</oauthdocumentationlink>。",
    "developerIntegrationFormHandler.createIntegration.confirmationModal.title":
      "切换到公共集成？",
    "developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.confirm":
      "更改",
    "developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.message":
      "集成的任何现有用户都需要重新进行身份验证。",
    "developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.title":
      "更改请求的功能？",
    "developerIntegrationLab.domain.label": "域",
    "developerIntegrationLab.navigateBack.label": "返回集成",
    "developerIntegrationLab.regexAttributes.label": "正则表达式属性",
    "developerIntegrationLab.regexConfiguration.label": "管理正则表达式配置",
    "developerIntegrationLab.relatedAttributes.empty": "未找到相关属性。",
    "developerIntegrationLab.relatedAttributes.label": "已关联展开响应有效载荷",
    "developerIntegrationLab.rootAttributes.label": "展开响应有效载荷",
    "developerIntegrationLab.rootUrl.label": "已将 URL 粘贴到预览",
    "developerIntegrationLab.subtitle.label":
      "规划预览 URL 正则表达式模式和 API 响应。",
    "developerIntegrationLab.title.label": "链接预览实验室",
    "developerIntegrationNotFound.subtitle.label": "此集成不存在。",
    "developerIntegrationNotFound.title.label": "未找到",
    "developerIntegrationView.subtitle.label": "查看和编辑集成信息。",
    "developerIntegrationsCreate.error.capabilities.invalidContent":
      "必须至少请求一种内容功能。",
    "developerIntegrationsCreateInternal.error.invalidInput":
      "{ fieldName }无效。",
    "developerIntegrationsCreateInternal.subtitle.label":
      "我们将指导你如何设置新的集成。",
    "developerIntegrationsCreateInternal.title.label": "创建新集成",
    "developerIntegrationsForm.clientIdCopied.tooltip": "ID 已复制",
    "developerIntegrationsForm.copiedId.label": "已复制",
    "developerIntegrationsForm.copyClientId.tooltip": "复制客户端 ID",
    "developerIntegrationsForm.copyId.label": "复制",
    "developerIntegrationsForm.error.missingRequired":
      "{ fieldName }为必填项。",
    "developerIntegrationsForm.error.submission":
      "提交集成时出错。请重试，如果问题仍然存在，请联系客服。",
    "developerIntegrationsForm.redirectUri.typePrompt": "输入重定向 URI…",
    "developerIntegrationsForm.spacePicker.missingSpacesError":
      "你不是任何工作区的管理员。请<linktonotion>创建新工作区</linktonotion>或请求你的工作区管理员更新你的访问权限。",
    "developerIntegrationsLayout.backButton.label": "我的集成",
    "developerIntegrationsLayout.document.title": "我的集成｜Notion 开发人员",
    "developerIntegrationsList.addNewButton.label": "新集成",
    "developerIntegrationsList.allFilter.label": "查看全部",
    "developerIntegrationsList.internalFilter.label": "内部",
    "developerIntegrationsList.publicFilter.label": "公共",
    "developerIntegrationsList.subtitle": "创建、审核和编辑开发信息和凭据。",
    "developerIntegrationsList.title": "我的集成",
    "developerIntegrationsList.viewIntegration.buttonText": "查看集成",
    "developerInternalIntegraion.integrationType.bot.caption":
      "仅适用于你作为其管理员的工作区。集成可以自动安装到这些工作区，不需要审核。",
    "developerInternalIntegraion.integrationType.bot.title": "内部集成",
    "developerInternalIntegraion.integrationType.integration.caption":
      "适用于任何 Notion 用户。可能需要审核和验证才能在集成画廊中列出。",
    "developerInternalIntegraion.integrationType.integration.title": "公共集成",
    "developerInternalIntegration.integrationCapability.full.caption":
      "可以查看、更新和附加到与集成共享的任何页面。",
    "developerInternalIntegration.integrationCapability.full.title":
      "查看和编辑页面",
    "developerInternalIntegration.integrationCapability.read.caption":
      "只能查看与集成共享的任何页面。无法编辑或添加到页面。",
    "developerInternalIntegration.integrationCapability.read.title": "查看页面",
    "developerInternalIntegration.integrationCapability.write.caption":
      "只能更新和附加到与集成共享的任何页面。无法访问页面内容。",
    "developerInternalIntegration.integrationCapability.write.title":
      "编辑和添加到页面",
    "developerInternalIntegration.integrationType.bot.caption":
      "仅适用于你作为其管理员的工作区。集成可以自动安装到这些工作区，不需要审核。",
    "developerInternalIntegration.integrationType.bot.title": "内部集成",
    "developerInternalIntegration.integrationType.integration.caption":
      "适用于任何 Notion 用户。可能需要审核和验证才能在集成画廊中列出。",
    "developerInternalIntegration.integrationType.integration.title":
      "公共集成",
    "developerInternalIntegration.integrationType.internal.caption":
      "仅适用于你作为其管理员的工作区。集成可以自动安装到这些工作区，不需要审核。",
    "developerInternalIntegration.integrationType.internal.title": "内部集成",
    "developerInternalIntegration.integrationType.public.caption":
      "适用于任何 Notion 用户。可能需要审核和验证才能在集成画廊中列出。",
    "developerInternalIntegration.integrationType.public.title": "公共集成",
    "developerInternalIntegration.integrationType.unfurling.caption":
      "适用于任何 Notion 用户。可能需要审核和验证才能在集成画廊中列出。",
    "developerInternalIntegration.integrationType.unfurling.title": "展开集成",
    "dialog.closeButton.label": "关闭",
    "dialog.dismissButton.label": "好的",
    "dialog.genericErrorMessage": "发生意外错误",
    "discussion.confirmDialog.discardReply.prompt": "你要放弃这条回复吗？",
    "discussion.confirmDialog.discardReplyButton.label": "放弃",
    "discussion.dropZone.dropZoneMediaTitle": "上传文件",
    "discussion.mobileReplyMenu.closeButton.label": "关闭",
    "discussion.mobileReplyMenu.title": "评论",
    "discussion.moreMessageTooltip": "更多评论",
    "discussion.reopenDiscussion.button": "重新开启",
    "discussion.resolveDiscussion.button": "解决",
    "discussion.showMoreCommentsButton.label":
      "{moreCommentsNumber, plural, other {点击显示更早的 {moreCommentsNumber} 条评论}}",
    "discussion.showMoreCommentsSidebarButton.label":
      "{moreCommentsNumber, plural, other {还有 {moreCommentsNumber} 条评论}}",
    "discussionInput.attachFileIcon.intro.body":
      "通过图片和文件附件使你的评论栩栩如生",
    "discussionInput.attachFileIcon.intro.title": "附加图片和文件",
    "discussionInput.commentComment.button": "评论",
    "discussionInput.defaultPlaceholder.addComment": "添加评论⋯",
    "discussionInput.insertMention.button.tooltip": "提及人员、页面或日期",
    "discussionInput.saveComment.button": "保存",
    "discussionInput.sendComment.button": "评论",
    "discussionInput.uploadFile.button.tooltip": "附加文件",
    "discussionInput.uploadFile.tooManyFilesErrorMessage":
      "每个评论不能上传超过 {maxFiles} 个文件。",
    downloadMacIntelLabel: "适用于配备 Intel 处理器的 Mac",
    downloadMacSiliconLabel: "适用于配备 Apple M1 的 Mac",
    "dragHandleButton.clickPrompt.text": "点击<medium>打开菜单</medium>",
    "dragHandleButton.dragPrompt.text": "拖动<medium>以移动</medium>",
    "duplicateActions.offlineError.message": "请连接网络后复制此块。",
    "duplicateHelpers.copyOfTextForPageTitle": "{title}的副本",
    "duplicateHelpers.untitledPageToDuplicate": "无标题",
    "duplicatePagePopup.buttonMenuItem.logoutButton.label": "登出（ {email} ）",
    "duplicatePagePopup.choooseWorkspaceMobileMenu.title": "选择工作区",
    "duplicatePagePopup.chooseWorkspace.menuItem.title": "选择工作区",
    "duplicateRateLimitError.message": "已达到块复制限制。请稍后再试。",
    "edit.blockDeletedEdit.defaultLabel": "已删除",
    "edit.blockDeletedEdit.factoryLabel": "已删除",
    "edit.blockDeletedEditStyles.defaultLabel": "已删除",
    "edit.blockDeletedEditStyles.factoryLabel": "已删除",
    "edit.bookmarkBlockProperty.label": "书签",
    "edit.bookmarkBlockPropertyChanged.label": "书签",
    "edit.bookmarkBlockPropertyDeleted.label": "书签",
    "edit.calloutBlock.label": "标注",
    "edit.calloutBlockChanged.label": "标注",
    "edit.calloutBlockDeleted.label": "标注",
    "edit.codeBlockChanged.label": "代码",
    "edit.codeBlockWithLanguageChanged.label": "代码 - {codeLanguage}",
    "edit.collectionBlock.untitled": "无标题",
    "edit.deletedPermissionGroup.label": "已删除的群组",
    "edit.descriptionPropertyChanged.label": "描述",
    "edit.descriptionPropertyCreated.label": "描述",
    "edit.equationBlock.label": "公式",
    "edit.equationBlockChanged.label": "公式",
    "edit.equationBlockDeleted.label": "公式",
    "edit.googleDriveFile.label": "谷歌云端硬盘文件",
    "edit.imageBlockChanged.updatedTitle": "更新为",
    "edit.pageBlock.untitled": "无标题",
    "edit.permissionRole.canEdit.label": "可以编辑",
    "edit.permissionRole.canEditContent.label": "可以编辑内容",
    "edit.permissionRole.canEditStyles.label": "只写",
    "edit.permissionRole.commentOnly.label": "只能评论",
    "edit.permissionRole.fullAccess.label": "全部权限",
    "edit.permissionRole.none.label": "无法访问",
    "edit.permissionRole.readOnly.label": "只读",
    "edit.publishToWebPermissionTarget.label": "已发布的链接",
    "edit.quoteBlock.label": "引用",
    "edit.quoteBlockChanged.label": "引用",
    "edit.quoteBlockDeleted.label": "引用",
    "edit.templateButtonBlock.label": "模板按钮",
    "edit.templateButtonBlockChanged.label": "模板按钮",
    "edit.templateButtonBlockDeleted.label": "模板按钮",
    "edit.unknownAuthor.label": "未知作者",
    "edit.unknownAuthorCommentDiff.label": "未知作者",
    "edit.unknownSpacePermissionTarget.label": "未知",
    "editFormatDiff.pageIcon.label": "页面图标",
    "editProperty.emptyProperty.label": "空",
    "editProperty.relationEditedProperties.moreCount.label":
      "其他 {leftoverCountNumber} 项",
    "editPropertyButtonPopup.customizePage.label": "自定义页面",
    "editPropertyButtonPopup.duplicatePropertyNameError":
      "此数据库中已经存在一个名为{propertyName}的属性。",
    "emailActivity.accessRequested.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}请求访问{pageName}}}",
    "emailActivity.blockEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}编辑了{pageTitle}}}",
    "emailActivity.collectionCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}创建了{collectionTitle}}}",
    "emailActivity.collectionEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}编辑了{collectionTitle}}}",
    "emailActivity.collectionPropertyCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中创建了属性{collectionPropertyTitle}}}",
    "emailActivity.collectionPropertyDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中删除了属性{collectionPropertyTitle}}}",
    "emailActivity.collectionPropertyEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中编辑了{collectionPropertyTitle}属性}}",
    "emailActivity.collectionRowCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已创建{pageTitle}}}",
    "emailActivity.collectionRowDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已删除{pageTitle}}}",
    "emailActivity.collectionViewCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中创建了视图{collectionViewTitle}}}",
    "emailActivity.collectionViewDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中删除了视图{collectionViewTitle}}}",
    "emailActivity.collectionViewEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中编辑了{collectionViewTitle}视图}}",
    "emailActivity.commentActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{blockName}留下评论}}",
    "emailActivity.emailEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}将邮箱地址从 {oldEmail} 更改为 {newEmail}}}",
    "emailActivity.mentionActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{pageName}提及了你}}",
    "emailActivity.pageDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 永久删除了 {blockTitle}}}",
    "emailActivity.pageLocked.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}锁定了{blockTitle}}}",
    "emailActivity.pageUnlocked.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}解锁了{blockTitle}}}",
    "emailActivity.permissionsActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已加入{pageOrSpaceName}}}",
    "emailActivity.reminderInActivity.header": "在{pageTitle}提醒",
    "emailActivity.restorePermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}恢复了{pageOrSpaceName}其继承的访问权限}}",
    "emailActivity.restrictPermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}恢复了{pageOrSpaceName}其继承的访问权限}}",
    "emailActivity.topLevelBlockPrivateCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已创建私人页面{pageTitle}}}",
    "emailActivity.topLevelBlockPrivateDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已删除私人页面{pageTitle}}}",
    "emailActivity.topLevelBlockWorkspaceCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已创建工作区页面{pageTitle}}}",
    "emailActivity.topLevelBlockWorkspaceDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已删除工作区页面{pageTitle}}}",
    "emailActivity.untitledDatabase.placeholder": "无标题",
    "emailActivity.updatedPermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已更新{pageOrSpaceName}的权限}}",
    "emailActivity.userInvitedActivityGroupId.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}加你到{groupName}群组}}",
    "emailActivity.userInvitedActivityGroupIdByBot.header":
      "你已被添加到{groupName}群组",
    "emailActivity.userInvitedActivityNavigableBlock.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}邀请你到{blockName}}}",
    "emailActivity.userInvitedActivityNavigableBlockByBot.header":
      "你已被邀请加入{blockName}",
    "emailActivity.userInvitedActivityOtherInvite.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}邀请你到{spaceName}}}",
    "emailActivity.userInvitedActivityOtherInviteByBot.header":
      "你已被邀请加入{spaceName}",
    "emailActivitySection.authorPhrase.forMoreThanTwoAuthors.label":
      "{numberOfOtherAuthors, plural, other {<b>{firstAuthor}</b>、<b>{secondAuthor}</b>及其他 {numberOfOtherAuthors} 位}}",
    "emailActivitySection.authorPhrase.forNoAuthors.label": "没有人",
    "emailActivitySection.authorPhrase.forOneAuthor.label": "<b>{author}</b>",
    "emailActivitySection.authorPhrase.forTwoAuthors.label":
      "<b> {firstAuthor} </b>和<b> {secondAuthor} </b>",
    "emailBase.footer.notionDescription":
      "{notionProduct} 是一个集笔记、项目管理、知识库和数据库{br}为一体的全能工作区。",
    "emailBase.tooManyNotifications.message": "太多通知？给我们反馈加以改进",
    "emailBase.unsubscribeFromEmails.prompt": "取消订阅",
    "emailChangeNotificationEmail.emailChanged.headline":
      "你已更改登录 Notion 用的邮箱地址",
    "emailChangeNotificationEmail.emailChanged.message":
      "现在，你可以使用新的邮箱地址 {emailAddress} 登录 Notion。",
    "emailChangeNotificationEmail.emailChanged.subjectLine":
      "你已更改登录用的邮箱地址",
    "emailChangeNotificationEmail.emailChanged.text":
      "你用于登录 Notion 的邮箱地址已被更改为 {newEmail}。如果你没有进行此项更改，请发送电子邮件到 team@makenotion 告知我们。",
    "emailChangeNotificationEmail.unintendedChange.message":
      "如果你没有进行此项更改，请发送电子邮件到 team@makenotion 告知我们。",
    "emailChangeSettings.downgradeEducationPlan.warning.message":
      "更改邮箱地址可能会将你的免费个人专业版（教育）的工作区降级为免费个人版。你不会丢失任何数据，但是需要升级才能重新使用付费功能。对这个有疑问吗？<sendmessagelink>给我们发送消息</sendmessagelink>。",
    "emailChangeVerifyEmail.contentsTitle": "更改邮箱地址验证",
    "emailChangeVerifyEmail.copyPasteCode.label":
      "复制并粘贴验证码以验证当前邮箱地址：",
    "emailChangeVerifyEmail.didNotChange.message":
      "如果你没有尝试更改你的 Notion 帐户的邮箱地址，则可以放心地忽略此电子邮件。",
    "emailChangeVerifyEmail.subjectLine":
      "你的更改邮箱地址验证码为 {temporaryPassword}",
    "emailEdit.blockDeletedEdit.defaultLabel": "已删除",
    "emailEdit.blockDeletedEdit.factoryLabel": "已删除",
    "emailEdit.bookmarkBlock.label": "书签",
    "emailEdit.bookmarkBlockChanged.label": "书签",
    "emailEdit.bookmarkBlockDeleted.label": "书签",
    "emailEdit.calloutBlock.label": "标注",
    "emailEdit.calloutBlockChanged.label": "标注",
    "emailEdit.calloutBlockDeleted.label": "标注",
    "emailEdit.codeBlockChanged.label": "代码",
    "emailEdit.codeBlockWithLanguageChanged.label": "代码 - {codeLanguage}",
    "emailEdit.collectionBlock.untitled": "无标题",
    "emailEdit.deletedPermissionGroup.label": "已删除的群组",
    "emailEdit.descriptionPropertyChanged.label": "描述",
    "emailEdit.descriptionPropertyCreated.label": "描述",
    "emailEdit.equationBlock.label": "公式",
    "emailEdit.equationBlockChanged.label": "公式",
    "emailEdit.equationBlockDeleted.label": "公式",
    "emailEdit.googleDriveFile.label": "谷歌云端硬盘文件",
    "emailEdit.pageBlock.untitled": "无标题",
    "emailEdit.permissionRole.canEdit.label": "可以编辑",
    "emailEdit.permissionRole.canEditContent.label": "可以编辑内容",
    "emailEdit.permissionRole.commentOnly.label": "只能评论",
    "emailEdit.permissionRole.fullAccess.label": "全部权限",
    "emailEdit.permissionRole.none.label": "无法访问",
    "emailEdit.permissionRole.readOnly.label": "只读",
    "emailEdit.publishToWebPermissionTarget.label": "发布到网络：",
    "emailEdit.quoteBlock.label": "引用",
    "emailEdit.quoteBlockChanged.label": "引用",
    "emailEdit.quoteBlockDeleted.label": "引用",
    "emailEdit.templateButton.label": "模板按钮",
    "emailEdit.templateButtonChanged.label": "范本按钮",
    "emailEdit.templateButtonDeleted.label": "模板按钮",
    "emailEdit.unknownAuthor.label": "未知作者",
    "emailEdit.unknownAuthorCommentDiff.label": "未知作者",
    "emailEdit.unknownSpacePermissionTarget.label": "未知",
    "emailEditFormatDiff.pageIcon.label": "页面图标",
    "emailEditProperty.emptyProperty.label": "空",
    "emailEditProperty.relationEditedProperties.moreCount.label":
      "其他 {leftoverCountNumber} 项",
    "emailErrors.emailUnreachable.message":
      "我们无法联系到你提供的邮箱地址。请用其他电子邮件重试。",
    "emailErrors.incorrectPassword.message": "密码错误。",
    "emailErrors.invalidEmailAddress.message": "无效的邮箱地址",
    "emailErrors.invalidEmailEntered.message": "请输入有效邮箱地址。",
    "emailErrors.invalidOrExpiredPassword.message":
      "你的登录码不正确，请重试。",
    "emailErrors.noExistingAccountForEmailAddress.message":
      "此邮箱地址没有关联的现有帐户。",
    "emailErrors.userAlreadyExists.message": "使用此邮箱地址的用户已经存在。",
    "embedBlock.captionForLink.button": "标题",
    "embedBlock.embedAnything.placeholder":
      "嵌入任何内容（PDF、谷歌文档、谷歌地图、Spotify 等）",
    "embedBlock.embedButton.label": "嵌入链接",
    "embedBlock.embedTab.title": "嵌入",
    "embedBlock.expandFullScreen.button.label": "展开",
    "embedBlock.invalidLinkError.message": "请输入有效的链接。",
    "embedBlock.linkPrompt.caption":
      "适用于 PDF、谷歌云端硬盘、谷歌地图、CodePen 等⋯",
    "embedBlock.orginalLink.button": "原始内容",
    "embedBlock.originalLink.button": "原稿",
    "embedBlock.pastePrompt": "粘贴链接，例如 https://…",
    "embedBlock.viewOriginalLink.button.label": "查看原始内容",
    "embedError.audio.notFound": "找不到此音频。",
    "embedError.audio.offline": "连接网络后查看此音频",
    "embedError.audio.permissionDenied": "没有权限。",
    "embedError.audio.serverError": "无法加载此音频。",
    "embedError.audio.unknown": "无法加载此音频。",
    "embedError.audio.unsupportedContentType":
      "此音频格式（{extension}）无法在此设备上播放。",
    "embedError.embed.notFound": "找不到此嵌入文件。",
    "embedError.embed.offline": "连接网络后查看此嵌入文件",
    "embedError.embed.permissionDenied": "没有权限。",
    "embedError.embed.serverError": "无法加载此嵌入文件。",
    "embedError.embed.unknown": "无法加载此嵌入文件。",
    "embedError.embed.unsupportedContentType":
      "此嵌入格式（{extension}）无法在此设备上播放。",
    "embedError.extension.unknown": "未知",
    "embedError.family.audio": "音频",
    "embedError.family.embed": "嵌入",
    "embedError.family.file": "文件",
    "embedError.family.image": "图片",
    "embedError.family.video": "视频",
    "embedError.file.notFound": "找不到此文件。",
    "embedError.file.offline": "连接网络后查看此文件",
    "embedError.file.permissionDenied": "没有权限。",
    "embedError.file.serverError": "无法加载此文件。",
    "embedError.file.unknown": "无法加载此文件。",
    "embedError.file.unsupportedContentType":
      "此文件格式（{extension}）无法在此设备上播放。",
    "embedError.hostnameAndStatusCode": "{hostname}（错误 {statusCode}）",
    "embedError.image.notFound": "找不到此图片。",
    "embedError.image.offline": "连接网络后查看此图片",
    "embedError.image.permissionDenied": "没有权限。",
    "embedError.image.serverError": "无法加载此图片。",
    "embedError.image.unknown": "无法加载此图片。",
    "embedError.image.unsupportedContentType":
      "此图片格式（{extension}）无法在此设备上显示。",
    "embedError.learnMore": "了解更多",
    "embedError.notFound": "无法找到此{family}。",
    "embedError.offline": "连接网络后查看此{family}",
    "embedError.permissionDenied": "没有权限。",
    "embedError.serverError": "无法加载此{family}。",
    "embedError.unknown": "无法加载{family}。",
    "embedError.unsupportedContentType":
      "此{family}格式（{extension}）无法在此设备上播放。",
    "embedError.video.notFound": "找不到此视频。",
    "embedError.video.offline": "连接网络后查看此视频",
    "embedError.video.permissionDenied": "没有权限。",
    "embedError.video.serverError": "无法加载此视频。",
    "embedError.video.unknown": "无法加载此视频。",
    "embedError.video.unsupportedContentType":
      "此视频格式（{extension}）无法在此设备上播放。",
    "embedMenu.action.abstract": "嵌入 Abstract 项目",
    "embedMenu.action.audio": "嵌入音频",
    "embedMenu.action.codepen": "嵌入 CodePen",
    "embedMenu.action.createEmbed": "创建嵌入",
    "embedMenu.action.deepnote": "嵌入 Deepnote",
    "embedMenu.action.drive": "嵌入谷歌云端硬盘",
    "embedMenu.action.excalidraw": "嵌入 Excalidraw",
    "embedMenu.action.figma": "嵌入 Figma",
    "embedMenu.action.framer": "嵌入 Framer 原型",
    "embedMenu.action.gist": "嵌入 GitHub Gist",
    "embedMenu.action.hex": "嵌入 Hex",
    "embedMenu.action.image": "嵌入图片",
    "embedMenu.action.invision": "嵌入 Invision 项目",
    "embedMenu.action.loom": "嵌入 Loom",
    "embedMenu.action.maps": "嵌入谷歌地图",
    "embedMenu.action.miro": "嵌入 Miro 画板",
    "embedMenu.action.pdf": "嵌入 PDF",
    "embedMenu.action.replit": "嵌入 Repl",
    "embedMenu.action.sketch": "嵌入 Sketch 文档",
    "embedMenu.action.tweet": "嵌入推文",
    "embedMenu.action.typeform": "嵌入 Typeform",
    "embedMenu.action.video": "嵌入视频",
    "embedMenu.action.whimsical": "嵌入 Whimsical 画板",
    "embedMenu.actions.createBookmark.title": "创建书签",
    "embedMenu.actions.createLinkedDatabase.title": "创建链接数据库",
    "embedMenu.actions.createLinkedViewOfDatabase.title":
      "创建数据库的链接视图",
    "embedMenu.actions.createTransclusion.title": "粘贴并同步",
    "embedMenu.actions.dismiss.title": "取消",
    "embedMenu.actions.linkToPage.title": "链接到页面",
    "embedMenu.actions.mentionPage.title": "提及页面",
    "emojiPicker.noResults.message": "无结果",
    "emojiPicker.section.activity": "活动",
    "emojiPicker.section.animals": "动物与自然",
    "emojiPicker.section.callout": "标注",
    "emojiPicker.section.flags": "旗帜",
    "emojiPicker.section.food": "食物与饮料",
    "emojiPicker.section.objects": "物品",
    "emojiPicker.section.people": "人物",
    "emojiPicker.section.recent": "最近",
    "emojiPicker.section.symbols": "符号",
    "emojiPicker.section.travel": "旅行与地点",
    emptyDatabaseViewTitle: "{commaSeparatedDatabaseNames} 视图",
    emptyPageTitle: "无标题",
    "enhancedSidebarFeatureTour.pinPages.actionButton": "了解更多",
    "enhancedSidebarFeatureTour.pinPages.actionText": "了解更多",
    "enhancedSidebarFeatureTour.pinPages.primaryText": "在此整理共享页面",
    "enhancedSidebarFeatureTour.pinPages.secondaryText":
      "将经常访问的页面固定到侧边栏中",
    "enterpriseContactModal.additionalFeedback.placeholder": "想了解什么？",
    "enterpriseContactModal.initial.1000PlusLabel": "1,001+",
    "enterpriseContactModal.initial.101_1000Label": "101-1,000人",
    "enterpriseContactModal.initial.1_100Label": "1-100人",
    "enterpriseContactModal.initial.caption":
      "我们将与你合作制定你的专属方案。",
    "enterpriseContactModal.initial.companySizeLabel": "公司规模",
    "enterpriseContactModal.initial.emailLabel": "工作用邮箱地址",
    "enterpriseContactModal.initial.header": "联系销售人员",
    "enterpriseContactModal.initial.nameLabel": "你的名字",
    "enterpriseContactModal.initial.questionLabel": "你的问题",
    "enterpriseContactModal.initial.sendLabel": "发送",
    "enterpriseContactModal.selectQuestion.label": "选择问题",
    "enterpriseContactModal.thanks.caption":
      "我们已收到你的询问，并将很快通过电子邮件与你联系。",
    "enterpriseContactModal.yourQuestion.title": "你的问题",
    "enterpriseContactModalQuestionSelect.question.live_demo": "安排现场展示",
    "enterpriseContactModalQuestionSelect.question.other": "其他",
    "enterpriseContactModalQuestionSelect.question.plan_help":
      "选择方案时需要帮助",
    "enterpriseContactModalQuestionSelect.question.setup_trial":
      "设置企业试用版",
    "equationBlock.actions.tooltip": "重命名、删除等⋯",
    "equationBlock.empty.placeholder": "添加一个 TeX 公式",
    "equationInput.inputError.label": "无效的公式：",
    "equationInput.inputError.learnMore": "了解更多",
    "equationInput.submitButton.label": "完成",
    "evernoteActions.authenticatingWithEvernote.loadingMessage":
      "Evernote 授权中⋯",
    "evernoteActions.loginPopupModal.title": "印象笔记国际版（Evernote）登录",
    "evernoteImportOption.actionsMenu.connectAnotherAccount": "绑定另一个帐户",
    "evernoteImportOption.actionsMenu.import": "导入",
    "evernoteImportOption.actionsMenu.learnMore": "了解更多信息",
    "evernoteImportOption.actionsMenu.removeIntegration": "移除",
    "evernoteImportOption.caption.getCredit": "导入即可赚取 US$5 的积分",
    "evernoteImportOption.search.noResultsPlaceholder": "无笔记本",
    "evernoteImportOption.search.placeholder": "搜索笔记本⋯",
    "excalidrawBlock.embeds.button.label": "嵌入 Excalidraw",
    "excalidrawBlock.embeds.caption": "适用于 Excalidraw 白板。",
    "excalidrawBlock.placeholder": "嵌入 Excalidraw",
    "export.csvHeader.email": "邮箱地址",
    "export.csvHeader.firstName": "名字",
    "export.csvHeader.id": "标识",
    "export.csvHeader.lastName": "姓氏",
    "export.csvHeader.name": "名称",
    "export.csvHeader.permissionGroups": "权限群组",
    "export.csvHeader.role": "角色",
    "export.linkToPage.untitledPagePlaceholder": "无标题",
    "export.markdown.untitledDatabase.placeholder": "无标题",
    "export.userPermissionsRole.admin.message": "管理员",
    "export.userPermissionsRole.guest.message": "访客",
    "export.userPermissionsRole.member.message": "成员",
    "exportActions.exportFailedError.message": "导出失败。",
    "exportActions.exporting.loadingMessage": "导出中",
    "exportEmail.downloadLinkPrompt":
      "<downloadlink>点击此处下载</downloadlink>",
    "exportEmail.exportEmailText": "你的 Notion 导出已准备就绪： {downloadURL}",
    "exportEmail.exportReady.text": "你的 Notion 导出已准备就绪",
    "exportEmail.exportSubjectLine": "你的 Notion 导出已准备就绪",
    "exportHelpers.unknownFilePlaceholderTitle": "未知文件",
    "exportHelpers.untitledPagePlaceholderTitle": "无标题",
    "exportModal.cancelButton.label": "取消",
    "exportModal.closeButton.label": "关闭",
    "exportModal.exportButton.label": "导出",
    "exportModal.exportFormat.description": "导出格式",
    "exportModal.exportFormatButton.html.label": "HTML",
    "exportModal.exportFormatButton.markdownAndCSV.label": "Markdown 和 CSV",
    "exportModal.exportFormatButton.pdf.label": "PDF",
    "exportModal.includeContentTypes.everything.label": "所有内容",
    "exportModal.includeContentTypes.no_files.label": "没有文件或图像",
    "exportModal.includeContents.description": "要包括的内容",
    "exportModal.includeSubpages.label": "含子页面",
    "exportModal.offlineMessage.description": "请连接网络后导出。",
    "exportModal.pageFormat.description": "页面格式",
    "exportModal.pageFormatButton.a3.label": "A3",
    "exportModal.pageFormatButton.a4.label": "A4",
    "exportModal.pageFormatButton.legal.label": "Legal",
    "exportModal.pageFormatButton.letter.label": "Letter",
    "exportModal.pageFormatButton.tabloid.label": "Tabloid",
    "exportModal.pageScale.description": "比例百分比",
    "exportModal.pageScale.invalidScaleError":
      "比例百分比必须是 10 到 200 之间的数字",
    "exportModal.pdfSubpageUpgradeTooltip.caption":
      "创建一个 zip 归档，其中包含嵌套在当前页面中的所有子页面的 PDF 文件。",
    "exportModal.pdfSubpageUpgradeTooltip.title":
      "升级以在 PDF 导出中包含子页面",
    "exportModal.title": "导出",
    "exportModal.workspacePdfUpgradeTooltip.caption":
      "创建一个 zip 归档，其中包含工作区中的所有页面的 PDF 文件。",
    "exportModal.workspacePdfUpgradeTooltip.title":
      "升级以将工作区导出为 PDF 文件",
    "exportPreview.error.message": "错误",
    "exportPreview.loading.message": "载入中⋯",
    "exportProgressDialog.closeButton.label": "关闭",
    "exportProgressDialog.emailMessage":
      "我们还将向你发送包含下载链接的电子邮件。",
    "exportProgressDialog.exportStartedMessage": "导出中⋯",
    "exportProgressDialog.exportedPagesMessage":
      "{pagesExported, plural, other {已导出 {pagesExported} 页}}",
    "exportRenderer.titleOfBlock.untitled": "无标题",
    "exportRenderer.titleOfDatabase.untitled": "无标题数据库",
    "exportRenderer.titleOfNewProperty.property": "属性",
    "externalIntegrationAuthActions.authenticationWithIntegration.loadingMessage":
      "通过集成进行授权…",
    "externalIntegrationAuthActions.loginWithExternalIntegrationPopupModal.title":
      "身份验证",
    "externalObjectInstance.bodyAttribute.moreLabel": "更多",
    "externalObjectInstance.bodyAttribute.showLessLabel": "显示更少",
    "externalObjectInstanceBlock.connect": "绑定",
    "externalObjectInstanceBlockErrorDropdown.dialogItem.reviewGuide":
      "查看指南",
    "externalObjectInstanceEmbedPreview.expandButton.label": "展开",
    "factoryBlock.buttonName.subtitle": "这个按钮该叫什么？",
    "factoryBlock.buttonName.title": "按钮名称",
    "factoryBlock.configureButton.label": "配置模板按钮",
    "factoryBlock.configureMenu.closeButton.label": "关闭",
    "factoryBlock.configureTemplate.button.label": "配置模板",
    "factoryBlock.emptyTemplate.placeholder": "空。拖动块到这里⋯",
    "factoryBlock.moreActions.button.label": "更多动作⋯",
    "factoryBlock.newItem.button.label": "添加新项目",
    "factoryBlock.newItem.button.placeholder": "添加新项目",
    "factoryBlock.templateArea.subtitle.":
      "将每次点击模板按钮时要复制的块拖动到这里。",
    "factoryBlock.templateArea.title": "模板",
    "faq.addingAndRemovingMembers.answer":
      "<p>无论你是按月还是按年结算，如果添加或删除成员，都可能每月向你的帐户收费。如果你添加了成员，则将根据每位成员被添加时剩余的计费周期百分比，按比例向你的帐户收取费用。如果你删除了成员，将以同样的方式返还余额到你的帐户。</p>",
    "faq.addingAndRemovingMembers.question": "如何添加和删除成员？",
    "faq.advancedPermissions.answer":
      "<p>在免费的团队试用版中，你可以在页面上将访问权限设置为“全部权限”、“可以查看”或“可以评论”。“全部权限”是指该人员可以编辑、评论、并与他人分享页面。</p> <p>在付费团队和企业版中，你可以向其他用户授予“可以编辑”访问权限，这样受邀人员可以在页面上进行编辑和评论，但不能与他人分享。如果你不希望你的内容泄漏到团队之外，这将特别有用。</p> <p> <contactsales>联系销售以了解更多</contactsales> </p>",
    "faq.advancedPermissions.question": "付费团队版和企业版提供哪些高级权限？",
    "faq.alreadyHadFreeAccount.answer":
      "<p>我们之前的免费版的内容上限为 1,000 个块。现在，使用我们新的免费个人版，可以添加任意数量的内容，没有上限！ </p> <p>除此之外还有： </p> <ul> <li>让分享页面更加简单。只需分享公开链接，不需要将添加来宾或成员。</li> <li>最多可以邀请五位访客与你私下协作。如果想邀请更多访客，需要升级到个人专业版。</li> </ul> <p>你可以通过<pricinglink> notion.so/pricing </pricinglink>了解更多。</p>",
    "faq.alreadyHadFreeAccount.question":
      "我已经有一个免费的 Notion 帐户。有什么变化？",
    "faq.alreadyPayingForPersonal.answer":
      "<p>你已自动升级到新的个人专业版，无需额外支付费用！除了免费个人版的所有功能外，个人专业版还包括：</p><ul><li>文件上传无限制（免费版有 5MB 限制）</li><li>无限访客（免费版限制为5位）</li><li>长达 30 天的版本历史记录</li><li>优先客户支持</li></ul><p>你可随时切换回免费个人版。</p>",
    "faq.alreadyPayingForPersonal.question":
      "如果我已经为旧的个人版支付了费用怎么办？",
    "faq.alreadyPayingForPersonalAccessToFreeEducation.answer":
      "<p>是的！详细的升级说明可在<helpcenterlink>帮助中心</helpcenterlink>找到</p>",
    "faq.alreadyPayingForPersonalAccessToFreeEducation.question":
      "我已经支付了个人专业版的费用。我仍然可以免费使用吗？",
    "faq.cancelPlan.answer":
      "<p>你的 Notion 订阅（年付或月付）将自动续订，直到你取消为止。你可以在电脑左侧边栏“设置与成员”中选择“定价方案”，然后选择“降级”来取消订阅。取消后，你仍可以使用所有付费功能，直到结算周期结束。</p><p><billingandpaymentlink>更多关于账单和支付的信息在这里</billingandpaymentlink></p>",
    "faq.cancelPlan.question": "如何取消我的付费方案？",
    "faq.changePaymentMethod.answer":
      "<p>你可以随时在账单设置中更改付款方式。</p>",
    "faq.changePaymentMethod.question": "我可以更改付款方式吗？",
    "faq.changePlans.answer":
      "<p>升级或降级方案的工作原理与添加和删除成员相似。系统会根据更改方案时剩余的结算周期百分比来向你的帐户收费或返还余额。</p>",
    "faq.changePlans.question": "更改方案时会发生什么？",
    "faq.confluenceImport.answer":
      "<p>只需单击几下，你就可以将整个 Confluence 工作区转移到 Notion 中！只需按照<guidelink>导入指南</guidelink> 操作即可。</p>",
    "faq.confluenceImport.question": "如何将我的 Confluence 工作区导入Notion？",
    "faq.confluenceImportSizeLimit.answer":
      "<p>Confluence 导入的每个文件限制为 2.5GB。如果遇到限制，你可以尝试使用 Confluence 中的<bold>自定义导出</bold>选项来选择要导出的页面，建议你取消勾选带有许多附件的页面。</p>",
    "faq.confluenceImportSizeLimit.question": "有最大导入大小吗？",
    "faq.confluenceStorageLimit.answer":
      "<p>不会，导入的块不计入限制。但是，随后在导入的页面中<italic>创建的所有块</italic>都将像往常一样计入限制。</p>",
    "faq.confluenceStorageLimit.question":
      "导入的内容是否计入团队试用版的块存储限制？",
    "faq.deleteBlocks.answer":
      "<p>当然！像你手机或电脑上的存储限制一样，如果删除一些内容，则会释放更多空间。</p>",
    "faq.deleteBlocks.question": "我可以删除块来释放存储空间吗？",
    "faq.educationPlanGraduation.question": "我毕业后会怎样？",
    "faq.educationplanGraduation.answer":
      "<p>只要与大学的邮箱地址相关联，你就可以继续使用免费的学生帐户。毕业后，你将有机会更改邮箱地址并切换到付费方案。我们希望你能坚持使用我们的服务 🤞</p>",
    "faq.eligibleForEducation.answer":
      "<p>如果你满足以下条件，则符合资格：</p><ol><li>你是获得认可的学院或大学的学生或教育工作者。</li><li>你有一个学校的邮箱地址。我们目前不接受学生证或其他文件验证。</li></ol><p>如果你满足以下条件，则不符合资格：</p><ol><li>你是 K-12 学生或 K-12 教育工作者。但你仍然可以免费使用我们的个人版和无限量存储空间！在<pricinglink>价格页面</pricinglink>上了解更多信息。</li><li>你的 Notion 帐户与个人邮箱地址（例如 gmail.com 或 outlook.com 邮箱地址）相关联。</li></ol>",
    "faq.eligibleForEducation.question": "我是否有资格获取免费的个人专业版？",
    "faq.freePlanForEducation.answer":
      "<p>学生和教育工作者可免费获取新的个人专业版（通常为每月 US$5）！之前加入旧免费教育版的工作区已经自动升级。除了所有个人版功能外，个人专业版还包括：</p><ul><li>无限访客数量（免费版限制为5位）</li><li>无限文件上传（免费版限制为每个文件 5MB）</li><li>30 天版本历史记录</li><li>优先客户支持</li><li>在 <studentslink>notion.so/students</studentslink> 或 <educatorslink>notion.so/educators</educatorslink> 了解更多</li></ul>",
    "faq.freePlanForEducation.question": "对于学生和教育工作者的免费方案呢？",
    "faq.freeVsPersonalAndTeam.answer":
      "<p>最大的区别在于如何与他人合作。</p> <p>免费个人版专为个人使用量身设计，最多可容纳 5 位不同的访客。这些访客可以是你的朋友、家人、以及其他你邀请到页面的人。你还可以将页面公开分享到网络，并打开评论或编辑权限。在页面右上方的“分享”菜单中，依次打开“分享到网络”和“允许编辑”后，任何拥有页面链接的 Notion 用户便可编辑你的页面。</p> <p>在个人专业版，你可以邀请无限的访客进行协作。例如，如果你经营自己的公司，则可以邀请所有客户为你提供工作的反馈。</p> <p>在团队版，你可以将固定成员添加到工作区中，以便大家共享和处理内容。团队版还具有更多的权限和管理员控制，这样你和你的团队可以安全地一起工作。更多详细信息，请参阅定价方案比较表。</p>",
    "faq.freeVsPersonalAndTeam.question":
      "免费个人版、个人专业版和团队版有什么不同？",
    "faq.howCanTeamTryForFree.answer":
      "<p>我们希望你可以在付费之前轻松与多位成员一同玩转 Notion。方法如下：</p><ul><li>创建一个新的 Notion 工作区，并在询问如何使用时选择“团队”。</li><li>此时，新工作区将加入团队版的免费试用版。团队试用版让你免费体验团队版的部分功能，但含 1,000 个块的存储限制。达到该限制时，再决定是否升级。</li></ul>",
    "faq.howCanTeamTryForFree.question": "我的团队如何免费试用 Notion？",
    "faq.howToApplyCredit.answer":
      "<p>要使用积分，你必须先升级到任何付费方案。在升级过程中，你可以选择将部分或全部帐户积分应用于新方案。</p>",
    "faq.howToApplyCredit.question": "如何将积分应用于工作区？",
    "faq.howToApplyForStartupCredit.answer":
      "<p>简单！填写<formlink>这份表单</formlink>。</p>",
    "faq.howToApplyForStartupCredit.question": "如何申请获得 US$1,000 的积分？",
    "faq.howToEarnCredit.answer":
      "<p>你可以通过在不同设备上使用 Notion 并尝试新功能来赚取积分。请前往“设置与成员”中的“赚取积分”选项卡以了解更多。</p>",
    "faq.howToEarnCredit.question": "如何赚取积分？",
    "faq.importStorageLimit.answer":
      "<p>通过导入创建的内容不计入工作区的存储限制。我们希望确保你尽可能顺利地开始使用 Notion。</p>",
    "faq.importStorageLimit.question":
      "从其他应用导入内容会如何影响我的块存储限制？",
    "faq.mandatoryRefund.answer":
      "<p>如果您居住在欧盟、英国或其他适用强制性退款政策的地区，您甚至可以在72小时后退还您的月度订阅费。例如，欧盟的客户可以在14天内(而不是购买后72小时)全额退还每月订阅费。</p><p>请在应用内查询退款请求，或发送电子邮件至team@makenotion.com。如果您居住在适用强制性退款政策的地区，请告知我们，我们将竭诚为您提供帮助。</p>",
    "faq.mandatoryRefund.question":
      "如果居住在适用强制性退款政策的地区，会发生什么情况？",
    "faq.maximumEarnedCredit.answer":
      "<p>是的，最多可以赚取 {maximumAmountInDollars} 的积分。</p>",
    "faq.maximumEarnedCredit.question": "赚取的积分有上限吗？",
    "faq.monthlyAndYearlyBilling.answer":
      "<p>是的！我们提供月付和年付方案，年付更便宜（大概可以省 20％）。举个例子，当你选择月付方案，团队版为每位成员每月 US$10，但如果选择年付方案，则每位成员每月 US$8。</p>",
    "faq.monthlyAndYearlyBilling.question": "有年付或月付的选项吗？",
    "faq.multipleTeams.answer":
      "<p>可以！你可以使用同一个电子邮件地址创建并加入多个团队。但是，每一个工作区拥有它自己的定价方案，需要单独升级。</p>",
    "faq.multipleTeams.question": "我可以在 Notion 上隶属于多个团队吗？",
    "faq.overGuestLimitInFreePlan.answer":
      "<p>你可以升级到没有访客限制的个人专业版。如果你经常和同一组人一起协作，则可升级为团队版。你还可以在“设置与成员”中查看和移除访客。</p>",
    "faq.overGuestLimitInFreePlan.question":
      "当我超出个人版的访客限制时会发生什么？",
    "faq.overStorageLimitInFreePlan.answer":
      "<p>你仍然可以像往常一样读取、编辑和移动现有内容块，但无法添加新的内容块。</p><p> 你可以删除现有内容块以释放存储。</p>",
    "faq.overStorageLimitInFreePlan.question":
      "当我超出团队试用版的块存储限制时会发生什么？",
    "faq.paymentFailure.answer":
      "<p>付款失败后，系统会通过邮件通知你。在账单逾期的第一个月，系统会最多重试 4 次付款。此后，如果付款失败，你将被降级为免费版。</p>",
    "faq.paymentFailure.question":
      "如果付款失败会发生什么？比如我的信用卡过期了？",
    "faq.paymentProcessor.answer":
      "<p>我们使用 Stripe 处理你的付款。Stripe 是 Twitter、Pinterest 和 Lyft 等产品的支付提供商。我们不会直接处理或保存你的支付信息。</p>",
    "faq.paymentProcessor.question": "我的付款是如何处理的？",
    "faq.personalPricing.answer":
      "<p>如果你将工作区升级到个人专业版，将需支付固定费用（每月 US$5 或每年 US$48）。</p><p>访客完全免费，但需要在特定页面中添加。</p>",
    "faq.personalPricing.question": "如何计算个人专业版的定价？",
    "faq.portfolioCompaniesStartupDiscount.answer":
      "<p>我们希望听到你的声音！填写<partnerform>快速表单</partnerform>，我们将为你提供更多信息。我们特别有兴趣在主要技术中心之外寻找合作伙伴。</p>",
    "faq.portfolioCompaniesStartupDiscount.question":
      "我希望我的机构企业也能享受这一折扣。我如何才能成为合作伙伴？",
    "faq.previouslyHadMultipleMembers.answer":
      "<p>不用担心，你不必删除任何成员！在达到 1,000 个内容块之前，与你的旧免费版不会有任何不同。在触发限制时，如果想继续添加内容，你可以： </p> <ul> <li>升级到团队版。</li> <li>仅为自己一个人创建一个新的个人版工作区，并无限期免费使用。</li> <li>移除成员，将工作区降级为个人版以移除块限制。</li> </ul> <p>注意：在移除工作区中的成员之前，请确保已备份其私人页面！ </p>",
    "faq.previouslyHadMultipleMembers.question":
      "如果我的免费工作区中有多位成员，怎么办？",
    "faq.refund.answer":
      "<p>我们的退款政策很简单。如果你认为你在网页或应用内订阅 Notion 付费方案时出了差错，请在应用内联系我们或发送电子邮件到 team@makenotion.com。如果你在订阅月付方案的 72 小时内或订阅年付方案的 30 天内降级，我们很乐意全额退款（不按比例）。</p><p>如果你出于任何原因对 Notion 不满意，请通过 team@makenotion.com 告诉我们——我们很乐意听取你的反馈，合作共创最好的使用体验。</p>",
    "faq.refund.question": "退款如何运作？",
    "faq.runOutOfCredit.answer":
      "<p>如果用完了积分，则会通过你提供的付款方式向你的帐户收取费用。</p>",
    "faq.runOutOfCredit.question": "如果我的积分耗尽会发生什么？",
    "faq.serviceLevelAgreement.answer":
      "<p>我们不提供标准 SLA。对于成员超过 100 人的团队，我们可以提供定制 SLA。</p><p><contactsales>联系销售以了解更多</contactsales></p>",
    "faq.serviceLevelAgreement.question": "你们有服务级别协议（SLA）吗？",
    "faq.startupCreditWorth.answer":
      "<p>Notion的<pricinglink>团队版</pricinglink>通常每位成员每月支付 US$10。因此，对于一支 10 人的团队，US$1,000 的积分代表 10 个月的免费使用 Notion。对于一支 5 人的团队，就是 20 个月的免费使用 Notion，依此类推。</p>",
    "faq.startupCreditWorth.question": "在 Notion 里 US$1,000 积分值多少？",
    "faq.startupDiscountEligibility.answer":
      "<p>如果你满足两个条件，则有资格获得折扣：</p><p>1) 你正在使用 Notion 的团队版为你的初创公司创建一个工作区。</p><p>2) 你正在与我们合作的孵化器或加速器之一合作（完整列表请参见<formlink>我们的表单</formlink> ）。</p><p>我们计划在将来扩大资格⋯⋯请继续关注。</p>",
    "faq.startupDiscountEligibility.question": "哪些人有资格？",
    "faq.studentDiscount.answer":
      "<p>个人专业版对学生和教育工作者是免费的。如果你是学生或教育工作者，就可和无限访客进行协作、使用版本历史记录等专业版功能。只需使用你的学校邮箱地址进行注册，即可获得这些功能。</p><p>如果你已经升级到个人专业版，请将与你的帐户关联的邮箱地址更改为学校的邮箱地址，以免费获得个人专业版。如果你之前已经在使用我们的旧版免费教育版，则会自动升级到个人专业版。</p><p><helpcenterlink>请前往帮助中心了解更多。</helpcenterlink></p>",
    "faq.studentDiscount.question": "Notion 给学生提供任何优惠吗？",
    "faq.suggestStartupPartner.answer":
      "<p>在我们的名单上没有看到你的投资者？你可以做一些事情：</p><p>1) 给他们发个便条，鼓励他们加入该方案。</p><p>2) 用 #NotionForStartups 的标签向他们和 @NotionHQ 发推特，我们将接过话茬儿！</p><p>3) <applicationlink>申请积分</applicationlink>并在我们的表单中提出你的建议。</p>",
    "faq.suggestStartupPartner.question":
      "如何推荐一个 Notion 应当合作的合作伙伴？",
    "faq.teamAdminTools.answer":
      "<p>免费团队试用版中，工作区中的每位成员都是管理员。这意味着任何人都可以更改工作区设置并邀请他人进入团队。</p><p>如果你只想让特定的人具有管理员权限，我们建议你升级到完整的付费团队版。它附带的管理员工具，可以让你区分管理员和普通成员。成员无法编辑帐单信息或安全设置，也无法在工作区之外共享内容。</p>",
    "faq.teamAdminTools.question": "团队版随附哪些管理员工具？",
    "faq.teamPricing.answer":
      "<p>如果你将工作区升级到团队版，则会向每位成员将收取费用（每人每月 US$10 或每年 US$96）。例如，如果你使用月付方案，并有 5 位成员，则每月收取 US$50。</p><p>访客完全免费，但他们只能访问被邀请的特定页面。也就是说，访客不能看到侧边栏中的“工作区”分区内容。</p>",
    "faq.teamPricing.question": "如何计算团队版的定价？",
    "faq.teamTrial.answer":
      "<p>当系统在注册过程中询问你如何设置 Notion 时，选择“团队”，你将自动加入团队版的免费试用。你将可以使用付费团队版的大多数功能，但块存储限制为 1,000 个。如果你的团队想要添加更多内容，请升级到完整的团队版。上面有更详细的信息。</p>",
    "faq.teamTrial.question": "如何免费试用团队版？",
    "faq.useNotionForFree.answer":
      "<p>Notion 可以无限期免费使用。</p><p>作为个人，可以完全免费使用个人版。团队版有 1,000 个块限制的免费试用期，这样你可以在为团队升级前与团队免费试用 Notion。</p>",
    "faq.useNotionForFree.question": "我可以免费使用 Notion 吗？",
    "faq.whatHappensToFreeGuests.answer":
      "<p>你仍可添加多达 5 位访客，以便在工作区中的任何页面上进行非公开协作。如果你已经超过 5 位访客的限制，他们仍然可以访问被邀请到的页面。但是，如果你需要邀请更多访客，则需升级到个人专业版。</p><p>另外，我们的公开页面编辑功能可以让任何拥有页面链接的 Notion 用户对页面进行编辑或评论。</p>",
    "faq.whatHappensToFreeGuests.question": "我在旧免费版中添加的访客会怎样？",
    "faq.whatIsABlock.answer":
      "<p>块是你添加到页面的任何单个内容，如文本段落、待办事项、图片、代码块、嵌入文件等。一个页面是由这些块构建的。</p>",
    "faq.whatIsABlock.question": "什么是块？",
    "faq.whereStartupCredit.answer":
      "<p>在 Notion 里面，进入“设置与成员”，然后点击“账单”。你会看到你当前的积分，包括“工作区余额”下的 US$1,000 积分。升级到团队版后，它会显示在这里。</p>",
    "faq.whereStartupCredit.question": "如何查看帐户中的积分余额？",
    "faq.whyBillingInformation.answer":
      "<p>即使你使用了足够的积分来支付第一笔帐单，我们仍需要你的付款信息，因为在将来积分用尽时，可保障你帐户可以正常续费。</p>",
    "faq.whyBillingInformation.question":
      "如果我有足够积分来支付 Notion，为什么还需要我的付款信息？",
    "faq.whyFreeForStudents.answer":
      "<p>Notion 是学校的完美工具。支持下一代思想家、梦想家和领导者，这是我们使命的核心。</p>",
    "faq.whyFreeForStudents.question": "为什么 Notion 对学生和教育工作者免费？",
    "faq.whyStartupDiscount.answer":
      "<p>我们已经看到数以千计的初创公司使用 Notion 迈出正确的一步——作为知识库，用于项目管理，文档共享，笔记等。我们希望帮助更多的公司从一开始就打下坚实的基础，并与他们一起成长。</p>",
    "faq.whyStartupDiscount.question": "为什么 Notion 要为初创公司提供折扣？",
    "faqList.moreQuestionsTextHelpCenter":
      "还有其他问题吗？在我们的<messagelink>帮助中心</messagelink>了解更多信息。",
    "faqList.moreQuestionsTextIntercom":
      "还有其他问题吗？<messagelink>给我们发送消息</messagelink>",
    "figmaBlock.caption": "适用于启用了公共访问的 Figma 链接",
    "figmaBlock.placeholder": "嵌入 Figma",
    "fileBlock.embedButton.label": "嵌入链接",
    "fileBlock.fileTab.title": "文件",
    "fileBlock.linkPrompt.caption":
      "适用于 PDF、谷歌云端硬盘、谷歌地图、CodePen 等⋯",
    "fileBlock.linkPrompt.placeholder": "粘贴文件链接⋯",
    "fileBlock.uploadOrEmbed.placeholder": "上传或嵌入文件",
    "filePropertyMenu.header": "文件",
    "filePropertyMenu.uploadFileFailedError.message": "上传失败。",
    "fileUploadErrors.freePlanFileSizeExceeded.message":
      "你的文件超过免费版的 5MB 限制。",
    "filtersIntroTooltip.subtitle":
      "你可以为所有人保存当前状态，或重置以恢复以前的状态。",
    "filtersIntroTooltip.title": "为所有人保存筛选器",
    "followPageButton.mobileFollowThisPage.button": "关注此页面",
    "followPageButton.mobileImageThumbnailCaption":
      "你将在侧边栏中收到更新，也可通过电子邮件获取更新摘要。",
    "forkPageActions.loadingStateDisplayText":
      "正在将“{blockTitle}”的副本保存到“{spaceTitle}”⋯",
    "forkPageActions.untitledBlockRecordTitle": "无标题",
    "forkPageActions.untitledSpaceRecordTitle": "无标题",
    "forkPageScreen.chooseWorkspace.message": "选择工作区",
    "formHandler.submitButton.create.label": "提交",
    "formHandler.submitButton.create.update": "保存更改",
    "formInputIcon.uploadButton.label": "上传图片",
    "formSecretShow.copied.label": "已复制",
    "formSecretShow.copySecret.label": "复制",
    "formSecretShow.copySecret.tooltip": "复制 {secretName}",
    "formSecretShow.refreshSecret.label": "刷新",
    "formSecretShow.secretCopied.tooltip": "{secretName} 已复制",
    "formSecretShow.showSecret.label": "显示",
    "formatMessage.error.undefinedResultType": "未定义",
    "formulaHelpers.error.branchCondition":
      "条件的每个分支必须属于同一类型： {input}",
    "formulaHelpers.error.circularDependency":
      "属性 {propertySchemaName} 创建了循环依赖项。",
    "formulaHelpers.error.illegalConstant": "非法常量： {value}",
    "formulaHelpers.error.invalidPropertyReference": "无效的属性引用： {input}",
    "formulaHelpers.error.invalidSyntax": "无效的语法： {input}",
    "formulaHelpers.error.noSignatureForFunction":
      "未找到函数的签名： {functionName}",
    "formulaHelpers.error.propertyNotFound": "未找到属性：prop({input})",
    "formulaHelpers.error.tooFewArguments": "函数 {functionName} 中的参数太少",
    "formulaHelpers.error.tooFewArgumentsVariadic":
      "函数 {functionName} 中的参数太少",
    "formulaHelpers.error.tooManyArguments": "函数 {functionName} 中的参数过多",
    "formulaHelpers.error.tooManyArgumentsInProp": "传递给 prop() 的参数过多。",
    "formulaHelpers.error.typeMismatch":
      "类型不匹配 {nodeString} 不是 {localizedPropertyTypeDisplayName}。",
    "formulaHelpers.error.undefinedConstant": "未定义的常量： {constantName}",
    "formulaHelpers.error.undefinedFunction": "未定义的函数： {functionName}",
    "formulaHelpers.error.undefinedOperator": "未定义的运算符： {operator}",
    "formulaPropertyMenu.learnMore.button.label": "了解函数",
    "frame.importingMessage": "导入中⋯",
    "framerBlock.embedFramer.button.label": "嵌入 Framer",
    "framerBlock.linkInput.caption": "适用于 Framer 原型",
    "framerBlock.placeholder": "嵌入 Framer 原型",
    "fronUseCases.altImage.logosOfReplacedSoftware": "可替代软件的 Logo",
    "fronUseCases.mobileAltImage.logosOfReplacedSoftware": "可替代软件的 Logo",
    "frontNewsletterSignupInput.formstackError": "发生错误。请尝试再次订阅。",
    "frontPricingCard.annualBillingFinePrint":
      "显示的价格为年付价格。{br}请查看我们的<pricinglink>定价页面</pricinglink>了解月付价格。",
    "frontPricingCard.comingSoonBadge": "即将推出",
    "frontPricingCard.contactSales.prompt": "联系{br}销售→",
    "frontPricingCard.educationPlan.attribute.apiAccess": "API 访问",
    "frontPricingCard.educationPlan.attribute.contentApi": "内容 API",
    "frontPricingCard.educationPlan.attribute.contentApi.v2": "API",
    "frontPricingCard.educationPlan.attribute.shareWithGuests": "无限访客",
    "frontPricingCard.educationPlan.attribute.unlimitedFileUploads":
      "无限文件上传",
    "frontPricingCard.educationPlan.attribute.versionHistory": "版本历史",
    "frontPricingCard.educationPlan.context.allPersonalPlanFeatures":
      "个人版的全部功能，以及",
    "frontPricingCard.enterprisePlan.attribute.advancedSecurity":
      "高级安全控制",
    "frontPricingCard.enterprisePlan.attribute.customContractInvoicing":
      "定制合同",
    "frontPricingCard.enterprisePlan.attribute.dedicatedManager":
      "专属客户成功经理",
    "frontPricingCard.enterprisePlan.attribute.samlSingleSignOn":
      "SAML 单点登录",
    "frontPricingCard.enterprisePlan.attribute.scimApi": "用户管理分配（SCIM）",
    "frontPricingCard.enterprisePlan.attribute.sso": "SAML 单点登录",
    "frontPricingCard.enterprisePlan.attribute.unlimitedVersionHistory":
      "无限的版本历史",
    "frontPricingCard.enterprisePlan.context.allTeamPlanFeatures":
      "团队版的全部功能，以及",
    "frontPricingCard.enterprisePlan.oneliner": "运转公司所需的控制和支持。",
    "frontPricingCard.enterprisePlan.title": "企业版",
    "frontPricingCard.evernotePremiumComparison.attribute.notes": "笔记",
    "frontPricingCard.evernotePremiumComparison.attribute.reminders": "提醒",
    "frontPricingCard.evernotePremiumComparison.attribute.tags": "标签",
    "frontPricingCard.evernotePremiumComparison.attribute.twoLevelHierarchy":
      "两级层次",
    "frontPricingCard.evernotePremiumComparison.attribute.webClipper":
      "网页剪裁器",
    "frontPricingCard.evernotePremiumComparison.oneliner": "基本笔记",
    "frontPricingCard.evernotePremiumComparison.title": "印象笔记付费版",
    "frontPricingCard.freePlan.attribute.shareWithGuests": "与 5 位访客分享",
    "frontPricingCard.freePlan.attribute.syncAcrossDevices": "跨设备同步",
    "frontPricingCard.freePlan.attribute.unlimitedBlocks": "无限页面和块",
    "frontPricingCard.freePlan.context.freeForIndividuals": "个人使用免费",
    "frontPricingCard.newBadge": "新",
    "frontPricingCard.personalFreePlan.oneliner": "整理你生活的每一个角落。",
    "frontPricingCard.personalFreePlan.title": "个人版",
    "frontPricingCard.personalPlan.attribute.limitedVersionHistory":
      "30 天版本历史",
    "frontPricingCard.personalPlan.context.allPersonalPlanFeatures":
      "个人版的全部功能，以及",
    "frontPricingCard.personalPlanComparison.attribute.databases": "数据库",
    "frontPricingCard.personalPlanComparison.attribute.infiniteHierarchy":
      "无限层级",
    "frontPricingCard.personalPlanComparison.attribute.markdownSupport":
      "Markdown 支持",
    "frontPricingCard.personalPlanComparison.attribute.realTimeCollaboration":
      "实时协作",
    "frontPricingCard.personalPlanComparison.oneliner":
      "整理你生活的每一个角落。",
    "frontPricingCard.personalPlanComparison.title": "Notion 个人版",
    "frontPricingCard.personalProPlan.oneliner": "给想要更多的高级玩家。",
    "frontPricingCard.personalProPlan.title": "个人专业版",
    "frontPricingCard.planSignUp.getStarted.title": "立即开始",
    "frontPricingCard.planSignUp.tryItFree.title": "免费试用",
    "frontPricingCard.startupCredit": "US$1,000 创业公司积分",
    "frontPricingCard.startupPlan.context.allProPlanFeatures":
      "专业版的全部功能，以及",
    "frontPricingCard.teamPlan.attribute.adminTools": "管理员工具",
    "frontPricingCard.teamPlan.attribute.advancedPermissions": "高级权限",
    "frontPricingCard.teamPlan.attribute.collaborativeWorkspace": "协作工作区",
    "frontPricingCard.teamPlan.attribute.sharingPermissions": "共享权限",
    "frontPricingCard.teamPlan.attribute.unlimitedMembers": "无限团队成员",
    "frontPricingCard.teamPlan.context.allProPlanFeatures":
      "专业版的全部功能，以及",
    "frontPricingCard.teamPlan.oneliner": "让团队在同个地方协作。",
    "frontPricingCard.teamPlan.title": "团队版",
    "frontPricingPage.documentTitle": "定价",
    "frontPricingPage.faq.title": "问题与解答",
    "frontPricingPage.plansCompare.title": "比较定价方案和功能",
    "frontPricingPage.pricingTermToggle.payAnnually.label": "年付",
    "frontPricingPage.pricingTermToggle.payMonthly.label": "月付",
    "frontPricingPage.shortTitle": "定价方案",
    "frontPricingPage.title": "团队所需的唯一工具。{br}免费供个人使用。",
    "frontSignupComponent.emailInput.educationEmailPlaceholder":
      "输入你的学校邮箱地址...",
    "frontSignupComponent.emailInput.genericEmailPlaceholder":
      "输入你的邮箱地址...",
    "frontSignupComponent.emailInput.teamEmailPlaceholder":
      "输入你的工作邮箱地址...",
    "frontSignupComponent.submitButton.label": "注册",
    "frontTopbar.resourcesMenu.customers": "客户案例",
    "frontTopbar.resourcesMenu.help": "帮助与支持",
    "fullPageError.accessNotAllowed.message":
      "你无权访问{workspaceName}。请与管理员联系以将你添加为成员。",
    "fullPageError.backToMyContentButton.label": "回到我的内容",
    "fullPageError.canRequestAccess.message":
      "如果有人批准你的请求，你则可以访问此页面。",
    "fullPageError.canRequestAccess.title": "无权访问此页面。",
    "fullPageError.cannotRequestAccess.message":
      "此页面不存在，或者你没有访问此页面的权限。",
    "fullPageError.contentDoesNotExist.message":
      "遇到麻烦？<helplink>给我们发送消息</helplink>",
    "fullPageError.contentDoesNotExist.title": "此内容不存在",
    "fullPageError.createOrJoinWorkspaceButton.label": "创建或加入工作区",
    "fullPageError.downloadMobileAppButton.label": "获取移动应用",
    "fullPageError.loggedOut.message": "欢迎访问 Notion 上的{workspaceName}。",
    "fullPageError.noAccess.message": "你无权访问此页面。",
    "fullPageError.noAccess.title": "未找到页面",
    "fullPageError.offlineError.message":
      "哎呀，你好像离线了。请连接网络查看此页面。",
    "fullPageError.onboardingError.message":
      "你无权访问{workspaceName}。请与管理员联系以将你添加为成员。",
    "fullPageError.openInMobileAppButton.label": "在移动应用中开启",
    "fullPageError.pageIsPrivate.message":
      "这是{workspaceName}的私有页面。{hasOwner, select, true {请联系{ownerName}（ {ownerEmail} ）邀请你进行协作。}other{请与页面所有者联系以邀请你进行协作。}}",
    "fullPageError.publicDomainInterstitial.title":
      "跟踪以下链接继续访问外部站点",
    "fullPageError.reportAProblem.label": "报告问题",
    "fullPageError.requestAccessButton.label": "申请访问权限",
    "fullPageError.requestAccessButton.requested": "已申请访问权限",
    "fullPageError.returnToOnboardingButton.label": "回到引导流程",
    "fullPageError.sendMessageButton.label": "向我们发送消息",
    "fullPageError.sendMessageForHelp.message":
      "<sendmessagelink>给我们发送消息</sendmessagelink>寻求帮助。",
    "fullPageError.somethingWrong.label": "出了什么问题？",
    "fullPageError.switchAccount.label": "切换帐户",
    "fullPageError.termsAndPrivacyButton.label": "条款",
    "fullPageError.unsafePageError.message":
      "此页面可能包含垃圾邮件、网络钓鱼、非法或不当内容。如果你从未知来源收到此链接，建议你关闭此标签页。<proceedanywaylink>仍然继续</proceedanywaylink>",
    "fullPageError.unsafePageError.title": "此页面被标记为不安全",
    "fullPageError.whatIsNotionButton.label": "什么是 Notion？",
    "fullPageError.wrongAccount.message":
      "你可能需要使用其他邮箱地址<loginlink>登录</loginlink> ，或与页面所有者联系以请求访问。",
    "fullPageError.wrongAccountRequestAccess.message":
      "你可能需要使用其他邮箱地址<loginlink>登录</loginlink>。",
    "fullPageError.wrongAccountRequestAccessSwitchAccount.message":
      "你可能需要<switchlink>切换帐户</switchlink>或使用其他邮箱地址<loginlink>登录</loginlink>。",
    "fullPageError.wrongLoggedInUserError.message":
      "你当前以 {currentlyLoggedInUser} 登录",
    "fullscreenRenderer.closeButton.label": "关闭",
    "genericDialogModal.cancelButton.label": "取消",
    "genericErrors.genericErrorMessage": "出了些问题。",
    "gistBlock.embedButton.label": "嵌入 Gist",
    "gistBlock.linkInput.caption": "适用于 Github 上的 Gist 链接",
    "gistBlock.placeholder": "嵌入 Gist",
    "githubGistRenderer.errorLoading.message": "载入 Gist 时出错",
    "githubGistRenderer.loading.message": "载入 Gist 中⋯",
    "googleAuthPromptModal.connectToGoogleButton.label": "绑定谷歌帐户",
    "googleAuthPromptModal.mobileUseDesktopPrompt.errorMessage":
      "请在电脑上的 Notion 绑定新帐户。",
    "googleAuthPromptModal.noAccessFile.errorMessage":
      "Notion 无法访问你要嵌入的谷歌云端硬盘文件。",
    "googleAuthPromptModal.seeConnectedAccountsButton.label":
      "查看我的绑定帐户",
    "googleDriveActions.authenticatingWithGoogle.loadingMessage": "谷歌授权中⋯",
    "googleDriveActions.loginWithGoogleModal.title": "谷歌登录",
    "googleDriveBlock.embedTab.caption": "适用于谷歌云端硬盘中的任何文件",
    "googleDriveBlock.embedTab.embedButton.label": "嵌入谷歌云端硬盘中的文件",
    "googleDriveBlock.legacy.placeholder": "嵌入谷歌云端硬盘的文件",
    "googleDriveBlock.legacyLinkInput.caption": "适用于谷歌文档、谷歌表格等。",
    "googleDriveBlock.mediaMenuActions.embedTab.title": "嵌入",
    "googleDriveBlock.mediaPicker.googleDriveTab.title": "浏览谷歌云端硬盘",
    "googleDriveBlock.pageDeleted.caption": "此文件位于垃圾箱中。",
    "googleDriveBlock.pageDescription":
      "{hasUserName, select, true {由{userName}} other {}}上次修改于{hasLastModifiedTime, select, true {{lastModifiedTime}} other {}}",
    "googleDriveBlock.placeholder.authenticated":
      "选择要从谷歌云端硬盘嵌入的文件",
    "googleDriveBlock.placeholder.notAuthenticated":
      "将 Google 云端硬盘连接到 Notion 以嵌入文件",
    "googleDriveHelpers.untitledFilePlaceholder": "无标题",
    "googleErrors.googleDriveTokenError":
      "来自谷歌云端硬盘的错误：{errorMessage}",
    "googleMapsBlock.embed.caption": "适用于谷歌地图上的任何地点",
    "googleMapsBlock.embedButton.label": "嵌入地图",
    "googleMapsBlock.placeholder": "嵌入谷歌地图",
    "grantAccessActivityAction.accessGranted.title": "由{grantedBy}批准",
    "grantAccessActivityAction.alreadyHasAccess.label":
      "{requestingUser}已具有访问权限。",
    "grantAccessActivityAction.changePermissionButton.label": "更改",
    "grantAccessActivityAction.grantAccessButton.label": "授予访问权限",
    "grantAccessActivityAction.ignoreButton.label": "忽略",
    "guestPagesButton.label":
      "{numberOfAccessiblePages, plural, other {{numberOfAccessiblePages} 个页面}}",
    "guestPagesPopup.addAdminPermissionButton.label": "转为管理员",
    "guestPagesPopup.addAdminPermissionButton.tooltip":
      "这位访客将成为此工作区的管理员。",
    "guestPagesPopup.addMemberPermission.updatingMessage": "更新中⋯",
    "guestPagesPopup.addMemberPermissionButton.label": "转为成员",
    "guestPagesPopup.addMemberPermissionButton.tooltip":
      "这位访客将成为此工作区的成员。",
    "guestPagesPopup.guestAccessiblePagesCaption": "这位访客可以访问这些页面",
    "guestPagesPopup.permissionsForUserGuest.label": "访客",
    "guestPagesPopup.privatePagePlaceholder": "私人页面",
    "guestPagesPopup.removeGuest.updatingMessage": "更新中⋯",
    "guestPagesPopup.removeGuestButton.label": "移除",
    "guestPagesPopup.removeGuestButton.tooltip":
      "这位访客将从此工作区的所有页面中移除。",
    "guestPagesPopup.removeGuestModal.confirmationMessage":
      "确定要移除此人？他将无法访问所有已分享的页面。",
    "guestPagesPopup.removeGuestModal.removeButton.label": "移除",
    "header1Block.placeholder": "标题 1",
    "helpButton.contactSupport.menuItem": "联系客服",
    "helpButton.desktopHelpButton.tooltip": "帮助、反馈及快捷键",
    "helpButton.giveFeedback.menuItem": "提供反馈",
    "helpButton.helpSupportGuide.menuItem": "帮助与支持指南",
    "helpButton.joinUs.menuItem": "加入我们",
    "helpButton.keyboardShortcuts.menuItem": "键盘快捷键",
    "helpButton.mobileHelpFeedbackButton.label": "帮助与反馈",
    "helpButton.mobileTwitter.menuItem": "Twitter – @{notionHandle}",
    "helpButton.onboardingChecklist.menuItem": "Notion 基础知识",
    "helpButton.salesChat.menuItem": "与销售人员聊天",
    "helpButton.salesChatMessage":
      "你好！我想了解更多关于 Notion 企业版的信息。",
    "helpButton.sendMessage.menuItem": "向我们发送消息",
    "helpButton.sendUsAMessage.tooltip":
      "我们使用 Intercom 发送消息。{br}请确保它未被你的浏览器阻止。",
    "helpButton.sendUsAMessage.tooltip.intercom.disabled":
      "要启用消息传递，请确保你已接受功能性 cookie。{br}你可以在 Notion 设置中更新你的 cookie。{br}你也可以发送电子邮件至 team@makenotion.com 与我们联系。",
    "helpButton.twitter.menuItem": "Twitter – @{notionHandle}",
    "helpButton.whatsNew.menuItem": "新消息",
    "hexBlock.embeds.button.label": "嵌入 Hex",
    "hexBlock.embeds.caption": "适用于具有公开访问权限的 Hex 单元格链接。",
    "hexBlock.placeholder": "嵌入 Hex",
    "highlightSelectionButton.backgroundSection.label": "背景",
    "highlightSelectionButton.colorSection.label": "颜色",
    "highlightSelectionButton.defaultBackground.label": "默认背景",
    "highlightSelectionButton.lastUsedSection.label": "上次使用",
    "highlightSelectionButton.mobileColorIcon.label": "颜色",
    "highlightSelectionButton.mobileTextColor.label": "文本颜色",
    "highlightSelectionButton.textColor.tooltip": "文本颜色",
    "historyModal.confirmDialog.description": "确定恢复到此版本？",
    "historyModal.confirmDialog.restoreButton.label": "恢复",
    "historyModal.desktopModal.cancelButton.label": "取消",
    "historyModal.desktopModal.errorMessage": "出了些问题",
    "historyModal.desktopModal.learnMoreButton.label": "了解页面历史记录",
    "historyModal.desktopModal.restoreButton.label": "恢复版本",
    "historyModal.desktopModal.sidebar.upgradeMessage.tooltip":
      "升级以恢复快照。",
    "historyModal.errorMessage": "出了些问题",
    "historyModal.mobileHistoryMenu.title": "历史",
    "historyModal.mobileSnapshotMenu.restoreButton.label": "恢复",
    "historyModal.noSnapshotsYet.message":
      "此页面尚无任何快照。生成第一个快照最多需要 10 分钟。",
    "historyModal.snapshotsMenuList.upgrade.tooltip": "升级以查看此快照。",
    "historyModal.unavailableForFreeWorkspaces.messagePart1":
      "版本历史不适用于免费工作区。",
    "historyModal.unavailableForFreeWorkspaces.messagePart2":
      "请升级到我们的付费方案。",
    "historyModal.upgradeForHistoryButton.label": "升级",
    "historyModal.upgradeToEnterprise.message":
      "请升级到企业版以访问 30 天以上的版本历史。",
    "historyModalActions.restoringPreviousVersion.loadingMessage": "恢复中⋯",
    "hoverPreviewOverlay.editButton.label": "编辑",
    "iFramePreview.imagelessAreaLabel": "点击以加载嵌入",
    "iFramePreview.pillLabel": "加载嵌入",
    "imageBlock.embedImage.button.label": "嵌入图片",
    "imageBlock.linkInput.caption": "适用于网络上的任何图片。",
    "imageBlock.linkInput.placeholder": "粘贴图片链接⋯",
    "imageBlock.placeholder": "添加图片",
    "importActions.asanaImportFailedError.message": "Asana 导入失败。",
    "importActions.evernoteImportFailedError.message":
      "印象笔记国际版（Evernote）导入失败。",
    "importActions.importFailedError.message": "导入失败。",
    "importActions.importTitle": "导入 {date}",
    "importActions.importingFromAsana.loadingMessage":
      "{importingCount, plural, other {正从 Asana 导入 {importingCount} 个项目中⋯}}",
    "importActions.importingFromEvernote.loadingMessage":
      "{importingCount, plural, other {正从 Evernote 导入 {importingCount} 个笔记本中⋯}}",
    "importActions.importingFromTrello.loadingMessage":
      "{importingCount, plural, other {正在导入 Trello 中的 {importingCount} 个看板中⋯}}",
    "importActions.importingMultipleFilesComplete.loadingMessage":
      "{totalNumberOfFiles} 个文件已导入，共 {totalNumberOfFiles} 个",
    "importActions.importingMultipleFilesInProgress.loadingMessage":
      "{numberOfUploadedFiles} 个文件已导入，共 {totalNumberOfFiles} 个",
    "importActions.importingMultipleFilesNotStarted.loadingMessage":
      "0 个文件已导入，共 {totalNumberOfFiles} 个",
    "importActions.importingOneFile.loadingMessage": "导入中⋯",
    "importActions.trelloImportFailedError.message": "Trello 导入失败。",
    "importActions.uploadingMultipleFilesComplete.loadingMessage":
      "{totalNumberOfFiles} 个文件已上传，共 {totalNumberOfFiles} 个",
    "importActions.uploadingMultipleFilesInProgress.loadingMessage":
      "{numberOfUploadedFiles} 个文件已上传，共 {totalNumberOfFiles} 个",
    "importActions.uploadingMultipleFilesNotStarted.loadingMessage":
      "0 个文件已上传，共 {totalNumberOfFiles} 个",
    "importActions.uploadingOneFile.loadingMessage":
      "上传中⋯（ {percentComplete}％）",
    "importAsana.databaseProperty.assignedPerson": "指派给",
    "importAsana.databaseProperty.attachedFiles": "附件",
    "importAsana.databaseProperty.completedCheckbox": "完成",
    "importAsana.databaseProperty.dueDate": "到期日",
    "importAsana.databaseProperty.name": "名称",
    "importAsana.databaseProperty.sectionMultiSelect": "分部",
    "importAsana.databaseProperty.tagsMultiSelect": "标签",
    "importErrors.enexFileNotSupported.message": "不支持 Evernote .enex 导入。",
    "importEvernote.databaseProperty.createdTime": "创建时间",
    "importEvernote.databaseProperty.name": "名称",
    "importEvernote.databaseProperty.reminder": "提醒",
    "importEvernote.databaseProperty.tags": "标签",
    "importEvernote.databaseProperty.updatedTime": "更新时间",
    "importEvernote.databaseProperty.url": "网址",
    "importEvernote.databaseViews.galleryView.title": "画廊视图",
    "importEvernote.databaseViews.listView.title": "列表视图",
    "importEvernote.importTooLarge.textProperty.message":
      "因为项目太大无法导入。所以我们将其内容转为文件上传了。",
    "importModal.helpButton.label": "了解导入",
    "importModal.importButton.label": "导入",
    "importOptions.helpButton.tooltip": "了解如何导入",
    "importOptions.offlineErrorMessage": "请连接网络后导入。",
    "importOptions.textMarkdown.title": "文本与 Markdown",
    "importPopup.deselectAll": "取消全选",
    "importPopup.selectAll": "全选",
    "importTrello.assignedPersonColumn.propertyName": "指派给",
    "importTrello.attachedFilesColumn.propertyName": "附件",
    "importTrello.database.defaultViewTitle": "默认视图",
    "importTrello.dueDateColumn.propertyName": "到期",
    "importTrello.labelColumn.propertyName": "标签",
    "importTrello.nameColumn.propertyName": "名称",
    "importTrello.statusColumn.propertyName": "状态",
    "importTrello.statusProperty.backlog": "待办需求",
    "importTrello.statusProperty.complete": "已完成",
    "importTrello.statusProperty.inProgress": "进行中",
    "inlineCommentButton.commentLabel": "评论",
    "inlineCommentButton.tooltip": "对所选文本发表评论",
    "inlineCopyButton.copyButtonText": "复制链接",
    "inlineEquationToken.invalidPlaceholder.label": "无效的公式",
    "inlineEquationToken.placeholder.label": "新公式",
    "inlineUnfurlingAuthenticationPopup.caption":
      "登录后可显示更丰富的实时更新内容预览。",
    "inlineUnfurlingAuthenticationPopup.close": "关闭",
    "inlineUnfurlingAuthenticationPopup.connect": "绑定",
    "inlineUnfurlingAuthenticationPopup.connectButton": "绑定",
    "inlineUnfurlingAuthenticationPopup.learnMore.text": "了解更多",
    "inlineUnfurlingAuthenticationPopup.title": "绑定 {integration}",
    "integrationImportPopup.importButton.label": "导入",
    "integrationInstallerFilter.disconnectAllIntegrationsButton.label":
      "全部解除绑定",
    "integrationInstallerFilter.disconnectAllIntegrationsModal.cancelButton.label":
      "取消",
    "integrationInstallerFilter.disconnectAllIntegrationsModal.confirmButton.label":
      "解除绑定",
    "integrationInstallerFilter.disconnectAllIntegrationsModal.description":
      "撤销此工作区所有用户对 {integrationName} 的访问权限。",
    "integrationInstallerFilter.disconnectAllIntegrationsModal.title":
      "解除 {integrationName} 的绑定？",
    "integrationInstallerFilter.disconnectIndividualIntegrationModal.cancelButton.label":
      "取消",
    "integrationInstallerFilter.disconnectIndividualIntegrationModal.confirmButton.label":
      "解除绑定",
    "integrationInstallerFilter.disconnectIndividualIntegrationModal.title":
      "撤消 {userName} 的 {integrationName} 访问权限",
    "integrationInstallerFilter.removeBot.label": "移除",
    "integrationInstallerFilter.userSearch.noResults": "无结果",
    "integrationInstallerFilter.userSearch.placeholder": "按用户筛选",
    "invalidNameErrors.errorMessage": "无效名称。",
    "invalidVATEmail.billingLink.text":
      "<b>请使用<billinglink>此链接</billinglink>更新你的税号。</b>",
    "invalidVATEmail.body.text":
      "我们联系你是因为你存档的增值税 (VAT) 编号或商品及服务税 (GST) 编号无效。根据当地法律，如果你没有有效的编号，我们需要向你征税。",
    "invalidVATEmail.closingText": "谢谢你。{br}—来自 Notion 团队",
    "invalidVATEmail.greetingWithName": "嗨，{customerName}！",
    "invalidVATEmail.greetingWithoutName": "嗨，你好！",
    "invalidVATEmail.subjectLine.text": "请更新你的 Notion 帐户上的税号",
    "invisionBlock.embeds.button.label": "嵌入 Invision",
    "invisionBlock.embeds.caption": "适用于 Invision 项目",
    "invisionBlock.placeholder": "嵌入 Invision 项目",
    "inviteEmail.clickToViewPage.message": "点这里查看",
    "inviteEmail.clickToViewWorkspace.message": "点这里查看",
    "inviteEmail.pageInviteMessage": "{name}邀请你加入{pageName}。",
    "inviteEmail.pageTitle.untitledPage": "无标题",
    "inviteEmail.title": "邀请",
    "inviteEmail.workspaceInviteMessage":
      "{name}邀请你加入{workspaceName}工作区。",
    "inviteEmail.workspaceInviteMessageFromBot":
      "你已被邀请进入{workspaceName}工作区。",
    "inviteEmail.workspaceName.untitledName": "无标题",
    "inviteLinkErrors.inviteLinkDisabled.message":
      "邀请被禁用，请与此工作区的管理员联系。",
    "inviteUserButton.addGuestsAndGroupsAndIntegrationsLabel":
      "人员、邮箱地址、群组或集成",
    "inviteUserButton.addGuestsAndGroupsLabel": "添加人员、群组或邮箱地址",
    "inviteUserButton.addMemberLabel": "添加成员",
    "inviteUserButton.invitePersonLabel": "邀请",
    "inviteUserButton.modalTooltip.guestLimitLine1":
      "你的个人版最多可邀请 5 位不同的访客。",
    "inviteUserButton.modalTooltip.guestLimitLine2": "升级以无限使用",
    "inviteUserButton.tooltip.adminsOnlyMessage": "只有管理员可以添加成员。",
    "inviteUserButton.tooltip.fullAccessOnlyMessage":
      "只有拥有全部权限的人才能添加人员。",
    "inviteUserButton.tooltip.upgradeToTeamPlan": "升级到团队版以添加成员。",
    "inviteUserModal.addMemberMenu.title": "添加成员",
    "inviteUserModal.helpButton.caption": "了解如何邀请他人并设置权限",
    "inviteUserModal.inviteButton.label": "邀请",
    "inviteUserModal.inviteButton.upgradeLabel": "升级",
    "inviteUserModal.invitePersonMenu.title": "邀请人员",
    "inviteUserModal.mobile.inviteButton.label": "邀请",
    "inviteUserModal.permissionLevel.title": "权限级别",
    "inviteUserModal.searchDropdown.selectGroupTitle": "选择一个群组",
    "inviteUserModal.searchDropdown.selectPersonTitle": "选择人员",
    "inviteUserModal.searchInput.errorMessage": "出了些问题",
    "inviteUserModal.searchInput.placeholder": "搜索名称或邮箱地址",
    "inviteUserModal.searchPersonDropdown.noSearchResultsMessage":
      "在上面输入或粘贴邮箱地址，以逗号分隔。",
    "inviteUserModal.userAlreadyHasPermissionMessage": "{user}已拥有权限。",
    "inviteUserModal.userAlreadyInvitedMessage": "已邀请{user}。",
    "inviteUserModal.userRole.adminBadge.label": "管理员",
    "inviteUserModal.userRole.adminBadge.tooltip": "此人是工作区管理员",
    "inviteUserModal.userRole.guest.tooltip": "此人是工作区访客",
    "inviteUserModal.userRole.guestBadge.label": "访客",
    "inviteUserModal.userRole.memberBadge.label": "成员",
    "inviteUserModal.userRole.memberBadge.tooltip": "此人是工作区成员",
    "invoice.VATID.label": "VAT ID",
    "invoice.amountDue.label": "应付金额",
    "invoice.amountPaid.label": "支付金额",
    "invoice.billing.period.label": "账单周期",
    "invoice.billingPeriod": "{startDate} - {endDate}",
    "invoice.chargeItem.basicCharge.withMonthlyAmount":
      "{numberOfMembers, plural, other {{productName}（每月 {planAmount}）× {numberOfMembers} 位成员}}",
    "invoice.chargeItem.basicCharge.withYearlyAmount":
      "{numberOfMembers, plural, other {{productName}（每年 {planAmount}）× {numberOfMembers} 位成员}}",
    "invoice.chargeItem.basicCharge.withoutPlanAmount":
      "{numberOfMembers, plural, other {{productName} × {numberOfMembers} 位成员}}",
    "invoice.chargeItem.changedNumberOfMembers.memberChange":
      "（从 {oldTotalMembers} 位到 {newTotalMembers} 位）",
    "invoice.chargeItem.changedNumberOfMembers.memberChange.new":
      "({oldTotalMembers} → {newTotalMembers})",
    "invoice.chargeItem.changedNumberOfMembers.membersAdded":
      "{numberOfMembersAdded, plural, other {向{productName}中添加了 {numberOfMembersRemoved} 位成员}}",
    "invoice.chargeItem.changedNumberOfMembers.membersAdded.new":
      "{numberOfMembersAdded, plural, other {在 {productName} 中添加了 {numberOfMembersAdded} 个成员}}",
    "invoice.chargeItem.changedNumberOfMembers.membersRemoved":
      "{numberOfMembersRemoved, plural, other {从{productName}中移除了 {numberOfMembersRemoved} 位成员}}",
    "invoice.chargeItem.changedNumberOfMembers.membersRemoved.new":
      "{numberOfMembersRemoved, plural, other {在 {productName} 中删除了 {numberOfMembersRemoved} 个成员}}",
    "invoice.chargeItem.creditApplied.label": "已使用积分",
    "invoice.chargeItem.discountApplied.label": "优惠券",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromMonthlyToYearly":
      "更改为年付方案（原为月付方案）",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromMonthlyToYearly.new":
      "从月付方案更改为年付方案",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromYearlyToMonthly":
      "更改为月付方案（原为年付方案）",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromYearlyToMonthly.new":
      "从年付方案更改为月付方案",
    "invoice.chargeItem.proratedCharge.switchedProducts":
      "切换为{newProductName}（从{oldProductName} ）",
    "invoice.chargeItem.proratedCharge.switchedProducts.dateRange":
      "{startDate} - {endDate}",
    "invoice.chargeItem.proratedCharge.switchedProducts.new":
      "从 {oldProductName} 更改为 {newProductName}",
    "invoice.chargeItem.taxCharge": "税",
    "invoice.chargeItems.periodicCharges.description":
      "除非进行调整，否则将于每个结算周期产生费用。",
    "invoice.chargeItems.periodicCharges.title": "定期收费",
    "invoice.chargeItems.proratedCharges.description":
      "由于上一个发票所涵盖的计费周期内发生的订阅更改而发生的一次调整。",
    "invoice.chargeItems.proratedCharges.header": "结余清算",
    "invoice.chargeItems.subtotal.label": "小计",
    "invoice.chargeItems.summary.label": "概要",
    "invoice.chargeRecurringItem":
      "{numberOfMembers, plural, other {{planType} {intervalType} x {numberOfMembers} 个成员}}",
    "invoice.creditBalance.header": "工作区积分余额",
    "invoice.date.label": "发票日期",
    "invoice.details.amount": "金额",
    "invoice.details.date": "日期",
    "invoice.details.description": "描述",
    "invoice.details.helpButton.label": "了解有关按比例分配费用的更多信息",
    "invoice.details.label": "详细信息",
    "invoice.details.no.prorated.charges":
      "在此账单周期内没有按比例分配的费用。",
    "invoice.details.no.recurring.charges": "在此账单周期内没有任何定期费用。",
    "invoice.details.prorated.charges.explanation":
      "当你更改方案，或添加或移除工作区成员时，Notion 会将之前的成员数或方案记入你的账户，并就新成员数或方案的剩余时间向你收费。",
    "invoice.details.recurring.charges.explanation":
      "当你续订订阅时，Notion 会按账单周期向你收取费用。",
    "invoice.details.subtotal": "小计",
    "invoice.details.taxLanguage.explanation":
      "税费将根据你所在的司法管辖区而有所不同。如果贵公司位于美国，则税费涉及州和地方销售税。如果贵公司位于加拿大，则税费以魁北克销售税 (QST) 表示。如果贵公司位于欧盟、英国或俄罗斯，则税费以增值税 (VAT) 表示。如果你位于欧盟或英国且不需要支付增值税，则在收到此发票时，其相关服务视为已提供，并且根据第 196 条理事会指令 2006/112/EC，客户必须在各自管辖范围内以反向收费的方式自行核算增值税。",
    "invoice.details.taxLanguage.explanation.ca": "CA QST: NR00012289",
    "invoice.details.taxLanguage.explanation.ru.inn": "RU INN: 9909540024",
    "invoice.details.taxLanguage.explanation.ru.kpp": "RU KPP: 997789001",
    "invoice.details.taxLanguage.explanation.vat": "EU VAT: EU528003828",
    "invoice.helpButton.label":
      "了解账单周期、按比例收取的新成员费用、帐户积分等。",
    "invoice.intervalType.monthly": "月付",
    "invoice.intervalType.yearly": "年付",
    "invoice.invoice.number.label": "发票编号",
    "invoice.invoice.upcomingInvoicePlaceholder": "下期",
    "invoice.invoiceID.label": "发票 ID",
    "invoice.invoiceID.upcomingInvoicePlaceholder": "下一个",
    "invoice.memberCount":
      "{numberOfMembers, plural, other {{numberOfMembers} 位成员}}",
    "invoice.payment.label": "付款",
    "invoice.payment.status.label": "状态",
    "invoice.pdf.title": "Notion 发票 {date}",
    "invoice.planType.enterprise": "企业版",
    "invoice.planType.legacy": "旧版",
    "invoice.planType.personal": "个人版",
    "invoice.planType.personalEducation": "个人教育版",
    "invoice.planType.team": "团队版",
    "invoice.printOrExportButton.label": "打印或导出为 PDF",
    "invoice.productName.enterprise":
      "{billingInterval, select, month {Notion 企业版月付方案} year {Notion 企业版年付方案} other {Notion 企业版}}",
    "invoice.productName.legacy":
      "{billingInterval, select, month {Notion 旧月付方案} year {Notion 旧年付方案} other {Notion 旧方案}}",
    "invoice.productName.personal":
      "{billingInterval, select, month {Notion 个人版月付方案} year {Notion 个人版年付方案} other {Notion 个人版}}",
    "invoice.productName.personalEducation":
      "{billingInterval, select, month {Notion 个人专业版（教育）月付方案} year {Notion 个人专业版（教育）年付方案} other {Notion 个人专业版（教育）}}",
    "invoice.productName.team":
      "{billingInterval, select, month {Notion 团队版月付方案} year {Notion 团队版年付方案} other {Notion 团队版}}",
    "invoice.recipient.billing.label": "记账对象",
    "invoice.recipient.label": "送至",
    "invoice.recurringDate": "{startDate} - {endDate}",
    "invoice.status.not_paid": "未支付",
    "invoice.status.paid": "已付费",
    "invoice.status.upcoming": "下一个账单・尚未到期",
    "invoice.summary.amountDue.label": "截止时间",
    "invoice.summary.credits": "积分",
    "invoice.summary.prorated.charges": "按比例分配的费用",
    "invoice.summary.prorated.charges.credits": "按比例分配的费用和积分",
    "invoice.summary.prorated.charges.explanation":
      "账单周期内成员和方案变更的部分费用。",
    "invoice.summary.recurring.charges": "周期性方案费用",
    "invoice.summary.recurring.charges.explanation":
      "在此账单周期内 Notion 方案的续费费用。",
    "invoice.summary.tax": "税",
    "invoice.title": "Notion",
    "invoice.title.label": "发票",
    "invoice.total.label": "应付总额",
    "invoice.workspace.label": "工作区",
    "invoice.workspaceName.label": "工作区名称",
    "invoiceErrors.invoiceNotFound.message":
      "你可能需要<loginlink>登录</loginlink>进行查看。",
    "invoiceErrors.invoiceNotFound.title": "找不到发票",
    "languagePicker.betaBadge": "试用版",
    "languagePicker.captions.chineseS": "简体中文",
    "languagePicker.captions.chineseT": "繁体中文",
    "languagePicker.captions.englishUS": "英文（美国）",
    "languagePicker.captions.frenchFr": "法文",
    "languagePicker.captions.japaneseJa": "日文",
    "languagePicker.captions.koreanKo": "韩文",
    "languagePicker.captions.portugueseBr": "葡萄牙文（巴西）",
    "languagePicker.captions.spanishEs": "西班牙文（西班牙）",
    "languagePicker.captions.spanishLatam": "西班牙文（拉丁美洲）",
    "languagePicker.changeLanguage.confirmationMessage":
      "确定要将语言更新为{language}吗？",
    "languagePicker.changeLanguage.updateButton.label": "更新",
    "languageRegionSettings.language.label": "语言",
    "languageSettings.formatsSection.title": "格式",
    "languageSettings.languageSection.title": "语言与地区",
    "languageSettings.languageSwitcher.subtitle": "更改用户界面的语言。",
    "languageSettings.offline.message": "请连接网络以设置语言和地区。",
    "linkToCollectionBlock.input.placeholder": "搜索数据库⋯",
    "linkToCollectionBlock.menuItem.noResults.label": "无结果",
    "linkToCollectionBlock.menuItem.noResults.title": "选择数据库",
    "linkToCollectionBlock.menuItem.showResults.title": "选择数据库",
    "linkToPageBlock.noSearchResults": "无结果",
    "linkToPageBlock.searchPlaceholder": "搜索页面⋯",
    "linkToPageBlock.selectPrompt": "选择页面",
    "linkToPageBlock.selectPrompt.withContents": "选择页面",
    "loadingSpinner.label": "载入中⋯",
    "localDatabase.erroMessages.noDiskSpaceRemaining": "没有剩余的磁盘空间。",
    "localDatabase.erroMessages.noDiskSpaceRemainingBrowserLimit":
      "没有剩余的磁盘空间。你的浏览器设置可能限制了 Notion 可以使用的存储空间。",
    "localDatabase.errorFixes.chromeSettingsDamaged":
      "你的 Chrome 个人资料可能已损坏。如果你更改了 chrome:// flags，请重设它们，然后重新启动浏览器。如果问题仍然存在，请尝试创建新的 Chrome 用户。",
    "localDatabase.errorFixes.firefoxSettingsDamaged":
      "你的 Firefox 个人资料可能已损坏。访问 https://firefox-storage-test.glitch.me/ 进行诊断。",
    "localDatabase.errorFixes.helpAndSupportPrompt":
      "Notion 的本地存储可能损坏了。请参阅（？） > 帮助和支持 > 重置 Notion。",
    "localDatabase.errorFixes.reloadAllTabs":
      "尝试关闭并重新打开所有 Notion 的选项卡或窗口。",
    "localDatabase.errorFixes.reloadThisTab": "尝试重新加载 Notion。",
    "loginActions.dialogError.logoutUnsavedChanges.confirmButton.label":
      "放弃编辑并登出",
    "loginActions.dialogError.logoutUnsavedChanges.message":
      "你尚未保存更改。如果你登出，它们将丢失。",
    "loginActions.googleLoginPopupModal.title": "谷歌登录",
    "loginActions.loggingInWithApple.errorMessage":
      "尝试使用 Apple 登录时出了点问题。",
    "loginActions.loggingInWithApple.loadingMessage": "使用 Apple 登录中⋯",
    "loginActions.loggingInWithGoogle.errorMessage":
      "尝试使用 Google 登录时出现问题。",
    "loginActions.loggingInWithGoogle.loadingMessage": "使用谷歌登录中⋯",
    "loginErrors.adminModeUnsupported.message": "不适用于管理员模式",
    "loginErrors.csrf.message":
      "如果您通过链接登录，请在您请求链接的浏览器中打开该链接。",
    "loginErrors.expiredSignUpLink.message": "此链接已过期。请重新登录。",
    "loginErrors.generic.message": "登录时出现问题。",
    "loginErrors.invalidEmail.message": "无效的邮箱地址。",
    "loginErrors.invalidPassword.message": "无效的密码",
    "loginErrors.invalidSignUpLink.message": "此链接出现问题。请重新登录。",
    "loginErrors.openedSignUpLink.message": "此链接已打开。请重新登录。",
    "loginErrors.tryAgain.message": "请重新登录。",
    "loginForm.continueWithEmailButton.label": "用邮箱地址登录",
    "loginForm.continueWithLoginCodeButton.label": "用临时登录码登录",
    "loginForm.continueWithPasswordButton.label": "用密码登录",
    "loginForm.continueWithReverifyButton.label": "验证邮箱地址",
    "loginForm.continueWithSAMLButton.label": "用 SAML 登录",
    "loginForm.createNewAccountButton.label": "创建新帐户",
    "loginForm.disclaimer":
      "点击上方的“用谷歌帐户 / 邮箱地址 / SAML 登录”，即表示你已经阅读和理解，并同意 Notion 的<termsandconditionslink>条款和条件</termsandconditionslink>和<privacypolicylink>隐私政策</privacypolicylink>。",
    "loginForm.emailInput.label": "邮箱地址",
    "loginForm.emailInput.mobileAdsSignup.label": "你的工作用邮箱地址",
    "loginForm.emailInput.placeholder": "输入你的邮箱地址⋯",
    "loginForm.emailPasswordForm.continueButton.label": "继续",
    "loginForm.forgotPasswordLink": "忘记密码？",
    "loginForm.loginCodeInput.label": "登录码",
    "loginForm.loginWithAppleButton.label": "Apple 登录",
    "loginForm.loginWithGoogleButton.label": "用谷歌帐户登录",
    "loginForm.otherLoginOptions.continueWithEmail":
      "你也可以<emailloginlink>使用邮箱地址</emailloginlink>以继续",
    "loginForm.otherLoginOptions.continueWithEmailOrSAML":
      "你也可以<emailloginlink>使用邮箱地址</emailloginlink>或<samlloginlink>使用 SAML SSO</samlloginlink> 以继续",
    "loginForm.otherLoginOptions.continueWithSAML":
      "你也可以<samlloginlink>使用 SAML SSO</samlloginlink> 以继续",
    "loginForm.passcodeInput.enterCodePlaceholder": "输入登录码",
    "loginForm.passcodeInput.enterPasswordPlaceholder": "输入密码⋯",
    "loginForm.passcodeInput.enterSignupCodePlaceholder": "输入注册码",
    "loginForm.passcodeInput.pasteCodePlaceholder": "粘贴登录码",
    "loginForm.passcodeInput.pasteSignupCodePlaceholder": "粘贴注册码",
    "loginForm.passcodeInput.reverifyPlaceholder": "粘贴验证码",
    "loginForm.passwordInput.label": "密码",
    "loginForm.passwordResetSentMessage": "检查收件箱中的链接以重置密码。",
    "loginForm.reverifyPasswordLabel":
      "<emailverifiedtext>邮箱地址已验证</emailverifiedtext>。你可以继续使用密码登录。",
    "loginForm.reverifySentMessage":
      "此帐户需要邮箱地址验证。请检查你的收件箱并粘贴验证码。",
    "loginForm.sendResetLink": "发送重置链接",
    "loginForm.signUpCodeInput.label": "注册码",
    "loginForm.temporaryPasscodeSentMessage":
      "我们刚刚向你发送了一个临时登录码。{br}请检查你的收件箱。",
    "loginForm.temporaryPasscodeSentMessageNoAccount":
      "我们刚刚向你发送了一个临时注册码。请检查你的收件箱并把注册码粘贴在下面。",
    "loginForm.verificationCodeInput.label": "验证码",
    "loginForm.workEmailInput.label": "工作用邮箱地址",
    "loginMobileNative.descriptionOfNotion.message":
      "Notion 是个可以用于<mediumfont>笔记</mediumfont>、 <mediumfont>任务管理</mediumfont>和<mediumfont>知识库</mediumfont>的协作工具",
    "loginMobileNative.footer.helpButton.label": "需要帮助？",
    "loginMobileNative.footer.privacyAndTermsButton.label": "隐私与条款",
    "loginMobileNative.goBackButton.label": "后退",
    "loginMobileNative.welcomeMessage": "欢迎来到 Notion！👋",
    "loginPage.pageTitle": "登录",
    "loginPage.title": "登录",
    "loginPermissions.googleContactPermissions.checkboxUnchecked.message":
      "我不想分享谷歌联系人",
    "loginPermissions.googleContactPermissions.message":
      "我们请求读取你的谷歌联系人，以便在邀请或提及人员时为你提供更好的体验。",
    "loomBlock.embed.caption": "适用于启用了公共访问的 Loom 链接",
    "loomBlock.placeholder": "嵌入 Loom",
    "manageActiveSessions.confirmationModal.close": "关闭",
    "manageActiveSessions.confirmationModal.withEmail":
      "你已从 {email} 的其他活动会话中注销。",
    "manageActiveSessions.confirmationModal.withoutEmail":
      "你已经从其他活动会话中注销了。",
    "manageActiveSessions.logOutActiveSessions.button": "登出",
    "manageActiveSessions.logOutActiveSessions.label":
      "你将退出当前会话之外的所有其他活动会话，并且必须重新登录。",
    "manageActiveSessions.title": "从所有设备登出",
    "mathParseHelpers.errorPosition.message": "字符 {position}",
    "mathParseHelpers.fullError.message": "{errorBody} ({postfix})",
    "mathParseHelpers.syntax.error": "部分 {token} 中的语法错误",
    "mathParseHelpers.tokenExpected.error": "预期的 {token}",
    "mathParseHelpers.unexpected.error": "意外的 {token}",
    "mediaPicker.chooseFile.button.label": "选择文件",
    "mediaPicker.chooseImage.buttonText": "选择图片",
    "mediaPicker.chooseVideo.buttonText": "选择视频",
    "mediaPicker.embedPlaceholder.text": "以 https://… 格式粘贴",
    "mediaPicker.embedTab.embedLinkButtonText": "嵌入链接",
    "mediaPicker.emojiFilter.text": "筛选⋯",
    "mediaPicker.emojiTab.random": "随机",
    "mediaPicker.errorMessage": "糟糕，出了些问题。",
    "mediaPicker.maximumFileSize.notice": "每个文件的大小不超过 {filesize}MB。",
    "mediaPicker.menuItem.choosePagesFromAccount.label": "从{accountName}选择",
    "mediaPicker.menuItem.connectFirstGoogleAccount.caption":
      "查找并嵌入谷歌云端硬盘中的文件",
    "mediaPicker.menuItem.connectFirstGoogleAccount.label": "绑定谷歌帐户",
    "mediaPicker.menuItem.connectMoreGoogleAccounts.label": "绑定另一个帐户",
    "mediaPicker.mobileCloseButton.label": "关闭",
    "mediaPicker.mobileRemoveButton.label": "移除",
    "mediaPicker.tabs.browse": "浏览",
    "mediaPicker.tabs.embedLink": "嵌入链接",
    "mediaPicker.tabs.emoji": "表情符号",
    "mediaPicker.tabs.gallery": "画廊",
    "mediaPicker.tabs.remove": "移除",
    "mediaPicker.tabs.upload": "上传",
    "mediaPicker.unsplash.byAuthor":
      "作者 <inlinetextlink>{authorName}</inlinetextlink>",
    "mediaPicker.unsplash.noResultsText": "未找到结果。",
    "mediaPicker.unsplash.searchText": "搜索以查找更多结果。",
    "mediaPicker.unsplashPlaceholder.text": "搜索图片⋯",
    "memberSettingsButton.goOnline.prompt": "请连接网络后管理成员。",
    "memberSettingsButton.mobileMemberSettings.title": "成员",
    "memberSettingsButton.mobileSidebar.label": "成员",
    "memberSettingsButton.rightActionButton.done": "完成",
    "mentionMenu.addPage.prompt2": "输入以添加或链接页面⋯",
    "mentionMenu.botsSection.title": "机器人",
    "mentionMenu.createPageSection.title": "新页面",
    "mentionMenu.date.autocomplete.nextTuesday": "下周二下午 3 点",
    "mentionMenu.date.autocomplete.reminder": "提醒明天上午9点",
    "mentionMenu.date.autocomplete.today": "今天",
    "mentionMenu.date.prompt": "提及日期⋯",
    "mentionMenu.date.prompt2": "提及日期⋯",
    "mentionMenu.date.remindAtDateTime": "提醒{dateTime}",
    "mentionMenu.dateSection.title": "日期",
    "mentionMenu.noSearchResults.title": "无结果",
    "mentionMenu.offlineMessage": "连接网络后便可提及人员或页面。",
    "mentionMenu.page.prompt": "提及页面⋯",
    "mentionMenu.page.prompt2": "输入以链接或添加页面⋯",
    "mentionMenu.pageDate.prompt": "提及页面或日期⋯",
    "mentionMenu.pageDate.prompt2": "提及页面或日期⋯",
    "mentionMenu.pagesSection.title": "页面",
    "mentionMenu.pagesSection.title2": "链接到页面",
    "mentionMenu.peopleSection.title": "人员",
    "mentionMenu.person.prompt": "提及人员⋯",
    "mentionMenu.person.prompt2": "提及人员⋯",
    "mentionMenu.personDate.prompt": "提及人员或日期⋯",
    "mentionMenu.personDate.prompt2": "提及人员或日期⋯",
    "mentionMenu.personPage.prompt": "提及人员或页面⋯",
    "mentionMenu.personPage.prompt2": "提及人员或页面⋯",
    "mentionMenu.personPageDate.prompt": "提及人员、页面或日期⋯",
    "mentionMenu.personPageDate.prompt2": "提及人员、页面或日期⋯",
    "mentionMenu.showMoreResultsButton.title": "其余 {numberMore} 个结果",
    "mentionMenu.templateVariables.description.me": "复制的用户",
    "mentionMenu.templateVariables.description.now": "复制时间",
    "mentionMenu.templateVariables.description.today": "复制日期",
    "mentionMenu.templateVariables.keywords.me": "我",
    "mentionMenu.templateVariables.keywords.now": "现在",
    "mentionMenu.templateVariables.keywords.today": "今天",
    "mentionMenu.templateVariables.text.me": "我",
    "mentionMenu.templateVariables.text.now": "现在",
    "mentionMenu.templateVariables.text.tday": "今天",
    "menuList.menuListSection.noResult": "无结果",
    "mermaidRenderer.error.seeMermaidExamples": "查看 Mermaid 示例",
    "mermaidRenderer.error.unknownError": "未知错误： {error}",
    "miroBlock.embeds.button.label": "嵌入 Miro",
    "miroBlock.embeds.caption": "适用于启用了公共访问的 Miro 链接",
    "miroBlock.placeholder": "嵌入 Miro",
    "mobile.dismissKeyboardBar.button.label": "完成",
    "mobile.modal.backButton": "返回",
    "mobile.modal.cancelButton": "取消",
    "mobile.modal.doneButton": "完成",
    "mobileActionBar.blockColor.modalTitle": "块颜色",
    "mobileActionBar.bold.symbol": "B",
    "mobileActionBar.code.symbol": "代码",
    "mobileActionBar.color.buttonTitle": "颜色",
    "mobileActionBar.databaseSection.title": "数据库",
    "mobileActionBar.insertBlock.modalTitle": "插入块",
    "mobileActionBar.italic.symbol": "i",
    "mobileActionBar.link.symbol": "链接",
    "mobileActionBar.more.buttonTitle": "更多",
    "mobileActionBar.nativeMenu.textColor.title": "颜色",
    "mobileActionBar.strikeThrough.symbol": "S",
    "mobileActionBar.templates.buttonTitle": "选择模板⋯",
    "mobileActionBar.templates.modalTitle": "模板",
    "mobileActionBar.turnInto.buttonTitle": "转换成",
    "mobileActionBar.turnInto.modalTitle": "转换成",
    "mobileActionBar.underline.symbol": "U",
    "mobileCalendarDayMenu.newItemButton.label": "新项目",
    "mobileCalendarDayMenu.noResults.message": "无项目",
    "moveBlockMenu.addFromTemplate.title": "从模板添加",
    "moveBlockMenu.addToPage.title": "添加到页面",
    "moveBlockMenu.addToPrivatePages":
      "添加到<mediumtext>私人页面</mediumtext>",
    "moveBlockMenu.addToSpace.title": "添加到工作区",
    "moveBlockMenu.currentPage.pluralAddTitle": "新的子页面",
    "moveBlockMenu.currentPage.singleAddTitle": "新的子页面",
    "moveBlockMenu.errorOnMove.label": "出了些问题。",
    "moveBlockMenu.learnMoreButton.title": "了解更多",
    "moveBlockMenu.learnMoreButton.tooltip": "选择要移动到的目的地",
    "moveBlockMenu.mobileAddTo.label": "添加到另一页面⋯",
    "moveBlockMenu.mobileMoveTo.label": "移动到",
    "moveBlockMenu.mobileNewPageInj.label": "添加到另一页面",
    "moveBlockMenu.moveToPage.title": "移动到页面",
    "moveBlockMenu.moveToPrivatePages":
      "移动到<mediumtext>私人页面</mediumtext>",
    "moveBlockMenu.moveToPrivatePages.longLabel":
      "移动到<mediumtext>私人页面</mediumtext>",
    "moveBlockMenu.moveToPrivatePages.shortLabel":
      "<mediumtext>私人页面</mediumtext>",
    "moveBlockMenu.moveToSpace.title": "移动到工作区",
    "moveBlockMenu.moveToTeam.title": "移动到团队",
    "moveBlockMenu.moveToTemplate.title": "移动到模板",
    "moveBlockMenu.noResults.label": "无结果",
    "moveBlockMenu.recentlyAddedIn.title": "最近添加到",
    "moveBlockMenu.recentlyAddedTo.title": "最近添加到",
    "moveBlockMenu.recentlyMovedTo.title": "最近移动到",
    "moveBlockMenu.relevantPagesSection.title": "相关",
    "moveBlockMenu.relevantSection.title": "相关",
    "moveBlockMenu.rightDoneButton.label": "完成",
    "moveBlockMenu.spaceSwitcher.menuTitle": "工作区",
    "moveBlockMenu.spacesSection.title": "工作区",
    "moveBlockMenu.teamsSection.title": "团队",
    "moveToHelpers.afterBulkMoveCompleteToastMessage":
      "移动了 {pageDescriptor}",
    "moveToHelpers.afterBulkMoveCompleteToastMessageWithDestination":
      "将 {pageDescriptor} 移动到了 {destinationName}",
    "moveToHelpers.bulkMoveConfirmationButtonLabel":
      "{moveToHelpers.bulkMoveConfirmationButtonLabel, plural, other {移动 {numPagesMoved, plural, one {# 页} other {# 页}}}}",
    "moveToHelpers.bulkMoveConfirmationTitle":
      "{moveToHelpers.bulkMoveConfirmationTitle, plural, other {确定要将 {pageDescriptor} 移动到 {destinationName} 吗？权限可能会发生改变。}}",
    "moveToHelpers.bulkMoveConfirmationTitleWithoutDestination":
      "{moveToHelpers.bulkMoveConfirmationTitleWithoutDestination, plural, other {确定要移动 {pageDescriptor} 吗？权限可能会发生改变。}}",
    "moveToHelpers.bulkMoveConfirmationToPrivateTitle":
      "{moveToHelpers.bulkMoveConfirmationToPrivateTitle, plural, other {确定要将 {pageDescriptor} 移动到 {destinationName} 吗？团队中的所有人都将失去访问权限。}}",
    "moveToHelpers.bulkMoveConfirmationWithoutDestinationToPrivateTitle":
      "{moveToHelpers.bulkMoveConfirmationWithoutDestinationToPrivateTitle, plural, other {确定要移动 {pageDescriptor} 吗？团队中的所有人都将失去访问权限。}}",
    "moveToHelpers.destinationName.favorites": "收藏夹",
    "moveToHelpers.destinationName.private": "私人",
    "moveToHelpers.movePageDescriptorString":
      "{numPagesMoved, plural, other {页}}",
    "moveToMenuActions.movingContent.loadingMessage": "正在移动内容⋯",
    "moveToMenuRenderer.addNewPageIn.label": "搜索要添加到的页面⋯",
    "moveToMenuRenderer.addTo.label": "搜索要添加到的页面⋯",
    "moveToMenuRenderer.moveTo.label": "搜索要移动到的页面⋯",
    "moveToMenuRenderer.moveTo.teamLabel": "搜索页面或团队...",
    "moveToOrCreateMenu.createSubpage.description":
      "在当前块内，在你的光标所在的位置创建一个新的子页面。",
    "moveToOrCreateMenu.newPageIn.description":
      "在任何现有页面内创建一个新页面，然后一次性地链接到此页面。",
    "moveToOrCreateMenu.turnInto.description":
      "将块转换为任何现有数据库或页面内的新页面。",
    "newBadge.label": "新",
    "newBadgeComponent.label": "新",
    "newBlock.abstract.description": "嵌入 Abstract 项目。",
    "newBlock.abstract.fuzzySearchKeywords": "Abstract",
    "newBlock.abstract.title": "Abstract",
    "newBlock.audio.description": "从 SoundCloud、Spotify 等嵌入音频。",
    "newBlock.audio.fuzzySearchKeywords":
      "Audio Sound Music 音频 yinpin yin'pin 音效 yinxiao yin'xiao 声音 shengyin sheng'yin 音乐 yinyue yin'yue",
    "newBlock.audio.title": "音频",
    "newBlock.boardView.description": "创建看板数据库视图。",
    "newBlock.boardView.title": "看板视图",
    "newBlock.bookmark.description": "通过链接创建可视化书签。",
    "newBlock.bookmark.fuzzySearchKeywords":
      "Web Link Bookmark 网页 wangye wang'ye 链接 lianjie lian'jie 书签 shuqian shu'qian",
    "newBlock.bookmark.title": "网页书签",
    "newBlock.breadcrumb.description": "显示目前页面的位置。",
    "newBlock.breadcrumb.fuzzySearchKeywords":
      "Breadcrumb 面包屑 mianbaoxie mian'bao'xie 页面路径 yemianlujing ye'mian'lu'jing 路径 lujing lu'jing",
    "newBlock.breadcrumb.title": "导航栏",
    "newBlock.bulletedList.description": "创建一个简单的项目符号列表。",
    "newBlock.bulletedList.fuzzySearchKeywords":
      "Bulleted Unordered List 项目符号 xiangmufuhao xiang'mu'fu'hao 无序 wuxu wu'xu 列表 liebiao lie'biao",
    "newBlock.bulletedList.title": "项目符号列表",
    "newBlock.calendarView.description": "创建日历数据库视图。",
    "newBlock.calendarView.title": "日历视图",
    "newBlock.callout.description": "将文字加强突出。",
    "newBlock.callout.fuzzySearchKeywords": "Callout 标注 biaozhu biao'zhu",
    "newBlock.callout.title": "标注",
    "newBlock.code.description": "摘取代码段。",
    "newBlock.code.fuzzySearchKeywords": "Code ``` 代码 daima dai'ma",
    "newBlock.code.title": "代码",
    "newBlock.codepen.description": "嵌入 Codepen 项目。",
    "newBlock.codepen.fuzzySearchKeywords": "CodePen Codepen",
    "newBlock.codepen.title": "CodePen",
    "newBlock.database.description": "创建新数据库。",
    "newBlock.database.title": "数据库",
    "newBlock.databaseFullPage.fuzzySearchKeywords": "数据库整页 db",
    "newBlock.databaseFullPage.title": "数据库 - 整页",
    "newBlock.databaseInline.fuzzySearchKeywords": "数据库行内 db",
    "newBlock.databaseInline.title": "数据库 - 行内",
    "newBlock.deepnote.description": "嵌入 Deepnote 块。",
    "newBlock.deepnote.fuzzySearchKeywords": "Deepnote",
    "newBlock.deepnote.title": "Deepnote",
    "newBlock.divider.description": "在视觉上创建分隔。",
    "newBlock.divider.fuzzySearchKeywords":
      "Horizontal Rule Divider --- —- 水平 shuiping shui'ping 分隔线 fengexian fen'ge'xian 分割尺 fengechi fen'ge'chi —— ",
    "newBlock.divider.title": "分隔线",
    "newBlock.drive.description": "嵌入谷歌文档、谷歌表格等。",
    "newBlock.drive.fuzzySearchKeywords":
      "Google Drive 谷歌 guge gu'ge 网盘 wangpan wang'pan 云盘 yunpan yun'pan",
    "newBlock.drive.title": "谷歌云端硬盘",
    "newBlock.embed.description": "适用于 PDF、谷歌地图等。",
    "newBlock.embed.fuzzySearchKeywords": "Embed iFrame 嵌入 qianru qian'ru",
    "newBlock.embed.title": "嵌入",
    "newBlock.equation.description": "显示独立的数学公式块。",
    "newBlock.equation.fuzzySearchKeywords":
      "LaTeX Math Block Equation $ 数学 shuxue shu'xue 区块 qukuai qu'kuai 方程式 fangchengshi fang'cheng'shi 公式 gongshi gong'shi 算式 suanshi suan'shi 等式 dengshi deng'shi 表达式 biaodashi biao'da'shi",
    "newBlock.equation.title": "公式块",
    "newBlock.excalidraw.description": "嵌入Excalidraw白板。",
    "newBlock.excalidraw.fuzzySearchKeywords": "Excalidraw Xcalidro",
    "newBlock.excalidraw.title": "Excalidraw",
    "newBlock.factory.description": "点击即可快速重复特定区块。",
    "newBlock.factory.fuzzySearchKeywords":
      "Template Duplicate Button 模板 muban mu'ban 复制 fuzhi fu'zhi 按钮 anniu an'niu 副本 fuben fu'ben",
    "newBlock.factory.title": "模板按钮",
    "newBlock.figma.description": "嵌入 Figma 文件。",
    "newBlock.figma.fuzzySearchKeywords": "Figma",
    "newBlock.figma.title": "Figma",
    "newBlock.file.description": "上传或以链接嵌入。",
    "newBlock.file.fuzzySearchKeywords": "File 文件 wenjian wen'jian",
    "newBlock.file.title": "文件",
    "newBlock.framer.description": "嵌入 Framer 原型。",
    "newBlock.framer.fuzzySearchKeywords": "Framer",
    "newBlock.framer.title": "Framer",
    "newBlock.fullPageBoard.description": "创建一个看板作为子页面。",
    "newBlock.fullPageBoard.fuzzySearchKeywords":
      "Board - Full page 看板 kanban kan'ban 整页 zhengye zheng'ye",
    "newBlock.fullPageBoard.title": "看板・整页",
    "newBlock.fullPageBoardDatabase.description": "将看板数据库添加为子页面。",
    "newBlock.fullPageBoardDatabase.fuzzySearchKeywords": "看板数据库 - 整页",
    "newBlock.fullPageBoardDatabase.title": "看板数据库 - 整页",
    "newBlock.fullPageCalendar.description": "创建一个日历作为子页面。",
    "newBlock.fullPageCalendar.fuzzySearchKeywords":
      "Calendar - Full page 日历 rili ri'li 整页 zhengye zheng'ye",
    "newBlock.fullPageCalendar.title": "日历・整页",
    "newBlock.fullPageCalendarDatabase.description":
      "将日历数据库添加为子页面。",
    "newBlock.fullPageCalendarDatabase.fuzzySearchKeywords":
      "日历数据库 - 整页",
    "newBlock.fullPageCalendarDatabase.title": "日历数据库 - 整页",
    "newBlock.fullPageGallery.description": "创建一个画廊作为子页面。",
    "newBlock.fullPageGallery.fuzzySearchKeywords":
      "Gallery - Full page 画廊 hualang hua'lang 整页 zhengye zheng'ye",
    "newBlock.fullPageGallery.title": "画廊・整页",
    "newBlock.fullPageGalleryDatabase.description":
      "将画廊数据库添加为子页面。",
    "newBlock.fullPageGalleryDatabase.fuzzySearchKeywords": "画廊数据库 - 整页",
    "newBlock.fullPageGalleryDatabase.title": "画廊数据库 - 整页",
    "newBlock.fullPageList.description": "创建一个列表作为子页面。",
    "newBlock.fullPageList.fuzzySearchKeywords":
      "List - Full page 列表 liebiao lie'biao 整页 zhengye zheng'ye",
    "newBlock.fullPageList.title": "列表・整页",
    "newBlock.fullPageListDatabase.description": "将列表数据库添加为子页面。",
    "newBlock.fullPageListDatabase.fuzzySearchKeywords": "列表数据库 - 整页",
    "newBlock.fullPageListDatabase.title": "列表数据库 - 整页",
    "newBlock.fullPageTable.description": "创建一个表格作为子页面。",
    "newBlock.fullPageTable.fuzzySearchKeywords":
      "Table - Full page 表格 biaoge biao'ge 整页 zhengye zheng'ye",
    "newBlock.fullPageTable.title": "表格・整页",
    "newBlock.fullPageTableDatabase.description": "将表格数据库添加为子页面。",
    "newBlock.fullPageTableDatabase.fuzzySearchKeywords": "表格数据库 - 整页",
    "newBlock.fullPageTableDatabase.title": "表格数据库 - 整页",
    "newBlock.fullPageTimeline.description": "创建一个时间轴作为子页面。",
    "newBlock.fullPageTimeline.fuzzySearchKeywords":
      "Timeline - Full page 时间轴 shijianzhou shi'jian'zhou 整页 zhengye zheng'ye",
    "newBlock.fullPageTimeline.title": "时间轴・整页",
    "newBlock.fullPageTimelineDatabase.description":
      "将时间轴数据库添加为子页面。",
    "newBlock.fullPageTimelineDatabase.fuzzySearchKeywords":
      "时间轴数据库 - 整页",
    "newBlock.fullPageTimelineDatabase.title": "时间轴数据库 - 整页",
    "newBlock.galleryView.description": "创建画廊数据库视图。",
    "newBlock.galleryView.title": "画廊视图",
    "newBlock.gist.description": "嵌入 GitHub Gist。",
    "newBlock.gist.fuzzySearchKeywords": "GitHub Gist",
    "newBlock.gist.title": "GitHub Gist",
    "newBlock.header.description": "大大的标题。",
    "newBlock.header.fuzzySearchKeywords": "Heading 1 # 标题 biaoti biao'ti",
    "newBlock.header.title": "标题 1",
    "newBlock.hex.description": "嵌入 Hex 单元格。",
    "newBlock.hex.fuzzySearchKeywords": "Hex",
    "newBlock.hex.title": "Hex",
    "newBlock.image.description": "上传或以链接嵌入。",
    "newBlock.image.fuzzySearchKeywords":
      "Image Picture 图片 tupian tu'pian 图像 tuxiang tu'xiang 图形 tuxing tu'xing",
    "newBlock.image.title": "图片",
    "newBlock.inlineBoard.description": "在此页面中创建内嵌看板。",
    "newBlock.inlineBoard.fuzzySearchKeywords":
      "Board - Inline 看板 kanban kan'ban 内嵌 neiqian nei'qian",
    "newBlock.inlineBoard.title": "看板・内嵌",
    "newBlock.inlineBoardDatabase.description": "将看板数据库添加到此页面。",
    "newBlock.inlineBoardDatabase.fuzzySearchKeywords": "看板数据库 - 行内",
    "newBlock.inlineBoardDatabase.title": "看板数据库 - 行内",
    "newBlock.inlineCalendar.description": "在此页面中创建内嵌日历。",
    "newBlock.inlineCalendar.fuzzySearchKeywords":
      "Calendar - Inline 日历 rili ri'li 内嵌 neiqian nei'qian",
    "newBlock.inlineCalendar.title": "日历・内嵌",
    "newBlock.inlineCalendarDatabase.description": "将日历数据库添加到此页面。",
    "newBlock.inlineCalendarDatabase.fuzzySearchKeywords": "日历数据库 - 行内",
    "newBlock.inlineCalendarDatabase.title": "日历数据库 - 行内",
    "newBlock.inlineGallery.description": "在此页面中创建内嵌画廊。",
    "newBlock.inlineGallery.fuzzySearchKeywords":
      "Gallery - Inline 画廊 hualang hua'lang 内嵌 neiqian nei'qian",
    "newBlock.inlineGallery.title": "画廊・内嵌",
    "newBlock.inlineGalleryDatabase.description": "将画廊数据库添加到此页面。",
    "newBlock.inlineGalleryDatabase.fuzzySearchKeywords": "画廊数据库 - 行内",
    "newBlock.inlineGalleryDatabase.title": "画廊数据库 - 行内",
    "newBlock.inlineList.description": "在此页面中创建内嵌列表。",
    "newBlock.inlineList.fuzzySearchKeywords":
      "List - Inline 列表 liebiao lie'biao 内嵌 neiqian nei'qian",
    "newBlock.inlineList.title": "列表・内嵌",
    "newBlock.inlineListDatabase.description": "将列表数据库添加到此页面。",
    "newBlock.inlineListDatabase.fuzzySearchKeywords": "列表数据库 - 行内",
    "newBlock.inlineListDatabase.title": "列表数据库 - 行内",
    "newBlock.inlineTable.description": "在此页面中创建内嵌表格。",
    "newBlock.inlineTable.fuzzySearchKeywords":
      "Table - Inline 表格 biaoge biao'ge 内联 neilian nei'lian",
    "newBlock.inlineTable.title": "表格・内嵌",
    "newBlock.inlineTableDatabase.description": "将表格数据库添加到此页面。",
    "newBlock.inlineTableDatabase.fuzzySearchKeywords": "表格数据库 - 行内",
    "newBlock.inlineTableDatabase.title": "表格数据库 - 行内",
    "newBlock.inlineTimeline.description": "在此页面中创建内嵌时间轴。",
    "newBlock.inlineTimeline.fuzzySearchKeywords":
      "Timeline - Inline 时间轴-内联 shijianzhou-neilian shi'jian'zhou'-'nei'lian",
    "newBlock.inlineTimeline.title": "时间轴・内嵌",
    "newBlock.inlineTimelineDatabase.description":
      "将时间轴数据库添加到此页面。",
    "newBlock.inlineTimelineDatabase.fuzzySearchKeywords":
      "时间轴数据库 - 行内",
    "newBlock.inlineTimelineDatabase.title": "时间轴数据库 - 行内",
    "newBlock.invision.description": "嵌入 Invision 项目。",
    "newBlock.invision.fuzzySearchKeywords": "Invision",
    "newBlock.invision.title": "Invision",
    "newBlock.linkToCollection.description": "将现有数据库添加到此页面。",
    "newBlock.linkToCollection.fuzzySearchKeywords":
      "Create linked database 创建 chuangjian chuang'jian 链接 lianjie lian'jie 数据库 shujuku shu'ju'ku",
    "newBlock.linkToCollection.title": "创建链接数据库",
    "newBlock.linkToPage.description": "链接到现有页面。",
    "newBlock.linkToPage.fuzzySearchKeywords":
      "Link to page ltp 链接 lianjie lian'jie 页面 yemian ye'mian",
    "newBlock.linkToPage.title": "链接到页面",
    "newBlock.linkedViewOfCollection.description": "将现有数据库添加到此页面。",
    "newBlock.linkedViewOfCollection.fuzzySearchKeywords":
      "创建数据库 db 的链接视图",
    "newBlock.linkedViewOfCollection.title": "链接的视图",
    "newBlock.listView.description": "创建列表数据库视图。",
    "newBlock.listView.title": "列表视图",
    "newBlock.loom.description": "嵌入 Loom 录像。",
    "newBlock.loom.fuzzySearchKeywords": "Loom",
    "newBlock.loom.title": "Loom",
    "newBlock.maps.description": "嵌入谷歌地图。",
    "newBlock.maps.fuzzySearchKeywords":
      "Google Maps 谷歌 guge gu'ge 地图 ditu di'tu",
    "newBlock.maps.title": "谷歌地图",
    "newBlock.miro.description": "嵌入 Miro 画板。",
    "newBlock.miro.fuzzySearchKeywords": "Miro",
    "newBlock.miro.title": "Miro",
    "newBlock.numberedList.description": "创建一个带有序号的列表。",
    "newBlock.numberedList.fuzzySearchKeywords":
      "Numbered Ordered List 编号 bianhao bian'hao 有序 youxu you'xu 列表 liebiao lie'biao 序号 xuhao xu'hao",
    "newBlock.numberedList.title": "有序列表",
    "newBlock.page.description": "在此页面中嵌入子页面。",
    "newBlock.page.fuzzySearchKeywords": "Page 页面 yemian ye'mian",
    "newBlock.page.title": "页面",
    "newBlock.pdf.description": "嵌入 PDF 文件。",
    "newBlock.pdf.fuzzySearchKeywords": "PDF P'D'F",
    "newBlock.pdf.title": "PDF",
    "newBlock.quote.description": "摘取引用。",
    "newBlock.quote.fuzzySearchKeywords": "Quote 引用 yinyong yin'yong",
    "newBlock.quote.title": "引用",
    "newBlock.replit.description": "嵌入Repl。",
    "newBlock.replit.fuzzySearchKeywords": "Replit Repl",
    "newBlock.replit.title": "Replit",
    "newBlock.simple_table.description": "为表格内容添加表格",
    "newBlock.simple_table.fuzzySearchKeywords": "表",
    "newBlock.simple_table.title": "表",
    "newBlock.sketch.description": "嵌入Sketch文档。",
    "newBlock.sketch.fuzzySearchKeywords": "Sketch",
    "newBlock.sketch.title": "Sketch",
    "newBlock.subHeader.description": "中标题。",
    "newBlock.subHeader.fuzzySearchKeywords":
      "sub heading 2 ## 子标题 zibiaoti zi'biao'ti 副标题 fubiaoti fu'biao'ti 中标题 zhongbiaoti zhong'biao'ti",
    "newBlock.subHeader.title": "标题 2",
    "newBlock.subSubHeader.description": "小标题。",
    "newBlock.subSubHeader.fuzzySearchKeywords":
      "sub heading 3 ### 小标题 xiaobiaoti xiao'biao'ti 子标题 zibiaoti zi'biao'ti",
    "newBlock.subSubHeader.title": "标题 3",
    "newBlock.tab.description": "选项卡",
    "newBlock.tab.keywords": "选项卡",
    "newBlock.tab.title": "创建制表符块",
    "newBlock.tableOfContents.description": "显示页面大纲。",
    "newBlock.tableOfContents.fuzzySearchKeywords":
      "TOC Table of Contents 目录 mulu mu'lu 大纲 dagang da'gang",
    "newBlock.tableOfContents.title": "目录",
    "newBlock.tableView.description": "创建表格数据库视图。",
    "newBlock.tableView.title": "表格视图",
    "newBlock.text.description": "以纯文本开始书写。",
    "newBlock.text.fuzzySearchKeywords":
      "Plain Text 纯文本 chunwenben chun'wen'ben 文本 wenben wen'ben 纯文字 chunwenzi chun'wen'zi 文字 wenzi wen'zi",
    "newBlock.text.title": "文本",
    "newBlock.timelineView.description": "创建时间轴数据库视图。",
    "newBlock.timelineView.title": "时间轴视图",
    "newBlock.toDo.description": "使用待办清单追踪任务。",
    "newBlock.toDo.fuzzySearchKeywords":
      "Todo To-Do Checkbox List 待办 daiban dai'ban 待办事项 daibanshixiang dai'ban'shi'xiang 复选框 fuxuankuang fu'xuan'kuang 清单 qingdan qing'dan 列表 liebiao lie'biao",
    "newBlock.toDo.title": "待办清单",
    "newBlock.toggle.description": "折叠列表可以选择性隐藏或显示内部内容。",
    "newBlock.toggle.fuzzySearchKeywords":
      "Toggle list 切换 qiehuan qie'huan 列表 liebiao lie'biao 切换列表 qiehuanliebiao qie'huan'lie'biao",
    "newBlock.toggle.title": "折叠列表",
    "newBlock.toggleFormatHeader.description": "将内容隐藏在大标题内。",
    "newBlock.toggleFormatHeader.keywords": "切换格式标题 1",
    "newBlock.toggleFormatHeader.title": "切换标题 1",
    "newBlock.toggleFormatSubHeader.description": "将内容隐藏在中等标题内。",
    "newBlock.toggleFormatSubHeader.keywords": "切换格式标题 2",
    "newBlock.toggleFormatSubHeader.title": "切换标题 2",
    "newBlock.toggleFormatSubSubHeader.description": "将内容隐藏在小标题内。",
    "newBlock.toggleFormatSubSubHeader.keywords": "切换格式标题 3",
    "newBlock.toggleFormatSubSubHeader.title": "切换标题 3",
    "newBlock.transclusionContainer.description": "同步所有页面的内容。",
    "newBlock.transclusionContainer.fuzzySearchKeywords":
      "Create synced block reference transclusion portal embed 同步 tongbu tong'bu",
    "newBlock.transclusionContainer.title": "同步块",
    "newBlock.tweet.description": "嵌入推文。",
    "newBlock.tweet.fuzzySearchKeywords": "Tweet 推文 tuiwen tui'wen",
    "newBlock.tweet.title": "推文",
    "newBlock.typeform.description": "嵌入 Typeform 表单。",
    "newBlock.typeform.fuzzySearchKeywords": "Typeform",
    "newBlock.typeform.title": "Typeform",
    "newBlock.video.description": "从 YouTube、Vimeo 等嵌入视频。",
    "newBlock.video.fuzzySearchKeywords": "Video 视频 shipin shi'pin",
    "newBlock.video.title": "视频",
    "newBlock.whimsical.description": "嵌入 Whimsical 画板。",
    "newBlock.whimsical.fuzzySearchKeywords": "Whimsical",
    "newBlock.whimsical.title": "Whimsical",
    "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label":
      "放弃",
    "newDiscussionMenu.discardCommentConfirmationDialog.prompt":
      "你想放弃这条评论吗？",
    "notificationActions.archiveNotificationsError.message": "出了些问题。",
    "notificationAndPersonalSettings.notificationSection.title": "我的通知",
    "notificationAndPersonalSettings.settingsSection.title": "我的设置",
    "notificationSettings.desktopNotificationSettings.description":
      "通过你的桌面应用接收提及和评论的即时推送通知。",
    "notificationSettings.desktopNotificationSettings.title": "桌面推送通知",
    "notificationSettings.emailAlwaysNotificationSettings.description":
      "通过电子邮件接收更新，即使你在应用上处于活动状态。",
    "notificationSettings.emailAlwaysNotificationSettings.title":
      "始终发送电子邮件通知",
    "notificationSettings.emailNotificationSettings.description":
      "通过电子邮件接收你关注的所有页面的编辑摘要、评论和提及。",
    "notificationSettings.emailNotificationSettings.title": "电子邮件通知",
    "notificationSettings.helpButton.caption": "了解通知与设置",
    "notificationSettings.mobilePushNotificationSettings.description":
      "通过你的移动应用接收提及和评论的推送通知。",
    "notificationSettings.mobilePushNotificationSettings.title":
      "移动端推送通知",
    "notificationSettings.notificationSection.title": "通知",
    "notificationSettingsButton.generalSection.title": "一般",
    "notificationSettingsButton.goOnline.prompt": "请连接网络后设置。",
    "notificationSettingsButton.mobileSidebar.label": "通知与设置",
    "notificationSettingsButton.mobileSidebar.title": "通知与设置",
    "notificationSettingsButton.rightActionButton.done": "完成",
    "notificationUpdates.offline.message": "请连接网络后查看动态。",
    "notificationUpdates.unknownErrorMessage": "出了些问题。",
    "notionAppContainer.dialog.mismatchedOriginURL.okayButton.label": "好的",
    "notionAppContainer.dialog.notionAppNotInApplications.message":
      "请将 Notion 应用程序移至 /Applications 文件夹，以使自动更新程序正常工作。",
    "numberedListBlock.placeholder.label": "项目",
    "oauthAuthorizationPage.error.cancelButton.label": "取消",
    "oauthAuthorizationPage.error.clientNotFound.body":
      "客户端 ID 缺失或不完整。请参阅<inlinetextlink>开发人员文档</inlinetextlink>以获得更多帮助。",
    "oauthAuthorizationPage.error.genericError.title": "出了些问题",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.body":
      "你可以在“设置”中查看和删除已添加的集成。",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.openWorkspaceSettingsButton.label":
      "打开设置",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.title":
      "此集成已添加到 {workspaceName}",
    "oauthAuthorizationPage.error.integrationNotApproved.body":
      "有关更多信息，请联系系统管理员。",
    "oauthAuthorizationPage.error.integrationNotApproved.title":
      '不允许将集成"{integrationName}"添加到{workspaceName}',
    "oauthAuthorizationPage.error.invalidClientId.body":
      "客户端 ID 缺失或不完整。请参阅<inlinetextlink>开发人员文档</inlinetextlink>以获得更多帮助。",
    "oauthAuthorizationPage.error.invalidRedirectUri.body":
      "redirect_uri 缺失或无效。请参阅<inlinetextlink>开发人员文档</inlinetextlink>以获得更多帮助。",
    "oauthAuthorizationPage.error.invalidResponseType":
      "response_type 缺失或无效。请参阅<inlinetextlink>开发人员文档</inlinetextlink>以获得更多帮助。",
    "oauthAuthorizationPage.error.notAnAdmin.body":
      "请与管理员联系以授予你访问权限，或切换到其他工作区。",
    "oauthAuthorizationPage.error.notAnAdmin.switchWorkspaceButton.label":
      "切换工作区",
    "oauthAuthorizationPage.error.notAnAdmin.title":
      "不允许向 {workspaceName} 添加集成",
    "oauthAuthorizationPage.permissionStep.cancelButton.label": "取消",
    "oauthAuthorizationPage.permissionStep.continueButton.label": "选择页面",
    "oauthAuthorizationPage.permissionStep.createSpaceLevelIntegrationCheckbox.label":
      "与 {workspaceName} 的每个人分享集成",
    "oauthAuthorizationPage.permissionStep.finishButton.label": "允许访问",
    "oauthAuthorizationPage.permissionStep.integrationApprovalNotice":
      "授权此集成将其添加到工作区的批准列表中。其他工作区成员将能够安装此集成。",
    "oauthAuthorizationPage.permissionStep.intro":
      "<inlinetextlink>{integrationName}</inlinetextlink> 想要",
    "oauthAuthorizationPage.permissionStep.permissionListItem.addNewPages":
      "向 {workspaceName} 添加新页面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.addNewPages.details":
      "{integrationName} 将能够在其有权访问的页面内添加新页面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertContent":
      "在你选择的页面中创建新内容",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertContent.description":
      "“{integrationName}”将能够向你在下一步选择的页面添加新内容或子页面。你稍后还可以通过“分享”菜单与“{integrationName}”分享页面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readContent":
      "查看你选择的页面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readContent.description":
      "“{integrationName}”将能够查看你在下一步选择的页面。你稍后还可以通过“分享”菜单与“{integrationName}”分享页面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.updateContent":
      "编辑你选择的页面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.updateContent.description":
      "“{integrationName}”将能够编辑你在下一步选择的页面。你稍后还可以通过“分享”菜单与“{integrationName}”分享页面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewAndEditPages":
      "查看和编辑你选择的页面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewAndEditPages.description":
      "{integrationName} 将能够查看和编辑你在下一步选择的页面。你稍后还可以通过“分享”菜单与 {integrationName} 分享页面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers":
      "查看工作区用户",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers.detail":
      '"{integrationName}"将能够查看所有工作区成员和访客的基本信息，例如他们的姓名和个人资料图片，但不能查看他们的电子邮件地址。',
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsersAndEmail":
      "查看工作区用户及其邮箱地址",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsersAndEmail.detail":
      "“{integrationName}”将能够查看有关所有工作区成员和访客数据的基本信息，包括他们的姓名、个人资料图片和电子邮件地址。",
    "oauthAuthorizationPage.permissionStep.title":
      "<inlinetextlink>{integrationName}</inlinetextlink> 想要访问 {workspaceName}",
    "oauthAuthorizationPage.permissionStep.warning.body":
      "如果继续，你可能会共享敏感信息。Notion 不会审核第三方集成，例如“{integrationName}”。通过查看其<privacypolicylink>隐私政策</privacypolicylink>和<termsofservicelink>服务条款</termsofservicelink>了解“{integrationName}”如何处理你的数据。",
    "oauthAuthorizationPage.permissionStep.warning.title":
      "确保你信任“{integrationName}” ({redirectUriDomain})",
    "oauthAuthorizationPage.selectPageStep.empty": "内无页面",
    "oauthAuthorizationPage.selectPagesStep.backButton.label": "返回",
    "oauthAuthorizationPage.selectPagesStep.finishButton.label": "允许访问",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.manuallyAddedPagesSection.title":
      "手动添加",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.privateSection.title":
      "私人",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.search.placeholder":
      "在 {workspaceName} 中搜索页面",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.sharedSection.title":
      "已共享",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.workspaceSection.title":
      "工作区",
    "oauthAuthorizationPage.selectPagesStep.title":
      "允许“{integrationName}”访问这些页面",
    "oauthAuthorizationPage.workspaceSwitcher.disabledWorkspace.tooltip":
      "此集成只能由成员或管理员添加。",
    "oauthPageSearchResults.disabledResult.byAncestor.message":
      "已通过 {ancestorPageName} 添加",
    "oauthPageSearchResults.disabledResult.bySelf.message": "已添加",
    "oauthPageSearchResults.noResults.placeholder": "无结果",
    "offlineErrors.offlineErrorMessage": "脱机。",
    "onboarding.desktopLogoutOption.text":
      "你正在为 {userEmail} 新建帐户。{br}如果你不打算设置新帐户，可以使用<closelink>另一个邮箱地址登录。</closelink>",
    "onboarding.mobileAppDownloadStep.button": "下载 Notion",
    "onboarding.mobileAppDownloadStep.subTitle":
      "在你的移动浏览器上完成 Notion 设置或下载 {os} 版 Notion。",
    "onboarding.mobileAppDownloadStep.title": "<boldtext>获取应用</boldtext>",
    "onboarding.workspaceCreate.buttonLabel.title": "添加 logo",
    "onboardingActions.closeOnboardingDialog.existingUser.confirmCloseButton.label":
      "回到之前的工作区",
    "onboardingActions.closeOnboardingDialog.existingUser.continueButton.label":
      "继续设置",
    "onboardingActions.closeOnboardingDialog.existingUser.subtitle":
      "你将回到之前的工作区。",
    "onboardingActions.closeOnboardingDialog.existingUser.title":
      "取消设置新的工作区？",
    "onboardingActions.closeOnboardingDialog.newUser.confirmCloseButton.label":
      "返回主页",
    "onboardingActions.closeOnboardingDialog.newUser.continueButton.label":
      "继续设置",
    "onboardingActions.closeOnboardingDialog.newUser.subtitle":
      "你将回到 Notion 主页。",
    "onboardingActions.closeOnboardingDialog.newUser.title": "取消新帐户设置？",
    "onboardingActions.onboardingErrorDialog.closeButton.label": "关闭",
    "onboardingActions.onboardingErrorDialog.message": "糟糕，出了些问题。",
    "onboardingActions.onboardingErrorDialog.startOverButton.label": "重新开始",
    "onboardingAppDownload.step.downloadMacButton": "下载 Windows 应用",
    "onboardingAppDownload.step.downloadWindowsButton": "下载 Windows 应用",
    "onboardingAppDownload.step.title": "下载 Notion",
    "onboardingAppDownload.subtitle.mac":
      "使用 Mac 版 Notion 应用，以获得更好的离线和通知体验。",
    "onboardingAppDownload.subtitle.macAndWindows":
      "使用 Mac 版或 Windows 版 Notion 应用，以获得更好的离线和通知体验。",
    "onboardingAppDownload.subtitle.windows":
      "使用 Windows 版 Notion 应用，以获得更好的离线和通知体验。",
    "onboardingChecklist.collab.comments.text":
      "请向团队成员留言反馈、提问和意见。直接在页面的评论主题中讨论想法，协调您的意见并做出决定。",
    "onboardingChecklist.collab.comments.title": "评论",
    "onboardingChecklist.collab.mentions.text":
      "要支持团队成员，请在页面或评论中键入@，然后输入团队成员的姓名。收到通知的团队成员可以立即加入。",
    "onboardingChecklist.collab.mentions.title": "提及",
    "onboardingChecklist.createContent.block.title": "块",
    "onboardingChecklist.createContent.blockTypes.text":
      "块是组成Notion页面的元素。块可以包含不同类型的内容，包括文本、图像、复选框和表格。",
    "onboardingChecklist.createContent.rearrangeBlocks.text":
      "将块替换为其他内容类型，以便以新的方式使用、显示和更详细地表达包括的信息。",
    "onboardingChecklist.createContent.rearrangeBlocks.title": "重新排列块",
    "onboardingChecklist.createContent.transformBlocks.title": "改变块",
    "onboardingChecklist.createPages.slashCommand.text":
      "如果键入/，则会出现一个菜单，其中包含可以添加到Notion页面的所有内容类型。😋",
    "onboardingChecklist.createPages.slashCommand.title": "斜线命令",
    "onboardingChecklist.createPages.subPage.text":
      "在页面上输入/页面命令以创建子页面。您可以更有层次地组织你的内容，方便随时查找。",
    "onboardingChecklist.createPages.subPage.title": "子页",
    "onboardingChecklist.createPages.text":
      "单击工作区左下角的+新页面或侧栏中的+按钮，即可创建新页面。",
    "onboardingChecklist.createPages.title": "创建新页面",
    "onboardingChecklist.share.addTeammates.text":
      "和团队一起工作吗？通过从“设置”和“成员”菜单添加团队成员，您可以共享所有相同的Notion工作空间。",
    "onboardingChecklist.share.addTeammates.title": "添加团队成员",
    "onboardingChecklist.share.button.text":
      "使用页面右上角的“分享”按钮，您可以邀请非工作区成员以及非成员进行协作。",
    "onboardingChecklist.share.button.title": "“分享”按钮",
    "onboardingChecklist.tipsAndTricks.downloadApps.text":
      "下载<a1>桌面</a1>或<a2>移动</a2>应用。",
    "onboardingChecklist.tipsAndTricks.exploreTemplates.text":
      "<link>查看模板</link>",
    "onboardingChecklist.tipsAndTricks.import.text":
      "查看我们的<a>帮助中心</a>了解更多信息！",
    "onboardingChecklist.tipsAndTricks.templates.text":
      "使用我们的<a>模板画廊</a>浏览模板！",
    "onboardingChecklist.tipsAndTricks.title": "了解详情",
    "onboardingChecklist.whatIsNotion.mainUsecases":
      "使用Notion，您可以执行各种任务，包括这些任务。",
    "onboardingChecklist.whatIsNotion.title": "Notion简介",
    "onboardingChecklist.whatIsNotion.youtubeVideoLink":
      "https://www.youtube.com/embed/oTahLEX3NXo",
    "onboardingChecklistButton.collaborateWithOthers.displayName":
      "与其他用户协作",
    "onboardingChecklistButton.createContent.displayName": "创建内容",
    "onboardingChecklistButton.createPages.displayName": "创建页面",
    "onboardingChecklistButton.getMoreHelp.button": "获得更多帮助",
    "onboardingChecklistButton.headerText": "<boldtext>Notion 新手</boldtext>",
    "onboardingChecklistButton.nextStage.complete": "完成！🎉",
    "onboardingChecklistButton.shareYourWork.displayName": "工作共享",
    "onboardingChecklistButton.slashAndBlocks.displayName": "斜线和块",
    "onboardingChecklistButton.stageFooter.next": "下一个",
    "onboardingChecklistButton.stageTracker":
      "第 {currentStageNumber} 个，共 {totalStageNumber} 个",
    "onboardingChecklistButton.stagesComplete":
      "已查看第 {numStagesComplete} 个，共 {numTotalStages} 个。",
    "onboardingChecklistButton.subtitleText":
      "欢迎使用一体化的 Notion 全能工作区。从这里开始学习基础知识。",
    "onboardingChecklistButton.tipsAndTricks.displayName": "帮助和技巧",
    "onboardingChecklistButton.title": "<b>Notion 基础知识</b>",
    "onboardingChecklistButton.tooltip": "Notion 基础知识",
    "onboardingChecklistButton.whatIsNotion.displayName": "Notion 是什么？",
    "onboardingGDPR.agreeButton.label": "同意",
    "onboardingGDPR.consentInfo.paragraph1.body":
      "我们使用 Cookie 来安全地识别你的帐户，让你保持登录状态，并改进我们的服务。",
    "onboardingGDPR.consentInfo.paragraph2.body":
      "我们透过行为数据分析来改进产品并解决客户的问题。其中包括 {intercomLink} 、 {amplitudeLink} 、 {segmentLink} 、 {snowflakeLink} 、 {crashlyticsLink}和{logglyLink}。我们将默认启用行为数据分析，因为它对我们的业务至关重要。",
    "onboardingGDPR.consentInfo.paragraph3.body":
      "你可以通过发送电子邮件到 {emailLink} 来撤销你对行为数据分析的许可。",
    "onboardingGDPR.consentInfo.paragraph4.body":
      "我们偶尔会发送产品更新和市场营销的电子邮件。每封电子邮件都会附上能让你立即退订的链接。",
    "onboardingGDPR.consentInfo.paragraph5.body":
      "请阅读我们的<termslink>服务条款与隐私政策</termslink>以获取更多信息。",
    "onboardingGDPR.disagreeButton.label": "不同意",
    "onboardingGDPR.mobileAgreeButton.label": "同意",
    "onboardingGDPR.mobileDisagreeButton.label": "不同意",
    "onboardingGDPR.step.title": "隐私与数据收集",
    "onboardingHelpers.personalWorkspaceName": "{userName}的 Notion",
    "onboardingInvite.addEmail.caption":
      "输入或粘贴一个或多个邮箱地址，以逗号、空格或换行符分隔。",
    "onboardingInvite.addEmail.invitePrompt": "通过电子邮件邀请",
    "onboardingInvite.addEmail.placeholder":
      "输入或粘贴邮箱地址（支持多个，以“,”分隔）",
    "onboardingInvite.bulkInvites.placeholder":
      "penny@myteam.com, varun@company.com, vicky@company.com, ...",
    "onboardingInvite.chrome.subtitle": "邀请你的队友以充分利用 Notion。",
    "onboardingInvite.chrome.title": "邀请队友",
    "onboardingInvite.desktopButton.invitedEmails.continueButton": "邀请并继续",
    "onboardingInvite.desktopButton.invitedEmails.finishButton":
      "邀请并转到 Notion",
    "onboardingInvite.desktopButton.label": "带我去 Notion",
    "onboardingInvite.desktopButton.labelWithAction": "邀请并继续",
    "onboardingInvite.email.placeholder": "邮箱地址",
    "onboardingInvite.emailDomainAutoJoinCheckbox.label":
      "允许拥有 <b>@{emailDomain}</b> 邮箱地址的任何人加入此工作区",
    "onboardingInvite.emails.addAnotherButtonText": "添加另一个",
    "onboardingInvite.emails.addMoreOrInviteInBulkText": "添加更多或批量邀请",
    "onboardingInvite.emails.sendInvites": "发送邀请",
    "onboardingInvite.error.invalidEmailFound.message":
      "找到一个或多个无效邮箱地址。",
    "onboardingInvite.finishButton": "转到 Notion",
    "onboardingInvite.invalidEmails.error.message":
      "有些邮箱地址似乎无效。再试一次？",
    "onboardingInvite.mobile.copyButton.title": "复制邀请链接",
    "onboardingInvite.mobileButton.label": "继续",
    "onboardingInvite.mobileStep.subtitle": "Notion 适合任何规模的团队。",
    "onboardingInvite.mobileStep.title": "邀请队友",
    "onboardingInvite.shareInviteLink.caption":
      "当你的队友点击此链接时，他们会自动添加到你的工作区。",
    "onboardingInvite.shareInviteLink.message": "分享秘密邀请链接",
    "onboardingInvite.sharingButton.copied": "已复制！",
    "onboardingInvite.sharingButton.copy": "获取可共享的链接",
    "onboardingInvite.sharingButton.tooltip.copy": "使用此链接邀请队友",
    "onboardingInviteNew.error.invalidEmail.message": "无效的邮箱地址。",
    "onboardingMobileScroller.continueButton.label": "继续",
    "onboardingMobileTutorial.button.skip": "跳过",
    "onboardingMobileTutorial.button.takeMeToNotion": "转到 Notion",
    "onboardingMobileTutorial.getStartedButton.label": "立即开始",
    "onboardingMobileTutorial.nextButton.label": "下一个",
    "onboardingPopup.next": "下一个",
    "onboardingPopup.skip": "跳过其余部分",
    "onboardingProfile.addProfilePhotoButton.label": "添加照片",
    "onboardingProfile.changeProfilePhotoButton.label": "更改",
    "onboardingProfile.continueButton.label": "继续",
    "onboardingProfile.dialogError.photoUploadFailure.message": "上传失败。",
    "onboardingProfile.fieldUndefinedError.message": "未定义个人资料字段。",
    "onboardingProfile.firstNameInput.label": "名字",
    "onboardingProfile.firstNameInput.placeholder": "艾达",
    "onboardingProfile.lastNameInput.label": "姓氏",
    "onboardingProfile.lastNameInput.placeholder": "洛夫莱斯",
    "onboardingProfile.mobileFirstNameInput.label": "名字",
    "onboardingProfile.mobileFirstNameInput.placeholder": "艾达",
    "onboardingProfile.mobileLastNameInput.label": "姓氏",
    "onboardingProfile.mobileLastNameInput.placeholder": "洛夫莱斯",
    "onboardingProfile.mobileNameInput.placeholder":
      "例如 Ada Lovelace、Ada、AL",
    "onboardingProfile.mobileNameQuestion.label": "我们应该怎么称呼你？",
    "onboardingProfile.mobileStage.subtitle": "首先，请向我们介绍一下你自己。",
    "onboardingProfile.mobileStage.title": "欢迎来到 Notion",
    "onboardingProfile.nameInput.placeholder": "例如 Ada Lovelace、Ada、AL",
    "onboardingProfile.nameQuestion.label": "我们应该怎么称呼你？",
    "onboardingProfile.nameUndefinedError.message": "未填写名称。",
    "onboardingProfile.passwordGuidelines":
      "密码长度至少为 15 个字母，或者长度至少为 10 个字符且同时包含字母和数字。",
    "onboardingProfile.passwordInput.label": "设置密码",
    "onboardingProfile.passwordInput.placeholder": "新密码",
    "onboardingProfile.passwordUndefinedError.message": "未填写密码。",
    "onboardingProfile.stage.subtitle": "首先，请向我们介绍一下你自己。",
    "onboardingProfile.stage.title": "欢迎来到 Notion",
    "onboardingProfile.uploading.text": "上传中⋯",
    "onboardingStateActions.creatingWorkspace.loadingMessage": "马上就好⋯",
    "onboardingStateActions.errorMessage.noActionToPerform":
      "没有对{onboardingRedirectType}可执行的操作",
    "onboardingStateActions.joiningWorkspace.loadingMessage": "正在加入团队⋯",
    "onboardingStateActions.navigatingToWorkspace.loadingMessage":
      "正在转到你的工作区……",
    "onboardingTeamRoleSelect.teamRoleSelect.companyLead": "C 级或 VP",
    "onboardingTeamRoleSelect.teamRoleSelect.notLead": "我不管理团队",
    "onboardingTeamRoleSelect.teamRoleSelect.orgLead": "部门主管",
    "onboardingTeamRoleSelect.teamRoleSelect.placeholder": "选择团队角色",
    "onboardingTeamRoleSelect.teamRoleSelect.teamLead": "团队主管",
    "onboardingTeamRoleSelect.teamTypeMenu.title": "团队类型",
    "onboardingWorkspaceChoose.createSpaceOption.message": "创建新工作区",
    "onboardingWorkspaceChoose.joinWorkspaceButton.join.label": "加入",
    "onboardingWorkspaceChoose.joinWorkspaceButton.label": "{workspaceName}",
    "onboardingWorkspaceChoose.joinWorkspaceButton.memberCount.label":
      "{memberCount, plural, other {{memberCount} 个成员}}",
    "onboardingWorkspaceChoose.mobileStage.subtitle":
      "{numberOfWorkspaces, plural, other {看来你已被邀请到 {numberOfWorkspaces} 个工作区，现在就加入吧！}}",
    "onboardingWorkspaceChoose.mobileStage.title": "加入工作区",
    "onboardingWorkspaceChoose.stage.subtitle":
      "{numberOfWorkspaces, plural, other {你已被邀请到 {numberOfWorkspaces} 个工作区。选择加入，或创建新的工作区。}}",
    "onboardingWorkspaceChoose.stage.title": "与你的队友一起加入 Notion",
    "onboardingWorkspaceCreate.companySizePicker.label": "选择公司规模",
    "onboardingWorkspaceCreate.companySizePicker.placeholder": "公司规模",
    "onboardingWorkspaceCreate.companySizePicker.title": "公司规模",
    "onboardingWorkspaceCreate.fieldUndefinedError.message":
      "未定义工作区创建字段。",
    "onboardingWorkspaceCreate.initialUseCase.docNotesLabel": "笔记和文档",
    "onboardingWorkspaceCreate.initialUseCase.projectManagementLabel":
      "项目和任务",
    "onboardingWorkspaceCreate.initialUseCase.wikiLabel": "团队知识库",
    "onboardingWorkspaceCreate.nextButton.labelInvite": "继续",
    "onboardingWorkspaceCreate.roleOnTeam.label": "在团队中的角色",
    "onboardingWorkspaceCreate.rolePicker.label": "你的角色",
    "onboardingWorkspaceCreate.rolePicker.placeholder": "选择角色",
    "onboardingWorkspaceCreate.stage.subtitle": "为你的队友填写一些详细信息。",
    "onboardingWorkspaceCreate.stage.team.title": "创建团队工作区",
    "onboardingWorkspaceCreate.teamTypeMenu.title": "团队类型",
    "onboardingWorkspaceCreate.teamTypePicker.label": "你的首个团队",
    "onboardingWorkspaceCreate.teamTypePicker.placeholder": "选择团队类型",
    "onboardingWorkspaceCreate.useCase.label": "用 Notion 来",
    "onboardingWorkspaceCreate.workspaceNameInput.hint": "你公司或组织的名称。",
    "onboardingWorkspaceCreate.workspaceNameInput.label": "工作区名称",
    "onboardingWorkspaceCreate.workspaceNameInput.placeholder": "Acme 公司",
    "onboardingWorkspaceMobileScroller.mobileCancelButton.label": "取消",
    "onboardingWorkspacePlanChoose.continueButton.label": "继续",
    "onboardingWorkspacePlanChoose.goToNotionButton.label": "带我去 Notion",
    "onboardingWorkspacePlanChoose.mobileStep.subtitle":
      "我们将通过你的选择简化初期设置。",
    "onboardingWorkspacePlanChoose.mobileStep.title": "我用 Notion 来⋯",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.callout":
      "单人使用免费",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.description":
      "写得更好，想得更清晰。一切井然有序。",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.label": "为我自己",
    "onboardingWorkspacePlanChoose.step.subtitle":
      "我们将通过你的选择简化初期设置。",
    "onboardingWorkspacePlanChoose.step.title": "你打算如何使用 Notion？",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.callout": "免费试用",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.description":
      "协作处理你的文档、项目和知识库。",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.label": "与我的团队",
    "onboardingWorkspaceUseCaseSetup.continueButton.label": "继续",
    "onboardingWorkspaceUseCaseSetup.goToNotionButton.label": "带我去 Notion",
    "onboardingWorkspaceUseCaseSetup.mobileStep.title": "我在用 Notion 来",
    "onboardingWorkspaceUseCaseSetup.notesUseCaseButton.description":
      "捕捉想法，然后与团队分享。",
    "onboardingWorkspaceUseCaseSetup.notesUseCaseButton.label": "文档和笔记",
    "onboardingWorkspaceUseCaseSetup.notesUseCaseButtonPersonal.label":
      "笔记和整理",
    "onboardingWorkspaceUseCaseSetup.notesUseCasePersonal.description":
      "整理笔记、书签、食谱等。",
    "onboardingWorkspaceUseCaseSetup.personalUseCaseButton.callout": "导入于",
    "onboardingWorkspaceUseCaseSetup.segmentedButton.personalLabel": "为我自己",
    "onboardingWorkspaceUseCaseSetup.segmentedButton.teamLabel": "为我和团队",
    "onboardingWorkspaceUseCaseSetup.selectAllUseCases.label": "全选",
    "onboardingWorkspaceUseCaseSetup.selectUseCases.label": "选择用例",
    "onboardingWorkspaceUseCaseSetup.step.title": "你打算如何使用 Notion？",
    "onboardingWorkspaceUseCaseSetup.taskUseCaseButton.description":
      "直观地规划项目，并随时知道谁在做什么。",
    "onboardingWorkspaceUseCaseSetup.taskUseCaseButton.label": "项目和任务",
    "onboardingWorkspaceUseCaseSetup.taskUseCaseButtonPersonal.description":
      "在同个地方追踪所有待办事项和提醒。",
    "onboardingWorkspaceUseCaseSetup.taskUseCaseButtonPersonal.label":
      "待办事项和项目",
    "onboardingWorkspaceUseCaseSetup.teamUseCaseButton.callout": "可替代",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButton.callout":
      "&nbsp;HTML 和 Markdown",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButton.description":
      "你团队的长期记忆，全部集于一处。",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButton.label": "团队知识库",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButtonPersonal.description":
      "创建个人主页或网站，并与世界分享。",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButtonPersonal.label":
      "网站和知识库",
    "outliner.NoPagesInside.placeholder": "内无页面",
    "outlinerToggleButton.popup.buttonText": "好的",
    "outlinerToggleButton.popup.skipText": "清除模板",
    "outlinerViewAllMenuList.addToSidebar.tooltip": "添加到侧边栏",
    "outlinerViewAllMenuList.removeFromSidebar.tooltip": "从侧边栏移除",
    "outlinerViewAllPopover.menu.header": "已共享",
    "outlinerViewAllPopover.search.noMatchesPrompt": "未找到页面",
    "outlinerViewAllPopover.search.placeholder": "搜索共享页面",
    "page.backlinks.label": "链接到此页面",
    "page.backlinks.more": "其他 {count} 个",
    "page.backlinks.privatePages":
      "{count, plural, other {{count} 个私人页面}}",
    "page.backlinks.privatePagesTooltip": "已在你无权访问的页面中同步。",
    "page.blockActionMenu.tooltip": "重命名、删除等⋯",
    "page.changeIcon.tooltip": "更改图标",
    "page.linkToOriginalPage.tooltip": "这是原始页面的链接",
    "pageCover.changeCover.text": "更换封面",
    "pageCover.embedType.buttonText": "提交",
    "pageCover.embedType.caption": "适用于网络上任何图片。",
    "pageCover.embedType.placeholder": "粘贴图片链接⋯",
    "pageCover.embedType.title": "链接",
    "pageCover.errorDialogMessage.uploadFailed": "上传失败",
    "pageCover.fileType.caption": "宽于 {idealImageWidth} 像素的图片效果最佳。",
    "pageCover.formatSelectMenu.noResults.message": "无结果",
    "pageCover.gradientCategory.header": "颜色和渐变",
    "pageCover.gradients10.title": "渐变 10",
    "pageCover.gradients11.title": "渐变 11",
    "pageCover.gradients2.title": "渐变 2",
    "pageCover.gradients3.title": "渐变 3",
    "pageCover.gradients4.title": "渐变 4",
    "pageCover.gradients5.title": "渐变 5",
    "pageCover.gradients8.title": "渐变 8",
    "pageCover.metArnoldBocklin1880.subtitle": "1880，死者之岛",
    "pageCover.metArnoldBocklin1880.title": "阿诺德·勃克林",
    "pageCover.metBruegel1565.subtitle": "1565",
    "pageCover.metBruegel1565.title": "老彼得·勃鲁盖尔",
    "pageCover.metCamillePissarro1896.subtitle": "1896，阴天早晨的鲁昂",
    "pageCover.metCamillePissarro1896.title": "卡米耶·毕沙罗",
    "pageCover.metCanaletto1720.subtitle": "1720 年代",
    "pageCover.metCanaletto1720.title": "卡纳莱托",
    "pageCover.metCategory.header": "大都会艺术博物馆",
    "pageCover.metCezanne1890.subtitle": "1890，静物：苹果和报春花",
    "pageCover.metCezanne1890.title": "保罗·塞尚",
    "pageCover.metEdgarDegas1874.subtitle": "1874，舞蹈课",
    "pageCover.metEdgarDegas1874.title": "埃德加·德加",
    "pageCover.metEmanuelLeutze.subtitle": "1851，华盛顿横渡特拉华河",
    "pageCover.metEmanuelLeutze.title": "埃玛纽埃尔·洛伊茨",
    "pageCover.metFitzHenryLane.subtitle": "1854，金州号进入纽约港",
    "pageCover.metFitzHenryLane.title": "菲茨·亨利·莱恩",
    "pageCover.metFredericEdwinChurch1871.subtitle": "1871，帕特农神庙",
    "pageCover.metFredericEdwinChurch1871.title": "弗雷德里克·埃德温·丘奇",
    "pageCover.metGeorgesSeurat1884.subtitle": "1884，大碗岛的星期天下午练习版",
    "pageCover.metGeorgesSeurat1884.title": "乔治·秀拉",
    "pageCover.metGerome1890.subtitle": "1890，皮格马利翁和伽拉忒亚",
    "pageCover.metGerome1890.title": "让-里奥·杰洛姆",
    "pageCover.metGoya1789.subtitle": "1787",
    "pageCover.metGoya1789.title": "戈雅",
    "pageCover.metHenriRousseau1907.subtitle": "1907，猛狮就食",
    "pageCover.metHenriRousseau1907.title": "亨利·卢梭",
    "pageCover.metHenriTl1892.subtitle": "1892，Divan Japonais",
    "pageCover.metHenriTl1892.title": "亨利·德·土鲁斯-劳特累克",
    "pageCover.metHenryLerolle1885.subtitle": "1885，管风琴排练",
    "pageCover.metHenryLerolle1885.title": "亨利·勒罗尔",
    "pageCover.metHoracePippin.subtitle": "1945，维多利亚式室内 1",
    "pageCover.metHoracePippin.title": "霍勒斯·皮平",
    "pageCover.metJeanBeraud.subtitle": "1877，巴黎鲁莱圣斐理伯教堂的星期天",
    "pageCover.metJeanBeraud.title": "让·贝罗",
    "pageCover.metJohnSingerSargentMorocco.subtitle": "1879，摩洛哥",
    "pageCover.metJohnSingerSargentMorocco.title": "约翰·辛格·萨金特",
    "pageCover.metJosephHidley1870.subtitle": "1870，波斯滕基尔景观，纽约",
    "pageCover.metJosephHidley1870.title": "约瑟夫·希德利",
    "pageCover.metJulesTavernier1878.subtitle":
      "1878，在清澈湖中的地下圆形舞厅里跳舞，加州",
    "pageCover.metJulesTavernier1878.title": "朱尔斯·塔弗尼尔",
    "pageCover.metKlimt1912.subtitle": "1912",
    "pageCover.metKlimt1912.title": "古斯塔夫·克里姆特",
    "pageCover.metPatternsCategory.header": "大都会艺术博物馆 - 图案",
    "pageCover.metPaulSignac.subtitle": "1891，孔卡尔诺：傍晚的宁静",
    "pageCover.metPaulSignac.title": "保罗·希涅克",
    "pageCover.metSilkKashanCarpet.subtitle": "16 世纪",
    "pageCover.metSilkKashanCarpet.title": "真丝喀山地毯",
    "pageCover.metTerracottaFuneraryPlaque.subtitle":
      "约在公元前 520-公元前 510",
    "pageCover.metTerracottaFuneraryPlaque.title": "陪葬陶片",
    "pageCover.metTheUnicornInCaptivity.subtitle": "ca. 1495–1505",
    "pageCover.metTheUnicornInCaptivity.title": "被囚禁的独角兽",
    "pageCover.metVincentVanGoghCradle.subtitle": "1889，摇篮曲",
    "pageCover.metVincentVanGoghCradle.title": "文森特·梵高",
    "pageCover.metVincentVanGoghGinoux.subtitle":
      "1890，阿莱城的姑娘：吉努夫人",
    "pageCover.metVincentVanGoghGinoux.title": "文森特·梵高",
    "pageCover.metVincentVanGoghIrises.subtitle": "1890，鸢尾花",
    "pageCover.metVincentVanGoghIrises.title": "文森特·梵高",
    "pageCover.metVincentVanGoghOleanders.subtitle": "1888，夹竹桃",
    "pageCover.metVincentVanGoghOleanders.title": "文森特·梵高",
    "pageCover.metWilliamMorris1875.subtitle": "1875，万寿菊",
    "pageCover.metWilliamMorris1875.title": "威廉·莫里斯",
    "pageCover.metWilliamMorris1877Willow.subtitle": "1875，柳树枝",
    "pageCover.metWilliamMorris1877Willow.title": "威廉·莫里斯",
    "pageCover.metWilliamMorris1878.subtitle": "1878，鸟",
    "pageCover.metWilliamMorris1878.title": "威廉·莫里斯",
    "pageCover.metWilliamTurner1835.subtitle": "1835，威尼斯运河",
    "pageCover.metWilliamTurner1835.title": "威廉·特纳",
    "pageCover.metWinslowHomerMaineCoast.subtitle": "1896，缅因州海岸",
    "pageCover.metWinslowHomerMaineCoast.title": "温斯洛·霍默",
    "pageCover.metWoodcutsCategory.header": "大都会艺术博物馆 - 日本版画",
    "pageCover.mobileMenu.title": "页面封面",
    "pageCover.nasaBruceMccandlessSpacewalk.title": "布鲁斯·麦坎德利斯太空漫步",
    "pageCover.nasaBuzzAldrinOnTheMoon.subtitle": "1969",
    "pageCover.nasaBuzzAldrinOnTheMoon.title": "月球上的巴兹·奥尔德林",
    "pageCover.nasaCarinaNebula.title": "船底座星云",
    "pageCover.nasaCategory.header": "NASA 档案馆",
    "pageCover.nasaEagleInLunarOrbit.subtitle": "1969",
    "pageCover.nasaEagleInLunarOrbit.title": "月球轨道中的“鹰”",
    "pageCover.nasaEarthGrid.title": "地球网格",
    "pageCover.nasaEvaDuringSkylab3.subtitle": "1973",
    "pageCover.nasaEvaDuringSkylab3.title": "天空实验室 3 号飞行期间舱外活动",
    "pageCover.nasaFingerprintsOfWaterOnTheSand.title": "沙地上的水",
    "pageCover.nasaGreatSandyDesertAustralia.subtitle": "2013",
    "pageCover.nasaGreatSandyDesertAustralia.title": "澳大利亚大沙沙漠",
    "pageCover.nasaIbmType704.subtitle": "1957",
    "pageCover.nasaIbmType704.title": "IBM Type 704 系统",
    "pageCover.nasaMultiAxisGimbleRig.subtitle": "1959",
    "pageCover.nasaMultiAxisGimbleRig.title": "多轴万向节钻机",
    "pageCover.nasaNewYorkCityGrid.title": "纽约市规划网格",
    "pageCover.nasaOrionNebula.subtitle": "1994",
    "pageCover.nasaOrionNebula.title": "猎户座星云",
    "pageCover.nasaReducedGravityWalkingSimulator.subtitle": "1963",
    "pageCover.nasaReducedGravityWalkingSimulator.title": "降低重力步行模拟器",
    "pageCover.nasaRobertStewartSpacewalk.title": "罗伯特·斯图尔特太空漫步",
    "pageCover.nasaRobertStewartSpacewalk2.title": "罗伯特·斯图尔特太空漫步 2",
    "pageCover.nasaSpaceShuttleChallenger.subtitle": "1985",
    "pageCover.nasaSpaceShuttleChallenger.title": "挑战者号航天飞机",
    "pageCover.nasaSpaceShuttleColumbia.subtitle": "1986",
    "pageCover.nasaSpaceShuttleColumbia.title": "哥伦比亚号航天飞机",
    "pageCover.nasaSpaceShuttleColumbiaAndSunrise.subtitle": "1983",
    "pageCover.nasaSpaceShuttleColumbiaAndSunrise.title":
      "哥伦比亚号航天飞机和日出",
    "pageCover.nasaTheBlueMarble.subtitle": "1972",
    "pageCover.nasaTheBlueMarble.title": "蓝色弹珠",
    "pageCover.nasaTimPeakeSpacewalk.title": "蒂姆·皮克太空漫步",
    "pageCover.nasaTransonicTunnel.subtitle": "1990",
    "pageCover.nasaTransonicTunnel.title": "超音速风洞",
    "pageCover.nasaWrightsFirstFlight.subtitle": "1903",
    "pageCover.nasaWrightsFirstFlight.title": "莱特兄弟的第一次飞行",
    "pageCover.reposition.cancelText": "取消",
    "pageCover.reposition.text": "调整位置",
    "pageCover.rijksmuseumAvercamp1608.subtitle": "1608，冬季景观与溜冰者",
    "pageCover.rijksmuseumAvercamp1608.title": "亨德里克·阿弗坎普",
    "pageCover.rijksmuseumAvercamp1620.subtitle": "1620，享受小镇附近的冰",
    "pageCover.rijksmuseumAvercamp1620.title": "亨德里克·阿弗坎普",
    "pageCover.rijksmuseumCategory.header": "荷兰国立博物馆",
    "pageCover.rijksmuseumClaesz1628.subtitle": "1628，虚空静物：拔刺男孩",
    "pageCover.rijksmuseumClaesz1628.title": "彼得·克拉斯",
    "pageCover.rijksmuseumJanLievens1627.subtitle": "1627，静物：书",
    "pageCover.rijksmuseumJanLievens1627.title": "扬·利文斯",
    "pageCover.rijksmuseumJansz1636.subtitle": "1636，哈勒姆圣巴沃教堂内部",
    "pageCover.rijksmuseumJansz1636.title": "彼得·詹斯",
    "pageCover.rijksmuseumJansz1637.subtitle": "1637，乌得勒支的马里亚克大教堂",
    "pageCover.rijksmuseumJansz1637.title": "彼得·詹斯",
    "pageCover.rijksmuseumJansz1641.subtitle":
      "1641，乌得勒支玛丽亚教堂的中殿和合唱团",
    "pageCover.rijksmuseumJansz1641.title": "彼得·詹斯",
    "pageCover.rijksmuseumJansz1649.subtitle":
      "1649，阿森德尔夫特（Sendelft）的圣奥杜弗斯克教堂的内部",
    "pageCover.rijksmuseumJansz1649.title": "彼得·詹斯",
    "pageCover.rijksmuseumMignons1660.subtitle": "1660，静物：花和手表",
    "pageCover.rijksmuseumMignons1660.title": "亚伯拉罕·米尼翁",
    "pageCover.rijksmuseumRembrandt1642.subtitle": "1642，夜巡",
    "pageCover.rijksmuseumRembrandt1642.title": "伦勃朗·范·赖恩",
    "pageCover.rijksmuseumVermeerTheMilkmaid.subtitle": "1660，倒牛奶的女仆",
    "pageCover.rijksmuseumVermeerTheMilkmaid.title": "约翰尼斯·弗美尔",
    "pageCover.savePosition.text": "保存位置",
    "pageCover.solidBeige.title": "米色",
    "pageCover.solidBlue.title": "蓝色",
    "pageCover.solidRed.title": "红色",
    "pageCover.solidYellow.title": "黄色",
    "pageCover.woodcuts1.subtitle": "1830，神奈川冲浪里",
    "pageCover.woodcuts1.title": "葛饰北斋",
    "pageCover.woodcuts10.subtitle": "1840，龟山",
    "pageCover.woodcuts10.title": "歌川广重",
    "pageCover.woodcuts11.subtitle": "1900，燕子和茶花",
    "pageCover.woodcuts11.title": "伊藤若冲",
    "pageCover.woodcuts13.subtitle": "1858，备前市由贺山",
    "pageCover.woodcuts13.title": "歌川广重",
    "pageCover.woodcuts14.subtitle": "1830，甲州犬目峠",
    "pageCover.woodcuts14.title": "葛饰北斋",
    "pageCover.woodcuts15.subtitle": "1842，草津站",
    "pageCover.woodcuts15.title": "歌川广重",
    "pageCover.woodcuts16.subtitle": "瀬田夕照",
    "pageCover.woodcuts16.title": "歌川广重",
    "pageCover.woodcuts2.subtitle": "1830，山下白雨",
    "pageCover.woodcuts2.title": "葛饰北斋",
    "pageCover.woodcuts3.subtitle": "1830，凯风快晴",
    "pageCover.woodcuts3.title": "葛饰北斋",
    "pageCover.woodcuts4.subtitle": "1842，锦鲤",
    "pageCover.woodcuts4.title": "溪斋英泉",
    "pageCover.woodcuts5.subtitle": "1878，江户郊外的冬夜街景",
    "pageCover.woodcuts5.title": "小林清亲",
    "pageCover.woodcuts6.subtitle": "1850，山景·臼井通的浅间",
    "pageCover.woodcuts6.title": "歌川国芳",
    "pageCover.woodcuts7.subtitle": "1833，京师·三条大桥",
    "pageCover.woodcuts7.title": "歌川广重",
    "pageCover.woodcuts8.subtitle": "1830，甲州三岛越",
    "pageCover.woodcuts8.title": "葛饰北斋",
    "pageCover.woodcuts9.subtitle": "1830，甲州石班泽",
    "pageCover.woodcuts9.title": "葛饰北斋",
    "pageCover.woodcutsSekka1.subtitle": "1909，巴之雪",
    "pageCover.woodcutsSekka1.title": "神坂雪佳",
    "pageCover.woodcutsSekka2.subtitle": "1903，熏香道具",
    "pageCover.woodcutsSekka2.title": "神坂雪佳",
    "pageCover.woodcutsSekka3.subtitle": "1909，春",
    "pageCover.woodcutsSekka3.title": "神坂雪佳",
    "pageDescription.emptyPlaceholder": "添加描述⋯",
    "pageDescription.lockedTooltip.message":
      "请解锁{pageTitleWithIcon}以编辑描述。",
    "pageErrorIndicator.loadingError.message":
      "糟糕，加载此页面时出错。请刷新以再次加载。",
    "pageLockIndicator.lockedButton.label": "已锁定",
    "pageLockIndicator.lockedTooltip":
      "由{lockedByPerson}{br}锁定，以防止意外编辑。{br}<prompttext>点击以解锁</prompttext>",
    "pageLockIndicator.mobileLockedButton.label": "已锁定",
    "pageLockIndicator.mobileRelockButton.label": "重新锁定",
    "pageLockIndicator.relockButton.label": "重新锁定",
    "pageMentionOverlay.openPage": "打开页面",
    "pageMoreButton.wordCount.caption": "字数：{count}",
    "pageOfflineIndicator.hasLocalData.message":
      "请连接网络后加载此页面，之后你便可以在离线时访问它。",
    "pageOfflineIndicator.noLocalData.message":
      "哎呀，你好像离线了。请连接网络后查看此页面。",
    "pageOnAppStoreSetting.description.message":
      "选择 Notion 启动或切换工作区时显示的内容。",
    "pageOnAppStoreSetting.firstPage.label": "侧边栏中的第一页",
    "pageOnAppStoreSetting.lastVisitedPage.label": "上次访问的页面",
    "pageOnAppStoreSetting.title": "启动时打开",
    "pagePermissionItem.allowComments.setting": "允许评论",
    "pagePermissionItem.allowComments.tooltip":
      "任何已登录的 Notion 用户都可以在此页面上发表评论。",
    "pagePermissionItem.allowDuplicateTemplate.setting": "允许创建副本",
    "pagePermissionItem.allowDuplicateTemplate.tooltip":
      "开启后，将允许其他用户创建公共页面的副本到他们的工作区。",
    "pagePermissionItem.allowEdits.setting": "允许编辑",
    "pagePermissionItem.allowEdits.tooltip":
      "任何已登录的 Notion 用户都可以编辑此页面。仅与你信任的人分享此秘密链接。",
    "pagePermissionItem.allowSearchEngine.tooltip":
      "如果允许，你的公共页面可能会出现在搜索引擎（如 Google）中，但仅当你或其他人在 Web 的其他地方链接到此网页时。",
    "pagePermissionItem.allowSearchEngines.setting": "搜索引擎索引",
    "pagePermissionItem.copiedLinkButton.label": "✓ 已复制",
    "pagePermissionItem.copyPageLinkButton.label": "复制页面链接",
    "pagePermissionItem.inheritedRecordPermissions.setting":
      "基于{linkBoxWithPageTitle}",
    "pagePermissionItem.learnMore.tooltip": "点击了解更多。",
    "pagePermissionItem.searchEngineUpgradeTooltip.caption":
      "让你的页面出现在搜索引擎结果中。",
    "pagePermissionItem.searchEngineUpgradeTooltip.title":
      "升级以打开搜索引擎索引",
    "pagePermissionItem.sharePageLinkButton.label": "分享页面链接",
    "pagePermissionItem.showLinkOptions.label": "显示链接选项",
    "pagePermissionItem.upgrade.tooltip": "升级以使用此功能。",
    "pageShareMenu.copiedLinkButton.label": "✓ 已复制",
    "pageShareMenu.copyLinkButton.label": "复制链接",
    "pageShareMenu.copyMaybePublicLinkButton.label": "拷贝",
    "pageShareMenu.copyPageLinkButton.label": "复制页面链接",
    "pageShareMenu.restrictedAccessBanner.label":
      "访问受限。可能无法与{linkBoxWithPageTitle}中的所有人分享。",
    "pageShareMenu.restrictedAccessBanner.restore": "恢复",
    "pageShareMenu.sharePageLinkButton.label": "分享页面链接",
    "pageSnapshotPreview.unknownPreviewLoadError.message": "出了些问题。",
    "pageTemplateModal.goToFullTemplateGalleryButton.label": "浏览更多模板",
    "pageTemplateModal.mobileModal.title": "试试这个模板",
    "pageTemplateModal.mobileModal.useButton.label": "使用",
    "pageTemplateModal.modifiedTemplateDialog.discardEditsButton.label": "放弃",
    "pageTemplateModal.modifiedTemplateDialog.prompt":
      "看起来你已经修改了模板。要保存编辑吗？",
    "pageTemplateModal.modifiedTemplateDialog.saveButton.label": "保存修改",
    "pageTemplateModal.useTemplateButton.label": "使用这个模板",
    "pageTemplatePreview.offline.message": "请连接网络后查看此模板。",
    "pageTitle.desktopAppTitle.untitledPage": "无标题",
    "pageTitle.flaggedContent": "标记的内容",
    "pageTitle.untitledPlaceholder": "无标题",
    "pageUpdatesModal.mobileMenu.title": "页面更新",
    "pageViewBlock.add.pageComment": "添加评论",
    "pageViewBlock.add.pageCommentMobile": "评论",
    "pageViewBlock.add.pageCover": "添加封面",
    "pageViewBlock.add.pageCoverMobile": "封面",
    "pageViewBlock.add.pageIcon": "添加图标",
    "pageViewBlock.add.pageIconMobile": "图标",
    "pageViewBlock.add.pageTitle": "添加标题",
    "pageViewBlock.add.pageTitleMobile": "标题",
    "pageViewBlock.addDescription.button": "添加描述",
    "pageViewBlock.addDescription.mobileButton": "描述",
    "pageViewBlock.archivedTeamBanner.message": "此页面位于已归档的团队中。",
    "pageViewBlock.collectionHeader.navigate.tooltip": "点击以回到原始数据库。",
    "pageViewBlock.editingPageBanner.status": "你现在可以编辑此页面。",
    "pageViewBlock.editingPageBanner.stop": "完成编辑",
    "pageViewBlock.evernoteBanner.contents":
      "已导入{totalNumberOfNotes}个笔记，共{totalNumberOfNotes}个",
    "pageViewBlock.hideDescription.button": "隐藏描述",
    "pageViewBlock.movedPageBanner.ancestorMovedMessage":
      "{movedAncestorLink} 已移动到 {targetSpaceLink}。",
    "pageViewBlock.movedPageBanner.pageMovedMessage":
      "已移动到 {targetSpaceLink}。",
    "pageViewBlock.permanentlyDeleted.message": "此页面已被永久删除。",
    "pageViewBlock.resolvedComments.menuTabTitle": "已解决的评论",
    "pageViewBlock.show.backlinks":
      "{numberOfBacklinks, plural, other {{numberOfBacklinks} 个反向链接}}",
    "pageViewBlock.show.backlinks.tooltip": "显示链接到此页面的页面",
    "pageViewBlock.show.pageComments":
      "{numberOfComments, plural, other {{numberOfComments}则评论}}",
    "pageViewBlock.showDescription.button": "显示描述",
    "pageViewBlock.showDescription.mobileButton": "描述",
    "pageViewBlock.showResolvedComments.button":
      "{numberOfResolvedComments, plural, other {{numberOfResolvedComments} 条已解决的评论}}",
    "pageViewBlock.templatePageBanner.backButton.label": "返回",
    "pageViewBlock.templatePageBanner.editTemplateLabel":
      "正在编辑{pageTitleWithIcon}<mediumtext>的模板</mediumtext>",
    "pageViewBlock.templatePageBanner.learnMoreLink": "了解更多",
    "pageViewBlock.templatePageBanner.mobile.editTemplateLabel":
      "{pageTitleWithIcon}<mediumtext>中的模板</mediumtext>",
    "pageViewBlock.trashBanner.deletePermanentlyButton.label": "永久删除",
    "pageViewBlock.trashBanner.message": "此页面位于垃圾箱中。",
    "pageViewBlock.trashBanner.restoreButton.label": "恢复页面",
    "pageViewBlock.trashBanner.restoreCurrentPageButton.label": "恢复当前页面",
    "pageViewBlock.trashBanner.restoreLastVersionButton.label":
      "恢复上一个版本",
    "pageViewBlock.untitledPage.placeholder": "无标题",
    "passwordChangeNotificationEmail.changePassword.message":
      "可以使用你的新密码和邮箱地址 {emailAddress} 登录到 Notion",
    "passwordChangeNotificationEmail.newPasswordSet.headline":
      "你的 Notion 密码已设定完毕！",
    "passwordChangeNotificationEmail.newPasswordSet.subjectLine":
      "新密码已创建",
    "passwordChangeNotificationEmail.passwordChanged.headline":
      "你已更改 Notion 密码",
    "passwordChangeNotificationEmail.passwordChanged.subjectLine":
      "你的密码已被更改",
    "passwordChangeNotificationEmail.passwordRemoved.headline":
      "你的 Notion 密码已被删除",
    "passwordChangeNotificationEmail.passwordRemoved.subjectLine":
      "你的密码已被移除",
    "passwordChangeNotificationEmail.removePassword.message":
      "你仍然可以通过登录页面上的“用电子邮件登录”来访问 Notion。我们会通过电子邮件向你传送一个临时登录码。",
    "passwordChangeNotificationEmail.setPassword.message":
      "现在你可以使用你的邮箱地址 {emailAddress} 和新密码来访问工作区。",
    "passwordChangeNotificationEmail.unintendedChange.message":
      "如果你没有进行此更改，请发送电子邮件到 team@makenotion.com 告知我们。去“我的帐户”设置中更改密码，或使用“忘记密码”重设密码。",
    "passwordResetEmail.clickToResetPassword.message": "点这里重置密码",
    "passwordResetEmail.emailSubject": "重置你的密码",
    "passwordResetEmail.emailText.message":
      "通过访问以下链接重置密码： {resetUrl}",
    "passwordResetEmail.emailTitle": "重置你的 Notion 密码",
    "passwordResetEmail.noResetRequested.message":
      "如果你没有请求重置，请不要担心。你可以安全地忽略此电子邮件。",
    "passwordSettings.changePasswordButton.label": "更改密码",
    "passwordSettings.changePasswordModal.newPasswordMismatchError":
      "你的新密码不匹配。",
    "passwordSettings.changePasswordModal.newPasswordNotRepeatedError":
      "请重复你的新密码。",
    "passwordSettings.changePasswordModal.newPasswordsMismatchError":
      "你的密码不匹配。",
    "passwordSettings.changePasswordModal.oldPasswordInput.label": "旧密码",
    "passwordSettings.changePasswordModal.oldPasswordMissingError":
      "请输入你的旧密码。",
    "passwordSettings.changePasswordModal.passwordNotEnteredError":
      "请输入密码。",
    "passwordSettings.changePasswordSuccess.message": "你的新密码已保存。",
    "passwordSettings.deletePasswordModal.passwordInput.label": "密码",
    "passwordSettings.educationPlanGuidelines":
      "如果你无法访问学校的邮箱地址，则可以使用密码登录。",
    "passwordSettings.genericPasswordSaveError": "保存密码时出错。请稍后再试。",
    "passwordSettings.newPasswordInput.label": "新密码",
    "passwordSettings.newPasswordInput.placeholder": "输入新密码⋯",
    "passwordSettings.oldPasswordInput.placeholder": "输入旧密码⋯",
    "passwordSettings.passwordGuidelines":
      "密码长度至少为 15 个字母，或者长度至少为 8 个字符且同时包含字母和数字。",
    "passwordSettings.passwordInput.label": "密码",
    "passwordSettings.passwordManagedThroughSAMLProvider.message":
      "你的密码是由你的 SAML 单点登录供应商管理的。",
    "passwordSettings.passwordMissingLetter.message":
      "请在密码中包含字母，或使用更长的密码。",
    "passwordSettings.passwordMissingLetterAndNumber.message":
      "请在密码中包含字母和数字，或使用更长的密码。",
    "passwordSettings.passwordMissingNumber.message":
      "请在密码中包含数字，或使用更长的密码。",
    "passwordSettings.passwordNotEntered.message": "请输入你的密码。",
    "passwordSettings.passwordNotSet.message": "未设置密码。",
    "passwordSettings.passwordSetError.message":
      "你目前无法设置密码。请稍后再试。",
    "passwordSettings.passwordSetInstructions":
      "如果你不想使用临时登录码，你可以设置永久密码。",
    "passwordSettings.passwordTooConsistent.message": "请添加其他唯一字符。",
    "passwordSettings.passwordTooShortError.message": "请增加密码长度。",
    "passwordSettings.removePasswordButton.label": "移除密码",
    "passwordSettings.removePasswordModal.educationPlanWarning":
      "如果你无法访问学校的邮箱地址，则将无法重新登录 Notion。",
    "passwordSettings.removePasswordModal.message":
      "移除密码时出错。请稍后再试。",
    "passwordSettings.removePasswordModal.oldPasswordNotEnteredError":
      "请输入你的当前密码。",
    "passwordSettings.removePasswordModal.passwordInput.placeholder":
      "输入密码⋯",
    "passwordSettings.removePasswordModal.removePasswordButton.label":
      "移除密码",
    "passwordSettings.removePasswordModal.text":
      "你即将删除密码。我们会通过电子邮件将你的临时登录码发送给你，以供日后访问 Notion。",
    "passwordSettings.removePasswordSuccess.message": "你的密码已被移除。",
    "passwordSettings.repeatPasswordInput.label": "再次输入密码",
    "passwordSettings.repeatPasswordInput.placeholder": "再次输入新密码⋯",
    "passwordSettings.setPasswordButton.label": "设置密码",
    "passwordSettings.setPasswordSuccess.educationMessage":
      "你的密码已全部设置好！即使无法访问学校的邮箱地址，你也能用密码登录。",
    "passwordSettings.setPasswordSuccess.message": "密码设置完毕！",
    "passwordSettings.title": "密码",
    "pdfBlock.embeds.button.label": "嵌入 PDF",
    "pdfBlock.embeds.caption": "嵌入 PDF 文件",
    "pdfBlock.placeholder": "嵌入 PDF",
    "peekMoveToMenu.addTo.addTo": "添加到",
    "peekMoveToMenu.addTo.defaultButton": "添加到",
    "peekMoveToMenu.addTo.privatePages": "私人页面",
    "peekMoveToMenu.tooptip": "设置默认页面或数据库",
    "peekTopbar.center.button": "置中",
    "peekTopbar.close.button": "关闭",
    "peekTopbar.navigateToPage.tooltip": "导航到此页面",
    "peekTopbar.openAsPage.button": "以全页面打开",
    "peekTopbar.peekNavDownArrow.tooltip": "数据库中的下一页",
    "peekTopbar.peekNavUpArrow.tooltip": "数据库中的上一页",
    "peekTopbar.pushToSide.button": "推到一边",
    "permissionInviteToken.groupRole.ownerAlert.tooltip":
      "不能将群组添加为团队所有者。",
    "permissionItem.publicPermissionItem.expiration.day": "一天内",
    "permissionItem.publicPermissionItem.expiration.hour": "一小时内",
    "permissionItem.publicPermissionItem.expiration.week": "一周内",
    "permissionRoleSelect.overrideMessage.caption":
      "更改角色后，将替代从父页面继承的权限。",
    "permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.caption":
      "成员无法更改工作区设置或邀请新成员。",
    "permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.title":
      "升级以添加非管理员成员",
    "permissionRoleSelect.userEditorUpgradeTooltip.caption":
      "具有全部权限的访客可以编辑页面并与他人分享。",
    "permissionRoleSelect.userEditorUpgradeTooltip.title": "升级以授予全部权限",
    "permissionRoleSelect.userReadAndWriteUpgradeTooltip.caption":
      "具有编辑权限的用户可以编辑页面，但不能与他人分享页面。",
    "permissionRoleSelect.userReadAndWriteUpgradeTooltip.title":
      "升级以添加编辑者",
    "permissions.confirmDialog.upgradeToTeamWorkspace.confirmButton.label":
      "升级到团队工作区",
    "permissions.confirmDialog.upgradeToTeamWorkspace.message":
      "若要将成员添加到工作区，你需要切换到团队版。将根据当前的计费间隔和账户余额按比例向你收取费用。",
    "permissionsActions.preventRemovingAllFullAccess.message":
      "在删除此权限之前，请向其他人授予“全部权限”。",
    "permissionsInvite.closeInviteDialog.cancelButton.label": "取消",
    "permissionsInvite.closeInviteDialog.confirmationButton.label": "是",
    "permissionsInvite.closeInviteDialog.confirmationMessage":
      "你的更改尚未保存。放弃更改？",
    "permissionsInvite.integration.select.message": "选择集成",
    "permissionsInvite.searchInput.placeholder": "搜索邮箱地址、姓名或群组",
    "permissionsInvite.spaceAddMemberUpgradeTooltip.caption":
      "成员是你邀请加入到工作区的队友。他们可以访问并添加页面供所有成员查看，或者被邀请到具有私人协作权限的页面。",
    "permissionsInvite.spaceAddMemberUpgradeTooltip.title": "升级以添加成员",
    "personPropertyMenu.integration.select.message": "选择集成",
    "pricingGrid.betaBadge": "测试版",
    "pricingGrid.cancelPlanLink": "取消方案",
    "pricingGrid.comingSoonBadge": "即将推出",
    "pricingGrid.comparisonSection.adminAndSecurityFeatures.title":
      "管理员与安全性",
    "pricingGrid.comparisonSection.collaboration.title": "协作",
    "pricingGrid.comparisonSection.features.title": "功能",
    "pricingGrid.comparisonSection.support.title": "支持",
    "pricingGrid.comparisonSection.usage.title": "使用",
    "pricingGrid.contactSalesLink": "联系销售",
    "pricingGrid.currentPlan.largeScreenLabel": "当前方案",
    "pricingGrid.currentPlan.tooltip": "这是你当前的方案",
    "pricingGrid.currentPlanButton.label": "当前方案",
    "pricingGrid.downgradePlanButton.label": "降级",
    "pricingGrid.enterprise.monthlyBilling.notAvailable.disabled": "仅提供年付",
    "pricingGrid.enterprise.monthlyBilling.unavailable": "不可用",
    "pricingGrid.enterpriseCallToAction.message": "试用企业版",
    "pricingGrid.enterprisePlanColumn.header": "企业版",
    "pricingGrid.footerSignupCallToAction.message":
      "免费注册。{br}随时邀请你的团队。",
    "pricingGrid.inTeamTrial": "免费试用中",
    "pricingGrid.inTeamTrial.tooltip":
      "你当前的团队试用版有 1,000 个块限制。升级以解除限制。",
    "pricingGrid.personalFreePlanColumn.header": "个人版",
    "pricingGrid.personalPlans.label": "个人使用",
    "pricingGrid.personalProPlanColumn.header": "个人专业版",
    "pricingGrid.planAttribute.SSO.title": "SAML 和单点登录（SSO）",
    "pricingGrid.planAttribute.SSO.tooltip":
      "<p>通过安全的单点登录，自动化管理成员的访问权限。</p>",
    "pricingGrid.planAttribute.adminTools.title": "管理员工具",
    "pricingGrid.planAttribute.adminTools.tooltip":
      "<p>创建独立的管理员角色，以与成员权限区分。只有管理员可以邀请新成员、更改工作区设置。</p>",
    "pricingGrid.planAttribute.advancedPermissions.title": "高级权限",
    "pricingGrid.planAttribute.advancedPermissions.tooltip":
      "<p>设置更精细的权限，以限制受邀人员与他人分享页面。</p>",
    "pricingGrid.planAttribute.advancedSecurity.title": "高级安全控制",
    "pricingGrid.planAttribute.advancedSecurity.tooltip":
      "<p>解锁额外的权限控制，以防止特定人员向外部分享页面、禁用访客、并设置工作区安全规则。</p>",
    "pricingGrid.planAttribute.allPersonalPlanFeatures.tooltip":
      "<p>含个人版的所有功能，以及更多。</p>",
    "pricingGrid.planAttribute.allProPlanFeatures.tooltip":
      "<p>含个人专业版的所有功能，以及更多。</p>",
    "pricingGrid.planAttribute.allTeamPlanFeatures.tooltip":
      "<p>含团队版的所有功能，以及更多。</p>",
    "pricingGrid.planAttribute.apiAccess.title": "API 访问",
    "pricingGrid.planAttribute.apiAccess.tooltip":
      "<p>使用 Notion API 为你自己的工作流构建自定义集成服务。即将推出。</p>",
    "pricingGrid.planAttribute.apps.title": "Web、桌面和移动应用",
    "pricingGrid.planAttribute.apps.tooltip":
      "<p>Notion 可以在任何网页浏览器中运行，无需安装。你也可以下载我们的 Mac、Windows、iOS 或安卓应用。</p>",
    "pricingGrid.planAttribute.blockStorage.tooltip":
      "<p>块是你添加到页面上的内容组成部分，例如段落、待办事项、图片、嵌入式文件等。现在，所有定价方案的块都是无限的。团队试用版中的块存储上限为 1,000 个。</p>",
    "pricingGrid.planAttribute.blockTypes.title": "40 多种块内容类型",
    "pricingGrid.planAttribute.blockTypes.tooltip":
      "<p>块是你添加到页面上的一块内容，比如待办事项，图片，代码，文件。</p> <p>块还可以帮助你嵌入来自谷歌云端硬盘、GitHub、Twitter 和 Typeform 等第三方服务的内容。</p>",
    "pricingGrid.planAttribute.blocks.title": "页面和块",
    "pricingGrid.planAttribute.bulkExport.title": "批量导出",
    "pricingGrid.planAttribute.bulkExport.tooltip":
      "<p>你的数据是你的。你可以将所有页面导出为 HTML、Markdown 或 CSV（用于数据库），以及你上传的任何文件和图片。</p>",
    "pricingGrid.planAttribute.bulkPDFExport.title": "批量 PDF 导出",
    "pricingGrid.planAttribute.bulkPDFExport.tooltip":
      "<p>将所有内容导出为 PDF，方便进行法律或合规性备份。</p>",
    "pricingGrid.planAttribute.button.upgrade": "升级",
    "pricingGrid.planAttribute.collaborativeWorkspace.title": "协作工作区",
    "pricingGrid.planAttribute.collaborativeWorkspace.tooltip":
      "<p>协作工作区让成员轻松分享页面给整个团队，让整个团队统一内容结构，并支持精细的权限设置。</p>",
    "pricingGrid.planAttribute.contentApi.title": "内容 API",
    "pricingGrid.planAttribute.contentApi.title.v2": "API",
    "pricingGrid.planAttribute.contentApi.tooltip":
      "<p>访问 Notion 内容 API 以构建基于你自己工作流的自定义集成服务。即将推出。</p>",
    "pricingGrid.planAttribute.contentApi.tooltip.v2":
      "<p>使用 Notion API 为你的团队构建自定义集成。现在处于测试阶段。</p>",
    "pricingGrid.planAttribute.customContract.title": "定制合同和发票",
    "pricingGrid.planAttribute.customContract.tooltip":
      "<p>我们将为你定制合同，并通过 PO/发票付款。</p>",
    "pricingGrid.planAttribute.databaseProperties.tooltip":
      "<p>构建具有丰富属性的强大数据库，例如复选框、下拉菜单、货币、指派人员、日期和文件等。</p>",
    "pricingGrid.planAttribute.databaseViews.title":
      "表格、列表、日历、看板、画廊和时间轴视图",
    "pricingGrid.planAttribute.databases.title": "具有多元属性类型的数据库",
    "pricingGrid.planAttribute.databases.tooltip":
      "<p>数据库支持多种视图，可以选择最适合自己工作流的可视化方式。数据库可以用来做项目看版、事件日历等。</p>",
    "pricingGrid.planAttribute.dedicatedManager.title": "专属客户成功经理",
    "pricingGrid.planAttribute.dedicatedManager.tooltip":
      "<p>适用于超过 100 人的年付团队。</p>",
    "pricingGrid.planAttribute.earlyAccess.title": "提前使用新功能",
    "pricingGrid.planAttribute.earlyAccess.tooltip":
      "<p>提前体验特权意味着你将永远拥有最新、功能最强大的 Notion 版本。你还将直接影响我们未来的产品路线图。</p>",
    "pricingGrid.planAttribute.evernoteHierarchy.tooltip":
      "<p>将笔记组织到笔记本或堆叠中。</p>",
    "pricingGrid.planAttribute.fileUploads.title": "文件上传",
    "pricingGrid.planAttribute.fileUploads.tooltip":
      "<p>上传到 Notion 的单一文件大小限制。</p>",
    "pricingGrid.planAttribute.fileUploads.trial.5MbFileUploadLimit":
      "试用版 5 MB",
    "pricingGrid.planAttribute.fileUploads.value.5MbFileUploadLimit": "5 MB",
    "pricingGrid.planAttribute.freeForIndividuals.tooltip":
      "<p>现在个人使用 Notion 永久免费。</p>",
    "pricingGrid.planAttribute.genericNotes.tooltip":
      "<p>创建文档，并与他人分享。</p>",
    "pricingGrid.planAttribute.genericReminders.tooltip":
      "<p>收到截止日期的提醒。</p>",
    "pricingGrid.planAttribute.genericTags.tooltip":
      "<p>记录并组织你的笔记。</p>",
    "pricingGrid.planAttribute.genericWebClipper.tooltip":
      "<p>保存网络上的任何页面。</p>",
    "pricingGrid.planAttribute.guests.title": "访客",
    "pricingGrid.planAttribute.guests.tooltip":
      "<p>访客是工作区成员之外的个人，例如朋友、家人、承包商或客户。通过邀请访客在特定页面上进行非公开协作。</p>",
    "pricingGrid.planAttribute.limitedVersionHistory.tooltip":
      "<p>查看和恢复过去 30 天内任何 Notion 页面的以前版本。 </p>",
    "pricingGrid.planAttribute.linkSharing.title": "链接共享",
    "pricingGrid.planAttribute.linkSharing.tooltip":
      "<p>与任何人分享一个秘密链接，以便他们查看，评论或编辑你的页面。</p>",
    "pricingGrid.planAttribute.members.title": "成员",
    "pricingGrid.planAttribute.members.tooltip":
      "<p>成员是你邀请加入工作区的队友。他们可以访问并添加页面供所有成员查看，或者被添加到具有私人协作权限的页面。</p>",
    "pricingGrid.planAttribute.notInTrial": "不在试用版中",
    "pricingGrid.planAttribute.notionCollaboration.tooltip":
      "<p>与其他人在同一个页面上一起工作。</p>",
    "pricingGrid.planAttribute.notionDatabases.tooltip":
      "<p>用数据库视图、汇总、筛选器等工具搭建新的工作流。</p>",
    "pricingGrid.planAttribute.notionHierarchy.tooltip":
      "<p>页面可以无限层级、无限嵌套。</p>",
    "pricingGrid.planAttribute.notionMarkdown.tooltip":
      "<p>用 Markdown 书写或导出内容。</p>",
    "pricingGrid.planAttribute.permissionGroups.title": "权限群组",
    "pricingGrid.planAttribute.permissionGroups.tooltip":
      "<p>为不同的群组和团队设置不同等级及精细度的权限。</p>",
    "pricingGrid.planAttribute.prioritySupport.title": "优先支持",
    "pricingGrid.planAttribute.prioritySupport.tooltip":
      "<p>我们随时为你提供帮助。</p>",
    "pricingGrid.planAttribute.proWebPublishing.tooltip":
      "<p>将 Notion 页面作为独立网站发布。即将推出。</p>",
    "pricingGrid.planAttribute.realTimeCollaboration.title": "实时协作",
    "pricingGrid.planAttribute.realTimeCollaboration.tooltip":
      "<p>实时与他人合作，可显示在线状态和评论。</p>",
    "pricingGrid.planAttribute.scimApi.title": "用户管理分配（SCIM）",
    "pricingGrid.planAttribute.scimApi.tooltip":
      "<p>访问 Notion SCIM API 以配置和管理用户和群组。</p>",
    "pricingGrid.planAttribute.sharingPermissions.tooltip":
      "<p>设置更精细的权限，以限制受邀人员与他人分享页面。</p>",
    "pricingGrid.planAttribute.sso.title": "SAML 和单点登录（SSO）",
    "pricingGrid.planAttribute.templates.title": "50 多个入门模板",
    "pricingGrid.planAttribute.templates.tooltip":
      "<p>你可以从一张白纸开始，也可以直接从经过专业设计的模板库中挑选模板。</p> <p>一些模板包括：笔记、目标管理、公司首页、会议纪要、产品路线图、员工入职手册和工程知识库。</p>",
    "pricingGrid.planAttribute.timeline.tooltip":
      "<p>使用时间轴视图进行项目排程和规划。</p>",
    "pricingGrid.planAttribute.timelineView.enterpriseUnlimited": "无限",
    "pricingGrid.planAttribute.timelineView.title": "时间轴视图",
    "pricingGrid.planAttribute.unlimitedVersionHistory.tooltip":
      "<p>查看和恢复任何 Notion 页面的以前版本。</p>",
    "pricingGrid.planAttribute.value.blockLimit": "试用版 1,000 个",
    "pricingGrid.planAttribute.value.justYou": "仅自己",
    "pricingGrid.planAttribute.value.unlimitedMembers": "无限",
    "pricingGrid.planAttribute.versionHistory.title": "版本历史",
    "pricingGrid.planAttribute.versionHistory.tooltip":
      "<p>查看和恢复任何页面的历史版本。</p>",
    "pricingGrid.planAttribute.versionHistory.value.30DaysSavedHistory":
      "30 天",
    "pricingGrid.planAttribute.versionHistory.value.foreverSavedHistory":
      "永久",
    "pricingGrid.planAttribute.versionHistory.value.notInTrial": "不在试用版中",
    "pricingGrid.planAttribute.versionHistory.value.trialUpgradeLabel":
      "升级到 30 天历史记录",
    "pricingGrid.planAttribute.wikiDocsNotes.title": "知识库、文档和笔记",
    "pricingGrid.planAttribute.wikisDocsNotes.tooltip":
      "<p>用 Notion 构建共享知识库、文档、数据库、或将其作为强大的笔记工具。</p>",
    "pricingGrid.pricingTermToggle.payAnnually.label": "年付",
    "pricingGrid.pricingTermToggle.payMonthly.label": "月付",
    "pricingGrid.resubscribePlanButton.label": "重新订阅",
    "pricingGrid.signupComponent.submitButton.label": "免费试用",
    "pricingGrid.switchPlanAsMember.tooltip":
      "需要成为此工作区的管理员才能切换方案。",
    "pricingGrid.switchPlanFromInAppPurchase.tooltip":
      "你目前通过 Apple 的应用内购买进行订阅。要切换计划，请先取消你的 Apple 订阅。",
    "pricingGrid.switchToPersonalPlanButton.tooltip":
      "个人版和个人专业版仅供 1 人使用。如果你想使用这些方案，请移除当前工作区中的其他成员。",
    "pricingGrid.teamPlanColumn.header": "团队版",
    "pricingGrid.teamPlans.label": "团队或企业",
    "pricingGrid.teamTrialLink": "免费试用",
    "pricingGrid.upgradePlanButton.label": "升级",
    "pricingGrid.willDowngradePlan.largeScreenLabel": "未来方案",
    "pricingGrid.willDowngradePlan.tooltip": "这是你当前方案到期后的方案",
    "pricingGrid.willDowngradePlanButton.label": "未来方案",
    "pricingHelpers.perMemberPerMonthPricing.label": "每人{br}每月",
    "pricingHelpers.perMonthPricing.label": "每月",
    "privatePageBadge.label": "私人",
    "privatePageBadge.tooltip": "只有你可以访问此页面",
    "profileSettings.cancelButton.label": "取消",
    "profileSettings.changeEmailModal.changeEmailButton.label": "更改邮箱地址",
    "profileSettings.changeEmailModal.continueButton.label": "继续",
    "profileSettings.changeEmailModal.currentEmail":
      "你当前的邮箱地址是 {currentEmail}。",
    "profileSettings.changeEmailModal.enterCurrentEmailVerificationCodeInput.placeholder":
      "输入登录码",
    "profileSettings.changeEmailModal.enterPasswordInstructions":
      "请输入你的密码。",
    "profileSettings.changeEmailModal.enterVerificationCodeInput.placeholder":
      "输入验证码",
    "profileSettings.changeEmailModal.errorFetchingAccountData":
      "无法获取 {currentEmail} 的帐户信息。",
    "profileSettings.changeEmailModal.errorNoUserValue": "未定义用户值。",
    "profileSettings.changeEmailModal.newEmailInput.placeholder":
      "输入新的邮箱地址",
    "profileSettings.changeEmailModal.newEmailInstructions":
      "请输入新的邮箱地址，我们将向你发送验证码。",
    "profileSettings.changeEmailModal.passwordInput.label": "密码",
    "profileSettings.changeEmailModal.sendCurrentEmailVerificationCode.label":
      "发送验证码",
    "profileSettings.changeEmailModal.sendVerificationCodeButton.label":
      "发送验证码",
    "profileSettings.changeEmailModal.sendVerificationCodeToCurrentEmail":
      "我们将向此邮箱地址发送临时验证码。",
    "profileSettings.changeEmailModal.sentVerificationCodeToCurrentEmail":
      "我们已向此邮箱地址发送了临时验证码。",
    "profileSettings.changeEmailModal.verificationCodeSentMessage":
      "我们刚刚向你的帐户 {newEmail} 发送了一个临时验证码 。",
    "profileSettings.cookieAcceptance.subtitle":
      "允许 Notion 使用 cookie 来改善你的体验。",
    "profileSettings.cookieAcceptance.title": "接受 cookie",
    "profileSettings.dangerousSettings.deleteAccountButton.label":
      "删除我的帐户",
    "profileSettings.dangerousSettings.title": "危险区域",
    "profileSettings.deleteAccountConfirmationDialog.deleteAccountAndWorkspacesButton.label":
      "{numberOfWorkspaces, plural, other {永久删除帐户以及 {numberOfWorkspaces} 个工作区}}",
    "profileSettings.deleteAccountConfirmationDialog.deleteAccountButton.label":
      "永久删除帐户",
    "profileSettings.deleteAccountConfirmationDialog.prompt":
      "请输入你的邮箱地址进行确认。",
    "profileSettings.deleteAccountConfirmationDialog.warning":
      "此操作无法撤消。这将永久删除你的整个帐户。所有私人工作区将被删除，同时你将从所有共享工作区中移除。",
    "profileSettings.helpButton.caption":
      "帐户设定的更改将应用于你的所有工作区。",
    "profileSettings.helpButton.learnMoreLink": "<s>了解更多。</s>",
    "profileSettings.offline.message": "请连接网络后设置个人资料。",
    "profileSettings.personalInfoSection.emailSetting.changeEmailButton.label":
      "更改邮箱地址",
    "profileSettings.personalInfoSection.emailSetting.label": "邮箱地址",
    "profileSettings.personalInfoSection.firstNameInput.label": "名字",
    "profileSettings.personalInfoSection.firstOrLastNameMissing.message":
      "请同时填写姓氏和名字。",
    "profileSettings.personalInfoSection.lastNameInput.label": "姓氏",
    "profileSettings.personalInfoSection.nameInput.label": "首选名称",
    "profileSettings.personalInfoSection.nameMissing.message": "请填写姓名。",
    "profileSettings.personalInfoSection.title": "个人资料",
    "profileSettings.profilePhotoSection.removePhotoButton.label": "移除",
    "profileSettings.profilePhotoSection.title": "照片",
    "profileSettings.profilePhotoSection.uploadPhotoButton.label": "上传照片",
    "profileSettings.profilePhotoSection.uploadProfilePhotoError.message":
      "上传失败。",
    "profileSettings.title": "帐户",
    "profileSettings.updateButton.label": "更新",
    "propertySelectMenu.mobileMenu.property.header": "属性",
    "propertySelectMenu.mobileMenu.relationProperty.header": "关联属性",
    "propertySelectMenu.search.noResults.title": "无结果",
    "propertySelectMenu.searchForProperty.default.placeholder": "搜索属性⋯",
    "propertySelectMenu.searchForProperty.relation.placeholder":
      "搜索关联属性⋯",
    "publicPageDataHelpers.untitledWorkspace.placeholder": "无标题的工作区",
    "publicPermissionItem.expiration.chooseDate": "选择日期",
    "publicPermissionItem.expiration.never": "从不",
    "publicPermissionItem.expirationTime.label": "链接过期",
    "publicPermissionsMenu.expiration.mobile.label": "完成",
    "publicPermissionsMenu.expiration.mobile.title": "到期时间",
    "pushNotification.authorPhrase.unknown": "未知作者",
    "pushNotification.blockEdited.notificationSubject":
      "{userName}编辑了{blockName}",
    "pushNotification.deletedBlock.notificationContents":
      "[已删除] {renderedBlock}",
    "pushNotification.emptyBlockPropertyValueEdited.placeholderLabel": "空",
    "pushNotification.imageInPushNotification.placeholder": "{imageEmoji} 图片",
    "pushNotification.permissionGroupName.defaultLabel": "已删除的群组",
    "pushNotification.permissionGroupName.untitledLabel": "无标题群组",
    "pushNotification.pluralizedUserNames.defaultLabel": "有人",
    "pushNotification.propertyNameWithEditedValue.notificationBody":
      "{propertyName} ({propertyValue})",
    "pushNotification.propertyNameWithEditedValue.notificationSubject":
      "{propertyName} ({propertyValue})",
    "pushNotification.threePlusUserNames.label":
      "{othersCount, plural, other {{firstAuthor}及其他 {othersCount} 位}}",
    "pushNotification.twoUserNames.label": "{firstAuthor}和{secondAuthor}",
    "pushNotification.untitledBlockTitle.placeholder": "无标题",
    "pushNotification.untitledCollectionName.placeholder": "无标题",
    "pushNotification.untitledSpaceName.label": "无标题",
    "pushNotification.userCreatedBlockInSpace.message":
      "{userName}在{spaceName}创建了{targetName}",
    "pushNotification.userCreatedRowInCollection.message":
      "{userName}在{collectionName}创建了{targetName}",
    "pushNotification.userCreatedTarget.label":
      "{userName}创建了{permissionGroupName}",
    "pushNotification.userDeletedBlockInSpace.message":
      "{userName}删除了{spaceName}的{targetName}",
    "pushNotification.userDeletedRowInCollection.message":
      "{userName}在{collectionName}删除了{targetName}",
    "pushNotification.userDeletedTarget.label":
      "{userName}已删除{permissionGroupName}",
    "pushNotification.userEditedTarget.label":
      "{userName}编辑了{permissionGroupName}",
    "pushNotifications.accessRequested.subject": "{userName}请求访问{pageName}",
    "pushNotifications.collectionCreated.notificationSubject":
      "{userName}创建了{collectionName}",
    "pushNotifications.collectionDescriptionAdded.notificationSubject":
      "{userName}为{collectionName}添加了描述",
    "pushNotifications.collectionDescriptionDeleted.notificationSubject":
      "{userName}删除了{collectionName}的描述",
    "pushNotifications.collectionEdited.notificationSubject":
      "{userName}编辑了{collectionName}",
    "pushNotifications.collectionPropertyEdited.subject":
      "{userName}编辑了{collectionName}中的{propertyType}属性",
    "pushNotifications.collectionViewEdited.notificationSubject":
      "{userName}编辑了{collectionName}中的{collectionViewName}视图",
    "pushNotifications.commentOnlyPermissionLevel.label": "只能评论",
    "pushNotifications.editOnlyPermissionLevel.label": "只能编辑",
    "pushNotifications.editPermissionLevel.label": "编辑",
    "pushNotifications.editorPermissionLevel.label": "全部权限",
    "pushNotifications.emailAccountSettingsEdited.subject":
      "{userName}编辑了其帐户设置",
    "pushNotifications.emptyPropertyValueInCollection.label": "空",
    "pushNotifications.formatChange.pageIcon.imagePlaceholder": "图片",
    "pushNotifications.formatChange.pageIcon.label": "页面图标",
    "pushNotifications.noAccessPermissionLevel.label": "无法访问",
    "pushNotifications.pageDeleted.subject": "{userName}删除了{pageName}",
    "pushNotifications.pageLocked.subject": "{userName}锁定了{pageName}",
    "pushNotifications.pagePermanentlyDeleted.subject":
      "{userName}永久删除了{pageName}",
    "pushNotifications.pageRestored.subject": "{userName}恢复了{pageName}",
    "pushNotifications.pageUnlocked.subject": "{userName}解锁了{pageName}",
    "pushNotifications.permissionsEditedForPageOrSpace.notificationSubject":
      "{userName}编辑了{targetName}的权限",
    "pushNotifications.publicPermissions.label": "公开 ({permissionLevel})",
    "pushNotifications.readerPermissionLevel.label": "只读",
    "pushNotifications.reminderChanged.subject": "{pageName}中的提醒",
    "pushNotifications.spacePermissionsWithRole.label":
      "{spaceName} ({permissionLevel})",
    "pushNotifications.unknownAuthorUpdatedProperty.label": "未知作者",
    "pushNotifications.unknownCollectionPropertyName.label": "未知",
    "pushNotifications.unknownRelationPropertyChanged.label": "未知",
    "pushNotifications.untitledCollection.label": "无标题",
    "pushNotifications.userAddedToSpace.notificationSubject":
      "{userName}将你加入到{workspaceName}",
    "pushNotifications.userCommentedSubject.notificationSubject":
      "{userName}在{targetName}发表了评论",
    "pushNotifications.userDeletedCommentText.notificationContents":
      "[已删除]💬 {commentText}",
    "pushNotifications.userInvitedToSpace.notificationSubject":
      "{userName}邀请你加入{workspaceName}",
    "pushNotifications.userInvitedToSpaceByBot.notificationSubject":
      "你已被邀请加入{workspaceName}",
    "pushNotifications.userMentionedInPage.notificationSubject":
      "{userName}在{targetName}提及了你",
    "pushNotifications.userPermissionsWithRole.label":
      "{userName} ({permissionLevel})",
    "pushNotifications.workspaceName.untitled.placeholder": "无标题",
    "queueApiErrors.duplicateBlockLimit.errorMessage":
      "糟糕，内容太多了！你当前的方案限制你只能创建 {blockLimitNumber} 个块副本。请使用较少的内容重试。",
    "quoteBlock.emptyQuote.placeholder": "空白引用",
    "rateLimitError.message": "请稍后再试。",
    "recordIcon.emojiModalMenu.title": "页面图标",
    "recordIcon.emojiTab.title": "表情符号",
    "recordIcon.linkTab.buttonText": "提交",
    "recordIcon.linkTab.caption": "适用于网络上任何图片。",
    "recordIcon.linkTab.placeholder": "粘贴图片链接⋯",
    "recordIcon.linkTab.title": "链接",
    "recordIcon.mediaMenu.caption":
      "推荐尺寸为 {recommendedWidth} × {recommendedHeight} 像素",
    "recordIcon.uploadFileTab.title": "上传图片",
    "recordIcon.uploadFileTab.uploadError.message": "出了些问题。",
    "recordPath.untitledBlock.placeholder": "无标题",
    "referralActivatedEmail.greeting": "你好 {name} ，",
    "referralActivatedEmail.howToEarnCreditList.item.downloadApps":
      "下载<mobilelink>移动应用</mobilelink>和<desktoplink>桌面应用</desktoplink>。",
    "referralActivatedEmail.howToEarnCreditList.item.installWebClipper":
      "为 Chrome 安装<webclipperlink> Notion 网页剪裁器</webclipperlink>。",
    "referralActivatedEmail.howToEarnCreditList.item.keepInviting":
      "多多<referlink>邀请</referlink>朋友和同事。",
    "referralActivatedEmail.notionTeamSignoffAndThanks":
      "感谢你将 Notion 告诉亲朋好友，{br} — Notion 团队",
    "referralActivatedEmail.rewardMessage":
      "你的帐户已赚取<b> {creditValue} 的积分</b>！可以使用积分来<upgradelink>升级</upgradelink>并完全利用 Notion 的所有强大功能。{br}{br}想要<upgradelink>赚取更多的积分</upgradelink>吗？可以通过以下几种方法：",
    "referralActivatedEmail.signupText":
      "收到你的邀请后，有人注册了 Notion 帐户。",
    "referralActivatedEmail.subjectLine": "{creditValue}积分即将到帐！",
    "referralEmail.creditInfo.text":
      "注册后，我们会将<b> {creditDollarAmount} </b>放入你的帐户。可以用它来升级并发现 Notion 提供的所有强大功能。",
    "referralEmail.invitedIntro.text":
      "<b> {fromUserName} </b> ({fromUserEmail}) 邀请你加入 Notion！ {br}{br} Notion 是一种多合一的信息工具，帮助你保持生活和工作井井有条。在我们的<referlink>网站</referlink>上可以了解更多相关信息。",
    "referralEmail.signupPrompt":
      "<b> <signuplink>点击此处注册并赚取 {creditDollarAmount} 积分</signuplink> </b>",
    "referralEmail.subjectLine": "{fromUserName}邀请你加入Notion",
    "regionSettings.region.label": "地区",
    "regionSettings.region.subtitle": "影响日期、数字和货币的默认格式",
    "regionalFormatSettings.customDateFormat.applyChanges": "应用更改",
    "regionalFormatSettings.customDateFormat.title": "自定义格式",
    "regionalFormatSettings.customSettingOption.fullDate.custom": "单个设置",
    "regionalFormatSettings.customSettingOption.fullDate.full": "完整日期",
    "regionalFormatSettings.customSettingOption.fullDate.iso": "ISO格式",
    "regionalFormatSettings.customSettingOption.fullDate.long": "全部",
    "regionalFormatSettings.customSettingOption.fullDate.medium": "中间",
    "regionalFormatSettings.customSettingOption.fullDate.short": "简单",
    "regionalFormatSettings.customSettingOption.number.number": "数字",
    "regionalFormatSettings.customSettingOption.number.percent": "百分比",
    "regionalFormatSettings.customSettingOption.number.withCommas":
      "包含逗号的数字",
    "regionalFormatSettings.customSettingOption.shortDate.custom": "单个设置",
    "regionalFormatSettings.customSettingOption.shortDate.iso": "ISO格式",
    "regionalFormatSettings.customSettingOption.shortDate.short": "简单",
    "regionalFormatSettings.customSettingOption.weekStartOn.monday": "星期一",
    "regionalFormatSettings.customSettingOption.weekStartOn.sunday": "周日",
    "regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.monday":
      "星期一",
    "regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.sunday":
      "周日",
    "regionalFormatSettings.defaultSetting.fullDate": "完整日期",
    "regionalFormatSettings.defaultSetting.numbers": "数字",
    "regionalFormatSettings.defaultSetting.shortDate": "日期简写",
    "regionalFormatSettings.defaultSetting.weekStart": "一周的开始日期",
    "regionalFormatSettings.label.subtitle": "自动应用你所在地区的标准格式",
    "regionalFormatSettings.label.title": "使用区域默认值",
    "relationHelpers.autoInverseRelation.name":
      "与{sourceCollectionName}相关 ({sourceRelationName})",
    "relationHelpers.autoInverseRelation.untitledDatabase": "无标题数据库",
    "relationHelpers.autoInverseRelation.untitledRelation": "无标题关系",
    "relationPropertyMenu.addAPage.button": "添加页面",
    "relationPropertyMenu.mobileDoneButton": "完成",
    "relationPropertyMenu.mobileMenuDone.button": "完成",
    "relationPropertyMenu.mobileRelationMenu.title": "关联",
    "relationPropertyMenu.searchPlaceholder": "搜索页面或创建新页面⋯",
    "removeUsersFromSpace.nonexistentSpace.error.message": "空间不存在。",
    "removeUsersFromSpace.nonexistentUser.error.message": "用户不存在。",
    "removeUsersFromSpace.removingLastAdmin.error.message":
      "哎呀！您不能删除最后一个管理员。",
    "renameFileMenuPopup.input.placeholder": "无标题",
    "renamePageMenuPopup.input.placeholder": "无标题",
    "replitBlock.embeds.button.label": "嵌入 Repl",
    "replitBlock.embeds.caption": "适用于 Replit。",
    "replitBlock.placeholder": "嵌入 repl",
    "reportPage.additionalInformation.placeholder": "输入附加信息(可选)",
    "reportPage.helpButton.caption": "Notion 的内容政策",
    "reportPage.reportReasons.inappropriate_content": "内容不当",
    "reportPage.reportReasons.other_content_policy_violation": "其他",
    "reportPage.reportReasons.phishing_or_spam": "网络钓鱼或垃圾邮件",
    "reportPageModal.cancelButton.label": "取消",
    "reportPageModal.closeButton.label": "关闭",
    "reportPageModal.mobile.title": "举报页面",
    "reportPageModal.offlineMessage.description": "请连接网络后进行举报。",
    "reportPageModal.reportButton.label": "举报",
    "reportPageModal.reportReasons.other_content_policy_violation": "其他",
    "reportPageModal.reportReasons.phishing_or_spam": "网络钓鱼或垃圾邮件",
    "reportPageModal.somethingWentWrong.label": "出了些问题。",
    "reportPageModal.thanksForReporting":
      "感谢你举报此页面，我们的团队将进行查看。",
    "reportPageModal.title": "为什么要举报此页面？",
    "requestAccessForm.cancelButton.label": "取消",
    "requestAccessForm.messageInput.placeholder": "消息（可选）",
    "requestAccessForm.mobileSend.label": "发送",
    "requestAccessForm.sendRequestButton.label": "发送请求",
    "requestAccessForm.sendRequestButton.title": "申请访问权限",
    "requestAccessForm.title.label": "申请访问权限",
    restrictedPageTitle: "无访问权限",
    "restrictedPermissionConfirmationModal.actionButton.cancel": "关闭",
    "restrictedPermissionConfirmationModal.actionButton.restoreAccess":
      "恢复访问权限",
    "restrictedPermissionConfirmationModal.actionButton.restrictAccess":
      "限制访问",
    "restrictedPermissionConfirmationModal.footer.whisperText":
      "管理员仍然可以为受限页面恢复权限。",
    "restrictedPermissionConfirmationModal.permissionGroup.generic": "权限",
    "restrictedPermissionConfirmationModal.permissionGroup.group": "群组",
    "restrictedPermissionConfirmationModal.permissionGroup.space": "工作区",
    "restrictedPermissionConfirmationModal.permissionGroup.user": "用户",
    "restrictedPermissionConfirmationModal.remove.description":
      "确定要更改此角色并限制访问吗？此页面将不再继承父页面的分享设置。",
    "restrictedPermissionConfirmationModal.restore.description":
      "确定要恢复访问权限吗？将从父页面继承以下权限：",
    "restrictedPermissionConfirmationModal.restoreNoChanges.description":
      "确定要恢复访问权限吗？",
    "restrictedPermissionConfirmationModal.restrict.description":
      "确定要删除此{permissionGroup}并限制访问权限吗？此页面将不再继承父页面的分享设置。",
    "richTextMenu.boldButton.tooltip": "加粗",
    "richTextMenu.equationButton.tooltip": "创建公式",
    "richTextMenu.italicsButton.tooltip": "斜体",
    "richTextMenu.linkButton.tooltip": "链接",
    "richTextMenu.markAsCodeButton.tooltip": "标记为代码",
    "richTextMenu.mentionButton.tooltip": "提及人员、页面或日期⋯",
    "richTextMenu.multiSelection.label": "多选",
    "richTextMenu.multiSelection.tooltip":
      "多选 alpha：{br}不支持某些功能{br}点击了解更多",
    "richTextMenu.strikeThroughButton.tooltip": "删除线",
    "richTextMenu.turnIntoButton.label": "转换成",
    "richTextMenu.turnIntoButton.tooltip": "转换成",
    "richTextMenu.underlineButton.tooltip": "下划线",
    "router.loginWithSamlError.message": "无法登录。",
    "router.renderErrorPage.message.part1": "糟糕，出了些问题。",
    "router.renderErrorPage.message.part2":
      "请刷新并重试，或者<textlink>给我们发送消息</textlink>。",
    "router.renderErrorPage.reloadButton.label": "刷新",
    "samlErrors.couldNotDownloadIdpMetadata.message":
      "无法下载 SAML IDP 元数据。请检查你的 IDP 元数据 URL 是否正确。",
    "samlErrors.couldNotParseIdentityProviderMetadataXML.message":
      "无法解析 IDP 元数据 XML。",
    "samlErrors.couldNotParseIdpMetadata.message":
      "无法解析 SAML IDP 元数据。请检查你的 IDP 元数据是否正确。",
    "samlErrors.emailDomainAlreadyConfigured.message":
      "此邮件域名已在下列工作区设置过 SAML: {workspace}",
    "samlErrors.emailNotCofiguredForSamlSso.message":
      "此邮箱地址尚未配置此工作区的 SAML SSO。请联系你的管理员。",
    "samlErrors.emailNotConfigured.message": "此邮箱地址未配置使用 SAML SSO",
    "samlErrors.emailNotConfiguredForSamlSso.message":
      "此电子邮件未配置为此工作区的SAML SSO。请与管理员联系。",
    "samlErrors.incorrectURL.message":
      "SAML 断言中的 Audience 必须为 {correctUrl}",
    "samlErrors.incorrectlyConfiguredSaml.message":
      "SAML SSO 配置错误。请联系你的管理员。",
    "samlErrors.invalidIDPURL.message": "IDP 元数据 URL 是无效的 URL。",
    "samlErrors.invalidSamlConfiguration.message":
      "无效的 SAML 配置。请联系你的管理员。",
    "samlErrors.samlNameIdEmailRequired.message":
      "SAML 名称 ID 属性必须是邮箱地址。请联系你的管理员。",
    "samlErrors.samlRequired.message": "你必须使用 SAML SSO 以登录 Noion",
    "saveChanges.errorDialog.blocksCannotBeMovedInsideSelf.message":
      "嘿！块不能移动到它们自己里面。",
    "saveEditsError.message": "保存编辑时存在问题。请给我们发消息寻求帮助。",
    "saveEditsError.mobile.message":
      "保存编辑时存在问题。请给我们发消息寻求帮助。",
    "scroller.scrollDown.name": "向下滚动",
    "search.addFilter.button.label": "添加筛选器",
    "search.clearRecentsButton.text": "清除",
    "search.dateMenu.dateMessage": "日期",
    "search.dateRangeMenu.endingMessage": "结束",
    "search.dateRangeMenu.startingMessage": "开始",
    "search.filterMenu.addAPersonButton.label": "添加人员",
    "search.filterMenu.moreFilters.created": "创建时间",
    "search.filterMenu.moreFilters.createdBy": "创建者",
    "search.filterMenu.moreFilters.inPage": "在页面中",
    "search.filterMenu.moreFilters.lastEdited": "上次编辑",
    "search.filterMenu.moreFiltersSection.title": "更多筛选",
    "search.filterMenu.onlyMatchTitlesToggle.label": "仅匹配标题",
    "search.filterMenu.quickFilters.createdByMe": "由我创建",
    "search.filterMenu.quickFilters.editedLastWeek": "编辑于上周",
    "search.filterMenu.quickFilters.inCurrentPage": "在当前页面",
    "search.filterMenu.quickFiltersSection.title": "快速筛选",
    "search.filterMenu.searchPeople.placeholder": "搜索人员",
    "search.filterMenu.searchPeople.resultsTitle": "选择人员",
    "search.header.addFilter.button.label": "添加筛选器",
    "search.inputMenu.errorMessage": "出了些问题。",
    "search.inputMenu.loading.message": "载入中⋯",
    "search.inputMenu.noResults.message": "未找到结果。",
    "search.recentMenuItem.createdDateAfter.subtitle": "创建于 {startDate}之后",
    "search.recentMenuItem.createdDateBefore.subtitle":
      "创建于 {startDate}之前",
    "search.recentMenuItem.createdDateWithRange.subtitle":
      "创建于 {startDate}至 {endDate}",
    "search.recentMenuItem.lastEditedDateAfter.subtitle":
      "上次编辑于 {startDate}之后",
    "search.recentMenuItem.lastEditedDateBefore.subtitle":
      "上次编辑于 {endDate}之前",
    "search.recentMenuItem.lastEditedDateWithRange.subtitle":
      "上次编辑于 {startDate}至 {endDate}",
    "search.recentMenuItem.listOfPeopleOrPages.label":
      "{firstPageOrPerson} + {numberRemaining}",
    "search.recentMenuItem.onlyMatchTitles.subtitle": "仅匹配标题",
    "search.recentMenuItemDetail.createdBy.subtitle": "由{people}创建",
    "search.recentMenuItemDetail.editedBy.subtitle": "由{people}编辑",
    "search.recentMenuItemDetail.inPage.subtitle": "在{pages}中",
    "search.recentSearches.title": "最近搜索",
    "search.recentlyVisitedPages.title": "最近页面",
    "search.sort.sortButtonPrefixLabel": "排序：",
    "search.sort.sortMenuTitle": "排序方式",
    "search.sort.sortOrder.bestMatches": "最佳匹配",
    "search.sort.sortOrder.created.newestFirst": "创建时间：最新优先",
    "search.sort.sortOrder.created.oldestFirst": "创建时间：最早优先",
    "search.sort.sortOrder.lastEdited.newestFirst": "上次编辑：最新优先",
    "search.sort.sortOrder.lastEdited.oldestFirst": "上次编辑：最早优先",
    "searchDateFilter.acceptButton.label": "接受",
    "searchDateFilter.applyButton": "应用",
    "searchDateFilter.cancelButton.label": "取消",
    "searchDateFilter.clearButton": "清除",
    "searchDateFilter.shortTitle": "日期",
    "searchErrorMenuItem.error.genericErrorMessage": "出了些问题",
    "searchErrorMenuItem.error.noResults": "无结果",
    "searchErrorMenuItem.errorPrompt.goOnline": "连接到网络以获取更多结果。",
    "searchErrorMenuItem.errorPrompt.refreshOrReport":
      "尝试刷新或<reportlink>报告问题</reportlink>。",
    "searchErrorMenuItem.errorPrompt.searchTerms": "尝试不同的搜索词",
    "searchErrorMenuItem.errorPrompt.searchTermsAndFilters":
      "尝试不同的搜索词或筛选",
    "searchFooter.helpText.openHint": "打开",
    "searchFooter.helpText.openNewTab": "在新标签页中打开",
    "searchFooter.helpText.openNewWindow": "在新窗口中打开",
    "searchFooter.helpText.resultCount":
      "{resultCount, plural, other {<resultwrapper>{resultCount}</resultwrapper> 个结果}}",
    "searchFooter.helpText.resultCountApproximate":
      "{resultCount, plural, other {<resultwrapper>{resultCount}+</resultwrapper> 个结果}}",
    "searchFooter.helpText.selectHint": "选择",
    "searchHelpers.afterStartDate": "在 {startDate}之后",
    "searchHelpers.beforeEndDate": "在 {endDate}之前",
    "searchHelpers.betweenStartAndEndDates": "{startDate} - {endDate}",
    "searchInputMenuItem.placeholder.namedPage": "在 {pageTitle} 中搜索⋯",
    "searchInputMenuItem.placeholder.namedSpace": "搜索 {spaceName}⋯",
    "searchInputMenuItem.placeholder.unnamedPage": "在页面中搜索⋯",
    "searchPageFilter.searchTokenFilter.addAPage.button": "添加页面",
    "searchPageFilter.searchTokenFilter.resultSection.title": "选择页面",
    "searchPageFilter.searchTokenFilter.tokenInput.placeholder": "搜索页面⋯",
    "searchTokenFilter.applyButton": "应用",
    "searchTokenFilter.clearButton": "清除",
    "securitySAMLSettings.SAMLSection.helpButton.label": "了解 SAML 和单点登录",
    "securitySAMLSettings.SAMLSection.uneditableMessage":
      "SAML 正在由工作区<bold>{workspaceName}</bold>管理。请到那里更改相关 SAML 设置。",
    "securitySAMLSettings.SAMLSingleSignOnSection.automaticallyCreateAccounts.caption":
      "允许用户创建 Notion 帐户，而无需从 IDP 配置。",
    "securitySAMLSettings.SAMLSingleSignOnSection.automaticallyCreateAccounts.label":
      "登录时自动创建帐户",
    "securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.caption":
      "这将允许用户使用已配置的域名上的邮箱地址通过 SAML 登录。SAML 身份验证可以在下面强制执行。",
    "securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.label":
      "启用 SAML",
    "securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.tooltip":
      "SAML 完全配置后方可启用。",
    "securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.captionMulti":
      "强制执行后，在上面配置的电子邮件域名中到工作区成员只能使用 SAML SSO 登录。管理员帐户仍可以使用电子邮件登录。",
    "securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.label":
      "强制使用 SAML",
    "securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.tooltip":
      "启用 SAML 后变更此选项。",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataURLOption.label":
      "IDP 元数据 URL",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.caption":
      "输入你的身份提供商（IDP）提供的值。",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.input.placeholder":
      "IDP 元数据 XML",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.label":
      "IDP 元数据 XML",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.title":
      "单点登录 URL",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.url.caption":
      "在身份提供商的 SAML 配置中输入此内容。",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.url.tooltip":
      "复制链接",
    "securitySAMLSettings.SAMLSingleSignOnSection.title": "SAML 单点登录",
    "securitySAMLSettings.SCIMSection.contactUs":
      "要生成 SCIM AP I令牌，请<contactlink>联系支持</contactlink>。",
    "securitySAMLSettings.SCIMSection.generateScimTokenButton.label":
      "生成 SCIM API 令牌",
    "securitySAMLSettings.SCIMSection.helpButton.label": "了解 SCIM",
    "securitySAMLSettings.SCIMSection.revokeToken.label": "撤销令牌",
    "securitySAMLSettings.SCIMSection.revokeTokenModal.acceptButton.label":
      "撤销 SCIM 令牌",
    "securitySAMLSettings.SCIMSection.revokeTokenModal.cancelButton.label":
      "取消",
    "securitySAMLSettings.SCIMSection.revokeTokenModal.message":
      "撤销 SCIM 令牌？使用此令牌的所有 SCIM API 请求将不再成功。",
    "securitySAMLSettings.SCIMSection.title": "SCIM 配置",
    "securitySAMLSettings.SCIMSection.tokenRevoked.message":
      "成功吊销 SCIM 令牌。新令牌已可用。",
    "securitySAMLSettings.SCIMSection.viewToken.label": "查看令牌",
    "securitySAMLSettings.SCIMSection.viewTokenModal.copyButton.label":
      "复制令牌",
    "securitySAMLSettings.SCIMSection.viewTokenModal.dismissButton.label":
      "关闭",
    "securitySAMLSettings.cancelButton.label": "取消",
    "securitySAMLSettings.disableGuests.confirmationModal.confirmButton.label":
      "是的",
    "securitySAMLSettings.disableGuests.confirmationModal.message":
      "是否确定？此工作区中的所有访客都将被移除。",
    "securitySAMLSettings.disablePersonalIntegrations.confirmationModal.confirmButton.label":
      "是",
    "securitySAMLSettings.disablePersonalIntegrations.confirmationModal.message":
      "是否确定？通过 OAuth 在此工作区中安装的所有集成都将被删除。",
    "securitySAMLSettings.emailDomainsSection.emailInput.caption":
      "启用 SAML 后，任何具有以下域名的邮箱地址的都可以使用 SAML SSO 登录。<contactlink>联系客服</contactlink>以添加或删除域。",
    "securitySAMLSettings.emailDomainsSection.emailInput.placeholder":
      "未配置电子邮件域名",
    "securitySAMLSettings.emailDomainsSection.title": "电子邮件域名",
    "securitySAMLSettings.offline.message": "请连接网络后管理安全设置。",
    "securitySAMLSettings.preventPublicSharing.confirmationModal.confirmButton.label":
      "是的",
    "securitySAMLSettings.preventPublicSharing.confirmationModal.message":
      "是否确定？任何非工作区成员或访客将无权访问工作区中的所有页面。",
    "securitySAMLSettings.securitySection.disableExport.caption":
      "这将禁止任何人导出为 Markdown、CSV 或 PDF。",
    "securitySAMLSettings.securitySection.disableExport.label": "禁用导出",
    "securitySAMLSettings.securitySection.disableGuests.caption":
      "这将禁止任何人邀请工作区之外的人访问任何页面。",
    "securitySAMLSettings.securitySection.disableGuests.label": "禁用访客",
    "securitySAMLSettings.securitySection.disableMovingPages.caption":
      "这将禁止任何人通过“移动到”或“保存副本到”操作将页面移动或保存副本到其他工作区。",
    "securitySAMLSettings.securitySection.disableMovingPages.label":
      "禁止移动页面或保存副本到其他工作区",
    "securitySAMLSettings.securitySection.disablePersonalIntegrations.caption":
      "如果禁用它，您将无法通过OAuth在工作空间中进行集成安装。",
    "securitySAMLSettings.securitySection.disablePersonalIntegrations.label":
      "禁用通过OAuth的集成安装",
    "securitySAMLSettings.securitySection.disablePublicAccessRequests.caption":
      "这将防止拥有页面链接的人请求访问。工作区成员始终可以请求访问权限。",
    "securitySAMLSettings.securitySection.disablePublicAccessRequests.label":
      "禁用来自非成员的页面访问请求",
    "securitySAMLSettings.securitySection.disableSpacePageEdits.caption":
      "这将使成员无法创建、移动、重新排序和删除顶层工作区页面。",
    "securitySAMLSettings.securitySection.disableSpacePageEdits.label":
      "防止成员更改侧边栏的工作区部分",
    "securitySAMLSettings.securitySection.preventPublicSharing.caption":
      "这将禁用此工作区中每个页面上“分享”菜单中的“分享到网络”选项。",
    "securitySAMLSettings.securitySection.preventPublicSharing.label":
      "防止成员公开分享页面",
    "securitySAMLSettings.securitySection.title": "安全",
    "securitySAMLSettings.spaceNamesSection.spaceNameInput.caption":
      "此处的 SAML 设置适用于多个工作区。<contactlink>联系支持人员</contactlink>来添加或删除工作区。",
    "securitySAMLSettings.spaceNamesSection.title": "工作区",
    "securitySAMLSettings.updateButton.label": "更新",
    "securitySAMLSettings.upsell.caption":
      "升级到企业版即可获得高级安全设置、SAML 单点登录以及自动用户和群组配置。",
    "securitySAMLSettings.upsell.title": "升级以获得高级安全设置、SAML 和 SCIM",
    "selectableCommentMenu.addCommentPrompt.tooltip":
      "点击<invertedcolor>添加评论</invertedcolor>",
    "selectableHoverMenu.filterActions.placeholder": "筛选动作⋯",
    "selectionLinkButton.addLink.tooltip": "添加链接",
    "selectionLinkButton.copyLink": "复制链接",
    "selectionLinkButton.emptyLink.placeholder":
      "粘贴链接，例如 http://nytimes.com⋯",
    "selectionLinkButton.label": "链接",
    "selectionLinkButton.linkToPage": "链接到页面",
    "selectionLinkButton.linkToPage.linkToBlock": "链接到块",
    "selectionLinkButton.linkToPage.loading": "载入中⋯",
    "selectionLinkButton.linkToPage.unknownBlock": "未知块",
    "selectionLinkButton.linkToPageSection.title": "链接到页面",
    "selectionLinkButton.linkToURL": "链接到网页",
    "selectionLinkButton.linkToWebPage": "链接到网页",
    "selectionLinkButton.linkedToSection.title": "链接到",
    "selectionLinkButton.linkedToSection.webPage": "网页",
    "selectionLinkButton.mobile.title": "链接",
    "selectionLinkButton.removeLink": "移除链接",
    "selectionLinkButton.search.createNewLinkPlaceholder": "粘贴链接或搜索页面",
    "selectionLinkButton.search.editLinkPlaceholder": "编辑链接或搜索页面",
    "selectionLinkButton.search.placeholder": "粘贴链接或输入以搜索",
    "selectionLinkButton.unlinkButton.label": "取消链接",
    "sendEmailDigest.emailSubjectLine":
      "{numberOfUpdates, plural, other {{workspaceName}有 {numberOfUpdates} 项更新}}",
    "sendEmailDigest.untitledSpaceName.placeholder": "无标题",
    "sendMobileAppLink.textMessage":
      "你好！点击此链接可在手机上安装 Notion： {baseURL}/mobile?download=true 不要忘了下载我们的 Mac 和 Windows 应用。祝使用愉快！",
    "settingItem.buttonPopup.done.label": "完成",
    "settings.regionSettings.regionSearch": "搜索区域",
    "sharedActivity.updatedPermissionGroupCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}创建了群组{groupName}}}",
    "sharedActivity.updatedPermissionGroupDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}删除了群组{groupName}}}",
    "sharedActivity.updatedPermissionGroupEdit.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}编辑了群组{groupName}}}",
    "sharedActivity.updatedPermissionGroupEditedDefault.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}编辑了群组{groupName}}}",
    "sharedWithMe.unknownErrorMessage": "出了些问题。",
    "sharedWithMeButton.sidebarButton.label": "与我共享",
    "sharedWithMeButton.tooltop": "查找其他人与你分享的页面。",
    "sharedWithMePage.menuItem.caption": "{time}・{actorName}",
    "sharedWithMePageMenuItem.copylinkToPage.tooltip": "复制链接",
    "sharedWithMePageMenuItem.linkCopied.tooltip": "链接已复制",
    "sharedWithMePopover.addToBookmarks.tooltip": "添加到最爱",
    "sharedWithMePopover.earlierSection.label": "早些时候",
    "sharedWithMePopover.learnMore.prompt": "了解共享页面",
    "sharedWithMePopover.menu.header": "与我分享",
    "sharedWithMePopover.offline.message": "请连接网络后查看动态。",
    "sharedWithMePopover.pastWeekSection.label": "上周",
    "sharedWithMePopover.search.noMatchesPrompt": "未找到共享页面。",
    "sharedWithMePopover.search.placeholder": "搜索共享页面",
    "sharedWithMePopover.search.subtitle": "他人与你分享的页面将显示在这里。",
    "sharedWithMePopover.sortOrder.lastEditedNewest": "上次编辑时间",
    "sharedWithMePopover.sortOrder.relevance": "相关性",
    "sharedWithMePopover.todaySection.label": "今天",
    "sharedWithMePopover.unknownErrorMessage": "出了些问题。",
    "sidebar.addAPageButton.tooltip": "添加页面",
    "sidebar.addAPageButtonTeamToggle.caption": "此页面将添加到你的团队中。",
    "sidebar.addAPageButtonTeamToggle.tooltip": "添加页面",
    "sidebar.addAPrivatePage.tooltip": "添加页面",
    "sidebar.addAPrivatePageToWorkspace.tooltip": "添加页面",
    "sidebar.addATeam.tooltip": "添加团队",
    "sidebar.addATeamButton.tooltip": "浏览或创建团队",
    "sidebar.addAWorkspacePage.tooltip": "添加页面",
    "sidebar.betaBadge": "测试版",
    "sidebar.bookmarkedPagesSection.tooltip": "你最爱的页面。",
    "sidebar.developmentOnly.uidoc.button": "UI 文档",
    "sidebar.developmentOnly.uidoc.tooltip": "仅用于开发的设计和工程工具。",
    "sidebar.favoritesSection.header": "最爱",
    "sidebar.guestMember.createWorkspacePrompt": "创建工作区",
    "sidebar.guestMember.message":
      "你当前是工作区访客。若要查看所有工作区页面，请联系管理员将你升级为成员。",
    "sidebar.menuListTeam.browseLabel": "浏览团队",
    "sidebar.menuListTeam.createLabel": "新建团队",
    "sidebar.myPagesSection.header": "我的页面",
    "sidebar.myPagesSection.tooltip":
      "你创建的私人或私有分享页面。只有你特定邀请工作区成员，他们才能访问。",
    "sidebar.newPage.button": "新页面",
    "sidebar.offlinePagesSection.tooltip": "供离线使用的已保存页面。",
    "sidebar.offlineSection.header": "离线",
    "sidebar.openImportModalButton": "导入",
    "sidebar.openImportModalButton.tooltip": "从 Word、Markdown、HTML 等导入。",
    "sidebar.openTeamBrowserButton": "浏览团队",
    "sidebar.openTeamBrowserButton.tooltip": "查看工作区中的团队。",
    "sidebar.openTemplatePickerButton": "模板",
    "sidebar.openTemplatePickerButton.tooltip":
      "查看模板并将其保存到你的工作区中。",
    "sidebar.openTrashModalButton.tooltip": "恢复已删除的页面。",
    "sidebar.outlinerTeamToggleButton.addLabel": "添加成员",
    "sidebar.outlinerTeamToggleButton.archiveLabel": "归档团队",
    "sidebar.outlinerTeamToggleButton.browseLabel": "浏览团队",
    "sidebar.outlinerTeamToggleButton.leaveLabel": "退出团队",
    "sidebar.outlinerTeamToggleButton.newTeamLabel": "新建团队",
    "sidebar.outlinerTeamToggleButton.tooltip": "团队设置和成员...",
    "sidebar.outlinerTeamToggleButton.viewLabel": "团队设置和成员",
    "sidebar.privatePagesSection.tooltip": "只有你可以访问这些页面。",
    "sidebar.privateSection.header": "私人",
    "sidebar.quickFindSearch.label": "快速查找",
    "sidebar.quickFindSearch.tooltip": "搜索并快速跳转到页面",
    "sidebar.sectionHeaderHide.tooltip": "点击以隐藏分区",
    "sidebar.sectionHeaderShow.tooltip": "点击以显示分区",
    "sidebar.sharedPagesSection.tooltip": "只有你和分享过页面的人才能访问。",
    "sidebar.sharedSection.header": "共享",
    "sidebar.teamSection.header": "团队",
    "sidebar.teamSection.tooltip": "你的团队之一",
    "sidebar.templateIntro.content":
      "开箱即用，或根据你自己的工作流程自定义它们。",
    "sidebar.templateIntro.title": "这里有一些模板，可以帮助你入门",
    "sidebar.upgradeButton.prompt":
      "更新你的个人资料、升级到专业版或邀请新成员",
    "sidebar.workspacePagesSection.tooltip": "你的团队列表。",
    "sidebar.workspaceSection.header": "工作区",
    "sidebarActions.confirmDialog.lockedWorkspaceTopLevel.message":
      "此工作区已锁定工作区顶层页面的动作。",
    "sidebarActions.confirmDialog.movePageToPrivate.confirmButton.label":
      "移动到私人区",
    "sidebarActions.confirmDialog.movePageToPrivate.message":
      "确定要将此页面设为私有吗？ <boldtext>只有你将能够访问它。</boldtext>",
    "sidebarActions.confirmDialog.moveWorkspacePage.confirmButton.label":
      "移动页面",
    "sidebarActions.confirmDialog.moveWorkspacePage.message":
      "确定要移动此工作区页面？<boldtext>所有 {memberCount} 位成员都可以看到</boldtext>",
    "sidebarActions.confirmDialog.newWorkspacePage.confirmButton.label":
      "创建顶层页面",
    "sidebarActions.confirmDialog.newWorkspacePage.message":
      "确定要创建一个顶层页面吗？ <strongtext>此页面将在所有 {memberCount} 位成员的工作区边栏中可见。</strongtext>",
    "sidebarActions.confirmDialog.reorderWorkspaceSidebar.confirmButton.label":
      "重新排序侧边栏",
    "sidebarActions.confirmDialog.reorderWorkspaceSidebar.message":
      "确定要对工作区边栏重新排序吗？ <boldtext>这将影响所有 {memberCount} 位成员。</boldtext>",
    "sidebarActions.confirmDialog.sharePageWithWorkspace.confirmButton.label":
      "移动到工作区",
    "sidebarActions.confirmDialog.sharePageWithWorkspace.message":
      "确定与工作区分享此页面吗？<boldtext>所有 {memberCount} 位成员都将可以访问。</boldtext>",
    "sidebarAppDownload.downloadApp": "下载应用",
    "sidebarAppDownload.mac.title": "<boldtext>试用 Mac 版 Notion </boldtext>",
    "sidebarAppDownload.osType.mac": "Mac",
    "sidebarAppDownload.osType.windows": "Windows",
    "sidebarAppDownload.subtitle":
      "<boldtext>我们采用极简的桌面应用，可让你保持专注。而且该应用的速度也更快了。</boldtext>",
    "sidebarAppDownload.title": "<boldtext>试用 {os} 版 Notion</boldtext>",
    "sidebarAppDownload.windows.title":
      "<boldtext>试用 Windows 版 Notion </boldtext>",
    "sidebarCreateTeamModal.footer.createTeam": "创建团队",
    "sidebarCreateTeamModal.footer.doneLabel": "提交",
    "sidebarCreateTeamModal.footer.nextLabel": "下一步",
    "sidebarCreateTeamModal.footer.previousLabel": "返回",
    "sidebarCreateTeamModal.footer.submitLabel": "暂时跳过",
    "sidebarCreateTeamModal.logo.label": "添加徽标",
    "sidebarCreateTeamModal.membersDescription.label": "邀请人员进行协作",
    "sidebarCreateTeamModal.membersTitle.label": "将人员添加到 {teamName}",
    "sidebarCreateTeamModal.teamDescription.label": "协作和组织页面的工作区",
    "sidebarCreateTeamModal.teamScreen.addAllMembers":
      "{numMembers, plural, other {添加当前工作区的所有 {numMembers} 个成员}}",
    "sidebarCreateTeamModal.teamScreen.closedTeam.caption": "封闭式",
    "sidebarCreateTeamModal.teamScreen.closedTeam.description":
      "只有团队成员才能访问团队中的页面。",
    "sidebarCreateTeamModal.teamScreen.closedTeam.title": "封闭式团队",
    "sidebarCreateTeamModal.teamScreen.descriptionPlaceholder": "团队详细信息",
    "sidebarCreateTeamModal.teamScreen.inviteByNameLabel": "通过姓名邀请",
    "sidebarCreateTeamModal.teamScreen.inviteTeamMembersLabel": "邀请团队成员",
    "sidebarCreateTeamModal.teamScreen.namePlaceholder": "Acme 研究所",
    "sidebarCreateTeamModal.teamScreen.openTeam.caption": "开放式",
    "sidebarCreateTeamModal.teamScreen.openTeam.description":
      "工作区中的每个人都可以访问团队中的页面。",
    "sidebarCreateTeamModal.teamScreen.openTeam.title": "开放式团队",
    "sidebarCreateTeamModal.teamScreen.privateTeam.caption": "私人",
    "sidebarCreateTeamModal.teamScreen.privateTeam.title": "私人团队",
    "sidebarCreateTeamModal.teamScreen.teamDescriptionLabel": "团队描述",
    "sidebarCreateTeamModal.teamScreen.teamNameLabel": "团队名称",
    "sidebarCreateTeamModal.teamTitle.label": "创建新团队",
    "sidebarCredits.earnedCredit.message":
      "你已赚取 {creditAmountInDollars} 的积分。",
    "sidebarCredits.freeMonthMessage":
      "{numberOfMonths, plural, other {等同于 <b>{numberOfMonths} 个月</b>免费。}}",
    "sidebarExpandButton.tooltip": "锁定展开侧边栏",
    "sidebarItem.addAPageInside.tooltip": "快速添加子页面",
    "sidebarItem.changeIconButton.tooltip": "更改图标",
    "sidebarItem.favoritedPageMenuButton.tooltip": "移除、重命名等⋯",
    "sidebarItem.pageMenuButton.tooltip": "删除、创建副本等⋯",
    "sidebarMobile.addAPageToOnlyPrivateSection.title": "添加页面",
    "sidebarMobile.addAPrivatePage.title": "添加页面",
    "sidebarMobile.addPageToWorkspace.title": "添加页面",
    "sidebarMultiSwitcher.desktopAppGetMobileApp.prompt": "获取移动 app",
    "sidebarMultiSwitcher.macAppButton.text": "获取 Mac 应用",
    "sidebarMultiSwitcher.windowsAppButton.text": "获取 Windows 应用",
    "sidebarResizer.clickToToggleSidebar.message":
      "点击<invertedcolor>来{expanded, select, true {关闭} other {打开锁定}} </invertedcolor>",
    "sidebarResizer.tooltip.dragMessage":
      "拖动<invertedcolor>调整大小</invertedcolor>",
    "sidebarSelectionActions.afterBulkMoveCompleteToastMessage":
      "{numPagesMoved, plural, other {移动了 {numPagesMoved} 页}}",
    "sidebarSelectionActions.afterBulkMoveCompleteToastMessageWithDestination":
      "{numPagesMoved, plural, other {将 {numPagesMoved} 页移动到了 {destinationName}}}",
    "sidebarSettingsButton.mobile.settingsAndMembers": "设置",
    "sidebarSettingsButton.settingsAndMembers": "设置与成员",
    "sidebarStudentPlanPrompt.eligible.getFreePrompt": "获取免费个人专业版",
    "sidebarStudentPlanPrompt.eligible.message":
      "你有资格获取免费个人专业版（教育）。",
    "sidebarSwitcher.createOrJoinMenu.goOnlinePrompt": "请连接网络",
    "sidebarSwitcher.createOrJoinWorkspaceButton.prompt": "创建或加入工作区",
    "sidebarSwitcher.desktopAppGetMobileApp.prompt": "获取移动应用",
    "sidebarSwitcher.educationPlan.label": "个人专业版（教育）",
    "sidebarSwitcher.enterprisePlan.label": "企业版",
    "sidebarSwitcher.legacyPlan.label": "旧定价方案",
    "sidebarSwitcher.logoutButton.prompt": "登出 {formattedCurrentUser}",
    "sidebarSwitcher.macAppButton.text": "Mac 应用",
    "sidebarSwitcher.mobileAppButton.text": "移动应用",
    "sidebarSwitcher.mobileWorkspacesMenuTitle.text": "工作区",
    "sidebarSwitcher.personalPlan.label": "个人版",
    "sidebarSwitcher.proPlan.label": "个人专业版",
    "sidebarSwitcher.teamPlan.label": "团队版",
    "sidebarSwitcher.teamTrialPlan.label": "团队试用版",
    "sidebarSwitcher.webClipperButton.text": "网页剪裁器",
    "sidebarSwitcher.windowsAppButton.text": "Windows 应用",
    "sidebarSwitcher.workspaceSubtitleWithMembers.label":
      "{planType}・{numberOfWorkspaceMembers} 位成员",
    "sidebarSwitcher.workspaceSubtitleWithoutMembers.label": "{planType}",
    "sidebarSwitcherMultiAccount.addAccount.description":
      "登录现有帐户，或使用新邮箱地址注册。你当前的帐户将保持登录状态。",
    "sidebarSwitcherMultiAccount.addAccount.title": "添加帐户",
    "sidebarSwitcherMultiAccount.addAccountButton.label": "添加另一个帐户",
    "sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label": "取消",
    "sidebarSwitcherMultiAccount.createWork.description":
      "我们会检查你是否已有队友在 Notion 上。如果没有，我们将为你的团队创建新的工作区。",
    "sidebarSwitcherMultiAccount.createWork.title": "创建工作帐户",
    "sidebarSwitcherMultiAccount.errorMessage":
      "SidebarSwitcherMultiAccount 中出现意外的 createType",
    "sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label":
      "创建工作帐户",
    "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label": "登出全部",
    "sidebarSwitcherMultiAccount.mobileMenu.title": "帐户与工作区",
    "sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label":
      "加入或创建工作区",
    "sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label": "登出",
    "sidebarTeamModal.aboutScreen.descriptionPlaceholder": "添加描述",
    "sidebarTeamModal.aboutScreenMembers.label": "成员",
    "sidebarTeamModal.aboutScreenTeamOwner.label": "团队所有者",
    "sidebarTeamModal.aboutScreenTopLevelPages.label": "团队页面",
    "sidebarTeamModal.cancelButton.label": "取消",
    "sidebarTeamModal.descriptionInput.label": "描述",
    "sidebarTeamModal.lastUpdated.label": "更新时间 {time}",
    "sidebarTeamModalSettingsScreen.dangerZone.archiveTeamButton": "归档团队",
    "sidebarTeamModalSettingsScreen.dangerZone.archiveTeamCaption":
      "归档此团队会将其从所有团队成员的侧边栏中移除。",
    "sidebarTeamModalSettingsScreen.dangerZone.archiveTeamConfirmButton":
      "归档团队",
    "sidebarTeamModalSettingsScreen.dangerZone.archiveTeamConfirmHeader":
      "确定要归档此团队吗？",
    "sidebarTeamModalSettingsScreen.dangerZone.archiveTeamConfirmLabel":
      "归档此团队会将其从所有团队成员的侧边栏中移除。输入团队名称进行确认。",
    "sidebarTeamModalSettingsScreen.dangerZone.restoreTeamButton": "恢复团队",
    "sidebarTeamModalSettingsScreen.dangerZone.restoreTeamCaption":
      "恢复此团队将从侧边栏中为之前添加的所有团队成员添加团队。",
    "sidebarTeamModalSettingsScreen.dangerZone.title": "危险区域",
    "sidebarTeamModalSettingsScreen.disableGuests.confirmationModal.confirmButton.label":
      "是",
    "sidebarTeamModalSettingsScreen.disableGuests.confirmationModal.message":
      "是否确定？此团队中的所有页面访客都将被移除。",
    "sidebarTeamModalSettingsScreen.header.title": "安全",
    "sidebarTeamModalSettingsScreen.preventPublicSharing.confirmationModal.confirmButton.label":
      "是",
    "sidebarTeamModalSettingsScreen.preventPublicSharing.confirmationModal.message":
      "是否确定？任何非工作区成员或访客将无权访问此团队中的所有页面。",
    "sidebarTeamModalSettingsScreen.setting.exportCaption":
      "避免导出为 Markdown、CSV 或 PDF",
    "sidebarTeamModalSettingsScreen.setting.exportTitle": "禁用导出",
    "sidebarTeamModalSettingsScreen.setting.guestCaption":
      "禁用邀请此工作区外部的成员",
    "sidebarTeamModalSettingsScreen.setting.guestTitle": "禁用访客",
    "sidebarTeamModalSettingsScreen.setting.shareCaption":
      "禁用该团队中所有页面的“分享”菜单中的“分享到网络”选项",
    "sidebarTeamModalSettingsScreen.setting.shareTitle": "禁用公共页面共享",
    "sidebarTeamModalSettingsScreen.setting.topLockCaption":
      "防止成员创建、移动、重新排序或删除顶层团队页面",
    "sidebarTeamModalSettingsScreen.setting.topLockTitle": "锁定顶层部分",
    "sidebarTeamModalTab.option.about": "关于",
    "sidebarTeamModalTab.option.people": "成员",
    "sidebarTeamModalTab.option.settings": "设置",
    "sidebarTeamModalTab.teamLabel.stub": "你的团队",
    "sidebarTrash.allPages.tabHeader": "所有页面",
    "sidebarTrash.deletePagePermanentlyButton.tooltip": "永久删除",
    "sidebarTrash.filterBy.noMatchesPrompt": "无匹配项。",
    "sidebarTrash.filterBy.placeholder": "按页面标题筛选⋯",
    "sidebarTrash.goOnline.prompt": "请连接网络后查看垃圾箱。",
    "sidebarTrash.inCurrentPage.tabHeader": "在当前页面",
    "sidebarTrash.learnMore.prompt": "了解删除和恢复页面",
    "sidebarTrash.menu.header": "垃圾箱",
    "sidebarTrash.mobileFilterBy.noMatchesPrompt": "无匹配项。",
    "sidebarTrash.restorePageButton.tooltip": "恢复",
    "sidebarTrashButton.text": "垃圾箱",
    "sidebarUnexpandButton.closeSidebar.tooltip": "关闭侧边栏",
    "signupPage.mobileAdsSignup.checkYourEmail.description":
      "我们通过电子邮件向你发送了一个唯一的登录链接，前往你的收件箱并单击该链接以完成注册！",
    "signupPage.mobileAdsSignup.checkYourEmail.title": "检查你的电子邮件！",
    "signupPage.pageTitle": "注册",
    "signupPage.title": "注册",
    "signupPage.titleForSpace": "欢迎访问 Notion 上的 {workspaceName}",
    "simpleTable.actionBar.fitToPage": "使表格适合页面宽度",
    "simpleTable.actionBar.options": "选项",
    "simpleTable.resizer.dimensions": "{num_columns} × {num_rows}",
    "simpleTable.resizer.tooltipColumn": "<b>点击</b>以添加新列",
    "simpleTable.resizer.tooltipCorner": "<b>点击</b>以添加新行和列",
    "simpleTable.resizer.tooltipRow": "<b>点击</b>以添加新行",
    "simpleTable.resizer.tooltipSubtitleColumn":
      "<b>拖动</b>以快速添加或删除列",
    "simpleTable.resizer.tooltipSubtitleCorner":
      "<b>拖动</b>以快速添加或删除行和列",
    "simpleTable.resizer.tooltipSubtitleRow": "<b>拖动</b>以快速添加或删除行",
    "simpleTableActions.collectionColumnTitle": "列 {columnIndex}",
    "simpleTableActions.collectionTitle": "标题",
    "sketchBlock.embeds.button.label": "嵌入 Sketch",
    "sketchBlock.embeds.caption": "适用于启用了公共链接访问的 Sketch 链接",
    "sketchBlock.placeholder": "嵌入 Sketch",
    "slackActions.dialogError.loginWithSlack.errorMessage": "出了些问题。",
    "slackActions.loginPopupModal.title": "Slack 登录",
    "slackAuthorizationErrors.blockNotFound.errorMessage": "未找到块。",
    "slackAuthorizationErrors.missingEditPermission.errorMessage":
      "用户无法编辑块。",
    "slackAuthorizationErrors.webhookNotFound.errorMessage":
      "找不到 Slack 的 webhook。",
    "slackIntegrationButton.removeIntegrationConfirmationDialog.prompt":
      "确定要删除 Slack 集成服务吗？",
    "slackIntegrationButton.removeIntegrationConfirmationDialog.removeButton.label":
      "移除",
    "slackNotification.pageTitle.untitledPage.placeholder": "无标题",
    "slackNotification.welcomeMessage":
      "欢迎来到 Notion！此频道已与 Notion 的页面绑定成功 {pageLink}。你将获取有关此页面或页面内的评论、提及和编辑的更新动态。",
    "slackNotifications.blockCreated.notificationContents":
      "{userName}在{blockName}中创建了{blockName} {workspaceName}",
    "slackNotifications.blockDeleted.notificationContents":
      "{userName}在{workspaceName}删除了{blockName}",
    "slackNotifications.blockEdited.notificationContents":
      "{userName}编辑了{blockName}",
    "slackNotifications.botInvitedYouToSpace.notificationContents":
      "你已被邀请加入{workspaceName}",
    "slackNotifications.collectionPropertyEdited.contents":
      "{userName}编辑了{collectionName}中的{propertyName}属性",
    "slackNotifications.collectionRowCreated.notificationContents":
      "{userName}在{collectionName}创建了{rowName} {collectionName}",
    "slackNotifications.collectionRowDeleted.notificationContents":
      "{userName}在{collectionName}删除了{rowName}",
    "slackNotifications.collectionViewEdited.contents":
      "{userName}编辑了{collectionName}中的{collectionViewName}视图",
    "slackNotifications.defaultPropertyName.label": "属性",
    "slackNotifications.emptyPropertyValue.label": "空",
    "slackNotifications.equationAuthorName.notificationTitle": "公式",
    "slackNotifications.permissionChanged.notificationBody":
      "{permissionTarget}：{permissionsBefore} → {permissionsAfter}",
    "slackNotifications.permissionsCreatedOrDeletedText.notificationContents":
      "{permissionTarget}：{permissions}",
    "slackNotifications.permissionsEditedForBlock.notificationContents":
      "{userName}编辑了{blockName}的权限",
    "slackNotifications.propertyValueChanged.notificationContents":
      "{propertyName}：{propertyValueBefore} → {propertyValueAfter}",
    "slackNotifications.propertyValueWithName.notificationContents":
      "{propertyName}：{propertyValue}",
    "slackNotifications.publicPermissions.label": "公开",
    "slackNotifications.reminderInPage.contents": "{pageName}中的提醒",
    "slackNotifications.showMoreEditsLinkText.label":
      "{numberOfMoreEdits, plural, other {显示其余 {numberOfMoreEdits} 项编辑⋯}}",
    "slackNotifications.unknownAuthorForComment.label": "未知作者",
    "slackNotifications.unknownCollectionPropertyEdited.label": "未知",
    "slackNotifications.untitledCollectionName.label": "无标题",
    "slackNotifications.userAddedYouToSpace.notificationContents":
      "{userName}将你添加到{workspaceName}",
    "slackNotifications.userCommentedInPage.notificationContents":
      "{userName}在{pageName}发表了评论",
    "slackNotifications.userDeletedPage.contents": "{userName}删除了{pageName}",
    "slackNotifications.userEditedAccountSettings.contents":
      "{userName}编辑了其帐户设定",
    "slackNotifications.userEditedCollection.notificationContents":
      "{userName}编辑了{collectionName}",
    "slackNotifications.userInvitedYouToSpace.notificationContents":
      "{userName}邀请你加入{workspaceName}",
    "slackNotifications.userLockedPage.contents": "{userName}锁定了{pageName}",
    "slackNotifications.userMentionedInBlock.notificationContents":
      "{userName}在{pageName}提到了你",
    "slackNotifications.userPermanentlyDeletedPage.contents":
      "{userName}永久删除了{pageName}",
    "slackNotifications.userRequestedAccessToBlock.contents":
      "{userName}请求访问{pageName}",
    "slackNotifications.userRestoredPage.contents":
      "{userName}恢复了{pageName}",
    "slackNotifications.userUnlockedPage.contents":
      "{userName}解锁了{pageName}",
    "spaceActions.createGettingStartedPage.copyNotCreated.error":
      "无法创建客户端副本。",
    "spaceActions.deletingWorkspace.loadingMessage": "正在删除工作区⋯",
    "spaceActions.dialogError.couldNotMoveContentError.message":
      "抱歉，我们无法移动此内容。请再试一次。",
    "spaceActions.dialogError.createOrUpdatePermissionGroup.invalidWorkspaceStorage.message":
      "没有有关此工作区的本地数据。",
    "spaceActions.dialogError.createTemplatesInSpace.invalidStorage.message":
      "无效的工作区数据。",
    "spaceActions.dialogError.createTemplatesInWorkspace.invalidStorage.message":
      "无效的工作区视图数据。",
    "spaceActions.dialogError.createTemplatesInWorkspace.invalidUserSettings.message":
      "无效的用户设置数据。",
    "spaceActions.dialogError.createWorkspaceError.goOnline.message":
      "请连接网络后创建你的工作区。",
    "spaceActions.dialogError.createWorkspaceError.message":
      "抱歉，我们无法创建你的工作区。请再试一次。",
    "spaceActions.dialogError.createWorkspaceError.notLoggedIn.message":
      "必须登录。",
    "spaceActions.dialogError.forkPageError.message": "无法创建分支页面。",
    "spaceActions.dialogError.joinWorkspace.invalidWorkspaceStorage.message":
      "没有创建工作区视图数据。",
    "spaceActions.dialogError.moveContentError.cannotMovePages.message":
      "无法同时移动这些页面。",
    "spaceActions.dialogError.moveContentError.goOnline.message":
      "请连接网络后向其他工作区移动内容。",
    "spaceActions.dialogError.movetoWorkspace.notLoggedIn.message":
      "必须登录。",
    "spaceActions.dialogError.navigateToWorkspace.invalidStorage.message":
      "无效的工作区数据。",
    "spaceBasicSettings.PublicHomePageSection.caption":
      "使用{linkText}访问我们的公共主页。",
    "spaceBasicSettings.PublicHomePageSection.caption.tooltip":
      "点击可复制链接",
    "spaceBasicSettings.PublicHomePageSection.dropdownButton.clearHomePage":
      "清除主页",
    "spaceBasicSettings.PublicHomePageSection.dropdownLabel": "清除",
    "spaceBasicSettings.PublicHomePageSection.dropdownLabel.noResults":
      "无结果",
    "spaceBasicSettings.PublicHomePageSection.input.placeholder":
      "选择分享到网络的页面",
    "spaceBasicSettings.PublicHomePageSection.title": "公共主页",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.caption":
      "任何在这些域名中拥有邮箱地址的人都可以自动加入你的工作区。",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.placeholder":
      "输入电子邮件域名⋯",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainsDropdown.placeholder":
      "输入电子邮件域名⋯",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainsDropdown.placeholderNoResults":
      "输入此工作区成员的电子邮件域名⋯",
    "spaceBasicSettings.allowedEmailDomainsSection.title": "允许的电子邮件域名",
    "spaceBasicSettings.cancelButton.label": "取消",
    "spaceBasicSettings.changeDomain.cta.text": "设置你自己的",
    "spaceBasicSettings.changeWorkspaceDomain.areYouSure":
      "确定要更改你的域名吗？",
    "spaceBasicSettings.changeWorkspaceDomain.cancelButton.label": "取消",
    "spaceBasicSettings.changeWorkspaceDomain.changeButton.label": "更改",
    "spaceBasicSettings.changeWorkspaceDomain.prompt":
      "此工作区具有公共页面。如果继续更改域名，则以 {current_domain}.notion.site 开头的任何现有链接将不再有效。",
    "spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceButton.label":
      "删除整个工作区",
    "spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceHelpButton.caption":
      "了解删除工作区。",
    "spaceBasicSettings.dangerousSettingsSection.leaveWorkspaceButton.label":
      "离开工作区",
    "spaceBasicSettings.dangerousSettingsSection.title": "危险区域",
    "spaceBasicSettings.deleteWorkspace.untitledWorkspace.placeholder":
      "无标题的工作区",
    "spaceBasicSettings.deleteWorkspaceConfirmationDialog.deleteWorkspaceButton.label":
      "永久删除工作区",
    "spaceBasicSettings.deleteWorkspaceConfirmationDialog.prompt":
      "此操作无法撤消。这将永久删除工作区，包括所有页面和文件。请输入工作区的名称进行确认。",
    "spaceBasicSettings.domainInUseError": "抱歉，此域名不可用。",
    "spaceBasicSettings.domainSection.title": "域名",
    "spaceBasicSettings.domainSection.workspaceDomainInput.caption":
      "分享链接 {linkText} 以添加任何在邮箱地址域名白名单里的人到你的工作区。",
    "spaceBasicSettings.domainSection.workspaceDomainInput.joinWorkspace.caption":
      "如果有允许的电子邮件域，任何人都可以通过{linkText}链接订阅此工作空间。",
    "spaceBasicSettings.domainSection.workspaceDomainInput.placeholder":
      "你的域名",
    "spaceBasicSettings.domainSection.workspaceDomainInput.validationMessage.available":
      "可用",
    "spaceBasicSettings.domainSection.workspaceDomainInput.validationMessage.used":
      "已使用",
    "spaceBasicSettings.domainSection.workspaceDomainInput.viewPublicPage.caption":
      "Web上共享的页面的地址以{linkText}开头。",
    "spaceBasicSettings.exportContentSection.exportButton.label":
      "导出所有工作区内容",
    "spaceBasicSettings.exportContentSection.helpButton.caption":
      "了解导出工作区。",
    "spaceBasicSettings.exportContentSection.title": "导出内容",
    "spaceBasicSettings.exportMembersSection.exportAsCSVButton.label":
      "将成员导出为 CSV",
    "spaceBasicSettings.exportMembersSection.helpButton.caption":
      "了解导出成员。",
    "spaceBasicSettings.exportMembersSection.title": "导出成员",
    "spaceBasicSettings.groupsTab.title": "群组",
    "spaceBasicSettings.guestLimitedAccessMessage":
      "你是当前工作区的访客。请要求管理员将你添加为成员，以查看其他页面和工作区设置。",
    "spaceBasicSettings.leaveWorkspaceConfirmationDialog.leaveButton.label":
      "离开",
    "spaceBasicSettings.leaveWorkspaceConfirmationDialog.prompt":
      "确定要离开此工作区？",
    "spaceBasicSettings.membersTab.manageMembersWithLinkCaption":
      "在这里管理成员。",
    "spaceBasicSettings.membersTab.manageMembersWithoutLinkCaption":
      "在这里管理成员，或<setupdomainlink>设置域名</setupdomainlink>以便具有此域名内邮箱地址的每个人都可以自动加入当前工作区。",
    "spaceBasicSettings.membersTab.payPerMemberCaption":
      "注意：你将为添加的每个成员付费。请访问<billingguidelink>我们的指南</billingguidelink>了解有关我们如何计费的更多信息。",
    "spaceBasicSettings.nameInput.placeholder": "例如公司名称",
    "spaceBasicSettings.offlineMessage": "请连接网络后设置。",
    "spaceBasicSettings.spacePermissionsSettings.groupsTab.defaultNewGroupName":
      "无标题",
    "spaceBasicSettings.title": "工作区设置",
    "spaceBasicSettings.updateButton.label": "更新",
    "spaceBasicSettings.workspaceDomain.tooltip": "点击复制链接",
    "spaceBasicSettings.workspaceIconSection.caption":
      "上传图片或选择表情符号。它将显示在侧边栏和通知中。",
    "spaceBasicSettings.workspaceIconSection.title": "图标",
    "spaceBasicSettings.workspaceNameSection.nameInput.caption":
      "你可以使用你的名字或团队的名字。保持简单。",
    "spaceBasicSettings.workspaceNameSection.title": "名称",
    "spaceHelpers.getSpaceName.untitledWorkspace.name": "无标题的工作区",
    "spaceIntegrationSettings.actionMenu.contactDeveloperSupport.label":
      "联系客服",
    "spaceIntegrationSettings.actionMenu.contactDeveloperSupportButton.label":
      "联系客服",
    "spaceIntegrationSettings.actionMenu.copyInternalIntegrationTokenButton.label":
      "复制内部集成令牌",
    "spaceIntegrationSettings.actionMenu.copyTokenModal.closeButton.label":
      "关闭",
    "spaceIntegrationSettings.actionMenu.copyTokenModal.copyTokenButton.label":
      "复制令牌",
    "spaceIntegrationSettings.actionMenu.disconnectAll.label":
      "断开所有用户的连接",
    "spaceIntegrationSettings.actionMenu.disconnectAll.modal.caption":
      "撤销此工作区所有用户对 {integrationName} 的访问权限。",
    "spaceIntegrationSettings.actionMenu.disconnectAll.modal.label":
      "为工作区中的所有用户断开 {integrationName} 的连接",
    "spaceIntegrationSettings.actionMenu.disconnectIntegration..modal.button.disconnect":
      "断开连接",
    "spaceIntegrationSettings.actionMenu.disconnectIntegrationButton.label":
      "断开 {integrationName} 的连接",
    "spaceIntegrationSettings.actionMenu.disconnectIntegrationButton.laber":
      "断开 {integrationName} 的连接",
    "spaceIntegrationSettings.actionMenu.disconnectUser.modal.caption":
      "撤销 {userName} 对 {integrationName} 的访问权限",
    "spaceIntegrationSettings.actionMenu.disconnectUser.modal.label":
      "断开 {integrationName} 的连接？",
    "spaceIntegrationSettings.actionMenu.removeIntegration.modal.label.caption":
      "撤销工作区中的 {integrationName} 访问权限",
    "spaceIntegrationSettings.actionMenu.removeIntegration.modal.label.title":
      "在工作区中断开 {integrationName} 的连接",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.label":
      "从已批准列表中移除",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.cancel":
      "取消",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.disconnect":
      "断开连接",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.remove":
      "移除",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.caption":
      "阻止成员安装 {integrationName}。",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.title":
      "将 {integrationName} 从已批准的集成中移除",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApprovalAndDisconnectAll.caption":
      "撤销此工作区中所有用户对 {integrationName} 的访问权限，阻止成员安装 {integrationName}。",
    "spaceIntegrationSettings.actionMenu.removeLegacyIntegration.caption":
      "移除工作区成员将 {integrationName} 添加到 {workspaceName} 的功能。",
    "spaceIntegrationSettings.actionMenu.removeLegacyIntegration.label":
      "移除对 {integrationName} 的访问权限",
    "spaceIntegrationSettings.actionMenu.revokeUserAccess.label": "撤销",
    "spaceIntegrationSettings.actionMenu.visitDeveloperWebsite.label":
      "访问开发者网站",
    "spaceIntegrationSettings.actionMenu.visitDeveloperWebsiteButton.label":
      "访问开发者网站",
    "spaceIntegrationSettings.error": "出了些问题...",
    "spaceIntegrationSettings.helpButton.caption": "了解集成管理",
    "spaceIntegrationSettings.integrationDevelopment.sitelink":
      "开发你自己的集成",
    "spaceIntegrationSettings.integrationManagement.sitelink":
      "详细了解如何管理集成",
    "spaceIntegrationSettings.integrationManagementSiteLink.caption":
      "为我创建集成",
    "spaceIntegrationSettings.integrationTable.creationInfoColumn.contents":
      "{installerName} 于 {installedTime}",
    "spaceIntegrationSettings.integrationTable.emptyMessage": "未安装集成",
    "spaceIntegrationSettings.integrationTable.emptyTable.message":
      "未安装集成",
    "spaceIntegrationSettings.integrationTable.installerInfo.notion.tooltip":
      "由 Notion 开发",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.anyone":
      "{spaceName}中的任何人",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.contents":
      "{remainingCount, plural, other {{firstUser} 和其他 {remainingCount} 个用户}}",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.legacy":
      "Notion Connected 应用",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.listOfUsers":
      "{remainingCount, plural, other {{firstUser} 与 {remainingCount}+}}",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.noUsers":
      "无用户",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.notion":
      "Notion {icon}",
    "spaceIntegrationSettings.integrationTable.integrationColumn.title": "集成",
    "spaceIntegrationSettings.integrationTable.label.unknownDeveloper":
      "未知开发者",
    "spaceIntegrationSettings.integrationTable.pillLabel.importer": "导入者",
    "spaceIntegrationSettings.integrationTable.pillLabel.internal": "内部",
    "spaceIntegrationSettings.integrationTable.pillLabel.preview": "链接预览",
    "spaceIntegrationSettings.integrationTable.pillLabel.sync": "同步",
    "spaceIntegrationSettings.integrationTable.row.internalIntegrationLabel":
      "内部",
    "spaceIntegrationSettings.integrationtable.creationInfoColumn.title":
      "添加的用户",
    "spaceIntegrationSettings.subtitle":
      "管理你与基于 Notion 的 API 构建的公共集成的绑定。 <helpcenterlink>了解更多。 </helpcenterlink>",
    "spaceIntegrationSettings.title": "{workspaceName}的完整集成列表",
    "spaceInviteLinkEmail.body.cta":
      "你可以将此电子邮件转发给你的队友，邀请他们进入你的工作区。",
    "spaceInviteLinkEmail.body.label":
      "{userName}为{spaceName}创建了一个新的 Notion 工作区。点击链接加入！",
    "spaceInviteLinkEmail.subject.label": "在{spaceName}上加入你的团队",
    "spaceInviteLinkEmail.text.label":
      "你的团队正在使用 Notion 进行协作、计划和完成工作。",
    "spaceInviteLinkEmail.titleOfEmail": "在{spaceName}上加入你的团队",
    "spacePermissionSettings.memberUpsell.alternativeTrialLabel": "免费试用",
    "spacePermissionSettings.memberUpsell.alternativeUpgradeLabel":
      "升级到团队版",
    "spacePermissionSettings.memberUpsell.caption":
      "免费试用 Notion 团队版 — 更适合多人协作的工作区、无限成员以及高级权限设置。",
    "spacePermissionSettings.memberUpsell.title": "与无限成员分享",
    "spacePermissionSettings.spaceMembers.inviteLink.caption":
      "分享这个私密链接以邀请他人加入到工作区。仅管理员可见。",
    "spacePermissionSettings.spaceMembers.inviteLink.resetLink":
      "你可以为工作区所有成员<resetlink>重置链接</resetlink>以生成新的邀请链接。",
    "spacePermissionSettingsTrialModal.cancel.label": "取消",
    "spacePermissionSettingsTrialModal.tryItFree.label": "免费试用",
    "spacePermissionsSettings.groupsTab.adminsOnly":
      "只有管理员可以添加权限群组。",
    "spacePermissionsSettings.groupsTab.caption":
      "设置群组以便在分享菜单中方便地控制页面权限。",
    "spacePermissionsSettings.groupsTab.createGroupButton.label": "创建群组",
    "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationButton.label":
      "是的",
    "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationMessage":
      "确定要删除此群组吗？此群组的所有私人页面都将转移给你。",
    "spacePermissionsSettings.groupsTab.filterGroupsInput.placeholder":
      "按邮箱地址或姓名筛选⋯",
    "spacePermissionsSettings.groupsTab.groupList.actionMenu.deleteItem":
      "删除",
    "spacePermissionsSettings.groupsTab.groupList.actionMenu.renameItem":
      "重命名",
    "spacePermissionsSettings.groupsTab.groupList.addMemberButton.label":
      "添加成员",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupButton.label":
      "移除",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationButton.label":
      "是的",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationMessage":
      "确定要移除此成员？",
    "spacePermissionsSettings.groupsTab.showMoreUsersButton.label":
      "{numberOfHiddenUsers, plural, other {显示其他 {numberOfHiddenUsers} 位}}",
    "spacePermissionsSettings.groupsTab.upgradeCaption":
      "升级到团队版以从“分享”菜单设置群组并控制权限。",
    "spacePermissionsSettings.groupsTab.upgradeMessage":
      "升级到团队版或企业版以使用权限群组。",
    "spacePermissionsSettings.groupsTab.upgradeMessageWithLink":
      "<upgradelink>升级到团队版或企业版</upgradelink>以使用权限群组。",
    "spacePermissionsSettings.groupsTab.upgradeTitle": "升级以创建群组。",
    "spacePermissionsSettings.groupsTab.userGroup.addUserButton.label": "添加",
    "spacePermissionsSettings.groupsTab.userGroup.groupNameInput.placeholder":
      "无标题",
    "spacePermissionsSettings.groupsTab.userGroup.memberCount":
      "{numberOfGroupMembers, plural, other {{numberOfGroupMembers} 位成员}}",
    "spacePermissionsSettings.groupsTab.userGroup.searchUserDropdown.noResultsMessage":
      "无结果",
    "spacePermissionsSettings.groupsTab.userGroup.userSearchInput.placeholder":
      "搜索人员⋯",
    "spacePermissionsSettings.guestsTab.title": "访客 ({numberOfGuests})",
    "spacePermissionsSettings.helpButton.caption": "了解如何将成员添加到工作区",
    "spacePermissionsSettings.inviteLinkRefreshModal.accept": "重置",
    "spacePermissionsSettings.inviteLinkRefreshModal.description":
      "确定要为工作区所有成员重置邀请链接？旧链接将无法再使用。",
    "spacePermissionsSettings.membersTab.filterGuestsInput.placeholder":
      "按邮箱地址或姓名筛选⋯",
    "spacePermissionsSettings.membersTab.filterMembersInput.placeholder":
      "按邮箱地址或姓名筛选⋯",
    "spacePermissionsSettings.membersTab.showMore.message":
      "显示其余 {moreMembersCount} 位",
    "spacePermissionsSettings.membersTab.showMoreGuestsButton.label":
      "{numberOfHiddenGuests, plural, other {显示其他 {numberOfHiddenGuests} 位}}",
    "spacePermissionsSettings.membersTab.title": "成员 ({numberOfMembers})",
    "spacePermissionsSettings.offlineMessage": "请连接网络后管理成员。",
    "spacePermissionsSettings.spaceMembers.inviteLink.copyButton": "复制链接",
    "spacePermissionsSettings.spaceMembers.inviteLink.shareButton": "分享链接",
    "spacePermissionsSettings.spaceMembers.inviteLink.title": "邀请链接",
    "spacePermissionsSettings.spaceMembers.members.title": "成员",
    "spacePermissionsSettings.updatePermissionsMessage": "更新中⋯",
    "spacePermissionsSettings.user.admin": "管理员",
    "spacePermissionsSettings.userTable.accessLevelColumn.header": "访问权限",
    "spacePermissionsSettings.userTable.userColumn.header": "用户",
    "spaceSettings.closeSettingsDialog.cancelationButton.label": "否",
    "spaceSettings.closeSettingsDialog.confirmationButton.label": "是",
    "spaceSettings.closeSettingsDialog.confirmationMessage":
      "你的更改尚未保存。保存更改？",
    "spaceSettings.closeSettingsDialog.updateSettingsButton.label": "保存",
    "spaceSettings.darkModeToggle.label": "深色模式",
    "spaceSettings.sidebar.button.upgrade": "升级方案",
    "spaceSettings.sidebar.personalSettingsSection.title": "我",
    "spaceSettings.sidebar.upgradeLink": "升级以无限使用",
    "spaceSettings.sidebar.workspaceSettingsSection.title": "工作区",
    "spaceSettingsSidebar.accountTab.title": "我的帐户",
    "spaceSettingsSidebar.api.title": "API",
    "spaceSettingsSidebar.apiAndBots.title": "API 与机器人",
    "spaceSettingsSidebar.appearanceTab.title": "外观",
    "spaceSettingsSidebar.auditLogTab.title": "审计日志",
    "spaceSettingsSidebar.billingTab.title": "账单",
    "spaceSettingsSidebar.connectedAppsTab.title": "我绑定的应用",
    "spaceSettingsSidebar.creditTab.title": "赚取积分",
    "spaceSettingsSidebar.experimentsTab.title": "实验",
    "spaceSettingsSidebar.integrationsTab.title": "集成",
    "spaceSettingsSidebar.languageAndRegionTab.title": "语言与地区",
    "spaceSettingsSidebar.membersTab.title": "成员",
    "spaceSettingsSidebar.notificationsAndSettings.title": "我的通知与设置",
    "spaceSettingsSidebar.notificationsTab.title": "我的通知",
    "spaceSettingsSidebar.plansTab.title": "定价方案",
    "spaceSettingsSidebar.securityAndSAMLTab.title": "安全与身份",
    "spaceSettingsSidebar.settingsTab.title": "设置",
    "spaceSettingsSidebar.subscriptionTab.title": "订阅",
    "spaceSettingsSidebar.teamsTab.title": "团队",
    "spaceSettingsSidebar.upgradeTab.title": "升级",
    "spaceSubscriptionBilling.addButton.label": "添加",
    "spaceSubscriptionBilling.address.invalidError":
      "你的地址无效。请更新你的地址，以便我们能够处理你的付款。",
    "spaceSubscriptionBilling.apply.label": "使用",
    "spaceSubscriptionBilling.applyCouponModal.successMessage":
      "已使用优惠券！",
    "spaceSubscriptionBilling.applyCouponModal.title": "使用优惠券",
    "spaceSubscriptionBilling.applyCreditButton.label": "使用积分",
    "spaceSubscriptionBilling.cancelButton.label": "取消",
    "spaceSubscriptionBilling.changeBillingAddressModal.ZIPInput.label":
      "邮政编码",
    "spaceSubscriptionBilling.changeBillingAddressModal.addressLine1Input.label":
      "地址第一行",
    "spaceSubscriptionBilling.changeBillingAddressModal.addressLine2Input.label":
      "地址第二行",
    "spaceSubscriptionBilling.changeBillingAddressModal.businessNameInput.label":
      "商业名称",
    "spaceSubscriptionBilling.changeBillingAddressModal.cancelButton.label":
      "取消",
    "spaceSubscriptionBilling.changeBillingAddressModal.cityInput.label":
      "城市",
    "spaceSubscriptionBilling.changeBillingAddressModal.countryInput.label":
      "国家或地区",
    "spaceSubscriptionBilling.changeBillingAddressModal.nameInput.label":
      "名称",
    "spaceSubscriptionBilling.changeBillingAddressModal.stateInput.label":
      "州或省",
    "spaceSubscriptionBilling.changeBillingAddressModal.title": "更改账单地址",
    "spaceSubscriptionBilling.changeBillingAddressModal.updateButton.label":
      "更新",
    "spaceSubscriptionBilling.changeBillingEmailModal.title":
      "更改账单邮箱地址",
    "spaceSubscriptionBilling.changeBillingInterval.helpButton.label":
      "了解此设置将如何影响你的帳单。",
    "spaceSubscriptionBilling.changeBillingInterval.title": "更改账单间隔",
    "spaceSubscriptionBilling.changePaymentMethod.changeCardButton.label":
      "更换卡片",
    "spaceSubscriptionBilling.changePaymentMethod.title": "更改付款方式",
    "spaceSubscriptionBilling.changeVATIDModal.subtitle":
      "请包括你的国家/地区代码",
    "spaceSubscriptionBilling.changeVATIDModal.title":
      "更改增值税/商品及服务税编号",
    "spaceSubscriptionBilling.changeYourAddressModal.title": "更改你的地址",
    "spaceSubscriptionBilling.discount.percentOff": "{percentOff}% 的折扣",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.credited": "已退款",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.due": "已到期",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.failed": "失败",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.paid": "已付费",
    "spaceSubscriptionBilling.invoicesSection.loadMoreInvoicesButton.label":
      "加载更多",
    "spaceSubscriptionBilling.invoicesSection.noInvoicesMessage":
      "此工作区尚未付款。",
    "spaceSubscriptionBilling.invoicesSection.title": "发票",
    "spaceSubscriptionBilling.invoicesSection.viewInvoiceButton": "查看发票",
    "spaceSubscriptionBilling.offline.message": "请连接网络后管理账单。",
    "spaceSubscriptionBilling.setBillingInterval.enterprisePlan.monthlyBilling.unavailable":
      "企业版不适用",
    "spaceSubscriptionBilling.setBillingInterval.monthlyOption": "月付",
    "spaceSubscriptionBilling.setBillingInterval.pricePerMonth":
      "每月 {monthlyPrice}",
    "spaceSubscriptionBilling.setBillingInterval.pricePerMonth.perMember":
      "每人每月 {monthlyPrice}",
    "spaceSubscriptionBilling.setBillingInterval.yearlyOption":
      "年付・可节省 {yearlySavingsPercent}",
    "spaceSubscriptionBilling.setPaymentMethod.achOrWireTransferOption":
      "ACH 或电汇",
    "spaceSubscriptionBilling.setPaymentMethod.achOrWireTransferOption.description":
      "通过电子邮件接收发票",
    "spaceSubscriptionBilling.setPaymentMethod.payWithCardOption": "用卡片付款",
    "spaceSubscriptionBilling.setPaymentMethod.payWithCardOption.description":
      "信用卡或借记卡",
    "spaceSubscriptionBilling.subscriptionSettingsSection.VATID.title":
      "增值税/商品及服务税编号",
    "spaceSubscriptionBilling.subscriptionSettingsSection.applyCoupon.title":
      "使用优惠券",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingAddress.title":
      "账单地址",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingEmail.title":
      "账单邮箱地址",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.title":
      "账单间隔",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.monthly":
      "每月",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.yearly":
      "每年",
    "spaceSubscriptionBilling.subscriptionSettingsSection.changePlanButton.label":
      "更改方案",
    "spaceSubscriptionBilling.subscriptionSettingsSection.discount.title":
      "折扣",
    "spaceSubscriptionBilling.subscriptionSettingsSection.enterprisePlanTitle":
      "企业版",
    "spaceSubscriptionBilling.subscriptionSettingsSection.legacyPlanTitle":
      "旧定价方案",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.title":
      "付款方式",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.achOrWireTransfer":
      "ACH 或电汇",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.creditCard":
      "尾数为 {lastFourDigits} 的 {creditCardBrand} 卡",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.none":
      "无",
    "spaceSubscriptionBilling.subscriptionSettingsSection.personalEducationPlanTitle":
      "个人专业版（教育）",
    "spaceSubscriptionBilling.subscriptionSettingsSection.personalPlanTitle":
      "个人专业版",
    "spaceSubscriptionBilling.subscriptionSettingsSection.restartSubscriptionButton.label":
      "重新订阅",
    "spaceSubscriptionBilling.subscriptionSettingsSection.teamPlanTitle":
      "团队版",
    "spaceSubscriptionBilling.subscriptionSettingsSection.workspaceSubscriptionBalance.title":
      "工作区余额",
    "spaceSubscriptionBilling.subscriptionSettingsSection.yourAddress.title":
      "地址",
    "spaceSubscriptionBilling.updateButton.label": "更新",
    "spaceSubscriptionBilling.upgradeModal.creditSection.notionCredit.description":
      "Notion 积分",
    "spaceSubscriptionBilling.upgradeModal.creditSection.promotion.description":
      "优惠",
    "spaceSubscriptionBilling.upgradeModal.creditSection.title": "使用积分",
    "spaceSubscriptionBilling.upgradeModal.paymentMethodSection.title":
      "付款方式",
    "spaceSubscriptionBilling.useCreditModal.amountOfCreditQuestion":
      "你想在下一张发票使用多少积分？",
    "spaceSubscriptionBilling.useCreditModal.applyCreditButton.label":
      "使用积分",
    "spaceSubscriptionBilling.useCreditModal.cancelButton.label": "取消",
    "spaceSubscriptionBilling.useCreditModal.nextInvoiceAmount": "下张发票总额",
    "spaceSubscriptionBilling.useCreditModal.title":
      "使用 Notion 积分・{creditInDollars} 可用",
    "spaceSubscriptionBilling.useCreditModal.warning":
      "使用积分到你的帐户后<bold>不能撤消</bold>。",
    "spaceSubscriptionBilling.vatCountryCode.subtitle":
      "请包括你的国家/地区代码",
    "spaceSubscriptionBilling.vatId.missingCountry":
      "要更新你的增值税/商品及服务税编号，请更新你的账单地址。",
    "spaceSubscriptionBilling.vatId.vatNotRequired":
      "你的税务管辖区不需要增值税/商品及服务税编号。",
    "spaceSubscriptionBillingInfoForm.countryDropdown.title":
      "选择一个国家或地区",
    "spaceSubscriptionPaymentForm.billingInformation.address": "地址",
    "spaceSubscriptionPaymentForm.billingInformation.businessName":
      "企业名称（可选）",
    "spaceSubscriptionPaymentForm.billingInformation.city": "城市",
    "spaceSubscriptionPaymentForm.billingInformation.country": "国家或地区",
    "spaceSubscriptionPaymentForm.billingInformation.fullName": "全名",
    "spaceSubscriptionPaymentForm.billingInformation.header": "账单信息",
    "spaceSubscriptionPaymentForm.billingInformation.state": "州或省",
    "spaceSubscriptionPaymentForm.billingInformation.zipCode": "邮政编码",
    "spaceSubscriptionPaymentForm.paymentInformation.header": "付款信息",
    "spaceSubscriptionPaymentForm.vatCountryCode.header": "增值税（可选）",
    "spaceSubscriptionPaymentForm.vatCountryCode.placeholder":
      "增值税/商品及服务税编号",
    "spaceSubscriptionPlans.faqSection.title": "常见问题",
    "spaceSubscriptionPlans.offlineMessage": "请连接网络后设置定价方案。",
    "spaceSubscriptionPlans.planName.enterprise": "企业版",
    "spaceSubscriptionPlans.planName.personalPro": "个人专业版",
    "spaceSubscriptionPlans.planName.team": "团队版",
    "spaceSubscriptionPlans.priceDisclaimer":
      "显示的为年付方案价格。若选择月付，<b>个人专业版</b>为每月 {personalMonthlyPrice}，<b>团队版</b>为每位成员每月 {teamMonthlyPrice}，而<b>企业版</b>为每位成员每月 {enterpriseMonthlyPrice}。",
    "spaceSubscriptionPlans.studentsAndEducatorsSection.getEducationPlanButton.label":
      "获取免费教育版",
    "spaceSubscriptionPlans.studentsAndEducatorsSection.text":
      "<p>个人专业版对学生和教育工作者是免费的！只需使用你的学校的邮箱地址注册即可立即使用这些功能。</p><p>如果你已经在使用个人专业版，请将与你帐户关联的电子邮件更改为学校的邮箱地址以免费获取。</p>",
    "spaceSubscriptionPlans.studentsAndEducatorsSection.title":
      "学生与教育工作者",
    "spaceSubscriptionPlans.teamPlan.confirmButtonLabel":
      "{upgrading, select, true {升级到团队版} other {降级到团队版}}",
    "spaceSubscriptionPlans.teamPlan.confirmMessage":
      "你将以每位成员每月{price}的价格订阅 Notion 团队版。{br}系统将在扣除帐户余额后，按比例向你收取费用。",
    "spaceSubscriptionSettings.upgradeMenu.paymentExplanation":
      "注意：我们仍然需要你的付款信息，以防你的积分在下一个账单周期内用完。我们将于扣款日的 7 天前向你发送电子邮件。",
    "spaceSubscriptionSettings.upgradeModal.billingIntervalSection.header":
      "账单间隔",
    "spaceSubscriptionSettings.upgradeModal.billingIntervalSection.title":
      "账单间隔",
    "spaceSubscriptionSettings.upgradeModal.cancelButton.label": "取消",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.creditsAdjustment":
      "我们还从你的账单中扣除了 <bold>{creditAmountInDollars} 的积分</bold>。",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.creditsAndBalanceAdjustment":
      "我们还从你的账单中扣除了 <bold>{creditAmountInDollars} 的积分</bold>和 <bold>{accountBalanceInDollars} 的工作区余额</bold>。",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.personalPlan":
      "{billedYearly, select, true {你将支付<bold>每月 {chargeAmount}</bold>，共计 <bold>12 个月</bold>。} other {你将<bold>每个月支付 {chargeAmount}</bold>。}}",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.teamPlan":
      "{billedYearly, select, true {你将为 {pluralizedMembers}支付<bold>每人每月 {chargeAmount}</bold>，共计 <bold>12 个月</bold>。} other {你将每个月为 {pluralizedMembers}支付<bold>每人 {chargeAmount}</bold>。}}",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.workspaceBalanceAdjustment":
      "我们还从你的账单中扣除了 <bold>{accountBalanceInDollars} 的工作区余额</bold>。",
    "spaceSubscriptionSettings.upgradeModal.checkEmailDialog.message":
      "请检查你的电子邮件以获取发票。",
    "spaceSubscriptionSettings.upgradeModal.contactSales": "联系销售",
    "spaceSubscriptionSettings.upgradeModal.memberPluralForm":
      "{memberCount, plural, other {{memberCount} 位成员}}",
    "spaceSubscriptionSettings.upgradeModal.payButton.label": "支付",
    "spaceSubscriptionSettings.upgradeModal.paymentMethodSection.header":
      "付款方式",
    "spaceSubscriptionSettings.upgradeModal.sales.questions":
      "有问题？请联系我们的销售团队了解更多信息。",
    "spaceSubscriptionSettings.upgradeModal.titleWithWorkspaceName":
      "为{spaceName}订阅{planName}",
    "spaceSubscriptionSettings.upgradeModal.titleWithoutWorkspaceName":
      "为工作区订阅{planName}",
    "spaceSubscriptionSettings.upgradeModal.totalCharge.Label": "合计",
    "spaceSubscriptionSettings.upgradeToPro.CTALabel": "升级到个人专业版",
    "spaceSubscriptionSettings.upgradeToTeam.CTALabel": "解锁限制",
    "spaceSubscriptionUpdatePaymentMethod.applePay.total.label":
      "Notion - 我们会定期向你收取费用",
    "spaceSubscriptionUpdatePaymentMethod.creditCard.update.header":
      "更新信用卡",
    "spaceSubscriptionUpdatePaymentMethod.creditCard.updateButton": "更新",
    "spaceSubscriptionUpdatePaymentMethod.update.header": "更新付款方式",
    "spaceSubscriptionUpgradeMenu.checkEmailDialog.message":
      "请检查你的电子邮件以获取发票。",
    "spaceSubscriptionUpgradeMenu.creditLeftover.message":
      "你目前使用的积分超过了所需要的数量，因此我们会将差额（{creditAmountLeft}）用作你以后的账单的帐户余额。",
    "spaceSubscriptionUpgradeMenu.subscribeMessage": "订阅",
    "spaceSubscriptionUpgradeMenu.title.enterprisePlan": "Notion 企业版",
    "spaceSubscriptionUpgradeMenu.title.personalPlan": "Notion 个人专业版",
    "spaceSubscriptionUpgradeMenu.title.teamPlan": "Notion 团队版",
    "spaceSubscriptionUpgradeModal.applePay.total.label":
      "Notion - 我们会定期向你收取费用",
    "spaceSubscriptionUpgradeModal.billingAddress.invalidError":
      "你的地址无效。请更新你的地址，以便我们能够处理你的付款。",
    "spaceSubscriptionUpgradeModal.billingAddress.missingCountryError":
      "请输入地址，以便我们能够处理您的付款。",
    "spaceSubscriptionUpgradeModal.continueButton.label": "继续",
    "spaceSubscriptionUpgradeModal.creditCard.genericError":
      "无法处理你的卡片。请再试一次。",
    "spaceSubscriptionUpgradeModal.dueToday.label": "今天需缴",
    "spaceSubscriptionUpgradeModal.orderSummary.enterprisePlan":
      "企业版 ({numberOfMembers, plural, one {# 位成员} other {# 位成员}})",
    "spaceSubscriptionUpgradeModal.orderSummary.header": "订单摘要",
    "spaceSubscriptionUpgradeModal.orderSummary.personalPlan": "个人专业版",
    "spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedMonthly":
      "{price}/用户/月 · 月付",
    "spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedYearly":
      "{price}/用户/月 · 年付",
    "spaceSubscriptionUpgradeModal.orderSummary.teamPlan":
      "团队版 ({numberOfMembers, plural, one {# 位成员} other {# 位成员}})",
    "spaceSubscriptionUpgradeModal.upgradeButton.enterprisePlan":
      "升级到企业版",
    "spaceSubscriptionUpgradeModal.upgradeButton.personalProPlan":
      "升级到个人专业版",
    "spaceSubscriptionUpgradeModal.upgradeButton.teamPlan": "升级到团队版",
    "spaceSubscriptionUpgradeOrderSummary.orderTotal": "总额",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.description":
      "前 1,000 个块",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.title": "免费",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.tooltip":
      "块是你添加到页面的内容，例如文本段落或待办事项。{br}团队试用版不提供付费团队版中的某些功能。",
    "startupCouponInlineLink.text": "有优惠券代码？",
    "stripeHelpers.cardDeclined.error.message": "你的卡被拒绝。",
    "stripeHelpers.invalidCVC.error.message": "你的卡的安全码无效。",
    "stripeHelpers.invalidExpiryYear.error.message":
      "你的卡的到期年份是过去的年份。",
    "stripeHelpers.invalidNumber.error.message":
      "你的卡号不是有效的信用卡号码。",
    "studentNotEligibleModal.contactUsSection.message":
      "对此有疑问？<inlinelink>更多信息和常见问题解答</inlinelink>。",
    "studentNotEligibleModal.header":
      "<p>你当前使用的邮箱地址没有资格享受免费的个人专业版。</p><p>K-12 学生、K-12 教育工作者以及使用 Gmail、Outlook 等个人邮箱地址的用户没有资格免费获取<pricinglink>个人专业版</pricinglink>，但任何人都可以使用免费的<pricinglink>个人版</pricinglink>享受无限存储空间。</p>",
    "studentNotEligibleModal.numberedList.changeEmailItem.button.label":
      "更改邮箱地址",
    "studentNotEligibleModal.numberedList.changeEmailItem.message":
      "你当前的邮箱地址是：",
    "studentNotEligibleModal.numberedList.changeEmailItem.message2":
      "成千上万的大学、学院、中学后教育机构的域名已具备资格，而不仅是 .edu 结尾的邮箱地址。",
    "studentNotEligibleModal.numberedList.firstItem": "1.",
    "studentNotEligibleModal.numberedList.item2.promocode.errorMessage":
      "促销代码 {code} 不存在",
    "studentNotEligibleModal.numberedList.item2.promocodePlaceholder":
      "输入教育优惠码⋯",
    "studentNotEligibleModal.numberedList.promoCodeItem.message":
      "有教育优惠码？",
    "studentNotEligibleModal.numberedList.promoCodeItem.submitButton": "提交",
    "studentNotEligibleModal.numberedList.secondItem": "2.",
    "subheaderBlock.placeholder": "标题 2",
    "subscriptSettings.freePersonal.downgradeTitle": "降级到个人版？",
    "subscriptionActions.overFreeBlockLimit.longMessage":
      "你已超过免费版的块限制",
    "subscriptionActions.overFreeBlockLimit.shortMessage": "你已超过块限制",
    "subscriptionActions.upgradeForUnlimitedBlocks.longMessage":
      "升级以无限使用",
    "subscriptionActions.upgradeForUnlimitedBlocks.shortMessage": "升级",
    "subscriptionErrors.cardRequiredError":
      "由于你尚未支付上次的账单，因此必须使用卡片支付。",
    "subscriptionErrors.couponAlreadyApplied": "这是已经使用的优惠券。",
    "subscriptionErrors.creditExceedsBalanceError":
      "无法使用超过 {maxCredits} 的积分余额。",
    "subscriptionErrors.creditNoFreeLunch": "负积分是不可能的。",
    "subscriptionErrors.invalidCreditError": "此积分额度不可用。",
    "subscriptionErrors.invalidVatError": "不是有效的商业登记号(VAT号)。",
    "subscriptionErrors.missingAddressError": "地址行1必须存在。",
    "subscriptionErrors.missingNameError": "名称必须存在。",
    "subscriptionErrors.personalPlanMoreThanOneMember":
      "个人版使用时，你的工作区内只能有一位成员。",
    "subscriptionHelpers.billingInterval.monthly.option.title":
      "月付 – 每人每月 {memberPrice}",
    "subscriptionHelpers.billingInterval.monthly.title": "月付",
    "subscriptionHelpers.billingInterval.yearly.option.title":
      "<pre>年付 – 每人每月 {memberPrice} <span>节省 {yearlySavingsPercent}</span></pre>",
    "subscriptionHelpers.billingInterval.yearly.title":
      "<pre>年付・<span>省 {yearlySavingsPercent}</span></pre>",
    "subscriptionHelpers.lineItems.balance": "余额",
    "subscriptionHelpers.lineItems.credit": "积分",
    "subscriptionHelpers.lineItems.promo": "优惠券",
    "subscriptionHelpers.lineItems.promo.subtitle":
      "有效期为 {expirationInMonths} 个月",
    "subscriptionHelpers.lineItems.subTotal": "小计",
    "subscriptionHelpers.lineItems.tax.subtitle": "如果适用",
    "subscriptionHelpers.lineItems.tax.title": "税",
    "subscriptionHelpers.paymentMethod.appleOrGooglePay.title":
      "Apple 或 Google Pay",
    "subscriptionHelpers.paymentMethod.creditCard.title": "信用卡或借记卡",
    "subscriptionHelpers.paymentMethod.invoice.caption": "通过电子邮件接收发票",
    "subscriptionHelpers.paymentMethod.invoice.title": "ACH 或电汇",
    "subscriptionHelpers.pricePerMonthPricing.label": "每月 {price}",
    "subscriptionHelpers.pricePerUserPerMonthPricing.label": "每人每月 {price}",
    "subscriptionSettings.button": "管理订阅",
    "subscriptionSettings.description":
      "你目前通过 Apple 的应用内购买进行订阅。你可以在 Apple 的订阅设置中管理你的订阅。",
    "subscriptionSettings.freePersonal.downgradeConfirmationButton":
      "降级到个人版",
    "subscriptionSettings.freePersonal.downgradeMessage":
      "个人版仅供1人免费使用。你将失去添加成员的能力，并且每个工作区的访客将限制为 5 个。",
    "subscriptionSettings.freeTeam.upgradeMessage":
      "你将获得付费团队版的大多数功能，块存储限制为 1,000 个。你可以随时升级以解除限制。",
    "subscriptionSettings.freeTeam.upgradeTitle": "免费试用团队版",
    "subscriptionSettings.invalidPromoCodeError.message": "此促销代码无效。",
    "subscriptionSettings.mobileDescription":
      "通过 App Store 管理你的个人专业版订阅。",
    "subscriptionSettings.personalFreeMessage":
      "你现在免费订阅了 Notion 的个人专业版。",
    "subscriptionSettings.startTeamTrialDialog.confirmationbutton":
      "开始团队版试用",
    "subscriptionSettings.subscriptionNextChargeMessage.enterprisePlan":
      "{planInterval, select, month {此工作区的企业版方案已设定为<bold>每月 {planCharge}</bold>，并将于 {renewalDate}续订。} other {此工作区的企业版方案设定为<bold>每年 {planCharge}</bold>，并将于 {renewalDate}续订。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.legacyPlan":
      "{planInterval, select, month {此工作区的旧定价方案已设定为<bold>每月 {planCharge}</bold>，并将于 {renewalDate}续订。} other {此工作区的旧定价方案设定为<bold>每年 {planCharge}</bold>，并将于 {renewalDate}续订。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.personalEducationPlan":
      "{planInterval, select, month {此工作区的个人专业版（教育）方案已设定为<bold>每月 {planCharge}</bold>，并将于 {renewalDate}续订。} other {此工作区的个人专业版（教育）方案已设定为<bold>每年 {planCharge}</bold>，并将于 {renewalDate}续订。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.personalPlan":
      "{planInterval, select, month {此工作区的个人专业版方案已设定为<bold>每月 {planCharge}</bold>，并将于 {renewalDate}续订。} other {此工作区的个人专业版方案已设定为<bold>每年 {planCharge}</bold>，并将于 {renewalDate}续订。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.teamPlan":
      "{planInterval, select, month {此工作区的团队版方案已设定为<bold>每月 {planCharge}</bold>，并将于 {renewalDate}续订。} other {此工作区的团队版方案已设定为<bold>每年 {planCharge}</bold>，并将于 {renewalDate}续订。}}",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.enterprisePlan":
      "此工作区的<bold>企业版</bold>方案已于 {cancellationDate}取消，并将于 {expirationDate}到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.legacyPla":
      "此工作区的<bold>旧定价方案</bold>已于 {cancellationDate}取消，并将于 {expirationDate}到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.personalEducationPlan":
      "此工作区的<bold>个人专业教育版</bold>方案已于{cancellationDate}取消，并将于 {expirationDate}到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.personalPlan":
      "此工作区的<bold>个人专业版</bold>方案已于 {cancellationDate}取消，并将于 {expirationDate}到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.teamPlan":
      "此工作区的<bold>团队版</bold>方案已于 {cancellationDate}取消，并将于 {expirationDate}到期。",
    "subscriptionSettings.subscriptionStatus.legacySubscriptionMessage":
      "我们的订阅系统目前正在移转中。请稍后再查看以了解新功能！",
    "subscriptionSettings.subscriptionStatus.nextPlan.personal":
      "当前方案到期后，此工作区将降级为个人版。",
    "subscriptionSettings.subscriptionStatus.nextPlan.team":
      "当前方案过期后，此工作区将降级为免费试用的团队版，块存储限制为 1,000 个。",
    "subscriptionSettings.subscriptionStatus.personalFreeUpgradeMessage":
      "此工作区为<bold>个人版</bold>。升级以使用 Notion 与更多人进行协作。",
    "subscriptionSettings.subscriptionStatus.proratedChargeMessage":
      "你将于 {upcomingChargeDate}按比例支付 {formattedInvoiceNextCharge}。",
    "subscriptionSettings.subscriptionStatus.reachedFreeBlockLimit":
      "此工作区使用了 {freeBlockLimit} 个块存储限制中的 {usedBlocks} 个块（占总存储的 {utilizationPercentage}）。",
    "subscriptionSettings.subscriptionStatus.remainingChargeMessage":
      "根据你的帐户余额进行调整后，你将需要支付 {formattedInvoiceNextCharge} 费用。",
    "subscriptionSettings.subscriptionStatus.teamTrialMessage":
      "此工作区是<bold>团队版</bold>的免费试用版，有块存储限制。",
    "subscriptionSettings.subscriptionStatus.upcomingInvoiceLink":
      "<upcominginvoicelink>查看下个发票</upcominginvoicelink>",
    "subscriptionSettings.title": "订阅",
    "subscriptionSettings.updatingSubscriptionMessage": "正在更新订阅⋯",
    "subscriptionSettings.upgradeToEnterpriseDialog.confirmationbutton":
      "升级到企业版",
    "subscriptionSettings.upgradeToEnterpriseDialog.message":
      "你将以每位成员每月{price}的价格订阅 Notion 企业版。{br}系统将在扣除帐户余额后，按比例向你收取费用。",
    "subscriptionSettings.upgradeToEnterpriseDialog.withPossibleIntervalChange.message":
      "我们会根据你当前的结算时间间隔和帐户余额按比例向你收取费用。{notYearly, select, true {今后，你将每年支付账单。} false {}}",
    "subscriptionSettings.verifyingEligibilityMessage": "正在验证资格⋯",
    "subscriptionUpgradeDetails.features":
      "<span>{planName}的所有功能，</span>以及：",
    "subscriptionUpgradeDetails.learnMore": "了解更多",
    "subscriptionUpgradeDetails.oneLiner.enterprise":
      "运转公司所需的控制和支持。",
    "subscriptionUpgradeDetails.oneLiner.personal": "给想要更多的高级玩家。",
    "subscriptionUpgradeDetails.oneLiner.team":
      "让团队在一个地方写作、计划与合作。",
    "subscriptionUpgradeDetails.perMonthPricing.label": "每月",
    "subscriptionUpgradeDetails.perUserPerMonthPricing.label": "每人{br}每月",
    "subscriptionUpgradeDetails.planName.free": "个人版",
    "subscriptionUpgradeDetails.planName.personal": "专业版",
    "subscriptionUpgradeDetails.planName.team": "团队版",
    "subscriptionUpgradeDetails.planName.teamTrial": "团队试用版",
    "subscriptionUpgradeDetails.price": "{price}",
    "subscriptionUpgradeDetails.title.enterprise": "升级到企业版",
    "subscriptionUpgradeDetails.title.personal": "升级到个人专业版",
    "subscriptionUpgradeDetails.title.team": "升级到团队版",
    "subscriptionUpgradeDetails.title.teamFree": "升级到团队试用版",
    "subscriptionUpgradeModal.oneLiner.enterprise":
      "运营公司所需的控制和支持。",
    "subscriptionUpgradeModal.oneLiner.personal":
      "适用于想要执行更多操作的高级用户。",
    "subscriptionUpgradeModal.oneLiner.team": "在一个地方写作、计划与合作。",
    "subscriptionUpgradeModal.title.enterprise": "升级到企业版",
    "subscriptionUpgradeModal.title.personal": "升级到个人专业版",
    "subscriptionUpgradeModal.title.team": "升级到团队版",
    "subscriptionUpgradeModal.title.teamFree": "升级到团队试用版",
    "subsubheaderBlock.placeholder": "标题 3",
    "tabBlock.emptyBlock.placeholderText": "空选项卡。点击或拖动块到这里。",
    "tabBlockActions.addTab.title": "新选项卡",
    "tabMenuBlock.title.placeholder": "无标题",
    "tableOfContentsBlock.mobileActionMenu.button.label": "更多动作⋯",
    "tableOfContentsBlock.placeholder":
      "添加标题块以创建目录。<linktohelpbutton>了解更多</linktohelpbutton>。",
    "teamBrowser.header.searchTeams": "搜索团队",
    "teamBrowser.header.sort": "排序方式：",
    "teamBrowser.headerLabel": "浏览团队",
    "teamBrowser.headerLabel.newTeam": "新建团队",
    "teamBrowser.sortByMenu.joined": "已加入",
    "teamBrowser.sortByMenu.lastUpdated": "上次更新时间",
    "teamBrowser.sortByMenu.members": "成员",
    "teamBrowser.team.lastUpdateTime": "更新时间为{lastEditedTime}",
    "teamBrowser.teamCard.LeaveTeamLast.prompt":
      "你不能退出此团队，因为你是唯一的团队所有者。邀请其他团队所有者才能退出。",
    "teamBrowser.teamCard.Membership": "成员",
    "teamBrowser.teamCard.MembershipPlura": "成员",
    "teamBrowser.teamCard.MembershipPlural": "成员",
    "teamBrowser.teamCard.button.join": "加入",
    "teamBrowser.teamCard.button.joined": "已加入",
    "teamBrowser.teamCard.button.leave": "离开",
    "teamBrowser.teamCard.description": "无描述",
    "teamBrowser.teamCard.leaveTeam.groupTooltip":
      "你不能离开此团队，因为你是{groupNames}成员。",
    "teamBrowser.teamCard.teamMembers.tooltip": "团队成员",
    "teamLeaveButton.confirmDialog.cancelButton.label": "取消",
    "teamLeaveButton.confirmDialog.description":
      "是否确定离开 {team}？此团队不再显示在侧边栏中，你可能会失去权限。",
    "teamLeaveButton.confirmDialog.leaveTeamButton.label": "离开团队",
    "teamMemberPermissionRoleSelect.member.permissionItem.defaultDescription":
      "为成员提供比团队默认设置更多的权限。",
    "teamMemberPermissionRoleSelect.member.permissionItem.overrideDescription":
      "此成员具有比团队默认设置更多的权限。",
    "teamMemberPermissionRoleSelect.member.permissionItem.restoreButton":
      "恢复为团队默认设置",
    "teamMemberPermissionRoleSelect.member.permissionItem.upgradeButton":
      "创建团队所有者",
    "teamMemberPermissionRoleSelect.member.permissionitem.description":
      "你不能提供比团队默认设置更少的权限。",
    "teamMemberPermissionRoleSelect.owner.permissionItem.downgradeButton":
      "降级为成员",
    "teamMemberPermissionRoleSelect.owner.permissionItem.downgradeButton.new":
      "降级为默认成员",
    "teamMemberPermissionRoleSelect.owner.permissionitem.description":
      "团队所有者将始终拥有对团队页面的完全访问权限",
    "teamMemberPermissionRoleSelect.permissionItem.defaultTag": "默认",
    "teamMemberPermissionSettings.leaveCloseTeam.confirmation.description":
      "离开此团队意味着你将失去对此团队中的所有页面的访问权限，在侧边栏中再也看不到此团队。",
    "teamMemberPermissionSettings.leaveLastTeam.confirmation.description":
      "你不能离开此团队，因为你只属于一个团队。加入另一团队，才能离开此团队",
    "teamMemberPermissionSettings.leaveLastTeam.confirmation.message":
      "你不能离开此团队",
    "teamMemberPermissionSettings.leaveLastTeam.joinTeam": "加入团队",
    "teamMemberPermissionSettings.leaveOpenTeam.confirmation.description":
      "离开此团队意味着你在侧边栏中再也看不到此团队。",
    "teamMemberPermissionSettings.leaveTeam.confirmation.message":
      "确定要离开此团队吗？",
    "teamMemberPermissionSettings.leaveTeam.confirmationButton.leaveTeam":
      "离开团队",
    "teamMemberPermissionSettings.leaveTeamAsLastOwner.confirmation.description":
      "你不能离开此团队，因为你是唯一所有者。邀请另一个所有者，你才能离开此团队",
    "teamMemberPermissionSettings.leaveTeamAsLastOwner.confirmation.message":
      "你不能离开此团队",
    "teamMemberPermissionSettings.leaveTeamAsLastOwner.invitePeople":
      "邀请人员",
    "teamMemberPermissionSettings.makeMemberOwner.group.disabledMessage":
      "权限组不能成为团队所有者。",
    "teamMemberPermissionSettings.makeTeamOwner.confirmation.message":
      "确定让{name}成为团队所有者吗？他们将能够编辑团队设置和权限。",
    "teamMemberPermissionSettings.permissionSwitcher.accept": "更改访问权限",
    "teamMemberPermissionSettings.permissionSwitcher.confirmation.description":
      "此更改不适用于团队中的任何受限页面。",
    "teamMemberPermissionSettings.permissionSwitcher.confirmation.message":
      "确定要将{name}的角色更改为{role}吗？",
    "teamMemberPermissionSettings.removeMember.accept": "移除",
    "teamMemberPermissionSettings.removeMember.confirmation.description":
      "此更改不适用于团队中的任何受限页面。",
    "teamMemberPermissionSettings.removeMember.confirmation.message":
      "确定要从团队中移除 {name}？",
    "teamMemberPermissionSettings.removeSelfTeamOwner.confirmation.message":
      "确定要移除自己的团队所有者身份吗？你将无法再编辑团队设置和权限。",
    "teamMemberPermissionSettings.removeTeamOwner.confirmation.message":
      "确定要移除{name}的团队所有者身份吗？他们将无法再编辑团队设置和权限。",
    "teamPermissionSettings.closeSpacePermissionItem.description":
      "此设置已关闭，因此只有 {num} 位团队成员具有访问权限。",
    "teamPermissionSettings.generalSection.spacePermission": "默认访问权限",
    "teamPermissionSettings.generalSection.teamPermission": "团队成员",
    "teamPermissionSettings.member.permissionItem.overrideWarning":
      "覆盖默认团队权限，并且不会继承任何团队权限更改。",
    "teamPermissionSettings.member.search.zeroState": "未找到成员",
    "teamPermissionSettings.openSpacePermissionItem.description":
      "{num, plural, one {{num} 位工作区成员} other {{num} 位工作区成员}}",
    "teamPermissionSettings.permissionItem.rolePill.admin": "管理员",
    "teamPermissionSettings.permissionItem.rolePill.owner": "团队所有者",
    "teamPermissionSettings.permissionItem.rolePill.pageGuest": "页面访客",
    "teamPermissionSettings.permissionItem.rolePill.teamGuest": "团队访客",
    "teamPermissionSettings.teamPermissionItem.description":
      "{num, plural, one {{num} 位团队成员} other {{num} 位团队成员}}",
    "teamPermissionSettings.unknownGroup": "未知群组",
    "teamPermissionsActions.addedMembers":
      "已将 {n, plural, one {# 个用户} other {# 个用户}} 添加到 {teamName}",
    "teamPermissionsActions.archivedTeam": "已归档 {teamName}",
    "teamPermissionsActions.downgradeUser": "{memberName} 已降级为团队成员",
    "teamPermissionsActions.joinedTeam": "已加入 {teamName}",
    "teamPermissionsActions.leftTeam": "已离开 {teamName}",
    "teamPermissionsActions.removeMember":
      "已将 {memberName} 从 {teamName} 中移除",
    "teamPermissionsActions.restoredTeam": "已恢复 {teamName}",
    "teamPermissionsActions.upgradeUser": "{memberName} 已升级为团队所有者",
    "teamPermissionsInviteOverlay.defaultTeams.autoAddPeopleToTeamSubtitle":
      "默认情况下，新的工作区成员将添加到此团队中。",
    "teamPermissionsInviteOverlay.defaultTeams.autoAddPeopleToTeamTitle":
      "自动添加加入<semibold>{workspaceName}</semibold>的任何人",
    "teamPermissionsInviteOverlay.inviteModal.addNMembers":
      "{numMembers, plural, other {添加 {numMembers} 个成员}}",
    "teamPermissionsInviteOverlay.inviteModal.done": "完成",
    "teamPermissionsInviteOverlay.inviteModal.inviteNMembers":
      "{numMembers, plural, other {邀请 {numMembers} 个成员}}",
    "teamPermissionsInviteOverlay.inviteModal.skipForNow": "暂时跳过",
    "teamPermissionsInviteOverlay.teamScreen.addSpecificPeople": "添加特定人员",
    "teamPermissionsInviteWithModal.done": "完成",
    "teamPermissionsInviteWithModal.openModal": "添加成员",
    "teamPermissionsMenu.memberItem.caption":
      "不能编辑团队设置，可以访问团队页面。",
    "teamPermissionsMenu.memberItem.label": "成员",
    "teamPermissionsMenu.ownerItem.caption":
      "可以编辑团队设置和完全访问团队页面。",
    "teamPermissionsMenu.ownerItem.label": "团队所有者",
    "teamPermissionsSettings.closeTeamToOpen.accept": "向所有人授予访问权限",
    "teamPermissionsSettings.closeTeamToOpen.dialogDescription":
      "确定要向工作区中的所有人授予对此团队中页面的访问权限？",
    "teamPermissionsSettings.closedTeam.noAccessLabel": "无访问权限",
    "teamPermissionsSettings.openTeamToClose.accept": "移除访问权限",
    "teamPermissionsSettings.openTeamToClose.dialogDescription":
      "确定要删除工作区中所有人的访问权限？只有团队成员才具有访问权限，新成员必须通过邀请加入。",
    "teamPermissionsSettings.permissionItem.defaultAccess": "空",
    "teamPermissionsSettings.permissionItem.defaultAccessSpaceName":
      "{spaceName}中的所有人",
    "teamPermissionsSettings.permissionItem.defaultAccessTeamName":
      "{teamName}团队的所有人",
    "teamPermissionsSettings.team.disabledPermissionitem.description":
      "团队级别权限不能低于默认工作区权限。",
    "teamWorkspacesSettings.disableTeamCreation.caption":
      "这将只允许工作区管理员创建团队。工作区成员将无法创建团队，但他们仍然可以加入和退出团队。",
    "teamWorkspacesSettings.disableTeamCreation.title":
      "将团队创建限制为仅工作区管理员",
    "teamWorkspacesSettings.security.title": "安全",
    "teams.genericErrorMessage.tryAgainLater": "发生意外错误。请稍后再试。",
    "teamsWorkspaceSettings.cancelButton.label": "取消",
    "teamsWorkspaceSettings.defaultTeamList.title": "团队",
    "teamsWorkspaceSettings.defaultTeams.caption":
      "默认团队是新工作区成员自动加入的团队。必须至少选择一个默认团队。",
    "teamsWorkspaceSettings.defaultTeams.inputPlaceholder": "选择默认团队...",
    "teamsWorkspaceSettings.defaultTeams.title": "默认团队",
    "teamsWorkspaceSettings.title": "团队",
    "teamsWorkspaceSettings.updateButton.errorLabel":
      "必须至少选择一个默认团队。",
    "teamsWorkspaceSettings.updateButton.label": "更新",
    "templateChecklist.completed.description":
      "要获得更多启发，请转到 Notion Guides 以提升技能并探索更多使用 Notion 的新方法。",
    "templateChecklist.completed.header": "你完成了！",
    "templateChecklist.quickNote.a.description":
      "在现实场景中查看文档和知识库（A）",
    "templateChecklist.quickNote.a.title": "导入你的工作区（A）",
    "templateChecklist.quickNote.b.description":
      "在现实场景中查看文档和知识库（B）",
    "templateChecklist.quickNote.b.title": "导入你的工作区（A）",
    "templateChecklist.quickNote.c.description":
      "在现实场景中查看文档和知识库（C）",
    "templateChecklist.quickNote.c.title": "导入你的工作区（C）",
    "templateChecklistHeader.useCaseHeader.databases": "数据库入门指南",
    "templateChecklistHeader.useCaseHeader.default": "Notion 入门指南",
    "templateChecklistHeader.useCaseHeader.notes": "笔记入门指南",
    "templateChecklistHeader.useCaseHeader.projectManagement":
      "项目和任务入门指南",
    "templateChecklistHeader.useCaseHeader.wiki": "笔记和文档入门指南",
    "templateHelpers.personas.design": "设计",
    "templateHelpers.personas.education": "教育",
    "templateHelpers.personas.educator": "教育工作者",
    "templateHelpers.personas.engineering": "开发",
    "templateHelpers.personas.entrepreneur": "企业家",
    "templateHelpers.personas.freelancer": "自由职业者",
    "templateHelpers.personas.gettingStarted": "立即开始",
    "templateHelpers.personas.humanResources": "人力资源",
    "templateHelpers.personas.it": "IT",
    "templateHelpers.personas.marketing": "市场营销",
    "templateHelpers.personas.media": "媒体",
    "templateHelpers.personas.other": "其他",
    "templateHelpers.personas.personal": "个人",
    "templateHelpers.personas.productManagement": "产品管理",
    "templateHelpers.personas.productManagementV2": "产品",
    "templateHelpers.personas.sales": "销售",
    "templateHelpers.personas.student": "学生",
    "templateHelpers.personas.suggestedTemplates": "建议模板",
    "templateHelpers.personas.support": "支持",
    "templateHelpers.personas.truncated.humanResources": "人力资源",
    "templateHelpers.templates.applicantTracker": "招聘追踪器",
    "templateHelpers.templates.blogPost": "博客文章",
    "templateHelpers.templates.brandAssets": "品牌资产",
    "templateHelpers.templates.classDirectory": "班级目录",
    "templateHelpers.templates.classNotes": "课堂笔记",
    "templateHelpers.templates.classroomHome": "课堂首页",
    "templateHelpers.templates.clubHomepage": "社团主页",
    "templateHelpers.templates.companyHome": "公司内部主页",
    "templateHelpers.templates.competitiveAnalysis": "竞争分析",
    "templateHelpers.templates.contentCalendar": "内容日历",
    "templateHelpers.templates.cornellNotesSystem": "康奈尔笔记系统",
    "templateHelpers.templates.courseSchedule": "课程时间表",
    "templateHelpers.templates.designSystem": "设计系统",
    "templateHelpers.templates.designTasks": "设计任务",
    "templateHelpers.templates.docs": "文档",
    "templateHelpers.templates.engineeringWiki": "工程知识库",
    "templateHelpers.templates.getStarted": "立即开始",
    "templateHelpers.templates.getStartedOnEvernote": "从 Evernote 开始",
    "templateHelpers.templates.getStartedOnMobile": "移动版入门指南",
    "templateHelpers.templates.goals": "目标",
    "templateHelpers.templates.gradeCalculator": "成绩计算器",
    "templateHelpers.templates.habitTracker": "习惯追踪器",
    "templateHelpers.templates.helpCenter": "帮助中心",
    "templateHelpers.templates.jobApplications": "工作申请",
    "templateHelpers.templates.jobBoard": "职位公告板",
    "templateHelpers.templates.journal": "日志",
    "templateHelpers.templates.lessonPlans": "课程计划",
    "templateHelpers.templates.lifeWiki": "生活知识库",
    "templateHelpers.templates.mediaList": "媒体列表",
    "templateHelpers.templates.meetingNotes": "会议记录",
    "templateHelpers.templates.moodBoard": "情绪板",
    "templateHelpers.templates.newHireOnboarding": "新员工入职",
    "templateHelpers.templates.notes": "笔记和文档",
    "templateHelpers.templates.personalCRM": "个人 CRM",
    "templateHelpers.templates.personalHome": "个人主页",
    "templateHelpers.templates.processDocs": "流程文档",
    "templateHelpers.templates.productFAQs": "产品常见问题解答",
    "templateHelpers.templates.productWiki": "产品知识库",
    "templateHelpers.templates.projectManagement": "项目和任务",
    "templateHelpers.templates.quickNote": "快速笔记",
    "templateHelpers.templates.readingList": "阅读清单",
    "templateHelpers.templates.resume": "简历",
    "templateHelpers.templates.roadmap": "产品路线图",
    "templateHelpers.templates.roommateSpace": "室友空间",
    "templateHelpers.templates.salesAssets": "销售资产",
    "templateHelpers.templates.salesCRM": "销售 CRM",
    "templateHelpers.templates.salesWiki": "销售知识库",
    "templateHelpers.templates.simpleBudget": "简单预算",
    "templateHelpers.templates.simpleNotebook": "简单笔记本",
    "templateHelpers.templates.syllabus": "教学大纲",
    "templateHelpers.templates.taskList": "任务列表",
    "templateHelpers.templates.teamDirectory": "团队目录",
    "templateHelpers.templates.teamsGettingStarted": "团队入门指南",
    "templateHelpers.templates.thesisPlanning": "论文规划",
    "templateHelpers.templates.toDo": "待办事项",
    "templateHelpers.templates.travelPlanner": "旅行计划",
    "templateHelpers.templates.userResearchDatabase": "用户调研数据库",
    "templateHelpers.templates.weeklyAgenda": "每周议程",
    "templateHelpers.templates.wiki": "团队知识库",
    "templateHelpers.useCase.bookmarks": "书签",
    "templateHelpers.useCase.personalNotebook": "笔记本",
    "templateHelpers.useCase.teamDocs": "文档",
    "templateHelpers.useCase.teamHome": "团队主页",
    "templateHelpers.useCase.teamMeetingNotes": "会议记录",
    "templateHelpers.useCase.teamTasks": "团队任务",
    "templateHelpers.useCase.todos": "待办事项",
    "templatePicker.databaseTemplates.label": "数据库",
    "templatePicker.deviceOffline.goOnlinePrompt":
      "{isMobileDevice, select, true{按此处创建空白页。在连接网络后可使用模板。}other{按 Enter 键创建一个空白页。在连接网络后可使用模板。}}",
    "templatePicker.isTemplate.emptyPagePrompt":
      "{isMobileDevice, select, true{按此处创建空白页。}other{按 Enter 键创建空白页。}}",
    "templatePicker.mobileCollectionEmptyPage.prompt":
      "{isParentLocked, select, true{按此处创建空白页}other{按此处创建空白页，或<templatebutton>创建模板</templatebutton>}}",
    "templatePicker.mobilePhoneEmptyPage.withTemplates.prompt": "点击此处继续⋯",
    "templatePicker.mobileTabletEmptyPage.withTemplates.prompt":
      "点击此处继续使用空白页，或选择一个模板",
    "templatePicker.mobileTemplatePicker.databaseTemplateSection.label":
      "数据库",
    "templatePicker.webCollectionEmptyPage.prompt":
      "{isParentLocked, select, true{按 Enter 创建空白页}other{按 Enter 创建空白页，或<templatebutton>创建模板</templatebutton>}}",
    "templatePicker.webEmptyPage.withTemplates.prompt":
      "{isTemplate, select, true{按 Enter 创建空白页，或选择模板}other{按 Enter 创建空白页，或选择模板（↑↓来选择）}}",
    "templatePickerHelpers.basicTemplateItems.empty": "空白页",
    "templatePickerHelpers.basicTemplateItems.emptyWithIcon": "空白页（图标）",
    "templatePickerHelpers.basicTemplateItems.import": "导入",
    "templatePickerHelpers.basicTemplateItems.templates": "模板",
    "templatePickerHelpers.databaseTemplateNames.board": "看板",
    "templatePickerHelpers.databaseTemplateNames.boardView": "看板视图",
    "templatePickerHelpers.databaseTemplateNames.calendar": "日历",
    "templatePickerHelpers.databaseTemplateNames.calendarView": "日历视图",
    "templatePickerHelpers.databaseTemplateNames.gallery": "画廊",
    "templatePickerHelpers.databaseTemplateNames.galleryView": "画廊视图",
    "templatePickerHelpers.databaseTemplateNames.list": "列表",
    "templatePickerHelpers.databaseTemplateNames.listView": "列表视图",
    "templatePickerHelpers.databaseTemplateNames.table": "表格",
    "templatePickerHelpers.databaseTemplateNames.tableView": "表格视图",
    "templatePickerHelpers.databaseTemplateNames.timeline": "时间轴",
    "templatePickerHelpers.databaseTemplateNames.timelineView": "时间轴视图",
    "templatePickerHelpers.mobileBasicTemplateItems.emptyPage": "空白页",
    "templatePickerHelpers.mobileBasicTemplateItems.pageWithIcon":
      "空白页（图标）",
    "temporaryPasscodeLoginEmail.copyPasteCodeNoLink.prompt":
      "{hasExistingUser, select, true {复制并粘贴此临时登录码： } other {复制并粘贴此临时注册码： }}",
    "temporaryPasscodeLoginEmail.copyPasteCodeWithLink.prompt":
      "{hasExistingUser, select, true {或复制并粘贴此临时登录码： } other {或复制并粘贴此临时注册码： }}",
    "temporaryPasscodeLoginEmail.loginCode.subjectLine":
      "你的临时 Notion 登录码为 {temporaryPassword}",
    "temporaryPasscodeLoginEmail.magicLink.text":
      "{hasExistingUser, select, true {点击此处使用此魔法链接登录} other {点击此处使用此魔法链接注册}}",
    "temporaryPasscodeLoginEmail.noNotionAccount.text":
      "我们找不到此邮箱地址上的帐户。",
    "temporaryPasscodeLoginEmail.noRequest.text":
      "{hasExistingUser, select, true {如果你未尝试登录，则可以安全地忽略此电子邮件。} other {如果你没有尝试注册，则可以放心忽略此电子邮件。}}",
    "temporaryPasscodeLoginEmail.setPermanentPassword.text":
      "提示：你可以在“设置与成员”&rarr;“我的帐户”中设定永久密码。",
    "temporaryPasscodeLoginEmail.signupCode.subjectLine":
      "你的 Notion 注册码为 {temporaryPassword}",
    "temporaryPasscodeLoginEmail.titleOfEmail":
      "{hasExistingUser, select, true {登录} other {注册}}",
    "text.commandsMenuNotOpen.placeholder": "输入“/”发起指令",
    "text.commandsMenuOpen.placeholder": "输入以筛选⋯",
    "text.truncated.showMoreLabel": "更多",
    "textRenderHelpers.pageMention.untitledPlaceholder": "无标题",
    "textRenderHelpers.untitledTextAsString": "无标题",
    "timeUtils.durationDescriptor.day":
      "{numDays, plural, other {{numDays} 天前}}",
    "timeUtils.durationDescriptor.hour":
      "{numHours, plural, other {{numHours} 小时前}}",
    "timeUtils.durationDescriptor.minute": "刚才",
    "timeline.itemPlaceholder.newPage": "新页面",
    "timelineItem.itemName.placeholder": "输入名称⋯",
    "todoBlock.placeholder": "待办事项",
    "toggleBlock.emptyBlock.placeholderText":
      "空的折叠列表。点击或拖动块到这里。",
    "toggleBlock.placeholder": "折叠列表",
    "topbar.commentsButton.closeSidebartTooltip": "关闭所有评论",
    "topbar.commentsButton.openSidebartTooltip": "查看所有评论",
    "topbar.commentsButton.title": "评论",
    "topbar.favoriteButton.activeTitle": "已加到最爱",
    "topbar.favoriteButton.activeTooltip1": "从侧边栏隐藏此页面",
    "topbar.favoriteButton.activeTooltip2": "目前可见",
    "topbar.favoriteButton.title": "加到最爱",
    "topbar.favoriteButton.tooltip1": "将此页面固定在侧边栏中",
    "topbar.favoriteButton.tooltip2": "目前隐藏",
    "topbar.moreButton.collectionHelpButton": "了解数据库",
    "topbar.presenceIndicator.hiddenUsers.lastViewedBy.tooltip": "上次查看者",
    "topbar.presenceIndicator.hiddenUsers.otherCount.message":
      "{hiddenUsersCount, plural, other {+{hiddenUsersCount}}}",
    "topbar.presenceIndicator.hiddenUsers.viewingNow.tooltip": "正在查看",
    "topbar.presenceIndicator.lastViewedTime.tooltip": "{timeFromNow}查看过",
    "topbar.presenceIndicator.viewingNow.tooltip": "正在查看",
    "topbar.presenceIndicator.viewingNowWithLocation.tooltip":
      "正在查看。点击以查看他的位置。",
    "topbar.publicPage.comment": "评论",
    "topbar.publicPage.cta.label": "Notion",
    "topbar.publicPage.cta.label.get": "获取 Notion",
    "topbar.publicPage.cta.label.open": "打开 Notion",
    "topbar.publicPage.cta.label.try": "试用 Notion",
    "topbar.publicPage.cta.label.try-free": "免费试用 Notion",
    "topbar.publicPage.duplicateButton.label": "保存副本",
    "topbar.publicPage.edit": "编辑",
    "topbar.publicPage.searchButton.label": "搜索",
    "topbar.shareButton.title": "分享",
    "topbar.shareButton.tooltip": "分享或发布到网络上",
    "topbar.startPublicEditDialog.continueLabel": "继续",
    "topbar.startPublicEditDialog.message":
      "当你开始编辑时，页面所有者将可以看到你的姓名，邮箱地址和头像。",
    "topbar.updatesButton.closeSidebartTooltip": "关闭所有更新",
    "topbar.updatesButton.emptyState": "此页面尚未进行编辑。",
    "topbar.updatesButton.openSidebartTooltip": "打开更新侧边栏",
    "topbar.updatesButton.slackIntegrationButton.activeTitle": "基于",
    "topbar.updatesButton.slackIntegrationButton.connectedCaption":
      "已连接到Slack通道",
    "topbar.updatesButton.slackIntegrationButton.disconnectTooltip":
      "解除绑定 Slack 频道，以停止获取有关此页面及其中页面的更新。",
    "topbar.updatesButton.slackIntegrationButton.loading": "载入中⋯",
    "topbar.updatesButton.slackIntegrationButton.title": "绑定 Slack 频道",
    "topbar.updatesButton.slackIntegrationButton.tooltip":
      "绑定 Slack 频道以获取有关此页面及其中页面的更新。",
    "topbar.updatesButton.title": "更新",
    "topbar.updatesButton.tooltip": "查看此页面过去的更改",
    "topbarActionButtons.commentsButton.intro.body":
      "使用新的评论侧边栏在你的页面上进行协作",
    "topbarActionButtons.commentsButton.intro.title": "查看所有评论",
    "topbarActionButtons.updatesButton.intro.body":
      "在此处以鸟瞰的视角查看所有评论和页面更新",
    "topbarActionButtons.updatesButton.intro.title": "查看所有更新和评论",
    "topbarBrowserHistoryButton.goForwardButton.label": "前进",
    "topbarBrowserHistoryButtons.goBackButton.label": "后退",
    "topbarMobile.addToPageOrWorkspaceSectionButton.label": "添加到",
    "topbarMobile.addToPrivateSectionButton.label":
      "<mediumcolor>添加到</mediumcolor>{userAvatar}<mediumweight>私人页面</mediumweight>",
    "topbarMobile.backButton.label": "返回",
    "topbarMobile.cancelQuickAddButton.label": "取消",
    "topbarMobile.commentsMenu.title": "评论",
    "topbarMobile.offline.message": "你处于离线状态",
    "topbarMoreButton.loggedOut.tooltip": "更多...",
    "topbarMoreButton.mobileActionsMenu.title": "动作",
    "topbarMoreButton.tooltip": "样式、导出等⋯",
    "topbarPresence.presenceIndicator.hiddenUsers.moreUsersNotViewing.tooltip":
      "其他 {notViewingMoreUsersCount} 位⋯",
    "transactionErrors.activityEditsMaxSize.message":
      "您已超出每页的最大编辑次数。",
    "transactionErrors.blockContentMaxSize.message":
      "您已超出每页的最大内容数。",
    "transactionErrors.blockPermissionsMaxSize.message":
      "你已超出每页的最大权限。",
    "transactionErrors.blocksInsideThemselvesNotAllowed.message":
      "糟糕！区块无法在自己内部移动。",
    "transactionErrors.commentOnlyAccessCantMovePage.message":
      "抱歉，你无法移动此页面，因为你只有＂只能评论＂访问权限。",
    "transactionErrors.guestsNotAllowed.message": "此工作区不允许访客。",
    "transactionErrors.guestsoverLimit.message":
      "此工作区已达到最多访客数（5位）。",
    "transactionErrors.movingPagesToOtherWorkspacesNotAllowed.message":
      "此工作区已禁用将页面移动到其他工作区。",
    "transactionErrors.nonApiMovesNotAllowed.message":
      "请刷新（Cmd / Ctrl + R）以更新 Notion 后便可将页面移动到其他工作区。",
    "transactionErrors.publicAccessNotAllowed.message":
      "此工作区不允许具有公开访问权限的页面。",
    "transactionErrors.publicAccessNotAllowedInTeam.message":
      "此团队不允许具有公共访问权限的页面。",
    "transactionErrors.searchEngineIndexingNotAllowed.message":
      "此工作空间不允许公开页包含在搜索索引中。",
    "transactionErrors.spaceDomainNotAvailable.message": "抱歉，此域名不可用。",
    "transactionErrors.spaceEmailDomainNotAllowed.message":
      "抱歉，不允许使用此域名： {domain}",
    "transactionErrors.teamLevelGuestsNotAllowed.message": "此团队不允许访客。",
    "transactionErrors.teamTopLevelOperationNotAllowed.message":
      "该团队已锁定修改其侧边栏部分。",
    "transactionErrors.upgradeClientIsNeeded.message":
      "请刷新(Cmd/Ctrl+R)以更新Notion，然后重试。",
    "transactionErrors.workspaceTopLevelOperationNotAllowed.message":
      "此工作区已锁定修改侧边栏的工作区部分。",
    "transactionHelpers.requestTooLargeError.message":
      "抱歉，此请求太大。尝试导入？",
    "transclusionContainerBlock.actions.copySuccessMessage":
      "复制完成！现在，您可以将内容粘贴到所需的页面上以同步内容。",
    "transclusionContainerBlock.copy": "复制并同步",
    "transclusionContainerBlock.differingPermissionsWarning":
      "不是每个人都能看到此内容。原始页面<page>源页面标题</page>未与此页面上的所有人共享。",
    "transclusionContainerBlock.editingMultiple":
      "在 {icon} {numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 个页面} other {其他 {numberOfBacklinks} 个页面}}中编辑",
    "transclusionContainerBlock.editingOriginal": "编辑原件",
    "transclusionContainerBlock.emptyEditingPlaceholder":
      "在此处点击或拖动块，然后粘贴到另一个页面以同步内容。",
    "transclusionContainerBlock.learnMoreLabel": "了解有关同步块的更多信息",
    "transclusionContainerBlock.remove.confirm": "删除并取消同步副本",
    "transclusionContainerBlock.remove.confirmationMessage.header":
      "全部取消同步？",
    "transclusionContainerBlock.remove.confirmationMessage.text":
      "{numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 个页面} other {其他 {numberOfBacklinks} 个页面}}将不再与这些块同步。",
    "transclusionContainerBlock.remove.header": "删除原内容？",
    "transclusionContainerBlock.remove.text":
      "这些块在 {numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 个页面} other {其他 {numberOfBacklinks} 个页面}}中同步。如果您删除原内容，这些块将不再同步。",
    "transclusionContainerBlock.unsyncTransclusionContainer.confirm":
      "全部取消同步",
    "transclusionContainerBlock.unsyncTransclusionContainer.header":
      "全部取消同步？",
    "transclusionContainerBlock.unsyncTransclusionContainer.text":
      "{numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 个页面} other {其他 {numberOfBacklinks} 个页面}}将不再与这些块同步。",
    "transclusionContainerBlock.unsyncTransclusionReference.confirm":
      "取消同步",
    "transclusionContainerBlock.unsyncTransclusionReference.header":
      "取消同步此项？",
    "transclusionContainerBlock.unsyncTransclusionReference.text":
      "选定的块将不再与原始块同步。",
    "trashActions.deletePagePermanentlyDialog.confirmDeleteButton.label":
      "是的，删除此页面",
    "trashActions.deletePagePermanentlyDialog.prompt":
      "确定要永久删除此页面吗？",
    "trelloActions.authenticatingWithTrello.loadingMessage": "Trello 授权中⋯",
    "trelloActions.loginPopupModal.title": "Trello 登录",
    "trelloImportOption.actionsMenu.connectAnotherAccount": "绑定另一个帐户",
    "trelloImportOption.actionsMenu.import": "导入",
    "trelloImportOption.actionsMenu.removeIntegration": "移除",
    "trelloImportOption.boardProperty.defaultName": "看板",
    "trelloImportOption.search.noResultsPlaceholder": "无看板",
    "trelloImportOption.search.placeholder": "搜索看板⋯",
    "tweetBlock.embedTweet.button.label": "嵌入推文",
    "tweetBlock.linkInput.caption": "适用于 Twitter 上的推文链接",
    "tweetBlock.placeholder": "嵌入推文",
    "tweetRenderer.errorLoadingTweet.message": "载入推文时出错",
    "tweetRenderer.loadingTweet.message": "载入推文中⋯",
    "typeformBlock.embed.caption": "适用于启用了公共访问的 Typeform 链接",
    "typeformBlock.placeholder": "嵌入 Typeform",
    "unfurling.asana.asanaAssignedTo": "已分配给 {value}",
    "unfurling.asana.asanaDueAt": "截止时间为 {value}",
    "unfurling.asana.asanaProject": "Asana 中的项目",
    "unfurling.asana.asanaTask": "Asana 中的任务",
    "unfurling.asana.asanaUpdatedAt": "更新时间为 {value}",
    "unfurling.authenticateButton.title": "绑定 {integration} 以更新",
    "unfurling.dropbox.dropboxFile": "Dropbox 文件",
    "unfurling.errorButton.title": "无法加载预览",
    "unfurling.errorOptions.authenticateAction.alreadyAuthenticated.title":
      "绑定另一个 {integration} 帐户",
    "unfurling.errorOptions.authenticateAction.notAuthenticated.title":
      "绑定 {integration} 帐户",
    "unfurling.errorOptions.learnMore.title": "了解有关此错误的更多信息",
    "unfurling.errorOptions.menuTitle": "请尝试以下选项",
    "unfurling.errorOptions.readUserGuideAction.title": "阅读用户指南",
    "unfurling.errorOptions.removeAction.title": "移除",
    "unfurling.errorOptions.tryAgainAction.title": "再试一次",
    "unfurling.figma.figmaFile": "Figma 文件",
    "unfurling.figma.figmaLastModifiedBy": "上次由 {value} 修改",
    "unfurling.github.githubCommit": "提交",
    "unfurling.github.githubCommitted": "提交时间：{value}",
    "unfurling.github.githubIssue": "Issue{value}",
    "unfurling.github.githubIssues": "{value} 个问题",
    "unfurling.github.githubPullClosed": "Closed {value}",
    "unfurling.github.githubPullMerged": "Merged：{value}",
    "unfurling.github.githubPullOpened": "Opened：{value}",
    "unfurling.github.githubPullRequest": "Pull Request {value}",
    "unfurling.github.githubPullRequests": "{value} 个拉取请求",
    "unfurling.github.githubRepoUpdated": "Updated {value}",
    "unfurling.github.jiraUpdated": "Updated {value}",
    "unfurling.jira.jiraAssignee": "{value}分配给人员",
    "unfurling.slack.slackMessage": "Slack 中的消息",
    "unfurling.slack.slackReplyCount":
      "{value, plural, other {{value} 条回复}}",
    "unfurling.slack.slackThread": "Slack 中的线程",
    "unfurling.trello.trelloAssignedTo": "已分配给 {value}",
    "unfurling.trello.trelloCard": "Trello 中的卡片",
    "unfurling.trello.trelloDueAt": "截止时间为 {value}",
    "unfurling.trello.trelloUpdatedAt": "更新时间为 {value}",
    "unfurling.updateButton.title": "更新",
    "unfurling.zoom.createdByHost": "由 {value} 创建",
    "unfurling.zoom.joinZoomMeeting": "加入 Zoom 会议",
    "unfurling.zoom.zoomPasscode": "密码： {value}",
    "unfurlingActions.authPopupTitle": "认证",
    "unfurlingHelpers.authenticatedErrorDescription.accessDenied":
      "资源所有者或授权服务器拒绝了该请求。请与你的组织或资源所有者联系，确保启用 OAuth 安装。",
    "unfurlingHelpers.authenticatedErrorDescription.invalidRequest":
      "授权请求无效。如果问题依然存在，请联系客服。",
    "unfurlingHelpers.authenticatedErrorDescription.invalidScope":
      "请求的作用域无效。如果问题仍然存在，请联系客服。",
    "unfurlingHelpers.authenticatedErrorDescription.serverError":
      "授权服务器遇到了阻止它完成请求的意外情况。如果问题依然存在，请联系客服。",
    "unfurlingHelpers.authenticatedErrorDescription.temporarilyUnavailable":
      "由于服务器临时超载或维护，授权服务器目前无法处理该请求。如果问题依然存在，请联系客服。",
    "unfurlingHelpers.authenticatedErrorDescription.unknownError":
      "授权服务器响应了一个未知错误 (`{value}`)。如果问题依然存在，请联系客服。",
    "unfurlingHelpers.authenticatedErrorDescription.unsupportedResponseType":
      "授权服务器不支持使用这种方法获得授权代码。如果问题仍然存在，请联系客服。",
    "unfurlingHelpers.unauthorizedClient.":
      "未授权客户端使用此方法请求授权代码。如果问题依然存在，请联系客服。",
    "unfurlingHelpers.unfurlResponseError.accessDenied": "拒绝访问",
    "unfurlingHelpers.unfurlResponseError.invalidRequest": "无法加载预览",
    "unfurlingHelpers.unfurlResponseError.notFound": "找不到内容",
    "unfurlingHelpers.unfurlResponseError.rateLimited": "请求太多",
    "unfurlingHelpers.unfurlResponseError.serverError": "无法加载预览",
    "unfurlingHelpers.unfurlResponseError.unknownError": "无法加载预览",
    "unfurlingHelpers.unfurlResponseErrorDescription.accessDenied":
      "你没有访问此资源的适当权限。",
    "unfurlingHelpers.unfurlResponseErrorDescription.invalidRequest":
      '尝试获取此资源的信息时出错。收到的错误代码为 "{statusCode}"。',
    "unfurlingHelpers.unfurlResponseErrorDescription.notFound":
      "找不到此链接的资源信息。它可能已不存在，或者你可能没有适当的访问权限。",
    "unfurlingHelpers.unfurlResponseErrorDescription.rateLimited":
      '"{integrationName}" 收到了太多针对你或你的组织的请求。请等待几分钟，然后重试。',
    "unfurlingHelpers.unfurlResponseErrorDescription.serverError":
      '尝试获取此资源的信息时出错。收到的错误代码为 "{statusCode}"。',
    "unfurlingHelpers.unfurlResponseErrorDescription.unknownError":
      '尝试获取此资源的信息时出错。收到的错误代码为 "{statusCode}"。',
    "unfurlingMenu.actions.pasteAsDatabase.title": "粘贴为数据库",
    "unfurlingMenu.actions.pasteAsEmbed.title": "以嵌入形式粘贴",
    "unfurlingMenu.actions.pasteAsLink.title": "以链接形式粘贴",
    "unfurlingMenu.actions.pasteAsMention.title": "以提及形式粘贴",
    "unfurlingMenu.actions.pasteAsPreview.title": "以预览形式粘贴",
    "unfurlingMenu.optionTypeTooltip.database": "粘贴为数据库。",
    "unfurlingMenu.optionTypeTooltip.link": "以常规链接的形式进行粘贴。",
    "unfurlingMenu.optionTypeTooltip.mention": "以行内提及的形式预览链接。",
    "unfurlingMenu.optionTypeTooltip.preview": "以块的形式预览链接。",
    "unsubscribeFromEmails.loadingMessage": "载入中⋯",
    "unsubscribeFromEmails.untitledWorkspacePlaceholder": "无标题的工作区",
    "unsubscribeFromEmails.workspace.errorMessage": "无法取消订阅。",
    "unsubscribeFromEmails.workspace.message":
      "你已成功退订{workspaceName}的电子邮件",
    "unwantedContentTakedownEmail.body.appeal":
      "如果你想对此决定提出上诉，请发送电子邮件至 <mailto>team@makenotion.com</mailto>，详细说明你的内容已如何更改或未违反我们的政策。",
    "unwantedContentTakedownEmail.body.consequence":
      "因此，此页面不再公开。你仍然可以在你的私人工作区中访问它。",
    "unwantedContentTakedownEmail.body.intro": "感谢你使用 Notion。",
    "unwantedContentTakedownEmail.body.takedown":
      "我们写这封信是为了告诉你，我们已确定位于<pagelink>此页面</pagelink>上的内容不符合我们的<contentpolicylink>内容与使用政策</contentpolicylink>中列出的标准。",
    "unwantedContentTakedownEmail.closingText": "谢谢你。{br}—来自 Notion 团队",
    "unwantedContentTakedownEmail.greetingWithName": "嗨，{customerName}！",
    "unwantedContentTakedownEmail.greetingWithoutName": "嗨，你好！",
    "unwantedContentTakedownEmail.subjectLine.text":
      "你的 Notion 帐户：公共页面上已审核的内容",
    "updateBanner.updateAvailableBanner.message": "更新并查看新功能",
    "updateSegmentedControl.option.comment": "评论",
    "updateSegmentedControl.option.updates": "更新",
    "updateSidebar.commentContainer.empty": "此页面上的评论将显示在这里",
    "updateSidebar.commentContainer.emptyResolved":
      "此页上的已解决评论将在此处显示。",
    "updateSidebar.commentContainer.emptyTitle": "尚无评论",
    "updateSidebar.commentContainer.emptyTitleResolved": "未解决评论",
    "updateSidebar.commentContainer.emptyTitleUnresolved": "尚无公开评论",
    "updateSidebar.commentContainer.emptyUnresolved":
      "此页面上的公开评论将显示在这里",
    "updateSidebar.commentContainer.reply": "回复",
    "updateSidebar.commentContainer.restricted": "您无权查看此受限页面的更新。",
    "updateSidebar.comments.filter.button.resolvedMode": "已解决",
    "updateSidebar.comments.filter.button.unresolvedMode": "未解决",
    "updateSidebar.comments.mode.resolvedOption": "已解决的评论",
    "updateSidebar.comments.mode.unresolvedOption": "未解决的评论",
    "updateSidebar.commentsTab.title": "评论",
    "updateSidebar.header.comments.filter": "公开",
    "updateSidebar.header.commentsLabel": "评论",
    "updateSidebar.header.updatesLabel": "更新",
    "updateSidebar.placeholder.addComment": "添加评论...",
    "updateSidebar.resolvedToggle.hideResolved": "隐藏已解决",
    "updateSidebar.resolvedToggle.hideResolvedTooltip": "隐藏已解决的评论",
    "updateSidebar.resolvedToggle.showResolved": "显示已解决",
    "updateSidebar.resolvedToggle.showResolvedTooltip": "显示已解决的评论",
    "updateSidebar.updatesContainer.empty": "此页面没有更新。",
    "updateSidebar.updatesContainer.emptyAfterSearch":
      "没有更新与请求的筛选器匹配。",
    "updateSidebar.updatesHeader.label": "更新",
    "updateSidebar.updatesTab.title": "更新",
    "updateSidebarSelect.selectComments.label": "评论",
    "updateSidebarSelect.selectUpdates.label": "所有更新",
    "updateSidebarTabCommentsSegmentedControl.option.open": "打开",
    "updateSidebarTabCommentsSegmentedControl.option.resolved": "已解决",
    "updateSidebarTabCommentsSegmentedControl.option.unresolved": "未解决",
    "updateSidebarUnexpandButton.closeSidebar.tooltip": "关闭侧边栏",
    "updateSpaceDomain.error.invalidDomain.message": "此域名不可用。",
    "updateSpaceDomain.error.missingDomain.message": "需要一个域名。",
    "updatesButton.allUpdates.sidebarButton": "所有更新",
    "updatesButton.tooltip": "此工作区中所有页面的更新",
    "updatesModal.allPagesTab.emptyPrompt": "工作区中页面的更新将显示在这里。",
    "updatesModal.allPagesTab.emptyPromptTitle": "没有新的更新",
    "updatesModal.allUpdatesTab.title": "全部",
    "updatesModal.archiveTab.emptyPrompt":
      "你归档的所有收件箱更新都将显示在这里。",
    "updatesModal.archiveTab.emptyPromptTitle": "没有已归档的更新",
    "updatesModal.archiveTab.title": "已归档",
    "updatesModal.arvhiveTab.emptyPrompt":
      "你归档的所有收件箱更新都将显示在这里。",
    "updatesModal.arvhiveTab.emptyPromptTitle": "没有已归档的更新",
    "updatesModal.currentPageTab.emptyPrompt":
      "对此页面的任何更改都将显示在这里。",
    "updatesModal.currentPageTab.emptyPromptTitle": "没有页面更新",
    "updatesModal.followedUpdatesTab.allArchived":
      "在任何页面的“更新”菜单中打开“关注此页面”，即可在这里接收更新。",
    "updatesModal.followedUpdatesTab.allArchivedTitle": "没有新的更新",
    "updatesModal.followedUpdatesTab.title": "正在关注",
    "updatesModal.mentionsTab.title": "收件箱",
    "updatesModal.mobielThisPage.title": "此页面",
    "updatesModal.mobileMenu.title": "所有更新",
    "updatesModal.mobileThisPage.title": "此页面",
    "updatesModal.openNotifications.tooltip": "打开通知设定",
    "updatesModal.spaceUpdatesTab.allArchived":
      "当有人@提及你、回复你的评论或邀请你进入页面时，你将在这里收到通知。",
    "updatesModal.spaceUpdatesTab.allArchivedRequests":
      "当有人@提及你、回复你的评论、向你发送请求或邀请你进入页面时，你将在这里收到通知。",
    "updatesModal.spaceUpdatesTab.allArchivedTitle": "都看完啦！",
    "updatesModal.spaceUpdatesTab.archiveAllButtonTitle": "全部归档",
    "updatesModal.spaceUpdatesTab.archiveReadButtonTitle": "归档阅读",
    "upgradeButton.enterprise.text": "企业版",
    "upgradeButton.learnMore.tooltip": "点击以了解更多。",
    "upgradeButton.personal.text": "个人专业版",
    "upgradeButton.team.text": "团队版",
    "upgradeButton.upgrade.text": "升级",
    "upgradeButton.upgrade.tooltip": "升级以使用此功能。",
    "upgradeMobileButton.upgradeButton.label": "升级到专业版",
    "uploadActions.uploadFailedError.message": "上传失败。",
    "uploadLimitExceededBanner.message":
      "{shouldShowShortMessage, select, true {文件超出 {maxFreeAccountFileSize}MB 大小限制} other {你的文件超过了免费版的 {maxFreeAccountFileSize}MB 大小限制}}",
    "uploadLimitExceededBanner.upgradeButton.label":
      "{shouldShowShortMessage, select, true {升级} other {升级以获得无限上传}}",
    "upsellActions.confirmProration.acceptLabel":
      "升级到{plan, select, personal {个人版} team {团队版} other {企业版}}",
    "upsellActions.confirmProration.message":
      "你将以每位成员每月{price}的价格订阅 Notion {plan, select, personal {个人} team {团队} other {企业}}版。{br}{isSubscribed, select, true {系统将在扣除帐户余额后，按比例向你收取费用。} other {}}",
    "upsellActions.confirmProrationAndYearlyInterval.message":
      "我们会根据你当前的结算时间间隔和帐户余额按比例向你收取费用。今后，你将每年支付账单。",
    "upsellActions.switchPlanFromInAppPurchase":
      "你目前通过 Apple 的应用内购买进行订阅。要切换计划，请先取消你的 Apple 订阅。",
    "upsellCallout.learnMoreButton.text": "了解更多",
    "upsellCallout.upgradeButton.text": "升级",
    "useCaseOnboarding.mobileDesktopStep.browser.label": "浏览器",
    "useCaseOnboarding.mobileDesktopStep.desktopApp.label":
      "Mac 和 Windows 应用",
    "useCaseOnboarding.mobileDesktopStep.title":
      "Notion 也可用于 <boldtext>Mac</boldtext>、<boldtext>Windows</boldtext> 和<boldtext>浏览器</boldtext>！所有内容将在你的多个设备上保持同步。",
    "useCaseOnboarding.mobileEditorSidebarStep.description":
      "你将在这里找到工作区页面和你的私人页面。",
    "useCaseOnboarding.mobileEditorSidebarStep.title":
      "<boldtext>侧边栏</boldtext>让一切井然有序。",
    "useCaseOnboarding.mobileEditorStep.description":
      "<boldtext>触摸并按住</boldtext>可以对任何内容重新排序。",
    "useCaseOnboarding.mobileEditorStep.title": "一些基本提示：",
    "useCaseOnboarding.mobileWebClipperStep.title":
      "<boldtext>将网页或本地文件保存到 Notion 中。</boldtext>",
    "useCaseOnboarding.webClipperStep.description":
      "只需点击分享按钮，然后选取要保存到的页面或数据库。",
    "useCaseOnboardingStep.cancelButton.label": "取消",
    "userCreditSettings.creditBalanceSection.applyCreditButton.label":
      "使用积分",
    "userCreditSettings.creditBalanceSection.creditBalanceMessage":
      "你目前的积分余额为 {creditBalance}。",
    "userCreditSettings.creditBalanceSection.freeMonthMessage":
      "{numberOfMonths, plural, other {这相当于<b> {numberOfMonths} 个月</b>的个人专业版。}}",
    "userCreditSettings.creditBalanceSection.maximumCreditBalanceExceeded":
      "你已经超出了每个帐户的最高积分总额 {maximumCreditBalance}。你赚取的额外积分不会增加你的余额。",
    "userCreditSettings.creditBalanceSection.title": "积分余额",
    "userCreditSettings.creditBalanceSection.upgradeForFreeButton.label":
      "免费升级",
    "userCreditSettings.helpButton.caption": "了解如何赚取和使用积分",
    "userCreditSettings.inviteFriendsSection.showLessReferredUsers.link":
      "少显示 {numberOfReferredUsers} 位",
    "userCreditSettings.inviteFriendsSection.showMoreReferredUsers.link":
      "显示其他 {numberOfReferredUsers} 位",
    "userCreditSettings.inviteFriendsSection.sourceOfReferralNote":
      "（已邀请你）",
    "userCreditSettings.inviteFriendsSection.title": "邀请朋友并赚取积分",
    "userCreditSettings.inviteFriendsSection.userHasAlreadySignedUpNote":
      "（已注册）",
    "userCreditSettings.inviteFriendsSection.userHasNotSignedUpNote":
      "（尚未注册）",
    "userCreditSettings.offline.message": "请连接网络以管理帐户积分。",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.actionLink":
      "下载",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.description":
      "下载桌面应用并登录",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.title":
      "在桌面应用中登录",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.actionLink":
      "绑定",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.description":
      "导入你的笔记和笔记本",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.title":
      "从 Evernote 导入",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.actionLink":
      "下载",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.description":
      "下载移动应用并登录",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.title":
      "在移动应用中登录",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.actionLink":
      "下载",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.description":
      "使用分享菜单将链接保存到 Notion 中",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.title":
      "使用 iOS 或安卓系统分享菜单",
    "userCreditSettings.otherWaysToEarnCreditSection.totalCreditSummaryText":
      "赚取的总积分",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.actionLink": "访问",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.description":
      "从任何网页浏览器登录到 Notion",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.title":
      "在网页版登录",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.actionLink":
      "安装",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.description":
      "下载 Chrome 扩展程序并保存链接",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.title":
      "使用网页剪裁器",
    "userCreditSettings.otherWaysToEarnCreditSectionAlt.title":
      "赚取积分的方法",
    "userDataConsent.render.error": "出了些问题",
    "userDataConsentSettings.accessGranted.label":
      "你已授予 Notion 访问你的帐户的权限，仅以用于支持目的，直到{expiryTime}。",
    "userDataConsentSettings.accessNotGranted.label":
      "授予 Notion 支持人员对你的帐户的临时访问权限，以便我们代表你解决问题或恢复内容。你可以随时撤销访问权限。",
    "userDataConsentSettings.allowSupportAccess.button": "授予支持访问权限",
    "userDataConsentSettings.header.label": "支持访问权限",
    "userDataConsentSettings.revokeSupportAccess.button": "撤消访问权限",
    "userPermissionsMenu.adminItem.caption":
      "可以更改工作区设置并邀请新成员加入工作区。",
    "userPermissionsMenu.adminItem.label": "管理员",
    "userPermissionsMenu.canCommentItem.caption":
      "可以查看和评论，但无法编辑。",
    "userPermissionsMenu.canCommentItem.label": "可以评论",
    "userPermissionsMenu.canEditContentItem.caption":
      "可以编辑内容，但不能编辑数据库的视图或结构。",
    "userPermissionsMenu.canEditContentItem.label": "可以编辑内容",
    "userPermissionsMenu.canEditItem.caption": "可以编辑，但无法与他人分享。",
    "userPermissionsMenu.canEditItem.label": "可以编辑",
    "userPermissionsMenu.canReadItem.caption": "无法编辑或与他人分享。",
    "userPermissionsMenu.canReadItem.label": "可以查看",
    "userPermissionsMenu.canWriteItem.caption": "无法读取或与他人分享。",
    "userPermissionsMenu.canWriteItem.label": "可以写入。",
    "userPermissionsMenu.disabledItem.label": "禁用",
    "userPermissionsMenu.fullAccessItem.caption": "可以编辑并与他人分享。",
    "userPermissionsMenu.fullAccessItem.label": "全部权限",
    "userPermissionsMenu.guestItem.label": "访客",
    "userPermissionsMenu.leaveTeamItem.label": "离开团队",
    "userPermissionsMenu.memberItem.caption":
      "无法更改工作区设置或邀请新成员加入工作区。",
    "userPermissionsMenu.memberItem.label": "成员",
    "userPermissionsMenu.mixedAccessItem.caption": "具有混合访问权限。",
    "userPermissionsMenu.mixedAccessItem.label": "混合访问权限。",
    "userPermissionsMenu.mobile.doneButton.label": "完成",
    "userPermissionsMenu.mobile.title": "选择团队角色",
    "userPermissionsMenu.noAccessItem.label": "无法访问",
    "userPermissionsMenu.removeFromTeamItem.label": "从团队移除",
    "userPermissionsMenu.removePermissionsModal.removeSelfButton.label": "删除",
    "userPermissionsMenu.removePermissionsModal.removeSelfFromPage.confirmationMessage":
      "确定要删除自己的访问权限？",
    "userPermissionsMenu.removePermissionsModal.removeSelfFromWorkspace.confirmationMessage":
      "确定要删除自己的访问权限？你将无法访问工作区，并且所有私人页面都将丢失。",
    "userPermissionsMenu.removePermissionsModal.removeUserButton.label": "移除",
    "userPermissionsMenu.removePermissionsModal.removeUserFromPage.confirmationMessage":
      "确定要移除此人？",
    "userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.confirmationMessage":
      "确定要移除此人？他将无法访问工作区，并且所有私人页面都将丢失。",
    "userPermissionsMenu.removeWorkspaceItem.label": "移除",
    "userSettings.userType.personal": "只有我",
    "userSettings.userType.team100+": "100+ 人",
    "userSettings.userType.team1000+": "1000人以上",
    "userSettings.userType.team101-1000": "101人~1000人",
    "userSettings.userType.team2-50": "2人~50人",
    "userSettings.userType.team20-100": "20-100人",
    "userSettings.userType.team5-20": "5-20人",
    "userSettings.userType.team51-100": "51人~100人",
    "userSettings.userType.team<5": "2-5人",
    "videoBlock.embedVideo.button.label": "嵌入视频",
    "videoBlock.linkInput.caption": "适用于 YouTube、Vimeo 等视频链接",
    "videoBlock.linkInput.placeholder": "粘贴视频链接⋯",
    "videoBlock.placeholder": "嵌入或上传视频",
    "viewMoreOutlinerButton.label": "查看全部 ({total})",
    "viewsIntroModal.doneMessage": "明白了",
    "viewsIntroModal.learnMoreUrl": "访问 {url} 了解更多",
    "viewsIntroModal.mobileDoneMessage": "明白了",
    "viewsIntroModal.skipMessage": "跳过",
    "viewsIntroModal.subtitle": "Notion 2.15 的新特性",
    "viewsIntroModal.tab1.subtitle":
      "使用选项卡快速切换视图，以更少的点击进行筛选和排序。",
    "viewsIntroModal.tab1.title": "更轻松地访问数据库视图",
    "viewsIntroModal.tab2.subtitle":
      "使用筛选器和排序浏览数据，不会中断其他人的工作流。",
    "viewsIntroModal.tab2.title": "在保存之前，筛选器和排序不会影响其他人",
    "viewsIntroModal.tab3.subtitle":
      "从现有数据库创建新视图，编辑视图选项中的所有内容。",
    "viewsIntroModal.tab3.title": "一次性创建和编辑视图",
    "viewsIntroModal.title": "更好的数据库和筛选器",
    "viewsIntroModal.title.beta": "更好的数据库和筛选器（测试版）",
    "webApp.redirectingToDesktop.continueInBrowser.message":
      "或者在浏览器中继续",
    "webApp.redirectingToDesktop.directLink.message":
      "如果你没有被重定向，请单击此处。",
    "webApp.redirectingToDesktop.message": "重定向到你的 Notion 应用⋯",
    "webClipper.clippedItemDatabase.properties.createdTime": "创建时间",
    "webClipper.clippedItemDatabase.properties.name": "名称",
    "webClipper.clippedItemDatabase.properties.tags": "标签",
    "webClipper.clippedItemDatabase.properties.url": "网址",
    "webClipper.clippedItemDatabase.views.viewAll": "查看所有",
    "whatIsNotion.usecases.databases": "数据库",
    "whatIsNotion.usecases.documents": "文档",
    "whatIsNotion.usecases.knowledgeBases": "知识库",
    "whatIsNotion.usecases.notes": "世界上最美的笔记...😉",
    "whatIsNotion.usecases.projectManagementSystems": "项目管理系统",
    "whatIsNotion.usecases.publicWebsites": "公共网站",
    "whimsicalBlock.embeds.button.label": "嵌入 Whimsical",
    "whimsicalBlock.embeds.caption": "适用于启用了公共访问的 Whimsical 链接",
    "whimsicalBlock.placeholder": "嵌入 Whimsical",
    "withImageRepositioning.dragImage.text": "拖动图片以调整位置",
  });

  const routes = document.createElement("script");
  routes.id = "routes";
  routes.type = "application/json";
  routes.setAttribute("data-locale", lang);
  routes.text = JSON.stringify({});

  function insertMoment() {
    try {
      moment.updateLocale(lang.toLowerCase(), {
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
      });
      moment.locale(lang.toLowerCase())
    } catch (e) {
      requestAnimationFrame(() => {
        insertMoment();
      });
    }
  }

  try {
    const preferredLocaleStr = window.localStorage.getItem(
      "LRU:KeyValueStore2:preferredLocale"
    );
    const preferredLocale = JSON.parse(preferredLocaleStr);
    if (preferredLocale.value) {
      preferredLocale.value = lang;
      window.localStorage.setItem(
        "LRU:KeyValueStore2:preferredLocale",
        JSON.stringify(preferredLocale)
      ); // search window.document.querySelector("#messages") 请阅读
    }
  } catch (e) {}

  if (isElectron) {
    var observer = new MutationObserver(function (callback) {
      if (
        callback.filter((v) => {
          return v.target === document.head;
        }).length > 0
      ) {
        document.head.insertAdjacentElement("afterbegin", script);
        document.head.insertAdjacentElement("afterbegin", routes);
        observer.disconnect();
      }
    });
    observer.observe(document, {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      attributes: false, // 观察属性变动
      subtree: true, // 观察后代节点，默认为 false
    });
    insertMoment();
  } else {
    function insert() {
      try {
        document.body.appendChild(script);
        document.body.appendChild(routes);
      } catch (e) {
        requestAnimationFrame(() => {
          insert();
        });
      }
    }
    insert();
    insertMoment();

    // for UserScript
    if (isSafari) {
      const notionRoot = document.createElement("div");
      notionRoot.id = "notion-app";
      notionRoot.setAttribute("data-inject", true);
      document.body.append(notionRoot);
      scriptSrcList.forEach((url) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.defer = "defer";
        script.src = url;
        script.setAttribute("data-inject", true);
        document.head.append(script);
      });
    }
  }
})();
