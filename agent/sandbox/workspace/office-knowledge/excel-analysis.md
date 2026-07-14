# Excel 数据整理与分析策略

## 适用场景

适用于把原始数据整理成可分析结构、使用“分析数据”获得趋势或可视化建议，以及用数据透视表汇总和比较业务数据。

## 核心策略

### 先把数据整理成可靠表格

1. 每列只表达一个字段，第一行使用唯一、非空的列标题。
2. 数据区域内不要放空行、空列、双层表头或合并单元格；复杂交叉表可先用 Power Query 转换。
3. 同一列保持一致的数据类型，不要把日期、文本和数值混在一起。
4. 优先把区域格式化为 Excel 表格。新增行和列可以自动纳入数据源，后续刷新分析更稳定。

### 选择分析方式

1. 要快速寻找趋势、模式或高层概览时，可选择数据中的单元格并使用“分析数据”，再用自然语言提出明确问题。
2. 数据量较大或需要按多个维度比较、汇总时，使用数据透视表；可从推荐的数据透视表开始，再调整字段布局。
3. 多表分析需要使用数据模型并建立表之间的关系；不要手工复制粘贴成一张难维护的大表。
4. 数据透视表基于数据快照。源数据更新后必须刷新，报告才会反映新增或修改的记录。

### 验证输出

1. 检查“值”区域使用的是求和、计数、平均值还是其他汇总。数值列被识别为文本时，默认结果可能变成计数。
2. 同时展示金额和占比时，可以把同一字段两次放入“值”区域，分别设置汇总方式和“值显示方式”。
3. 对分析结果抽样回查原始记录，确认筛选条件、日期范围、单位和空值处理符合业务口径。
4. “分析数据”对数据规模、文件格式和区域可用性存在限制；没有建议并不代表数据没有价值，应回到数据结构和问题定义检查。

## 参考资料

- [Analyze Data in Excel](https://support.microsoft.com/en-us/excel/analyze-data-in-excel)
- [Create a PivotTable to analyze worksheet data](https://support.microsoft.com/en-us/excel/get-started/create-a-pivottable-to-analyze-worksheet-data)
- [Use PivotTables and other business intelligence tools to analyze your data](https://support.microsoft.com/en-US/Excel/use-pivottables-and-other-business-intelligence-tools-to-analyze-your-data)

资料整理日期：2026-07-14。

