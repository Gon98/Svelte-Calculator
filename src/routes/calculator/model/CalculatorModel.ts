const NOT_CLEAR_SCREEN = false
const CLEAR_SCREEN = true

export default class CalculatorModel {
    #value: string;
    #accumulator: number;
    #clearScreen: boolean;
    #operation: string;
  
    constructor(
      value = "",
      accumulator = 0,
      operation = "",
      clearScreen = true
    ) {
      this.#value = value;
      this.#accumulator = accumulator;
      this.#operation = operation;
      this.#clearScreen = clearScreen;
    }

    get value(){
        return this.#value.replace('.', ',') || '0'
    }

    typedNumber(newValue: string) {
        return new CalculatorModel(
            (this.#clearScreen || !this.#value) ? newValue : this.#value + newValue,
            this.#accumulator,
            this.#operation,
            NOT_CLEAR_SCREEN,
        )
    }

    typedDot() {
        return new CalculatorModel(
            this.#value.includes('.') ? this.#value : this.#value + '.',
            this.#accumulator,
            this.#operation,
            NOT_CLEAR_SCREEN,
        )
    }
    
    clearScreen() {
        return new CalculatorModel()
    }

    typedOperation(nextOperation: string){
        return this.calculate(nextOperation)
        
    }
    
    calculate(nextOperation: string ){
        const accumulator = !this.#operation
            ? parseFloat(this.#value)
            : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`)
        const value = !this.#operation ? this.#value : `${accumulator}`

        return new CalculatorModel(
            value,
            accumulator,
            nextOperation,
            nextOperation ? CLEAR_SCREEN : NOT_CLEAR_SCREEN
        )
    }

  }