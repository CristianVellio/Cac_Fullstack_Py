
persona1_nombre = "Marisa"
persona2_nombre = "Julian"
persona1_edad = 23
persona2_edad = 45

"""
personas = [
    {
    "nombre":"Marisa",
    "edad":23
    },
]
"""

class Persona:
    # atributos
    # constructor
    def indentificar(self,nombre,apellido,edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad

    # metodos
    def saludar(self):
        return (f"Hola, soy {self.nombre} {self.apellido} y tengo {self.edad} años")

# instancia -> objeto
persona1 = Persona()
persona1.indentificar("Marisa","Viotti",25)

persona2 = Persona()
persona2.indentificar("Julian","Alvarez",21)


print(persona1.saludar())
print(persona2.saludar())