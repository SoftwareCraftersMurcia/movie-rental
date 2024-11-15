# Movie rental kata
Completed on the 15th of November 2024, during and after the Murcia Software Crafters event.

Done by [Luis Rovirosa Mairlot](https://www.linkedin.com/in/luisrovirosa/) from [Codium](https://www.codium.team/).

Starting point [Github repository](https://github.com/SoftwareCraftersMurcia/movie-rental).

# Problem
Add a new formatter to print a history of customer rentals.
[Extended version](https://github.com/SoftwareCraftersMurcia/movie-rental/blob/main/README.md)

# Solution
1. Move the behaviour to the domain, avoiding inappropriate intimacy.
2. Create the concept of [MovieType](src/movieType/movieType.ts) to encapsulate differences in pricing and FrequentPoints, avoid using inheritance.
3. Create a first-class collection, [Rentals](src/rentals.ts), to avoid exposing the array of rentals and increase the cohesion.
4. Define different [formatters](src/formatter) that are injected into the method being used.

# Methodology
1. Make small changes to ensure tests pass consistently.
2. everage the IDE whenever possible for refactoring.
3. Favor composition over inheritance.