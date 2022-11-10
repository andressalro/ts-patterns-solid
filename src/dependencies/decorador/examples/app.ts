/**
 * 
 * @param target Objeto destino /prototipo de la clase
 * @param methodName Nombre del método
 * @param descriptor Descriptor de propiedad asignado
 */
export function disable(target: Object, methodName: string, descriptor: PropertyDescriptor) {
    console.log("target",target); //métodos de la clase foo/bar
    console.log("methodname",methodName); //fo
    console.log("descriptor",descriptor.value); //metadatos del metodo, writable, enumerable, configurable
    descriptor.value = () => {
        throw new Error("Method is disabled");
    }
}

export function before(hook: Function) {
    return function<T extends Function>(target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
     return {
        get: function(this: T) {
            console.log("this",this); //Whatever {}
            let originalMethod = descriptor.value!.bind(this);
            hook = hook.bind(this);

            return () => {
                hook();
                originalMethod();
            }
        }
     }   
    }
}

export function capitalize() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            _a = "A";
            _b = "B";
        }
    }
}
@capitalize()
export class Whatever {
    private _a: string = "a";
    private _b: string = "b";

    // @disable
    foo() {
        console.log("foo");
    }
    @before(() => {console.log("Before hook")})
    bar() {
        console.log("bar");
    }

    baz() {
        console.log(this._a, this._b);
    }
}

let whatever = new Whatever();
whatever.foo();
whatever.bar();
whatever.baz();