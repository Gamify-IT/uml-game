export const diagrams = [
  [
    `classDiagram
class Gender {
    <<enumeration>>
    feminine, masculine, diverse
}
class Person
Person : -String firstName
Person : -String lastName
Person : -Gender gender

class Student
Student : -String matriculationNumber
Student : -String semester

class Professor
Professor : -String email

class Lecture
Lecture : -String name

Gender <.. Person
Person <-- Professor
Person <-- Student
Lecture *--* Student
Lecture --* Professor`,
    `classDiagram
class Gender {
    <<enumeration>>
    feminine, masculine, diverse
}
class Person
Person : -String firstName
Person : -String lastName
Person : -Gender gender

class Student
Student : -String matriculationNumber
Student : -String semester

class Professor
Professor : -String email

class Lecture
Lecture : -String name

Gender <.. Person
Person <|-- Professor
Person <|-- Student
Lecture *--* Student
Lecture --* Professor`,
    `classDiagram
class Gender {
    <<enumeration>>
    feminine, masculine, diverse
}
class Person
Person : -String firstName
Person : -String lastName
Person : -Gender gender

class Student
Student : -String matriculationNumber
Student : -String semester

class Professor
Professor : -String email

class Lecture
Lecture : -String name

Gender <-- Person
Person <|-- Professor
Person <|-- Student
Lecture *--* Student
Lecture *-- Professor`,
  ],
  [
    `classDiagram
    class Animal
    <<interface>> Animal
    Animal : +eat(Food) void
    Animal : +sleep() void
    Animal : +canFly() boolean
    class Reptile
    Reptile : +reproduce(Reptile) Egg[]
    class Mammal
    Mammal : +reproduce(Mammal) Baby[]
    Reptile <|-- Snake
    Reptile <|-- Lizard
    Mammal <|-- Cat
    Mammal <|-- Racoon
    Animal <|.. Reptile
    Animal <|.. Mammal
    `,
    `classDiagram
    class Animal
    <<interface>> Animal
    Animal : +eat(Food) void
    Animal : +sleep() void
    Animal : +canFly() boolean
    class Reptile
    Reptile : +reproduce(Reptile) Egg[]
    class Mammal
    Mammal : +reproduce(Mammal) Baby[]
    Reptile <-- Snake
    Reptile <-- Lizard
    Mammal <-- Cat
    Mammal <-- Racoon
    Animal <|-- Reptile
    Animal <|-- Mammal
    `,
    `classDiagram
    class Animal
    <<interface>> Animal
    Animal : +eat(Food) void
    Animal : +sleep() void
    Animal : +canFly() boolean
    class Reptile
    Reptile : +reproduce(Reptile) Egg[]
    class Mammal
    Mammal : +reproduce(Mammal) Baby[]
    Reptile <|-- Snake
    Reptile <|-- Lizard
    Mammal <|-- Cat
    Mammal <|-- Racoon
    Animal <.. Reptile
    Animal <.. Mammal
    `,
  ],
];
