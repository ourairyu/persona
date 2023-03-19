可逆计算理论提出了 `App = Delta x-extends Generator<DSL>` 这样一种[基于可逆差量概念的软件构造理论](https://zhuanlan.zhihu.com/p/64004026){:target="_blank"}{:rel="external nofollow"}，它为 Docker/Kustomize 等业界分散的差量化实践建立了统一的理论基础，突破了组件理论的限制，为实现系统级、粗粒度的软件复用扫除了理论障碍。

Nop 平台是可逆计算理论的参考实现，基于 Nop 平台，只需要定义 `xdef` 元模型文件，即可自动得到模型的解析器、验证器、IDE 提示插件、可视化编辑器等，最大化降低开发并维护自定义 DSL 的成本。在 GPT 智能时代，Nop 平台可以通过 DSL 与 GPT 交互，升级为 AI 驱动的低代码平台。

下面为[可逆计算理论与 Nop 平台的介绍](https://zhuanlan.zhihu.com/p/615136248){:target="_blank"}{:rel="external nofollow"}视频：

<div class="Video Video--bilibili">
  <iframe src="https://player.bilibili.com/player.html?aid=611171994&bvid=BV1u84y1w7kX&cid=1059300195&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

更多的理论讲解详见知乎专栏「[可逆计算](https://www.zhihu.com/column/reversible-computation){:target="_blank"}{:rel="external nofollow"}」，Nop 平台已在 [GitHub](https://github.com/entropy-cloud/nop-entropy){:target="_blank"}{:rel="external nofollow"} 与 [Gitee](https://gitee.com/canonical-entropy/nop-entropy){:target="_blank"}{:rel="external nofollow"} 上开源。
