//A. 
//B. Uma vez.
//C. Metodos publicos.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    // RESPOSTA
    public getCpf(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

}

const userOne: UserAccount = new UserAccount(
    "25665812566",
    "José Almeida",
    38,
)

const userTwo: UserAccount = new UserAccount(
    "58987869852",
    "Ana Maria",
    52
)
console.log(userOne)


// EXERCICIO 2
    class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    public getDate(): string {
        return this.date
    }

    public getValue(): number {
        return this.value
    }

    public getDescription(): string {
        return this.description
    }
}

// EXERCICIO 3


    class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
    public getAccounts() {
        return this.accounts
    }
    
    public setAccounts(
        newAccount : UserAccount
    ) {
        this.accounts.push(newAccount)
    }
    
    }
    
    
    
    const OneBank : Bank = new Bank([userOne, userTwo])
    
    console.log(OneBank)
  

