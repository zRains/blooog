(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{344:function(t,s,a){"use strict";a.r(s);var e=a(40),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在数据库的增删改查操作中难免会出现自增 id 不连续增长的问题。虽然再生产环境环境中没多大用处，但看着不连续就是不爽。在网上找到 3 种重置 id 方法。用那种就看个人情况吧。")]),t._v(" "),a("h4",{attrs:{id:"truncate"}},[t._v("☀️ TRUNCATE")]),t._v(" "),a("div",{staticClass:"danger coustom_block block"},[a("p",{staticClass:"title"},[t._v("注意")]),t._v(" "),a("p",[t._v("一定要先备份数据（不要把自增 id 也备份了）。")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- TRUNCATE相当于DROP + CREATE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRUNCATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("直接简单粗暴，备份数据后直接清空表，再恢复表。这样就能达到重置自增 id 的效果。")]),t._v(" "),a("p",[t._v("**优点：**操作简单，可以让处在记录中间不连续的 id 也重置。")]),t._v(" "),a("p",[t._v("**缺点：**相信我，如果数据量稍微大点你绝不会怎么做。毕竟会花很长时间。")]),t._v(" "),a("h4",{attrs:{id:"重置字段"}},[t._v("☀️ 重置字段")]),t._v(" "),a("p",[t._v("依次执行：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("  test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("  test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MEDIUMINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FIRST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个的原理就是销毁原来不连续的自增 id 字段，重新创建一个新的从 1 开始的连续的自增 id 字段。")]),t._v(" "),a("p",[t._v("**优点：**相对费时少。")]),t._v(" "),a("p",[t._v("**缺点：**操作难度稍微复杂点。")]),t._v(" "),a("h4",{attrs:{id:"重置自增量"}},[t._v("☀️ 重置自增量")]),t._v(" "),a("p",[t._v("执行：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("执行后在插入数据时其自增 id 一定是比前一条记录的自增 id 大 1。")]),t._v(" "),a("p",[t._v("**优点：**费时最少。")]),t._v(" "),a("p",[t._v("**缺点：**不能重置之前记录不连续的自增 id。")]),t._v(" "),a("h4",{attrs:{id:"参考文章"}},[t._v("☀️ 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/zjj2006/article/details/106590559?utm_medium=distribute.wap_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.wap_blog_relevant_pic&depth_1-utm_source=distribute.wap_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.wap_blog_relevant_pic",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官:mysql 如何重置自增 id"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);