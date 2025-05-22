concept:if/else、for loop、random number

- **if / else if / else**：根據條件分支執行
- **for 迴圈**：重複執行，常用在固定次數的流程
- **continue / break**：
  - `continue`：跳過當前這圈，直接進入下一圈
  - `break`：立刻結束整個迴圈
- **Math.random()**：產生 0–1 的小數 → 搭配 `Math.floor()` 可產生整數隨機值

1.evenLoop:
容易錯的點應該是for loop的i應該要小於50。還有for loop需要放兩個if判斷continue or break。
運用i%2的餘數為0作為條件，骰選偶數，到達要求的範圍上限停止loop。

2.TGIF:
容易錯的點應該是day的variable設置，還有1到4天的設置要用到&&、>=等
運用多層判定顯示day variable對應的print。

3.exercisPicker:
根據隨機數和if判定的健身組合選擇