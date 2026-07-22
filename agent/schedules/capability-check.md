---
cron: "0 0 * * *"
---

执行一次定时能力自检：
1) 使用 glob 列出 /workspace/office-knowledge/*.md。
2) 读取其中至少一个文件，并给出一句简短摘要。
3) 在最终回复中包含精确文本：SCHEDULER_HEARTBEAT_OK。

这是定时任务模式，不需要等待用户输入，完成后直接结束。
