
/*
    ===== Código de TypeScript =====
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

//ddecoradores sirven para expandir funcionalidades
@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123'

    imprimir(){
        console.log('Hola mundo');
    }
}


console.log(MiSuperClase)

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad)