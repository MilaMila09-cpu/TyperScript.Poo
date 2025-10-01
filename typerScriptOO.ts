let textoQualquer: String = " Olá Brasil"
// erro devido a triagem
textoQualquer = 2;

// projeto base
export class celular { 
    marca: string;
    modelo: string;
    capaciodadeDeMemoriaInterna: number;
    qualidadeCamera: number;
    tipo: string;
}
export class celular {
    // ...
    fazerLigação() {
        console.log ("fazendoLigaçao...") ;
    }
    receberLigaçao () {
        console.log ("recebendo ligaçao..") ;
    }
    fotografar () {
        console.log ("fotografando... ")
    }
}

import {celular} from "./model/celular"; 

let iphone13 = new celular (); 
iphone13.fazerLigação (); 

// herança//
export defalt Ave extends Animal {
    private_quantico: boolean;

    constructor (
        nome: string,
        peso: number,
        cor: string,
        raça: string,
        aquatico: boolean
    )  {
        super (Nome, peso, cor, raca);
        this._ aquatico = aquatico;
    }
public voar (): void {
    console.log ( '$ {this.nome} voando...');
}
}

// classes abstratas ( polimorfismo)
export abstract class animal {
    // ...
    
    abstract locomover (metros: number) : void;
}
export class Ave extends Animal {
    aquatico:boolean:
    // ...
    public botaOvo ()  {
        console.log (this.nome, "Botando Ovo...");
    
    }
    emitirSom (som: string) void {
        throw new Error("Method not implemented.");
    }
    locomover(passos: number) : void {
        throw new Error("Method not implemenmted.");
    }
}