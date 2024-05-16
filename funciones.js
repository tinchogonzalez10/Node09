class CAutores {
    constructor() {
      this.autores = [];
    }
  
    agregarAutor(nombre, apellido, nacionalidad, mejorObra, añoPublicacion, edadPublicacion) {
      this.autores.push({ nombre, apellido, nacionalidad, mejorObra, añoPublicacion, edadPublicacion });
    }
    //crea un nuevo array con todos los elementos que cumplan la condicion
    autoresArgentinos() {
      return this.autores.filter(autor => autor.nacionalidad === 'Argentino');
    }
    
    autoresPublicacion1960a1980() {
      return this.autores.filter(autor => autor.añoPublicacion >= 1960 && autor.añoPublicacion <= 1980);
    }
    //suma todos los elementos del array
    promedioEdadPublicacion() {
      const sumaEdades = this.autores.reduce((total, autor) => total + autor.edadPublicacion, 0);
      return sumaEdades / this.autores.length;
    }
  
    mostrarAutores() {
      return this.autores;
    }
  }
  

  const autores = new CAutores();
  autores.agregarAutor('Gabriel', 'García Márquez', 'Colombiano', 'Cien años de soledad', 1967, 40);
  autores.agregarAutor('Julio', 'Cortázar', 'Argentino', 'Rayuela', 1963, 48);
  autores.agregarAutor('Isabel', 'Allende', 'Chilena', 'La casa de los espíritus', 1982, 40);
  autores.agregarAutor('Jorge Luis', 'Borges', 'Argentino', 'Ficciones', 1944, 45);
  autores.agregarAutor('Clarice', 'Lispector', 'Brasileña', 'La hora de la estrella', 1977, 56);
  autores.agregarAutor('Juan', 'Rulfo', 'Mexicano', 'Pedro Páramo', 1955, 38);
  autores.agregarAutor('Carlos', 'Fuentes', 'Mexicano', 'La región más transparente', 1958, 29);
  autores.agregarAutor('Eduardo', 'Galeano', 'Uruguayo', 'Las venas abiertas de América Latina', 1971, 31);
  

  console.log("Los Autores argentinos son:", autores.autoresArgentinos());
  
  console.log("Autores que publicaron entre 1960 y 1980:", autores.autoresPublicacion1960a1980());
  
  console.log("El promedio de la edad de publicación es de:", autores.promedioEdadPublicacion());
  
  console.log("Todos los autores:", autores.mostrarAutores());