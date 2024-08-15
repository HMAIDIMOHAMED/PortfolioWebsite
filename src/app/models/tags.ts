export class Tags {
    static readonly ANGULAR = new Tags('Angular','red');
    static readonly TYPESCRIPT = new Tags('Typescript','darkred');
    static readonly PYTHON = new Tags('Python','pink');
    static readonly CSHARP = new Tags('C#','green');
    static readonly JAVA = new Tags('Java','orange');
    static readonly NODEJS = new Tags('Node JS','brown');
    static readonly JS = new Tags('Javascript','blue');
    static readonly REACT = new Tags('React','darkblue');
    static readonly EXPRESS = new Tags('Express','yellow');


    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}
