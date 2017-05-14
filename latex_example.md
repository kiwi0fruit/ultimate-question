# Markdown Unicode and LaTeX test for HTML/PDF

1. Serif fallback: Times New Roman, Cambria Math, Segoe UI Symbol, MS PMincho,
2. Monospace fallback: Consolas, Cambria Math, Segoe UI Symbol, Microsoft JhengHei.

* Russian:
    - Regular serif: проверка русского языка,
    - `Regular monospace: проверка русского языка`,
* Math symbols and Greek letters:
    - Regular serif: ≥, ≈, ∈, ⟨⟩, α, β, γ, δ,
    - _Italic serif: ≥, ≈, ∈, ⟨⟩, α, β, γ, δ_,
    - **Bold serif: ≥, ≈, ∈, ⟨⟩, α, β, γ, δ**,
    - _**Bold italic serif: ≥, ≈, ∈, ⟨⟩, α, β, γ, δ**_,
    - `Regular monospace: ≥, ≈, ∈, ⟨⟩, α, β, γ, δ`,
* Emoji Unicode: 👊, _👊_, **👊**, _**👊**_, `👊`,
* Buggy symbols on some Windows fonts: ♡, _♡_, **♡**, _**♡**_, `♡`, ♥, _♥_, **♥**, _**♥**_, `♥`,
* CJK:
    - Regular serif: 紫薇北斗星,
    - _Italic serif: 紫薇北斗星_,
    - **Bold serif: 紫薇北斗星**,
    - _**Bold italic serif: 紫薇北斗星**_,
    -  `Regular sans-serif: 紫薇北斗星`,
* Atom css bug test: [**bold colored link**](https://github.com/kiwi0fruit/misc) (should be colored),
* Highlighting test of two no-break spaces: '  ' (should be two colored spaces in the editor).
* In-line formulas test. `$...$` example: $F(k) = \int_{-\infty}^{\infty} f(x) e^{2\pi i k} dx$. ` $ ` example: They can cost $5 or may be $6. ` \$ ` example: or \$8 or may be \$3. <code>&#36;...&#36;</code> are the best so I test them only (actually pandoc parser failed here so I used `<code>&#36;...&#36;</code>`).
* PHP code vs. in-line math: `<?php $x = 5 /* + 15 */ + 5; echo $x; ?>`
* Formulas:

$$
F(x,y)=\alpha G(x) + \beta H(y)
$$

$$
\begin{aligned}\nabla\times\vec{\mathbf{B}}-\frac{1}{c}\frac{\partial\vec{\mathbf{E}}}{\partial t} & =\frac{4\pi}{c}\vec{\mathbf{j}}\\
\nabla\cdot\vec{\mathbf{E}} & =4\pi\rho\\
\nabla\times\vec{\mathbf{E}}+\frac{1}{c}\frac{\partial\vec{\mathbf{B}}}{\partial t} & =\vec{\mathbf{0}}\\
\nabla\cdot\vec{\mathbf{B}} & =0
\end{aligned}
$$

* Colored python code:

```{.python}
import pandas as pd
pd.options.display.latex.repr = True
import seaborn as sns
df = sns.load_dataset("iris")
df.head()
```

Some text:

Their long association with humans has led dogs to be uniquely attuned to human behavior and they are able to thrive on a starch-rich diet that would be inadequate for other canid species. Dogs vary widely in shape, size and colours. Dogs perform many roles for people, such as hunting, herding, pulling loads, protection, assisting police and military, companionship and, more recently, aiding handicapped individuals. This influence on human society has given them the sobriquet "man's best friend".
