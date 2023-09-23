
# Table of Contents

1.  [Intro](#org8ca9443)
2.  [Surface plasmon polaritons (SPP).](#orga7c9403)
3.  [Long-range surface plasmon polaritons](#org6fe807a)



<a id="org8ca9443"></a>

# Intro

You can find a very simple presentation in these [lecture notes](./plasmonics-lecture-notes.pdf). These
kind of effects have been known since the 1960s and have been studied
both theoretically and experimentally.

Nowadays, have become even more relevant due to easier access to
experimental techniques. An important advantage they have is due their
sensitivity.


<a id="orga7c9403"></a>

# Surface plasmon polaritons (SPP).

This is the simplest case of a perfect interface between two different
materials, e.g. air and metal, and solve Maxwell's
equations:

![img](./Surface_plasmon_polaritons_(SPP)/2023-08-22_15-07-26_screenshot.png)

with

![img](Surface_plasmon_polaritons_(SPP)./2023-08-22_15-11-15_screenshot.png)

Here one is making implicitly the assumption that \(\epsilon = \epsilon ( \omega)\), otherwise
you would need to account or terms like

![img](Surface_plasmon_polaritons_(SPP)./2023-08-22_15-20-39_screenshot.png)

as discussed by [Maier](./Maier_PLASMONICS.pdf), after Eq. (2.1)

![img](./Surface_plasmon_polaritons_(SPP)/2023-08-21_19-49-35_screenshot.png)

Here the crucial point is that, the dielectic function at a given
frequency has to be negative, leading a mode solutio for the TM
(transverse magnetic) polarization that has an evanescent profile
along the axis perpedincular to the plane z, whereas it can still
progpagte along the plane.

You start with following plane wave ansatz for each material:

![img](Surface_plasmon_polaritons_(SPP)./2023-08-22_15-33-50_screenshot.png)

to solve Maxwell's eqs. and the following continuity relation at the
air-metal interface

![img](Surface_plasmon_polaritons_(SPP)./2023-08-22_15-38-37_screenshot.png)

This will have the relation:

![img](Surface_plasmon_polaritons_(SPP)./2023-08-22_15-40-20_screenshot.png)

These are indeed imaginary both. The other one left (we took \(k_y=0\)
for siplicity) is the x-component \(k_x\) which is, obviusly, the both
materials.

![img](Surface_plasmon_polaritons_(SPP)./2023-08-22_15-45-12_screenshot.png)

And so the dispersion relation of the mode is given by:

\begin{equation}
k_x^2 = \frac{\omega^2}{c^2 }  \frac{\epsilon_1 \epsilon_2}  {\epsilon_1+ \epsilon_2}
\end{equation}

An argument of why only TM are of interest is given in [Maier](./Maier_PLASMONICS.pdf):

![img](Surface_plasmon_polaritons_(SPP)./2023-08-21_20-03-10_screenshot.png)

This is applicable for infinite surface case, at least. One might need
to review this also when dealing with a nonlocal dielectric function.

This is almost always solved using a Drude-like plasmon to the get:

![img](Surface_plasmon_polaritons_(SPP)./2023-08-22_16-25-56_screenshot.png)

The dielectric line with respoect to air or vacuum is important
because SPP don't couple to any modes outside. The only way to excite
them is through a prism of deielectric material whose dielectric
constant is bigger than the air's one, working under total internal
reflection. 


<a id="org6fe807a"></a>

# Long-range surface plasmon polaritons

