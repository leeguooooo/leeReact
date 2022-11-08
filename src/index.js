import React from "./react";

// const element = (
//   <div>
//     <h1>React.js 小书</h1>
//     <div>开源、免费、专业、简单</div>
//     订阅：
//     <input name="text" />
//     <span>reactjsbook.com</span>
//   </div>
// );

// React.render(element, document.getElementById("root"));

const element = React.createElement("div", { name: 1 }, "hello world");
console.log(element);
